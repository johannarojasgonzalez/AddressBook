import angular from 'angular';
import contactListTemplate from './contacts-list.template.html' // grace à webpack raw-loader (mieux pour les perf)

export const contactsListModule = angular.module('contacts-list.component', []);

contactsListModule.component('contactsList', {
  template: contactListTemplate
})