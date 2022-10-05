# WunderComm node-red

node-red

# Build container image

``` bash
podman build --build-arg BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') --build-arg VCS_REF=$(git rev-parse --short HEAD) -t quay.io/wundercomm/node-red:2.2.2-12-wundercomm-r4 --build-arg VERSION=2.2.2-12-wundercomm-r4 .
```

# Push container image

``` bash
podman push quay.io/wundercomm/node-red:2.2.2-12-wundercomm-r4
```

