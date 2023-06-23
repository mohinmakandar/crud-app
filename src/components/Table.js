import React from 'react';
import './Table.css';

/**
 * Table component to display data in a tabular format.
 * @param {Array} data - Array of objects representing the data to be displayed.
 * @param {Function} handleDelete - Function to handle delete action for a table row.
 * @param {Function} handleEdit - Function to handle edit action for a table row.
 */
const Table = ({ data, handleDelete, handleEdit }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>  
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* Iterate over the data array and create table rows */}
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>
              {/* Edit button with handleEdit callback */}
              <button onClick={() => handleEdit(item)}>Edit</button>
              {/* Add space between Edit and Delete buttons */}
              {' '}
              {/* Delete button with handleDelete callback */}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
