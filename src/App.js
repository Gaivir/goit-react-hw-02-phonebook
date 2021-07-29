import { Component } from "react";
import shortid from 'shortid';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from './Components/ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
     filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    if (this.state.contacts.some(el => el.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      const newContact = { id: shortid.generate(), name, number };
      console.log(newContact);

    this.setState(({contacts}) => ({
      contacts: [...contacts, newContact]
    }))
    }
  }

 

  onDelete = () => {

  }

  render() {
  
    return (   
  <div>
  <h1>Phonebook</h1>
  <ContactForm onSubmit={this.formSubmitHandler}/>

  <h2>Contacts</h2>
  {/* <Filter ... /> */}
  <ContactList contacts={this.state.contacts} />
</div>
  )


} 
}

export default App;



