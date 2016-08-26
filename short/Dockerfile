FROM mhart/alpine-node:6.2.1

RUN apk add --update bash \
    && rm -rf /var/cache/apk/*
RUN npm install -g pm2

ADD package.json /tmp/package.json
RUN cd /tmp \
    && npm install --production
RUN mkdir -p /apps \
    && cp -a /tmp/node_modules /apps

WORKDIR /apps
ADD . /apps

ARG buildno=n/a
ENV BUILD_NO=$buildno

EXPOSE 3000
ADD start.sh /start.sh
RUN chmod 766 /start.sh
CMD ["/start.sh"]
