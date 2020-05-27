import React, {Fragment} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { addProduct } from "../api/products";

class AddProductModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {productName: '', categoryId: '', categoryName: ''}
    }

    onInputProductName = (e) => {
        this.setState({productName: e.target.value})
    }

    onInputCategoryId = (e) => {
        this.setState({categoryId: e.target.value})
    }

    onInputCategoryName = (e) => {
        this.setState({categoryName: e.target.value})
    }

    onSubmitProduct = async () => {
        if (this.state.productName && this.state.categoryId && this.state.categoryName) {
            const response = await addProduct({productName: this.state.productName, category: {id: this.state.categoryId, categoryName: this.state.categoryName}});
            const result = await response.json();
            console.log(result)
        }
        this.props.setShow()
        return
    }

    render() {
        return (
            <Fragment>
                <Modal show={this.props.show} onHide={this.props.setShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formProductName">
                                <Form.Label>Product name</Form.Label>
                                <Form.Control type="text" placeholder="Enter product name" onChange={this.onInputProductName}/>
                                <Form.Text className="text-muted">Product name must familiar</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formCategoryId">
                                <Form.Label>Category id</Form.Label>
                                <Form.Control type="text" placeholder="Enter category id" onChange={this.onInputCategoryId}/>
                                <Form.Text className="text-muted">Example: CAT001</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formCategoryName">
                                <Form.Label>Category name</Form.Label>
                                <Form.Control type="text" placeholder="Enter category name" onChange={this.onInputCategoryName}/>
                                <Form.Text className="text-muted">Example: ATK</Form.Text>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.setShow}>Close</Button>
                        <Button variant="primary" onClick={this.onSubmitProduct}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default AddProductModal;