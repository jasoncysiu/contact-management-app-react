import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function EditContact(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, email } = location.state.contact;
  const [contactName, setContactName] = useState(name);
  const [contactEmail, setContactEmail] = useState(email);

  const update = (e) => {
    e.preventDefault();
    if (contactName === "" || contactEmail === "") {
      alert("All the fields are mandatory!");
      return;
    }

    props.updateContactHandler({ id, name: contactName, email: contactEmail });
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
}

export default EditContact;
