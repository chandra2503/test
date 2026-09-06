FROM nginx:alpine

RUN rm -f /usr/share/nginx/html/index.html

COPY index.html /usr/share/nginx/html/index.html
COPY project.js /usr/share/nginx/html/project.js
COPY script.js /usr/share/nginx/html/script.js
COPY styles.css /usr/share/nginx/html/styles.css

COPY image/ /usr/share/nginx/html/image/



EXPOSE 80
