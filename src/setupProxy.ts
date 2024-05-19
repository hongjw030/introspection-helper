// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app: any) {
  app.use(
    createProxyMiddleware("/login", {
      target: "https://github.com",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/user", {
      target: "https://api.github.com",
      changeOrigin: true,
    })
  );
};