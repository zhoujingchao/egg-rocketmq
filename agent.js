'use strict';

const Producer = require('apache-rocketmq').Producer;
const PushConsumer = require('apache-rocketmq').PushConsumer;

module.exports = agent => {
  agent.messenger.on('egg-ready', async () => {
    await initConsumer(agent);
    await initProducer(agent);
  });
};

async function initProducer(agent) {
  const config = agent.config.rocketmq;
  if (!config) return;

  const { options, topicsList } = config.producer;
  for (let i = 0, len = topicsList.length; i < len; i++) {
    const { groupId, instanceName, topic, groupName } = topicsList[i];
    options.groupName = groupName;
    const producer = await new Producer(groupId, instanceName, options);
    try {
      await producer.start();
    } catch (error) {
      agent.logger.error(`producer start error: ${error}`);
    }

    agent.messenger.on(`@egg-rocketmq/producer/${topic}`, async payload => {
      const { body, option = {
        keys: '',
        tags: ''
      } } = payload;

      const msg = JSON.stringify(body);
      try {
        const result = await producer.send(topic, msg, option);
        agent.logger.info(`${topic} send success`, msg, JSON.stringify(result));
      } catch (error) {
        agent.logger.error(`${topic} send error`, error);
      }
    });
  }
}

async function initConsumer(agent) {
  const config = agent.config.rocketmq;
  if (!config) return;

  const { options, topicsList } = config.consumer;
  for (let i = 0, len = topicsList.length; i < len; i++) {
    const { groupId, groupName, instanceName, topic, serviceFloderName, fileNameWithMethod } = topicsList[i];
    options.groupName = groupName;
    const consumer = await new PushConsumer(groupId, instanceName, options);
    consumer.subscribe(topic, '*');

    consumer.on('message', async (msg, ack) => {
      agent.logger.info(`${topic} consumer success`, typeof msg === 'object' ? JSON.stringify(msg) : msg);
      ack.done();
      await agent.messenger.sendRandom('@egg-rocketmq/consumer', {
        topic,
        options: {
          serviceFloderName,
          fileNameWithMethod
        },
        payload: msg,
      });
    });

    await consumer.start();
  }
}
