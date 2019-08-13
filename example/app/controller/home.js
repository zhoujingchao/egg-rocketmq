'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    await ctx.service.producer.index('test-1', {
      body: 'I am your dad-1'
    });
    await ctx.service.producer.index('test-2', {
      body: 'I am your dad-2'
    });

    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
