FROM nodered/node-red:2.0.5

RUN npm install @exlinc/keycloak-passport
RUN npm install --save https://github.com/sapianco/node-red-contrib-storage-s3-advanced
RUN npm install --save node-red-contrib-natsio

ARG BUILD_DATE
ARG VCS_REF
ARG VERSION

LABEL org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.name="node-red" \
      org.label-schema.description="node-red Whit Sapian dependecy" \
      org.label-schema.url="https://www.sapian.cloud/node-red" \
      org.label-schema.vcs-url="https://git.sapian.com.co/Sapian/node-red-docker.git" \
      org.label-schema.maintainer="sebastian.rojo@sapian.com.co" \
      org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.vendor1="Sapian" \
      org.label-schema.version=$VERSION
