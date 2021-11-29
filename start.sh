#!/bin/bash -e
function onExit() {
  killall node
}
trap onExit EXIT
(cd counter && npm run start &) && (cd article && npm run start -- --port 8500 &) && (cd footer && npm run serve:single-spa:footer &) && (cd header && npm run serve &) && cd root-config && npm run start