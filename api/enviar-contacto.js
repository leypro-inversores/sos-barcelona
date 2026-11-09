
function escapeHtml(value) {
    const escaped = value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    return escaped;
  }

  export default async function handler(request, response) {
    let statusCode = 200;
    let result = { success: false };

    if (request.method !== "POST") {
      statusCode = 405;
      result = { success: false, error: "Método no permitido." };
    } else if (
      !process.env.RESEND_API_KEY ||
      !process.env.SOS_EMAIL_TO ||
      !process.env.RESEND_FROM_EMAIL
    ) {
      statusCode = 500;
      result = {
        success: false,
        error: "El servicio de correo no está configurado."
      };
    } else {
      try {
        let body = request.body;

        if (typeof body === "string") {
          body = JSON.parse(body);
        }

        const name = typeof body?.name === "string" ? body.name.trim() : "";
        const email = typeof body?.email === "string" ? body.email.trim() : "";
        const phone = typeof body?.phone === "string" ? body.phone.trim() : "";

        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (
          !name ||
          name.length > 120 ||
          !validEmail ||
          email.length > 254 ||
          phone.length > 40
        ) {
          statusCode = 400;
          result = {
            success: false,
            error: "Revisa los datos del formulario e inténtalo nuevamente."
          };
        } else {
          const html = `
            <h2>Nuevo contacto desde SOS Barcelona</h2>
            <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Teléfono:</strong> ${escapeHtml(phone || "No proporcionado")}</p>
            <hr />
            <p>Puedes responder directamente a este correo para contactar con la persona.</p>
          `;

          const text = [
            "Nuevo contacto desde SOS Barcelona",
            "",
            `Nombre: ${name}`,
            `Email: ${email}`,
            `Teléfono: ${phone || "No proporcionado"}`,
            "",
            "Puedes responder directamente a este correo."
          ].join("\n");

          const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              from: process.env.RESEND_FROM_EMAIL,
              to: [process.env.SOS_EMAIL_TO],
              reply_to: email,
              subject: "Nuevo contacto desde la web de SOS Barcelona",
              html,
              text
            })
          });


          if (!resendResponse.ok) {
            statusCode = 502;
            result = {
              success: false,
              error: "No fue posible enviar el mensaje. Inténtalo más tarde."
            };
          } else {
            result = {
              success: true,
              message: "Tu mensaje se ha enviado correctamente."
            };
          }
        }
      } catch (error) {
        statusCode = 502;
        result = {
          success: false,
          error: "No fue posible procesar el mensaje. Inténtalo más tarde."
        };
      }
    }

    return response.status(statusCode).json(result);
  }
