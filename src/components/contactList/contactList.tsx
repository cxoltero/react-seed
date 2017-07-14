import './contactList.scss';
import * as React from 'react';

import ContactInfo from '../contactInfo/contactInfo';

interface ContactListInterface {
  firstName: string;
  middleName?: string;
  email?: string;
  lastName?: string;
  phone?: string;
  image?: string;
}

interface ContactListPropsInterface {
  contacts: ContactListInterface[];
  activeElementIndex: number;
  clickHandler: Function;
}

// TODO, naming convention for variables to be exported TS
// tslint:disable-next-line
const ContactList: React.SFC<ContactListPropsInterface> = (props) => {
  return (
    <div className='list-group contact-list'>
      {props.contacts.map((contact, index) => {
        return <ContactInfo
          key={index}
          id={index}
          contact={contact}
          isActive={index === props.activeElementIndex}
          isExpanded={false}
          clickHandler={props.clickHandler}
        />;
      })}
    </div>
  );

};

export default ContactList;