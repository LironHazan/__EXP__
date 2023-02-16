### `__EXP__ 2 - Serve 2 apps using same domain and a subdir`

Build image:

`docker build -t exp2:latest -f Dockerfile .`

Interactively run the container:

`docker run -p 8080:80 exp2:latest`

_Browse to:_

Main app: `localhost:8080/`

Sub app: `localhost:8080/app2/`