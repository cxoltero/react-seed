import * as React from 'react';
import './contactList.scss';

import ContactInfo from '../contactInfo/contactInfo';


interface contactListInterface {
  firstName: string;
  middleName?: string;
  email?: string;
  lastName?: string;
  phone?: string;
  image?: string;
}

interface ContactListPropsInterface {
  contacts: contactListInterface[];
}

const ContactList: React.SFC<ContactListPropsInterface> = (props) => {
  return (
    <div className='list-group contact-list'>
      {props.contacts.map((contact, index) => {
        return <ContactInfo  key={index} contact={contact}/>;
      })}
    </div>
  );

};

export default ContactList;