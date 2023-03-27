const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://csgbqto.dyndns.org:6001/ctDynamicsSL/api/quickQuery/VW_VENTTU_PROD',
      changeOrigin: true,
    })
  );
};