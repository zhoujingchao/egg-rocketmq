'use strict';

const Service = require('egg').Service;

module.exports = class Receive extends Service {
  async testMsg1(topic, payload) {
    console.log('testMsg1: ', topic, payload);
  }
  async testMsg2(topic, payload) {
    console.log('testMsg2: ', topic, payload);
  }
};
