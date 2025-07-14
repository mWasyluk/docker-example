# 📘 docker-example:healthcheck
## 🎯 Goal
Use *docker-compose.yml* file to create a container dependent on functionalities of another container. \
Delay launch of a dependent container until another container is up and running.

## 📁 Files Overview
**backend**
* [pom.xml](backend/pom.xml) - Basic configuration of Spring Boot web app with access to the PostgreSQL database. 
* [application.properties](backend/src/main/resources/application.properties) - Properties of data source based on the environment variables. 
* [*.java](backend/src/main/java/pl/mwasyluk/docker/healthcheck) - Source code of the REST server connecting to database in order to pull and persist the tasks data based on the client requests to the endpoints specified in the web controller. Configures CORS policy for the sake of access the data by the client.

**frontend**
* [package.json](frontend/package.json) - Basic configuration of React app.
* [index.html](frontend/public/index.html) - Web page entry point.
* [*.jsx](frontend/src/) - React components allowing to display and modify tasks via `fetch` methods that send request to the server and handles the responses .

**nginx**
* [default.conf](nginx/default.conf) - Basic configuration of a web server that acts as a proxy passing all requests to the backend server.

**docker**
* [Dockerfile.backend](docker/Dockerfile.backend) - Multi-stage build configuration that compiles the server code to a JAR file and runs it in the JRE container.
* [Dockerfile.frontend](docker/Dockerfile.frontend) - Multi-stage build configuration that builds the React app into vanilla JS and serves it to the client via nginx web server.
* [docker-compose.yml](docker/docker-compose.yml) - Build configuration of the whole architecture where services depend on one another. It delays running the backend service until the database service is up and healthy, and does the same for frontend service toward the backend service. It also declares custom network for all of the services and exposes the frontend port to localhost.

## 🔨 Build & Run
1. `git clone https://github.com/mWasyluk/docker-example`
2. `cd healthcheck/docker`
3. `docker-compose up`
4. Open browser and visit [http://localhost:8080](http://localhost:8080)

## 📚 Lessons Learned
- Running the postgres docker image and attaching it to **existing, not empty volume** (e.g.: `-v db-data:/var/lib/postgresql/data`) **will not initialize any new database**, even if the `POSTGRES_DB` variable is set in the environment (e.g.: `-e POSTGRES_DB`).
- Spring Boot Web does not add CORS headers to responses by default, but **web browser will block all responses without the appropriate `Access-Control-Allow-*` headers**. 
- Docker image build arguments can be declared in the *docker-compose.yml* file via `build:args`, but **they will not be applied to variable placeholders in the *Dockerfile*** (e.g.: `${SOME_VAR}`) **if they are not pointed out explicitly** in the `ARG` instruction.
- In a *Dockerfile*, the `COPY` instruction with the `--from` flag allows to transfer files not only from a different build stage but **also from the directory declared via the `build:additional_contexts:` property** in the *docker-compose.yml* file.
- Placing *.env* file in the working directory (or using the `--env-file path/to/.env` argument) allows to automatically inject all the variables into the placeholders in the *docker-compose.yml* file during build process, but **the variables will not be injected into the containers environment**. It can be achieved by **listing all the variables in the `environment:` property** using placeholders corresponding to those variables, **or by declaring path to the *.env* file via the `env-file:` property**.

