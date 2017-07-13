import '../node_modules/bootstrap/scss/bootstrap.scss';

import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Bootstrap from './components/bootstrap/bootstrap';
import ContactList from './components/contactList/contactList';
import ContactListForm from './components/contactListForm/contactListForm';

const contacts = [
  {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'E',
    phone: '444-333-4444',
    email: 'jDoe@email.com'
  },
  {
    firstName: 'Jane',
    lastName: 'Lou',
    phone: '444-333-4444',
    email: 'janeLou@email.com'
  },
  {
    firstName: 'Sarah',
    lastName: 'Smith',
    middleName: 'A',
    phone: '444-333-4444',
    email: 'sSmith@email.com'
  },
  {
    firstName: 'Ed',
    lastName: 'Lou',
    phone: '444-333-4444',
    email: 'eLou@email.com'
  }
];

interface ContactInfoInterface {
  firstName: string;
  middleName?: string;
  email?: string;
  lastName?: string;
  phone?: string;
  image?: string;
}

interface PropsInterface {
  contacts: Array<ContactInfoInterface>;
}

// tslint:disable-next-line
const App = (props: PropsInterface) => {
  return (
    <ContactList contacts={props.contacts}/>
  );
};

// tslint:disable-next-line
const newContact = () => {
  return (
    <ContactListForm />
  );
};

render(
  <Router>
    <Bootstrap>
      <Switch>
        <Route exact path={'/'} render={props => (
          // pass the sub-routes down to keep nesting
          <App contacts = {contacts}/>
        )}/>
        <Route path={'/home'} render={props => (
          // pass the sub-routes down to keep nesting
          <App contacts = {contacts}/>
        )}/>
        <Route path='/new' component={newContact}/>
      </Switch>
    </Bootstrap>
  </Router>,
  document.getElementById('app')
);