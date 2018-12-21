# Webpack SockJS Errors

webpack-dev-server started causing console errors like this:

```
Invalid Host/Origin header
[WDS] Disconnected!
```

running infinitely. Seemingly in every browser.

To reproduce:

```
yarn
yarn start
```
