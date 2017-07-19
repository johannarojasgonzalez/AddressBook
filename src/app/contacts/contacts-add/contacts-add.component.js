import angular from 'angular';
import contactsAddTemplate from './contacts-add.template.html' // grace à webpack raw-loader (mieux pour les perf)
import {contactServiceModule} from '../../services/contact.service';

export const contactsAddModule = angular.module('contacts-add.component', [contactServiceModule.name]);

class ContactAddCtrl {
  constructor(contactService, $state) {
    this.contactService = contactService;
    this.$state = $state;
  }

  addContact(contact) {
    this.contactService.addContact(contact).then(() => {
        this.$state.go('contacts-list');
      }
    );

  }
}

ContactAddCtrl.$inject = ['contactService', '$state'];

contactsAddModule.component('contactsAdd', {
  controller: ContactAddCtrl,
  template: contactsAddTemplate
})

