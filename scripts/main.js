requirejs.config({
  baseUrl: 'scripts',
  paths: {
    'can': 'lib/canjs.com-2.1.2/amd/can'
  }
});

requirejs(['scripts/lib/jquery-1.11.1.js', 'lib/canjs.com-2.1.2/amd/can'],
  function($, can) {

});
