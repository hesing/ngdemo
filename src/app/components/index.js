import angular from 'angular';

// Create the home module where our functionality can attach to
let componentsModule = angular.module('app.components', []);


// Components
import Sidebar from './sidebar/sidebar.component';
componentsModule.component('sidebar', Sidebar);


export default componentsModule;
