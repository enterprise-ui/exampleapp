# API

docker build -t eui/api:5 .
docker-compose -f docker-compose-db.yaml -f docker-compose.yaml up -d