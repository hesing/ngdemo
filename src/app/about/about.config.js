function AboutConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.about', {
    url: '/about',
    templateUrl: 'about/about.html',
    title: 'About'
  });

};

export default AboutConfig;
