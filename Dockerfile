FROM nginx:latest


WORKDIR /usr/share/nginx/html

COPY . .


EXPOSE 7045

CMD [ "nginx", "-g", "daemon off;" ]
