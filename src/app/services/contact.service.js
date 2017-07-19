import angular from 'angular';

export const contactServiceModule = angular.module('contact.service', []);

const RESOURCE_URL = 'http://localhost:3000/contacts';

class ContactService {
  constructor($http) {
    this.$http = $http;
  }

  getAll() {
    return this.$http.get(RESOURCE_URL);
  }

  addContact(contact) {
    return this.$http.post(RESOURCE_URL, contact);
  }
}

ContactService.$inject = ['$http'];

contactServiceModule.service('contactService', ContactService);

// avec une factory
/*contactServiceModule.factory(['$http', function () {
  return {
    getALl() {
      return $http.get('https://jsonplaceholder.typicode.com/users');
    }
  }
}])*/
