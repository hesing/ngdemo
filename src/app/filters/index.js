import angular from 'angular';

// Create the home module where our functionality can attach to
let filterModule = angular.module('app.filters', []);


// Filters
import {UpperFilter, LowerFilter} from './text-filters';
filterModule.filter('upper', UpperFilter);
filterModule.filter('lower', LowerFilter);


export default filterModule;
