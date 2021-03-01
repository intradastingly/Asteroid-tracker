import React, {Component, CSSProperties} from 'react';
import SearchBar from './SearchBar';
import StartPageImage from "./startPageImage";
import Buttons from "./buttons";
import { Link } from "react-router-dom"
interface Props {}
interface State {
    searchValue: string;
    drink: [];
}
  class MasterView extends Component<Props,State> {

    state: State = {
        searchValue: '',
        drink: []
    }

    COCKTAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    RANDOM_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    
     async fetchDataFromApi(searchValue: string) {
        try {
            fetch(this.COCKTAILS_URL + searchValue)
                .then(response => response.json())
                .then(drink => this.setState({drink}))
        } catch (error) {
            console.log(error);
        }
    } 

    // Generates random drink when random button is clicked

    getRandomCocktail() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }
                response.json().then(function(data) {

                    console.log(data.drinks[0].strDrink);
                    // console.log(data.drinks);
                })
            }
        )
        .catch(function(err) {
            console.log('Fetch Error : S' , err)
        })
    }

    somethingHappens() {
        console.log('SEARCH FOR DRINK')
    }

    somethingElseHappens(){
        console.log("RANDOM DRINK")
    }

    handleSearchResult = (value: string) =>{
        this.fetchDataFromApi(value)
    }

    render() {
        console.log(this.state.drink)
        return (
            <div style={rootStyle}>
                <StartPageImage />
                <SearchBar onChange={this.handleSearchResult}/>
                <div style={buttonFlex}>
                    <Link to="/Search">
                        <Buttons text="Search" handleClick={this.somethingHappens}/>
                    </Link>
                    <Link to="/Random">
                        <Buttons text="Random" handleClick={this.getRandomCocktail}/>
                    </Link>
                </div>
            </div>
        )  
    }
}

const rootStyle: CSSProperties = {
    display: "flex",
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'   
}

const buttonFlex: CSSProperties = {
    display: "flex",   
}

export default MasterView;