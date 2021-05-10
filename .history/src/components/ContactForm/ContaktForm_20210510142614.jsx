import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  phone: '',
};
class ContactForm extends Component {
    state = INITIAL_STATE
    handelChangeForm = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value })
    };
    handleFormSubmit = e => {
        e.preventDefault()
  
        const { name, phone } = this.state;
        const { OnAdd } = this.props;
        const isValidatedForm = this.validateForm()
        if (!isValidatedForm) return;
        OnAdd({ id: uuid(), name, phone })
        this.resetForm();
    }
        ;
    validateForm = () => {
        const { name, phone } = this.state;
        const { onCheckUnique } = this.props;
        if (!name || !phone) {
            alert('Some fields are empty')
            return false
        }
        return onCheckUnique(name)
    };
    resetForm = () => this.setState(INITIAL_STATE);
    
    render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit} className={styles.form}>
 
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={this.handelChangeForm}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
     

      
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={phone}
            onChange={this.handelChangeForm}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
      
        <button type="submit" className={styles.btnAddContact}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;