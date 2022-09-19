import React from "react"
import Categories from "./Categories";
import MenuItems from "./MenuItems";
import SelectedItems from "./SelectedItems";
import AddButton from "./AddButton";
import { Row } from 'reactstrap';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={data: ""}

        this.Categories = React.createRef();
        this.Menu = React.createRef();
        this.Selected = React.createRef();

        this.getRefsFromMenu = this.getRefsFromMenu.bind(this);
        this.getRefsFromSelected = this.getRefsFromSelected.bind(this);
    }

    componentDidMount() {
        this.fetchData();
        this.fetchUpdate();
    }

    updateData = (apiResponse) => {
        console.log(apiResponse);
        this.setState({data: apiResponse});
    }

    fetchUpdate = (calories, totalFat, satFat, transFat, protein, carb, name) => {
        fetch('/nutrikit_api/update', {
            method: 'PUT',
            body: JSON.stringify({
                calories: calories,
                totalFat: totalFat,
                satFat: satFat,
                transFat: transFat,
                protein: protein,
                carb: carb,
                name: name
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(
            (response) => {
                if (response.status === 200){return (response.json()) ;}
                else{
                    console.log("HTTP error:" + response.status + ":" +  response.statusText);
                    return ([ ["status ", response.status]]);
                }
            })//The promise response is returned, then we extract the json data
        .catch((error) => {
            console.log(error);
                this.updateData("");
        })
        this.fetchData();
    }

    fetchData = () => {
        fetch('/nutrikit_api')
        .then(
            (response) => {
                if (response.status === 200){return (response.json()) ;}
                else{
                    console.log("HTTP error:" + response.status + ":" +  response.statusText);
                    return ([ ["status ", response.status]]);
                }
            })//The promise response is returned, then we extract the json data
        .then ((jsonOutput) => {//jsonOutput now has result of the data extraction
            this.updateData(jsonOutput);
        })
        .catch((error) => {
            console.log(error);
                this.updateData("");
        })
    
    }

    setList = (foodtype) => {
        var i;
    
        for(i = 5; i >= 0; i--) {this.state.myRequestedRefs.menu.remove(i);}
    
        for(i = 0; i < this.state.data.length; i++) {
            var el = document.createElement("option");
            if (this.state.data[i][2] === foodtype) {
                el.textContent = this.state.data[i][1];
                el.category = this.state.data[i][2];
                el.value = this.state.data[i][3];
                el.totalFat = this.state.data[i][4];
                el.satFat = this.state.data[i][5];
                el.transFat = this.state.data[i][6];
                el.protein = this.state.data[i][7];
                el.totalCarb = this.state.data[i][8];
                this.state.myRequestedRefs.menu.append(el); 
            } 
        }
    }

    getRefsFromMenu(childRefs) {
        this.setState({
            myRequestedRefs: childRefs
        });
    }

    getRefsFromSelected(childRefs) {
        this.setState({
            selectedRefs: childRefs
        });
    }

    addToSelected = () => {
        if (this.state.myRequestedRefs.menu.value === "") {return;}
        this.setNutritional();
        var values = this.state.myRequestedRefs.menu;
        var select = this.state.selectedRefs.selected;
        var el = document.createElement("option");
    
        el.textContent = values.options[values.selectedIndex].text;
        el.value = values.value;
        select.append(el);

        this.Selected.current.setState({
            calories: (this.Selected.current.state.calories + parseInt(this.Menu.current.state.calories)),
            totalFat: (this.Selected.current.state.totalFat + parseFloat(this.Menu.current.state.totalFat)),
            satFat: (this.Selected.current.state.satFat + parseFloat(this.Menu.current.state.satFat)),
            transFat: (this.Selected.current.state.transFat + parseFloat(this.Menu.current.state.transFat)),
            protein: (this.Selected.current.state.protein + parseFloat(this.Menu.current.state.protein)),
            carb: (this.Selected.current.state.carb + parseFloat(this.Menu.current.state.carb))
        });
    
    }
    
    removeFromSelected = () => {
        if (this.state.selectedRefs.selected.value === "") {
            return;
        }
        var select = this.state.selectedRefs.selected;
        var values = this.state.myRequestedRefs.menu;

        this.Selected.current.setState({
            calories: this.Selected.current.state.calories - parseInt(values.value),
            totalFat: this.Selected.current.state.totalFat - parseFloat(values.options[values.selectedIndex].totalFat),
            satFat: this.Selected.current.state.satFat - parseFloat(values.options[values.selectedIndex].satFat),
            transFat: this.Selected.current.state.transFat - parseFloat(values.options[values.selectedIndex].transFat),
            protein: this.Selected.current.state.protein - parseFloat(values.options[values.selectedIndex].protein),
            carb: this.Selected.current.state.carb - parseFloat(values.options[values.selectedIndex].totalCarb)
        });
    
        select.removeChild(select.options[select.selectedIndex]);
    }
    setNutritional = () => {
        if (this.state.myRequestedRefs.menu.value === "") {
            return;
        }
        var values = this.state.myRequestedRefs.menu;

        this.Menu.current.setState({
            calories: values.options[values.selectedIndex].value,
            totalFat: values.options[values.selectedIndex].totalFat,
            satFat: values.options[values.selectedIndex].satFat,
            transFat: values.options[values.selectedIndex].transFat,
            protein: values.options[values.selectedIndex].protein,
            carb: values.options[values.selectedIndex].totalCarb
        });
    }


    render() {
        return (
            <Row className="app">
                <Categories ref={this.Categories} setList={this.setList}/>
                <MenuItems ref={this.Menu} passRefUpward={this.getRefsFromMenu} setNutritional={this.setNutritional} fetchUpdate={this.fetchUpdate}/>
                <AddButton ref="button" addToSelected={this.addToSelected} removeFromSelected={this.removeFromSelected}/>
                <SelectedItems ref={this.Selected} passRefUpward={this.getRefsFromSelected}/>
            </Row>
        );
    }
} 
export default App;

