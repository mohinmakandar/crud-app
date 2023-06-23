import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Table from './components/Table';
import Form from './components/Form';
import data from './data.json';
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState('task'); // Set 'task' tab as default active tab
  const [tableData, setTableData] = useState(data[activeTab]); //By default set Task data as tableData
  const [selectedItem, setSelectedItem] = useState(null); //Keep track of selected row to edit or delete

  //This function handles Tab Click and updates the table data by updating state variables. 
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setTableData(data[tab]);
    setSelectedItem(null);
  };

  //This function adds new record to the table
  const handleAdd = (newItem) => {
    setTableData([...tableData, newItem]);
  };

  //This function updates a selected record
  const handleEdit = (itemId, updatedItem) => {
    const updatedData = tableData.map((item) =>
      item.id === itemId ? updatedItem : item
    );
    setTableData(updatedData);
    setSelectedItem(null);
  };

  //This function handles delete operation
  const handleDelete = (itemId) => {
    const updatedData = tableData.filter((item) => item.id !== itemId);
    setTableData(updatedData);
    setSelectedItem(null);
  };

  const handleEditClick = (item) => {
    setSelectedItem({ ...item });
  };

  return (
    <div>
      <h1 className="App-heading">CRUD APP</h1>
      <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
      <Table
        data={tableData}
        handleDelete={handleDelete}
        handleEdit={handleEditClick}
      />
      <Form
        handleAdd={handleAdd}
        handleEdit={handleEdit}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default App;
