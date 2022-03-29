# WunderComm node-red

node-red

# Build Docker image

``` bash
docker build --build-arg BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') --build-arg VCS_REF=$(git rev-parse --short HEAD) -t quay.io/wundercomm/node-red/node-red:2.2.12-wundercomm-r1 --build-arg VERSION=2.2.12-wundercomm-r1 .
```

# Push Docker image

``` bash
docker push us.gcr.io/ccoe-246623/wundercomm/node-red:2.2.12-wundercomm-r1
```