function Colorme() {
  'ngInject';

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.addClass('bg-warning');
    }
  };
}

export default Colorme;