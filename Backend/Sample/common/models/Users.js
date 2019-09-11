'use strict';
const async = require('asyncawait/async');
const await = require('asyncawait/await');

module.exports = function (Users) {

  Users.remoteMethod('getUsers', {
    description: 'Return users by name.',
    accepts: [
      { arg: 'name', type: 'string', required: true },
    ],
    http: { path: '/getUsers', verb: 'get' },
    returns: { root: true, type: 'array' },
  });

  Users.getUsers = async function (name) {
    return await (Users.find(
      {
        where: {
          name: {
            like: '%' + name + '%'
          }
        }
      }
    ))
  }

}
