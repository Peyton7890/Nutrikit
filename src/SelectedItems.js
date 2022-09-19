import React from "react";
import { Col, Table, Input } from 'reactstrap';
import { Progress } from "reactstrap";

class SelectedItems extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            item: '' , 
            calories: 0.0,
            totalFat: 0.0,
            satFat: 0.0,
            transFat: 0.0,
            protein: 0.0,
            carb: 0.0,
            calGoal: 2000
        };
        this.adad = React.createRef();

        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.props.passRefUpward(this.refs);
    }
    handleChange(e) {
        this.setState({ item: e.target.textContent });
    }

    calorieColor() {
        if (this.state.calories > 2000) {return "red";}
        else if(this.state.calories > 1700) {return "yellow"} 
        else {return "cyan";}
    }
    totalFatColor() {
        if (this.state.totalFat > 9) {return "red";}
        else if(this.state.totalFat > 7) {return "yellow"} 
        else {return "cyan";}
    }
    satFatColor() {
        if (this.state.satFat > 20) {return "red";}
        else if(this.state.satFat > 17) {return "yellow"} 
        else {return "cyan";}
    }
    transFatColor() {
        if (this.state.transFat > 30) {return "red";}
        else if(this.state.transFat > 25) {return "yellow"} 
        else {return "cyan";}
    }
    proteinColor() {
        if (this.state.protein > 2000) {return "red";}
        else if(this.state.protein > 1700) {return "yellow"} 
        else {return "cyan";}
    }
    carbColor() {
        if (this.state.carb > 2000) {return "red";}
        else if(this.state.carb > 1700) {return "yellow"} 
        else {return "cyan";}
    }

    render() {
        return (
            <Col className="selecteditems">
                <h2>Selected Items</h2>
                <select id="selected foods" size="8" ref="selected" onClick={this.handleChange}></select> 
                <h3>Calorie Goal: <Input ref="calories" type="number" placeholder={this.state.calGoal} onChange={this.inputCalGoal}></Input></h3>
                <Progress value={(parseFloat(this.state.calories) / parseFloat(this.state.calGoal)) * 100} color="danger"/>
                <Table className="nutrition">
                    <tbody>
                    <tr>
                        <th scope="row">Calories</th>
                        <td style={{backgroundColor: this.calorieColor(),}}>{this.state.calories}</td>
                    </tr>
                    <tr>
                        <th scope="row">Total Fat</th>
                        <td style={{backgroundColor: this.totalFatColor(),}}>{this.state.totalFat}</td>
                    </tr>
                    <tr>
                        <th scope="row">Saturated Fat</th>
                        <td style={{backgroundColor: this.satFatColor(),}}>{this.state.satFat}</td>
                    </tr>
                    <tr>
                        <th scope="row">Trans Fat</th>
                        <td style={{backgroundColor: this.transFatColor(),}}>{this.state.transFat}</td>
                    </tr>
                    <tr>
                        <th scope="row">Protein</th>
                        <td style={{backgroundColor: this.proteinColor(),}}>{this.state.protein}</td>
                    </tr>
                    <tr>
                        <th scope="row">Carbohydrate</th>
                        <td style={{backgroundColor: this.carbColor(),}}>{this.state.carb}</td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        );
    }
}

export default SelectedItems;