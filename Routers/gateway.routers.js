const ProxyService = require("../server/proxyService");
const routes = require("express").Router();
const { services } = require("../config/services");

services.forEach(({ url, path }) => {
    routes.use(path, ProxyService.createProxy(url));
});

module.exports = routes;
