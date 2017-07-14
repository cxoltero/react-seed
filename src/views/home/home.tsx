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
      contacts: [{
        firstName: 'Joh',
        middleName: 'a',
        lastName: 'gradie',
        email: 'email@email.com'
      }],
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

  private addContact(contact: {}): void {
    contact.id = this.state.contacts.length;
    const newContacts: Array<ContactInterface> = [...this.state.contacts, contact];

    this.setState({
      contacts: newContacts
    });
    this.setActiveContact(contact.id);
    this.cancel();
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

  private selectContact(index: number) {
    this.setActiveContact(index)
  }

  private cancel() {
    this.setState({
      addingContact: false
    });
  }

  render(){
    return (
      <div className='home'>
        <div className="col col-md-6 col-lg-5 text-center d-inline-block">
          <button onClick={this.handleAddButton.bind(this)} className="btn btn-success addContactBtn"><i className="fa fa-user-circle"></i> Add Contact</button>
          <div className="card card-inverse">
            <div className="card-block">
              <ContactList
                contacts={this.state.contacts}
                activeElementIndex={this.state.currentContactIndex}
                clickHandler={this.selectContact.bind(this)}
              />
            </div>
          </div>
        </div>
        <div className="col col-md-6 col-lg-7 text-center d-inline-block hidden-sm-down">
          {this.state.addingContact ?
            <ContactListForm onCancel={this.cancel.bind(this)} onAdd={this.addContact.bind(this)}/> :
            <ContactInfo  contact={this.state.contacts[this.state.currentContactIndex]} isActive={false} isExpanded={true}/>
          }
        </div>
      </div>
    )
  }
}