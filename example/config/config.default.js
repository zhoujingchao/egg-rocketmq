'use strict';
const mq = require('./mq.js');

/**
 * egg-rocketmq default config
 * https://github.com/apache/rocketmq-client-nodejs
 * @member Config#producer
 * @property {String} groupId - the group id of the producer
 * @property {String} instanceName - the instance name of the producer, optional
 * @property {Object} options - the options object, optional
 * @property {String} nameServer - the name server of RocketMQ only support ip
 * @property {String} groupName - the group name of this producer
 * @property {Number} compressLevel - the compress level (0-9) of this producer, default to 5 where 0 is fastest and 9 is most compressed
 * @property {Number} sendMessageTimeout -  send message timeout millisecond, default to 3000 and suggestion is 2000 - 3000ms
 * @property {Number} maxMessageSize - max message size with unit (B), default to 1024 * 128 which means 128K;
 * @property {Number} logFileNum - size of each C++ core logic log file with unit (B)
 * @property {Number} logFileSize - the group id of the producer
 * @property {String} logLevel - C++ core logic log level in "fatal", "error", "warn", "info", "debug", "trace" and "num"
 */

/**
 * egg-rocketmq default config
 * https://github.com/apache/rocketmq-client-nodejs
 * @member Config#consumer
 * @property {String} groupId - the group id of the producer
 * @property {String} instanceName - the instance name of the producer, optional
 * @property {Object} options - the options object, optional
 * @property {String} nameServer - the name server of RocketMQ only support ip
 * @property {String} groupName - the group name of this producer
 * @property {Number} threadCount - the thread number of underlying C++ logic
 * @property {Number} maxBatchSize - message max batch size
 * @property {Number} logFileNum - size of each C++ core logic log file with unit (B)
 * @property {Number} logFileSize - the group id of the producer
 * @property {String} logLevel - C++ core logic log level in "fatal", "error", "warn", "info", "debug", "trace" and "num"
 */
exports.rocketmq = {
  producer: {
    options: {
      nameServer: '127.0.0.1:9876',
      compressLevel: 5,
      sendMessageTimeout: 3000,
      maxMessageSize: 1024 * 128
    },
    topicsList: mq.producers
  },
  consumer: {
    options: {
      nameServer: '127.0.0.1:9876',
    },
    topicsList: mq.consumers
  }
};
