import * as React from 'react';
import './home.scss';

import ContactList from '../../components/contactList/contactList';
import ContactInfo from '../../components/contactInfo/contactInfo';
import ContactListForm from '../../components/contactListForm/contactListForm';

interface ContactInterface {
  firstName: string;
  middleName?: string;
  email?: string;
  lastName?: string;
  phone?: string;
  image?: string;
}

interface HomePropsInterface {
  currentContactIndex: number;
}

interface HomeStateInterface {
  contacts: ContactInterface[];
  currentContactIndex: number;
  addingContact: boolean;
}

export default class Home extends React.Component<HomePropsInterface, HomeStateInterface> {
  constructor(props: HomePropsInterface){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      contacts: [
        {
          firstName: 'jame',
          lastName: 'Doe',
          middleName: 'E',
          phone: '444-333-4444',
          email: 'jDoe@email.com'
        },
        {
          firstName: 'John',
          lastName: 'Doe',
          middleName: 'E',
          phone: '444-333-4444',
          email: 'jDoe@email.com'
        },
        {
          firstName: 'asdf',
          lastName: 'Doe',
          middleName: 'E',
          phone: '444-333-4444',
          email: 'jDoe@email.com'
        },
        {
          firstName: 'Jowerwerhn',
          lastName: 'Doe',
          middleName: 'E',
          phone: '444-333-4444',
          email: 'jDoe@email.com'
        },
        {
          firstName: 'as',
          lastName: 'Doe',
          middleName: 'E',
          phone: '444-333-4444',
          email: 'jDoe@email.com'
        },
        {
          firstName: 'wer',
          lastName: 'Doe',
          middleName: 'E',
          phone: '444-333-4444',
          email: 'jDoe@email.com'
        },
        {
          firstName: 'asdf',
          lastName: 'Doe',
          middleName: 'E',
          phone: '444-333-4444',
          email: 'jDoe@email.com'
        },
        {
          firstName: 'Jweraesdfohn',
          lastName: 'Doe',
          middleName: 'E',
          phone: '444-333-4444',
          email: 'jDoe@email.com'
        },
        {
          firstName: 'davd',
          lastName: 'Doe',
          middleName: 'E',
          phone: '444-333-4444',
          email: 'jDoe@email.com'
        }
      ],
      currentContactIndex: 0,
      addingContact: false,
    }
  }

  public componentDidMount() {
    //  fetch contacts here api call
    if(this.state.contacts.length > 0) {
      this.setActiveContact(0);
    }
  }

  private addContact(val: string): void {
  }

  private handleRemove(id: string): void {
  }

  private setActiveContact(index: number): void {
    this.setState({
      currentContactIndex: index
    })
  }

  private handleAddButton() {
    this.setState({
      addingContact: true
    });
  }

  render(){
    return (
      <div className='home'>
        <div className="col col-md-6 col-lg-4 text-center d-inline-block">
          <button onClick={this.handleAddButton.bind(this)} className="btn btn-success addContactBtn"><i className="fa fa-user-circle"></i> Add Contact</button>
          <div className="card card-inverse">
            <div className="card-block">
              <ContactList contacts={this.state.contacts} activeElementIndex={this.state.currentContactIndex}/>
            </div>
          </div>
        </div>
        <div className="col col-md-6 col-lg-8 text-center d-inline-block">
          {this.state.addingContact ?
            <ContactListForm /> :
            <ContactInfo  contact={this.state.contacts[0]} isActive={false} isExpanded={true}/>
          }
        </div>
      </div>
    )
  }
}