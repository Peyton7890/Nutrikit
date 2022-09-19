import React from "react"
import { Col, Table, Input } from 'reactstrap';

class MenuItems extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            fooditem: '',
            category: '',
            calories: 0.0,
            totalFat: 0.0,
            satFat: 0.0,
            transFat: 0.0,
            protein: 0.0,
            carb: 0.0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.inputCalories = this.inputCalories.bind(this);
        this.inputCarb = this.inputCarb.bind(this);
        this.inputProtein = this.inputProtein.bind(this);
        this.inputSatFat = this.inputSatFat.bind(this);
        this.inputTotalFat = this.inputTotalFat.bind(this);
        this.inputTransFat = this.inputTransFat.bind(this);
    }
    componentDidMount() {
        this.props.passRefUpward(this.refs);
    }
    handleChange(e) {
        this.setState({ fooditem: e.target.textContent });
        this.props.setNutritional();
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

    inputCalories(e) {
        this.setState({ calories: e.target.value });
        this.props.fetchUpdate(e.target.value, this.state.totalFat, this.state.satFat, this.state.transFat, this.state.protein, this.state.carb, this.state.fooditem);
        this.props.setNutritional();
    }
    inputTotalFat(e) {
        this.setState({ totalFat: e.target.value });
        this.props.fetchUpdate(this.state.calories, e.target.value, this.state.satFat, this.state.transFat, this.state.protein, this.state.carb, this.state.fooditem);
        this.props.setNutritional();
    }
    inputSatFat(e) {
        this.setState({ satFat: e.target.value });
        this.props.fetchUpdate(this.state.calories, this.state.totalFat, e.target.value, this.state.transFat, this.state.protein, this.state.carb, this.state.fooditem);
        this.props.setNutritional();
    }
    inputTransFat(e) {
        this.setState({ transFat: e.target.value });
        this.props.fetchUpdate(this.state.calories, this.state.totalFat, this.state.satFat, e.target.value, this.state.protein, this.state.carb, this.state.fooditem);
        this.props.setNutritional();
    }
    inputProtein(e) {
        this.setState({ protein: e.target.value });
        this.props.fetchUpdate(this.state.calories, this.state.totalFat, this.state.satFat, this.state.transFat, e.target.value, this.state.carb, this.state.fooditem);
        this.props.setNutritional();
    }
    inputCarb(e) {
        this.setState({ carb: e.target.value });
        this.props.fetchUpdate(this.state.calories, this.state.totalFat, this.state.satFat, this.state.transFat, e.target.value, this.state.carb, this.state.fooditem);
        this.props.setNutritional();
    }

    render() {
        return (
            <Col className="menuitems">
                <h2>Menu Items</h2>
                <select id="food list" ref="menu"size="5" onClick={this.handleChange}></select>
                <h3>Nutritional Info</h3>
                <Table className="nutrition">
                    <tbody>
                    <tr>
                        <th scope="row">Calories</th>
                        <td><Input style={{backgroundColor: this.calorieColor(),}} placeholder={this.state.calories} onChange={this.inputCalories}></Input></td>
                    </tr>
                    <tr>
                        <th scope="row">Total Fat</th>
                        <td><Input style={{backgroundColor: this.totalFatColor(),}} placeholder={this.state.totalFat} onChange={this.inputTotalFat}></Input></td>
                    </tr>
                    <tr>
                        <th scope="row">Saturated Fat</th>
                        <td><Input style={{backgroundColor: this.satFatColor(),}} placeholder={this.state.satFat} onChange={this.inputSatFat}></Input></td>
                    </tr>
                    <tr>
                        <th scope="row">Trans Fat</th>
                        <td><Input style={{backgroundColor: this.transFatColor(),}} placeholder={this.state.transFat} onChange={this.inputTransFat}></Input></td>
                    </tr>
                    <tr>
                        <th scope="row">Protein</th>
                        <td><Input style={{backgroundColor: this.proteinColor(),}} placeholder={this.state.protein} onChange={this.inputProtein}></Input></td>
                    </tr>
                    <tr>
                        <th scope="row">Carbohydrate</th>
                        <td><Input style={{backgroundColor: this.carbColor(),}} placeholder={this.state.carb} onChange={this.inputCarb}></Input></td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        );
    }
}

export default MenuItems;
