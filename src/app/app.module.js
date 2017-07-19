import angular from 'angular';
import {contactsModule} from "./contacts/contact.module"
import uiRouter from '@uirouter/angularjs';
import './app.style.css'

const appModule = angular.module('app.module', [
  contactsModule.name,
  uiRouter
]);