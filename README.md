# SOS Barcelona Life

Sitio web oficial de SOS Barcelona Life.

## Tecnologías

- React 18
- Vite 6
- React Router
- Tailwind CSS
- Vercel Functions
- YouTube Data API v3

## Requisitos

- Node.js
- npm

## Instalación

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone https://github.com/leypro-inversores/sos-barcelona.git sos-bcn-life
cd sos-bcn-life
npm ci
```

## Desarrollo local

Para ejecutar la aplicación con Vite:

```bash
npm run dev
```

Para ejecutar la aplicación junto con las funciones de servidor de Vercel:

```bash
npx vercel dev
```

La segunda opción permite probar las rutas de servidor ubicadas en la carpeta `api/`.

## Compilación de producción

Para generar la versión optimizada:

```bash
npm run build
```

Para visualizar la compilación local:

```bash
npm run preview
```

## Variables de entorno

La integración con YouTube utiliza una función de servidor que requiere la siguiente variable:

```env
YOUTUBE_API_KEY=tu_clave_de_youtube
```

En el entorno local, esta variable debe guardarse en `.env.local`.

En producción, debe configurarse en las variables de entorno del proyecto de Vercel.

**Importante:** nunca incluyas claves API directamente en el código del navegador ni publiques archivos con credenciales en GitHub.

## Recursos multimedia

Las imágenes y los videos utilizados por el sitio se encuentran almacenados localmente dentro de `public/`.

Esto evita depender de los enlaces multimedia del servicio anterior.

## Funciones de servidor

Las funciones de servidor se encuentran en la carpeta `api/`.

Actualmente, la función `api/youtube-videos.js` consulta YouTube Data API v3 para obtener las prédicas recientes del canal.

## Despliegue

El proyecto está preparado para desplegarse en Vercel mediante su conexión con el repositorio de GitHub.

Las variables de entorno necesarias deben configurarse directamente en Vercel.