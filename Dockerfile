FROM nodered/node-red:2.2.2-16

RUN npm install @exlinc/keycloak-passport
RUN npm install --save @sapianco/node-red-contrib-storage-s3
#RUN npm install --save node-red-contrib-storage-s3
RUN npm install --save node-red-contrib-natsio
RUN npm install --save node-red-contrib-matrix-chat 

ARG BUILD_DATE
ARG VCS_REF
ARG VERSION

LABEL org.label-schema.build-date=$BUILD_DATE \
      org.label-schema.name="node-red" \
      org.label-schema.description="node-red Whit WunderComm dependecy" \
      org.label-schema.url="https://github.com/wundercomm/helm-node-red" \
      org.label-schema.vcs-url="https://github.com/wundercomm/helm-node-red" \
      org.label-schema.maintainer="arpagon@wundercomm.com" \
      org.label-schema.vcs-ref=$VCS_REF \
      org.label-schema.vendor1="WunderComm" \
      org.label-schema.version=$VERSION
