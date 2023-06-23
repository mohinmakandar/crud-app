import React, { useState, useEffect } from 'react';
import './Form.css';

const Form = ({ handleAdd, handleEdit, selectedItem }) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Update form fields when the selectedItem changes
  useEffect(() => {
    if (selectedItem) {
      setId(selectedItem.id);
      setTitle(selectedItem.title);
      setDescription(selectedItem.description);
    }
  }, [selectedItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedItem) {
      // Call handleEdit to update an existing item
      handleEdit(id, { id, title, description });
    } else {
      // Call handleAdd to add a new item
      handleAdd({ id, title, description });
    }
    // Reset form fields after submission
    setId('');
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">{selectedItem ? 'Edit' : 'Add'}</button>
    </form>
  );
};

export default Form;
