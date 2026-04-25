'use strict';

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (ctx.request.path === '/health') {
      try {
        await strapi.db.connection.raw('SELECT 1');
        
        ctx.body = {
          status: 'ok',
          timestamp: new Date().toISOString(),
          uptime: process.uptime(),
          environment: process.env.NODE_ENV || 'development',
        };
        ctx.status = 200;
      } catch (error) {
        ctx.body = {
          status: 'error',
          message: 'Database connection failed',
        };
        ctx.status = 503;
      }
      return;
    }
    
    await next();
  };
};