FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY . .

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 7045

CMD ["nginx", "-g", "daemon off;"]
