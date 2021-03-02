import React, {Component, CSSProperties} from 'react';
import SearchBar from './SearchBar';
import StartPageImage from "./startPageImage";
import Buttons from "./buttons";
import { RouteComponentProps, withRouter } from "react-router-dom"
interface Props extends RouteComponentProps {
    drink: any[];
    onSearchDrink: (value: []) => void;
}
interface State {
    searchValue: string;
}
class MasterView extends Component<Props, State> {
    state: State = {
        searchValue: ''
    }

    COCKTAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    RANDOM_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    
    async fetchDataFromApi(searchValue: string) {
        try {
            fetch(this.COCKTAILS_URL + searchValue)
                .then(response => response.json())
                .then(drink => {
                    this.props.onSearchDrink(drink);
                    this.props.history.push('/search')
                })
        } catch (error) {
            console.log(error);
        }
    } 

    // Generates random drink when random button is clicked

    // getRandomCocktail() {
    //     fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    //     .then(
    //         (response) => {
    //             if (response.status !== 200) {
    //                 console.log('Looks like there was a problem. Status Code: ' +
    //                 response.status);
    //                 return;
    //             }
    //             response.json().then((data) => {
    //                 this.setState({randomDrink: data})           
    //                 console.log(data.drinks[0].strDrink);
                    
    //                 // console.log(data.drinks);
    //             })
    //         }
    //     )
    //     .catch(function(err) {
    //         console.log('Fetch Error : S' , err)
    //     })
    // }

    somethingHappens = () => {
        this.fetchDataFromApi(this.state.searchValue);
    }

    handleSearchResult = (value: string) => {
        this.setState({ searchValue: value });
    }

    render() {
        // test error boundry
        // if(this.props) {
        //     const haha: any  = null;
        //     console.log(haha.lol)
        // }
        return (
            <div style={rootStyle}>
                <StartPageImage />
                <SearchBar value={this.state.searchValue} onChange={this.handleSearchResult}/>
                <div style={buttonFlex}>
                    <Buttons text="Search" handleClick={this.somethingHappens}/>

                    {/* <Link to="/Random">
                        <Buttons text="Random" handleClick={this.somethingElseHappens}/>
                    </Link> */}
                    
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

export default withRouter(MasterView);