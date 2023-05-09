.PHONY: build start stop restart img runcont stopcont

build:
	docker-compose up --build -V

start:
	docker-compose up

stop:
	docker-compose down --remove-orphans

restart: stop start

img:
	docker build -t gw -f ./service-gw/Dockerfile ./service-gw

runcont:
	docker run -p 3000:3000 --name gw_c -t -d gw

stopcont:
	docker rm gw_c -f