run:
	docker run -d -p 3000:3000 --env-file ./config/.env --rm --name nextappcont sviatmktn/nextapp:tag
run-dev:
	docker run -d -p 3000:3000 --env-file ./config/.env -v "D:\udemy-courses\next-app-router-forms:/app" -v /app/node_modules -v logs:/app/data --rm --name nextappcont sviatmktn/nextapp:tag
stop:
	docker stop nextappcont
build:
	docker build --tag sviatmktn/nextapp:tag .
delete:
	docker image rm sviatmktn/nextapp:tag