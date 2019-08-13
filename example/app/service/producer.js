'use strict';

const Service = require('egg').Service;

module.exports = class Producer extends Service {
  /**
   * @description producer
   * @param {String} topic
   * @param {Object} payload
   * eg: {
   *    body: '111',  // the message body string
   *    options: {
   *      keys: 'foo', // the keys for this message
   *      tags: 'bar'  // the tags for this message
   *    }
   * }
   */

  index(topic, payload) {
    this.app.messenger.send(`@egg-rocketmq/producer/${topic}`, payload);
  }
};
