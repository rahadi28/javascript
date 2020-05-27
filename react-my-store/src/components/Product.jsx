import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { getAllProduct } from "../api/products";
import AddProductModal from "./AddProductModal";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = { productList: [], show: false }
    }

    setShow = () => {
        this.setState({show: !this.state.show})
        this.onGetAllProducts();
    }

    onGetAllProducts = async () => {
        const response = await getAllProduct();
        const result = await response.json();
        this.setState({ productList: result.data });
    }

    componentDidMount() {
        this.onGetAllProducts();
    }

    render() {
        const items = this.state.productList.map((product) => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.productName}</td>
                    <td>{product.category.id}</td>
                    <td>{product.category.categoryName}</td>
                </tr>
            )
        })

        return (
            <Fragment>
                <Button className="float-right" variant="primary" onClick={this.setShow}><i className="fa fa-plus-circle mr-2"/>Add Product</Button>
                <AddProductModal show={this.state.show} setShow={this.setShow}/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>PRODUCT NAME</th>
                            <th>CATEGORY ID</th>
                            <th>CATEGORY NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </Table>
            </Fragment>
        )
    }
}

export default Product;