# 📘 docker-example:bind-mount
🎯 Goal: **binding the host's local directory to the containerized application's working directory**, allowing the server behaviour to change dynamically when host files are modified. \
🔑 Key learnigns: **difference between named volumes and bind mounts**; enabling **automatic restart of the containerized server** after overwriting the mounted files on the host.

## 📁 Files Overview
[package.json](./package.json) - package manager config. It declares dependencies and specifies nodemon as the entrypoint (the `-L` flag enables polling-based file watching). \
[index.js](./index.js) - Express.js server's config; returns string value at the `/` endpoint.

## 🔨 Build & Run
1. `git clone https://github.com/mWasyluk/docker-example`
2. `cd bind-mount`
3. `npm install`
4. `docker run -it --rm -p 8080:8080 --mount type=bind,src="$(pwd)/src",target=/usr/app -w /usr/app --name bind-mount node:20.19.3 npm start`

> **For Windows OS**, prefix the above command with `MSYS_NO_PATHCONV=1`, or escape bind mount target and working dir paths with additional slash (`/`) to avoid prepending your current working dir path to them in some scenarios.

## 📚 Lessons Learned
> Using the `npm ci` command instead of `npm install` is suitable for CI/CD processes as it installs exactly the same versions of the project's dependencies that have been used in the local environment. It does not install any new deps, it only verifies whether the `package-lock.json` file (it must not be ignored) contains all of the required ones, then installs their modules.

> `docker run` with the `-it` flag allows you to keep the input stream opened and provides an interactive terminal session for the container; it allows you to pass any command to the container through the active host's terminal.
