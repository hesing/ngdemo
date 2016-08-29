import angular from 'angular';

let aboutModule = angular.module('app.about', []);

// Include our UI-Router config settings
import aboutConfig from './about.config';
aboutModule.config(aboutConfig);

export default aboutModule;
