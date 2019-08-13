'use strict';

const mock = require('egg-mock');

describe('test/rocketmq.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/rocketmq-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, rocketmq')
      .expect(200);
  });
});
