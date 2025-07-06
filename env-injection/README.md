# 📘 docker-example:env-injection
🎯 **Inject environment variables** originating from an external file into multiple containers that are **run with docker-compose**.\
🔑 Learn basic concepts of **Docker Compose file and up & down features.**

## 📁 Files Overview
[.env](.env) - file containing all variables that are injected into the containers. \
[docker-compose.yml](docker-compose.yml) - the containers configuration using auto-injected variables. Creates contanerized database and its access point. Declares a volume for data storage and connects the db container with it.


## 🔨 Build & Run
1. ```git clone https://github.com/mWasyluk/docker-example```
2. ```cd env-injection```
3. ```docker compose up```

## 📚 Lessons Learned
> The ***version* key is now obsolete** for Docker Compose files.

> It is not possible to substitute nested YAML keys with variables, but it is possible to **overwrite containers identifiers with *container_name* property and volume identifiers with *name* property**.
