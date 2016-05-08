(function(){

  var FactoryApp = angular.module('FactoryApp', []);

  // module pattern
  function droidFactory() {
    return{
      name: '',
      speak: function(){
        return `Hi I am ${this.name}`;
      }
    }
  };

  // Regiter a factory
  FactoryApp.factory('droid', droidFactory);

  FactoryApp.controller('MainController', [ 'droid', function(droid){
    const MainCtrl = this;
    MainCtrl.message = 'default';
    droid.name = 'c3-po';
    MainCtrl.message = droid.speak();
  }]);

})();
