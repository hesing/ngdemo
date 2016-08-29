import angular from 'angular';

let contactModule = angular.module('app.contact', []);

// Include our UI-Router config settings
import contactConfig from './contact.config';
contactModule.config(contactConfig);

export default contactModule;
