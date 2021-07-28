import { Component } from "react";
import ContactsList from './Components/ContactsList/ContactsList';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
     filter: '',
    name: '',
    number: ''
  };

  handleNameChange = event => {
    // console.log(event.currentTarget.value);

    this.setState({ [event.currentTarget.name] : event.currentTarget.value });
  };

  onDelete = () => {
    
  }

  render() {
  
    return (
      <>
            <h1>Name</h1>
        <form>
         
            <input type='text' name='name' value={this.state.name} onChange={this.handleNameChange} />
          
        </form>

        <h1>Number</h1>
        <form>
         
            <input type='text' name='number' value={this.state.number} onChange={this.handleNameChange} />
          
        </form>

    
       
        <ContactsList contacts={this.state.contacts} />
    </>
  )


}
 
}

export default App;
