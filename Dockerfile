# Usa la imagen base de Node.js con Alpine Linux para reducir el tamaño de la imagen
FROM node:18-alpine AS base

# Establece la variable de entorno de tu API_KEY (asegurate de que este valor no sea público)
ENV NEXT_PUBLIC_API_KEY=AIzaSyBQCPN5Ilo66dWmHbZ3edlja3uqfeD0z5M

# Crea una carpeta de trabajo
WORKDIR /app

# Copia los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala dependencias de producción directamente
RUN npm install --production

# Copia el resto del proyecto
COPY . .

# Desactiva la telemetría de Next.js
ENV NEXT_TELEMETRY_DISABLED 1

# Construye el proyecto
RUN npm run build

# Configura la variable de entorno para producción
ENV NODE_ENV production

# Expone el puerto de la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
