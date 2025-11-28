'use strict';

module.exports = function (app) {

  app.get('/_api/get-tests', function(req, res){
    res.json({
      status: 'ok'
    });
  });

};
