requirejs.config({
  baseUrl: 'scripts/lib',
  paths: {
    can: 'canjs.com-2.1.2/amd/can',
    stache: 'stache'
  }
});

requirejs(['scripts/lib/jquery-1.11.1.js', 'canjs.com-2.1.2/amd/can', '../components/components'],
  function($, can) {

});
