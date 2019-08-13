'use strict';

module.exports = app => {
  const ctx = app.createAnonymousContext({});

  app.messenger.on('@egg-rocketmq/consumer', async ({ topic, options, payload }) => {
    const { fileNameWithMethod, serviceFloderName } = options;
    const [ service, method ] = fileNameWithMethod.split('.');
    ctx.runInBackground(async () => {
      ctx.service[serviceFloderName][service][method](topic, payload);
    });
  });
};
