import React, {Component, CSSProperties} from 'react';
import SearchBar from './SearchBar';
import StartPageImage from "./startPageImage";
import Buttons from "./buttons";
import { Link, RouteComponentProps, withRouter } from "react-router-dom"
interface Props extends RouteComponentProps {
    drink: any[];
    onSearchDrink: (value: []) => void;
}


interface State {
    searchValue: string;
    // data: Drinks[];
}
class MasterView extends Component<Props, State> {
    state: State = {
        searchValue: '',
        // data: []
    }

    COCKTAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    RANDOM_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    
    // async fetchDataFromApi(searchValue: string) {
    //     try {
    //         fetch(this.COCKTAILS_URL + searchValue)
    //             .then(response => response.json())
    //             .then(drink => {
    //                 this.props.onSearchDrink(drink);
    //                 this.props.history.push('/search')
    //             })
        
    //     } catch (error) {
    //         console.log(error);
    //     }
    // } 

    
  async fetchImagesFromApi(searchValue: string) {
    try {
      const url = this.COCKTAILS_URL + searchValue;
      
      const response = await fetch(url);
      
      const result = await response.json();
      console.log(result.drinks)
      this.props.onSearchDrink(result.drinks);
      //this.setState({ data: result.drinks[0] })
    } catch (error: unknown) {
      console.error(error);
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
    //                 this.props.randomDrink(data);
    //                 this.props.history.push('/Random')       
    //                 // console.log(data.drinks[0].strDrink);
                    
    //                 // console.log(data.drinks);
    //             })
    //         }
    //     )
    //     .catch(function(err) {
    //         console.log('Fetch Error : S' , err)
    //     })
    // }

    somethingHappens = () => {
        this.fetchImagesFromApi(this.state.searchValue)
        // this.fetchDataFromApi(this.state.searchValue);
        // console.log(drink.drinks[0].strDrink);
    }

    handleSearchResult = (value: string) => {
        this.setState({ searchValue: value });
    }

    render() {

        return (
            <div style={rootStyle}>
                <StartPageImage />
                <SearchBar value={this.state.searchValue} onChange={this.handleSearchResult}/>
                <div style={buttonFlex}>
                    <Link to="/search">
                        <Buttons text="Search" handleClick={this.somethingHappens}/>
                    </Link>

                    {/* <Link to="/Random">
                        <Buttons text="Random" handleClick={this.getRandomCocktail}/>
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

// interface DrinksResponse {
//     drinks: Drinks[],
// }
// export interface Drinks {
//    0: [{

//        strDrinkThumb: string,
//        strDrink: string,
//     }]
    
// }

    // interface PexelsResponse {
    //     photos: PexelsPhoto[];
    //   }
      
    //   export interface PexelsPhoto {
    //     photographer: string;
    //     src: {
    //       large2x: string;
    //       large: string;
    //       medium: string;
    //       small: string;
    //     }
    //   }

    
//     interface Props {}
// interface State {
//   images: PexelsPhoto[];
// }

// class App extends Component<Props, State> {
//   private readonly API_KEY = '563492ad6f91700001000001e9543e64cc6240f3a18b3b0d9f42629d';
//   private readonly PEXELS_URL = 'https://api.pexels.com/v1/search'
  
//   state: State = {
//     images: []
//   }

//   handleNewSearchValue = (value: string) => {
//     this.fetchImagesFromApi(value);
//   };

//   async fetchImagesFromApi(searchValue: string) {
//     try {
//       const url = this.PEXELS_URL + '?query=' + searchValue;
      
//       const response = await fetch(url, {
//         headers: { 'Authorization': this.API_KEY }
//       });
      
//       const result: PexelsResponse = await response.json();
//       this.setState({ images: result.photos || [] })

//     } catch (error: unknown) {
//       console.error(error);
//     }
//   }
      


export default withRouter(MasterView);