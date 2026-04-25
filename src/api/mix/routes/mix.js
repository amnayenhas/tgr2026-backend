'use strict';

/**
 * mix router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::mix.mix');
