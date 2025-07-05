# Build & Run
* docker build -t basic-node-server .
* docker run -d -p 8000:8000 --name basic-node-server --rm basic-node-server

# What I have learned
* The **CMD** instruction requires all executable arguments to be enclosed in **double quotes, not single ones**
* **Alpine images do not have apt (or apt-get)** package manager available. To update all packages **use apk update && apk upgrade instead**
