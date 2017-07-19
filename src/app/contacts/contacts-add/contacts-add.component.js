import angular from 'angular';
import contactsAddTemplate from './contacts-add.template.html' // grace à webpack raw-loader (mieux pour les perf)

export const contactsAddModule = angular.module('contacts-add.component', []);

contactsAddModule.component('contactsAdd', {
  template: contactsAddTemplate
})