import React from "react"
import { Button, Col } from 'reactstrap';

class AddButton extends React.Component {
    render() {
        return (
            <Col className="buttons">
                <Button onClick={this.props.addToSelected}>{">>"}</Button>
                <Button onClick={this.props.removeFromSelected}>{"<<"}</Button>
            </Col>
        );
    }
}
export default AddButton;