import angular from 'angular';
import homeTemplate from './home-template.html' // grace à webpack raw-loader (mieux pour les perf)

export const homeModule = angular.module('home-component', []);

homeModule.component('homeModule', {
  template: homeTemplate
})