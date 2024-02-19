import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/contacts'; // Assuming this is how you access your backend

const EditContact = ({ updateContactHandler, contacts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({ id: '', name: '', email: '' });

  // Fetch contact details from the backend if not passed through props
  const fetchContactDetails = async (contactId) => {
    const response = await api.get(`/contacts/${contactId}`);
    return response.data;
  };

  useEffect(() => {
    const getContact = async () => {
      if (contacts) {
        // If contacts are available as props, find the contact directly
        const contactToEdit = contacts.find(contact => contact.id === id);
        if (contactToEdit) {
          setContact(contactToEdit);
        } else {
          navigate('/'); // Redirect if the contact isn't found
        }
      } else {
        // If contacts are not available, fetch from the backend
        const fetchedContact = await fetchContactDetails(id);
        if (fetchedContact) {
          setContact(fetchedContact);
        } else {
          navigate('/'); // Redirect if the contact isn't found
        }
      }
    };

    getContact();
  }, [id, navigate, contacts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.email) {
      updateContactHandler(contact);
      navigate('/');
    }
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={handleInputChange}
          />
        </div>
        <button className="ui button blue">Update Contact</button>
      </form>
    </div>
  );
};

export default EditContact;
