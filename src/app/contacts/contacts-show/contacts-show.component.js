import angular from 'angular';
import contactsShowTemplate from './contacts-show.template.html' // grace à webpack raw-loader (mieux pour les perf)
import {contactServiceModule} from '../../services/contact.service';

export const contactsShowModule = angular.module('contacts-show.component', [contactServiceModule.name]);

class ContactsShowCtrl {
  constructor(contactService, $state) {
    this.$state = $state; //$state.params.id

    contactService.getById($state.params.id).then(res => {
      this.contact = res.data
      console.log(this.contact);

    });
  }
}

ContactsShowCtrl.$inject = ['contactService','$state'];

// component
contactsShowModule.component('contactsShow', {
    template: contactsShowTemplate,
    controller: ContactsShowCtrl
  }
);

