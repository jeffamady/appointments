import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name"
        placeholder='name'
        type="text"
        value={name}
        onChange={({target}) => setName(target.value)}
      />

      <input 
        name="phone"
        // pattern="^((\\+1)?\\s?\\(\\d{3}\\)\\s?\\d{3}\\-\\d{4})?$"
        placeholder='phone'
        type="tel"
        value={phone}
        onChange={({target}) => setPhone(target.value)}
      />

      <input
        name="email"
        placeholder='email'
        type="email"
        value={email}
        onChange={({target}) => setEmail(target.value)}
      />
      
      <button type="submit" >Add Contact</button>
    </form>
  );
};
