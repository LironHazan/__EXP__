FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY app1/index.html /var/www/static/index.html
COPY app2/index.html /var/www/static/app2/index.html
CMD ["nginx", "-g", "daemon off;"]