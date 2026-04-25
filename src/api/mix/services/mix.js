'use strict';

/**
 * mix service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mix.mix');
