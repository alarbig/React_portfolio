import React, { useState } from 'react';
import '../../styles/Header.css';

function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name
        const inputValue = target.inputValue

        if (inputType === 'email') {
            setEmailAddress(inputValue)
        } else if (inputType === 'firstName') {
            setFirstName(inputValue)
        } else {
            setLastName(inputValue)
        }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

  };

  return ( 
    <div>
      <form className="form">
        <input
          value={emailAddress}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="first name"
        />
        <input
          value={lastName}
          name="last name"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  )

}

export default Form;