function ContactConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.contact', {
    url: '/contact',
    templateUrl: 'contact/contact.html',
    title: 'About'
  });

};

export default ContactConfig;
