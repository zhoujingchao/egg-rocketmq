# egg-rocketmq

<!--
Description here.
-->

## Install

```bash
$ npm i egg-rocketmq --save
```

## Configuration
```js
// {app_root}/config/plugin.js
exports.rocketmq = {
  enable: true,
  package: 'egg-rocketmq'
};
```

```js
// {app_root}/config/config.default.js
exports.rocketmq = {
  producer: {
    options: {
      nameServer: 'your rocketmq server',
      compressLevel: 5,
      sendMessageTimeout: 3000,
      maxMessageSize: 1024 * 128
    },
    topicsList: [{
      groupId: 'test-1',
      instanceName: '', // optional
      groupName: 'test-1',
      topic: 'test-1'
    }, {
      groupId: 'test-2',
      instanceName: '', // optional
      groupName: 'test-2',
      topic: 'test-2'
    }],
  },
  consumer: {
    options: {
      nameServer: 'your rocketmq server',
    },
    topicsList: [{
      topic: 'test-1',
      groupId: 'test-1',
      groupName: 'test-1',
      instanceName: '', // optional
      serviceFloderName: 'consumer', // service floder name
      fileNameWithMethod: 'receive.testMsg1' // service filename and method name
    }, {
      topic: 'test-2',
      groupId: 'test-2',
      groupName: 'test-2',
      instanceName: '', // optional
      serviceFloderName: 'consumer',
      fileNameWithMethod: 'receive.testMsg2'
    }]
  }
};
```

see [example/config/config.default.js](example/config/config.default.js) for more detail.

## Usage

```js
// producer
await this.ctx.service.producer.index('test-1', {
  body: 'I am your dad-1'
});

// consumer
const Service = require('egg').Service;
module.exports = class Receive extends Service {
  async testMsg1(topic, payload) {
    this.ctx.logger.info(topic, payload);
  }
};
```

see [example/app/service/producer.js](example/app/service/producer.js) and [example/app/service/consumer/receive.js](example/app/service/consumer/receive.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/zhoujingchao/egg-rocketmq/issues).

## License

[MIT](LICENSE)
