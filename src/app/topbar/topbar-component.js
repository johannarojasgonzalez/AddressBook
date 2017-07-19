import angular from 'angular';
import topbarTemplate from './topbar-template.html' // grace à webpack raw-loader (mieux pour les perf)

export const topBarModule = angular.module('topbar-component', []);

topBarModule.component('topBar', {
  template: topbarTemplate
})