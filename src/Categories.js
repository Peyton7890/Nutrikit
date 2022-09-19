import React from "react"
import { Col } from "reactstrap";

class Categories extends React.Component {
    render() {
        return (
            <Col>
                <h2>Categories</h2>
                <select className="categories" name="food types" id="food types" ref="Food types">
                    <option value="Protein" onClick={() => this.props.setList("Protein")}>Protein</option>
                    <option value="Fruits" onClick={() => this.props.setList("Fruits")}>Fruits</option>
                    <option value="Vegetables" onClick={() => this.props.setList("Vegetables")}>Vegetables</option>
                    <option value="Dairy" onClick={() => this.props.setList("Dairy")}>Dairy</option>
                    <option value="Grain" onClick={() => this.props.setList("Grain")}>Grain</option>
                </select>
            </Col>
        );
    }
}


export default Categories;
