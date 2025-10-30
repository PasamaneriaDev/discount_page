# # Usar una imagen base de Nginx
# FROM nginx:alpine

# # Copiar los archivos construidos al directorio de Nginx
# COPY dist /usr/share/nginx/html

# # Copiar la configuración de Nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Exponer el puerto 81
# EXPOSE 80

# # Comando para ejecutar Nginx
# CMD ["nginx", "-g", "daemon off;"]

# # docker build -t my-react-app:latest .
# # docker run --rm -it -p 82:82 my-react-app:latest

# Etapa 1: Build del proyecto con Node
FROM node:20 AS build

WORKDIR /app
COPY package*.json ./

RUN rm -rf node_modules package-lock.json && npm install --legacy-peer-deps

# RUN npm install --legacy-peer-deps
COPY . .
# Forzamos reinstalación de rollup (corrige el bug de los binarios)
RUN npm rebuild rollup --force

# Ejecutamos el build
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:stable-alpine

# Copiar configuración de Nginx personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos construidos desde la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
