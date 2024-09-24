import React, { useState } from "react";
import "../../../src/admin.css";


// Sample Table component to render table structure
const Table = ({ headData, renderHead, bodyData, renderBody }) => (
  <table className="styled-table">
    <thead>
      <tr>{headData.map((item, index) => renderHead(item, index))}</tr>
    </thead>
    <tbody>{bodyData.map((item, index) => renderBody(item, index))}</tbody>
  </table>
);

const ProductsContext = () => {
  const products = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/71y1PJ2BCKL._AC._SR360,460.jpg",
      name: "Led Bulb",
      category: "Electronics",
      subCategory: "Bulb",
      brand: "Redmi",
      unit: "Quantity (q)",
      variant: "N/A",
      stock: 180,
      price: "$150",
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/71y1PJ2BCKL._AC._SR360,460.jpg",
      name: "Smart phone",
      category: "Accessories",
      subCategory: "Gadget",
      brand: "Redmi",
      unit: "Quantity (q)",
      variant: "N/A",
      stock: 180,
      price: "$150",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/71y1PJ2BCKL._AC._SR360,460.jpg",
      name: "Laptop",
      category: "Electronics",
      subCategory: "Computer",
      brand: "HP",
      unit: "Quantity (q)",
      variant: "N/A",
      stock: 100,
      price: "$800",
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/71y1PJ2BCKL._AC._SR360,460.jpg",
      name: "Tablet",
      category: "Electronics",
      subCategory: "Gadget",
      brand: "Apple",
      unit: "Quantity (q)",
      variant: "N/A",
      stock: 60,
      price: "$400",
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/I/71y1PJ2BCKL._AC._SR360,460.jpg",
      name: "Smart Watch",
      category: "Accessories",
      subCategory: "Wearable",
      brand: "Fossil",
      unit: "Quantity (q)",
      variant: "N/A",
      stock: 120,
      price: "$250",
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/71y1PJ2BCKL._AC._SR360,460.jpg",
      name: "Wireless Earbuds",
      category: "Accessories",
      subCategory: "Audio",
      brand: "Sony",
      unit: "Quantity (q)",
      variant: "N/A",
      stock: 200,
      price: "$150",
    },
    {
      id: 7,
      image: "https://m.media-amazon.com/images/I/71y1PJ2BCKL._AC._SR360,460.jpg",
      name: "Bluetooth Speaker",
      category: "Audio",
      subCategory: "Speaker",
      brand: "JBL",
      unit: "Quantity (q)",
      variant: "N/A",
      stock: 150,
      price: "$120",
    },
    {
      id: 8,
      image: "https://m.media-amazon.com/images/I/71y1PJ2BCKL._AC._SR360,460.jpg",
      name: "External Hard Drive",
      category: "Storage",
      subCategory: "Drive",
      brand: "Seagate",
      unit: "Quantity (q)",
      variant: "N/A",
      stock: 90,
      price: "$100",
    },
    {
      id: 9,
      image: "https://m.media-amazon.com/images/I/71y1PJ2BCKL._AC._SR360,460.jpg",
      name: "USB-C Charger",
      category: "Accessories",
      subCategory: "Charger",
      brand: "Anker",
      unit: "Quantity (q)",
      variant: "N/A",
      stock: 220,
      price: "$30",
    },
    {
      id: 10,
      image: "https://m.media-amazon.com/images/I/71y1PJ2BCKL._AC._SR360,460.jpg",
      name: "HDMI Cable",
      category: "Accessories",
      subCategory: "Cable",
      brand: "AmazonBasics",
      unit: "Quantity (q)",
      variant: "N/A",
      stock: 300,
      price: "$15",
    },
    {
      id: 11,
      image: "https://m.media-amazon.com/images/I/71y1PJ2BCKL._AC._SR360,460.jpg",
      name: "Power Bank",
      category: "Accessories",
      subCategory: "Charger",
      brand: "RavPower",
      unit: "Quantity (q)",
      variant: "N/A",
      stock: 50,
      price: "$40",
    },
    {
      id: 12,
      image: "https://m.media-amazon.com/images/I/71y1PJ2BCKL._AC._SR360,460.jpg",
      name: "Webcam",
      category: "Electronics",
      subCategory: "Camera",
      brand: "Logitech",
      unit: "Quantity (q)",
      variant: "N/A",
      stock: 30,
      price: "$70",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); 

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleEditProduct = (id) => {
    alert(`Edit Product with ID: ${id}`);
  };

  const handleDeleteProduct = (id) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete Product with ID: ${id}?`
    );
    if (confirmDelete) {
      alert(`Deleted Product with ID: ${id}`);
    }
  };

  const customerTableHead = [
    { label: "Select" },
    { label: "ID" },
    { label: "Image" },
    { label: "Name" },
    { label: "Category" },
    { label: "Sub-Category" },
    { label: "Brand" },
    { label: "Unit" },
    { label: "Variant" },
    { label: "Stock" },
    { label: "Price" },
    { label: "Action" },
  ];

  const renderHead = (item, index) => <th key={index}>{item.label}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>
        <input type="checkbox" />
      </td>
      <td>{item.id}</td>
      <td>
        <img src={item.image} alt={item.name} width="50" />
      </td>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>{item.subCategory}</td>
      <td>{item.brand}</td>
      <td>{item.unit}</td>
      <td>{item.variant}</td>
      <td>{item.stock}</td>
      <td>{item.price}</td>
      <td>
        <div className="dropdown">
          <button className="dropbtn">Actions</button>
          <div className="dropdown-content">
            <button onClick={() => handleEditProduct(item.id)}>Edit</button>
            <button onClick={() => handleDeleteProduct(item.id)}>Delete</button>
          </div>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="table-container">
      <h1 style={{fontSize:"36px", fontWeight: "600", color: "(--dark)", marginBottom: "10px"}}>Products</h1>
      <div className="items-per-page">
        <label htmlFor="items-per-page">Items per page :</label>
        <select
          id="items-per-page"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          style={{paddingLeft:"15px", paddingRight: "20px", paddingTop:"5px", paddingBottom:"5px"}}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>

      </div>
      <Table
        headData={customerTableHead}
        renderHead={(item, index) => renderHead(item, index)}
        bodyData={currentProducts}
        renderBody={(item, index) => renderBody(item, index)}
      />
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsContext;
