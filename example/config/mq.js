'use strict';

module.exports = {
  producers: [{
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
  consumers: [{
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
};
