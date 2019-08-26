# No Db Review ()

# frontend checklist

-rest.css
-package.json
-main => server

**Proxy**
Src/setupProxy.js

```js
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api", { target: "http://localhost:9000/" }));
};
```

## folder-structure

-src/
-index.js
-App.js
-reset.css
-App.css
setupProxy.js
-components/
-Header/
-Header.js
-Header.css
-User/
-UserContainer.js
-UserContainer.js

### dependencies

-`react-icons` -`axios`

## backend checklist

### dependencies

- `express`

### data

-

### endpoint

    -get:
    - getById:
    -post:
    -put:
    -delete :

## folder-stucrture

-server/
-index.js
data.json
controller
