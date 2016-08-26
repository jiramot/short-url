#!/bin/bash

cd /apps
pm2 start app.js -i 0 --no-daemon
