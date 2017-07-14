import * as React from 'react';
import './contactInfo.scss';

interface ContactInfoInterface {
  firstName: string;
  middleName?: string;
  email?: string;
  lastName?: string;
  phone?: string;
  image?: string;
}

interface ContactInfoPropsInterface {
  contact: ContactInfoInterface;
  isActive: boolean;
  isExpanded: boolean;
  id: number;
  clickHandler: Function;
}

function buildName(firstName: string, middleName: string, lastName: string): string {
  let _middleName: string = middleName ? ` ${middleName}` : '';
  let _lastName: string = lastName ? ` ${lastName}` : '';

  return `${firstName}${_middleName}${_lastName}`;
};

// tslint:disable-next-line
const ContactInfo: React.SFC<ContactInfoPropsInterface> = ({contact, isActive, isExpanded, id, clickHandler}) => {
  const {firstName, middleName, email, lastName, phone, image} = contact;
  const userIcon = <i className='fa fa-user-circle-o fa-4x mx-auto' aria-hidden='true'></i>;

  function handleClick():void {
    clickHandler(id);
  }

  return (
    <div className={`list-group-item contact-info ${isActive ? 'active-contact' : ''}`} onClick={handleClick}>
      <div className={`col-4 ${isExpanded ? 'col-12' : ''}`}>
        {image ? <img src={image} alt={firstName} className='img-responsive img-circle' /> : userIcon}
      </div>
      <div className={`col-8 ${isExpanded ? 'col-12' : ''}`}>
        <h2 className='name'>{buildName(firstName, middleName, lastName)}</h2>
        <span className='fa fa-phone text-muted c-info' data-toggle='tooltip' title={phone}></span>
        <span className='visible-xs'> <span className='text-muted phone'>{phone}</span></span>
        <span className='fa fa-comments text-muted c-info' data-toggle='tooltip' title={email}></span>
        <span className='visible-xs'> <span className='text-muted email'>{email}</span></span>
      </div>
    </div>
  );
};

export default ContactInfo;