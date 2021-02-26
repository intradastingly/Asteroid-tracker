import React, {Component, CSSProperties} from 'react';
import SearchBar from './SearchBar';
import StartPageImage from "./startPageImage";
import Buttons from "./buttons";
import { Link } from "react-router-dom"


interface Props {

}

interface State {
    drinks: []
}

class MasterView extends Component<Props,State> {

    state: State = {
        drinks: []
    }

    COCKTAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


    handleInput = (value: string) => {
        this.fetchDataFromApi(value);
    }

    async fetchDataFromApi(searchValue: string) {
        try {
            fetch(this.COCKTAILS_URL + searchValue)
                .then(response => response.json())
                .then(drinks => this.setState({drinks}))
        } catch (error) {
            console.log(error);
        }
    }

    somethingHappens() {
        console.log('SEARCH FOR DRINK')
    }

    somethingElseHappens(){
        console.log("RANDOM DRINK")
    }
    render() {
        console.log(this.state)
        return (
            <div style={rootStyle}>
                <StartPageImage />
                <SearchBar onChange={this.handleInput}/>
                <div style={buttonFlex}>
                    <Link to="/Search">
                        <Buttons text="Search" handleClick={this.somethingHappens}/>
                    </Link>
                    <Link to="/Random">
                        <Buttons text="Random" handleClick={this.somethingElseHappens}/>
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