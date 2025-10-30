# Comandos para Levantar Docker
docker build -t discount_page .

docker run -d --name discount_page -p 9007:80 discount_page