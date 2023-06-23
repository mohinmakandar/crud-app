import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Table from './components/Table';
import Form from './components/Form';
import data from './data.json';
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState('task');
  const [tableData, setTableData] = useState(data[activeTab]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setTableData(data[tab]);
    setSelectedItem(null);
  };

  const handleAdd = (newItem) => {
    setTableData([...tableData, newItem]);
  };

  const handleEdit = (itemId, updatedItem) => {
    const updatedData = tableData.map((item) =>
      item.id === itemId ? updatedItem : item
    );
    setTableData(updatedData);
    setSelectedItem(null);
  };

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
