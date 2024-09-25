import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/AddProduct.css";

const AddProductContext = () => {
    const [productName, setProductName] = useState("");
    const [productType, setProductType] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [unit, setUnit] = useState("");
    const [price, setPrice] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [productTax, setProductTax] = useState("");
    const [discount, setDiscount] = useState("");
    const [stockAlert, setStockAlert] = useState("");
    const [barcode, setBarcode] = useState("");
    const [expense, setExpense] = useState("");
    const [productCode, setProductCode] = useState("");
    const [taxMethod, setTaxMethod] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const productData = {
            productName,
            productType,
            category,
            brand,
            unit,
            price,
            unitPrice,
            productTax,
            discount,
            stockAlert,
            barcode,
            expense,
            productCode,
            taxMethod,
            image,
        };
        console.log(productData);
    };

    return (
        <main className="add-product-container">
            <div className="header">
                <div className="left">
                    <h1 style={{ marginBottom: "25px" }}>Add Product</h1>
                </div>
            </div>
            <div style={{ width: "100%", height: "1.5px", backgroundColor: "var(--grey)", marginTop: "-15px", marginBottom: "20px" }}></div>

            <form onSubmit={handleSubmit} className="product-form">
                <div className="form-group">
                    <label>Product Name</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Product Type</label>
                    <select value={productType} onChange={(e) => setProductType(e.target.value)} required>
                        <option value="">Select Type</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Accessories">Accessories</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="form-group">
                    <label>Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="">Select Category</option>
                        <option value="Gadgets">Gadgets</option>
                        <option value="Home Appliances">Home Appliances</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Product Code</label>
                    <input
                        type="text"
                        value={productCode}
                        onChange={(e) => setProductCode(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Brand</label>
                    <select value={brand} onChange={(e) => setBrand(e.target.value)} required>
                        <option value="">Select Brand</option>
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Barcode</label>
                    <input
                        type="text"
                        value={barcode}
                        onChange={(e) => setBarcode(e.target.value)}
                        placeholder="Scan Barcode"
                    />
                </div>

                <div className="form-group">
                    <label>Product Unit</label>
                    <select value={unit} onChange={(e) => setUnit(e.target.value)} required>
                        <option value="">Select Unit</option>
                        <option value="Kilogram">Kilogram</option>
                        <option value="Quantity">Quantity</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Product Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Expense</label>
                    <input
                        type="number"
                        value={expense}
                        onChange={(e) => setExpense(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Unit Price</label>
                    <input
                        type="number"
                        value={unitPrice}
                        onChange={(e) => setUnitPrice(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Product Tax</label>
                    <input
                        type="number"
                        value={productTax}
                        onChange={(e) => setProductTax(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Tax Method</label>
                    <select value={taxMethod} onChange={(e) => setTaxMethod(e.target.value)} required>
                        <option value="">Select Tax Method</option>
                        <option value="Inclusive">Inclusive</option>
                        <option value="Exclusive">Exclusive</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Discount</label>
                    <input
                        type="number"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Stock Alert</label>
                    <input
                        type="number"
                        value={stockAlert}
                        onChange={(e) => setStockAlert(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Product Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                    />
                </div>

                <div className="submit-container" style={{marginBottom:"30px"}}>
                    <button type="submit" className="submit-button">
                        CREATE PRODUCT
                    </button>
                </div>
            </form>
        </main>
    );
};

export default AddProductContext;
