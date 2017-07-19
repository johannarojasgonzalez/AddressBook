import angular from 'angular';
import {contactsModule} from "./contacts/contact.module"
import {topBarModule} from "./topbar/topbar-component"
import {homeModule} from "./home/home-component"
import uiRouter from '@uirouter/angularjs';
import './app.style.css'

const appModule = angular.module('app.module', [
  contactsModule.name,
  topBarModule.name,
  homeModule.name,
  uiRouter
]);

appModule.config(['$stateProvider', function ($stateProvider) {
  $stateProvider
    .state({
      name: 'home',
      url: '/',
      component: 'homeModule'
    });
}]);