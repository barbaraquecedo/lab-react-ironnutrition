import { Component } from "react";
import foods from '../foods.json';
import FoodBox from "./FoodBox";
import React from "react";
import Search from "./Search";

class FoodList extends Component{
    state = {
        foods:[],
        search: "",
        text: ""
    }

    componentDidMount(){
        this.setState({foods})
    }

    handleSearch(text){
        this.setState({search: text})
    }

    render(){
        const foodmeal = this.state.foods.filter(food => {
            return food.name.toLowerCase().includes(this.state.search.toLowerCase())
        })
         return(
            <div>
                <Search search={this.state.search} onSearch={(text) => {this.handleSearch(text)}} />
                {foodmeal.map(food => <FoodBox {...food} />)}

            </div>
        )

    }
}

export default FoodList;