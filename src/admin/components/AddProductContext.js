import React, { useState } from "react";
import axios from "axios";
import "../Css/AddProduct.css";

// Load API URL from .env file
const API_URL = process.env.REACT_APP_BASE_URL;

const AddProductContext = () => {
    const [productData, setProductData] = useState({
        productName: "",
        productType: "",
        category: "",
        brand: "",
        description: "",
        productUnit: "",
        productPrice: "",
        discount: "",
        stockAlert: "",
        quantity: "",
        image: null,
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setProductData((prevState) => ({
            ...prevState,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        // Append each field to formData for API submission
        Object.keys(productData).forEach((key) => {
            formData.append(key, productData[key]);
        });

        // Debugging: Log the API URL
        console.log("API URL:", API_URL); // Should print the correct base URL

        try {
            const response = await axios.post(`${API_URL}/product/create`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log("Product added successfully:", response.data);
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    return (
        <main className="add-product-container">
            <div className="header">
                <h1 style={{ marginBottom: "25px" }}>Add Product</h1>
            </div>
            <div
                style={{
                    width: "100%",
                    height: "1.5px",
                    backgroundColor: "var(--grey)",
                    marginTop: "-15px",
                    marginBottom: "20px",
                }}
            ></div>

            <form onSubmit={handleSubmit} className="product-form">
                {/* Product Name */}
                <div className="form-group">
                    <label>Product Name</label>
                    <input
                        type="text"
                        name="productName"
                        value={productData.productName}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Product Type */}
                <div className="form-group">
                    <label>Product Type</label>
                    <select
                        name="productType"
                        value={productData.productType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Accessories">Accessories</option>
                    </select>
                </div>

                {/* Category */}
                <div className="form-group">
                    <label>Category</label>
                    <select
                        name="category"
                        value={productData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Gadgets">Gadgets</option>
                        <option value="Home Appliances">Home Appliances</option>
                    </select>
                </div>

                {/* Brand */}
                <div className="form-group">
                    <label>Brand</label>
                    <select
                        name="brand"
                        value={productData.brand}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Brand</option>
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                    </select>
                </div>

                {/* Description */}
                <div className="form-group">
                    <label>Description</label>
                    <input
                        name="description"
                        value={productData.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Product Unit */}
                <div className="form-group">
                    <label>Product Unit</label>
                    <input
                        type="text"
                        name="productUnit"
                        value={productData.productUnit}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Product Price */}
                <div className="form-group">
                    <label>Product Price</label>
                    <input
                        type="number"
                        name="productPrice"
                        value={productData.productPrice}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Discount */}
                <div className="form-group">
                    <label>Discount</label>
                    <input
                        type="number"
                        name="discount"
                        value={productData.discount}
                        onChange={handleChange}
                    />
                </div>

                {/* Stock Alert */}
                <div className="form-group">
                    <label>Stock Alert</label>
                    <input
                        type="number"
                        name="stockAlert"
                        value={productData.stockAlert}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Quantity */}
                <div className="form-group">
                    <label>Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={productData.quantity}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Product Image */}
                <div className="form-group">
                    <label>Product Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="submit-container" style={{ marginBottom: "30px" }}>
                    <button type="submit" className="submit-button">
                        CREATE PRODUCT
                    </button>
                </div>
            </form>
        </main>
    );
};

export default AddProductContext;
