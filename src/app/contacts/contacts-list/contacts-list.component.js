import angular from 'angular';
import angularResource from 'angular-resource';
import contactListTemplate from './contacts-list.template.html' // grace à webpack raw-loader (mieux pour les perf)
import {contactServiceModule} from '../../services/contact.service';

export const contactsListModule = angular.module('contacts-list.component', [
    //angularResource
    contactServiceModule.name]);


class ContactListCtrl {
  constructor(contactService) {
    this.contacts = [];

    contactService.getAll()
      .then(res => this.contacts = res.data);
  }
}

ContactListCtrl.$inject = ['contactService'];

// component
contactsListModule.component('contactsList', {
      controller: ContactListCtrl,
      template: contactListTemplate
    }
  );

// controller avec le service $http
/*class ContactListCtrl {
  constructor($http) {
    this.contacts = [];

    $http.get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.contacts = res.data);
  }
}

ContactListCtrl.$inject = ['$http'];*/

// controller avec ngResource : https://docs.angularjs.org/api/ngResource

/*class ContactListCtrl {
  constructor($resource) {
    this.contacts = [];

    const User = $resource('https://jsonplaceholder.typicode.com/users/:userId', {userId: '@id'});
    this.contacts = User.query(); // pas sous forme de promesse, pour catcher une erreur faut regarder les arguments (statut)
  }
}
ContactListCtrl
  .$inject = ['$resource'];
*/


