import React, { Component, CSSProperties } from "react";
import SearchBar from "./SearchBar";
import StartPageImage from "./StartPageImage";
import Buttons from "./Buttons";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
interface Props extends RouteComponentProps {
   drink: any[];
   onSearchDrink: (value: []) => void;
}

interface State {
   searchValue: string;
}
class MasterView extends Component<Props, State> {
   state: State = {
      searchValue: "",
   };

   COCKTAILS_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

   async fetchImagesFromApi(searchValue: string) {
      try {
         const url = this.COCKTAILS_URL + searchValue;
         const response = await fetch(url);
         const result = await response.json();
         this.props.onSearchDrink(result.drinks);
      } catch (error: unknown) {
         console.error(error);
      }
   }

   somethingHappens = () => {
      this.fetchImagesFromApi(this.state.searchValue);
   };

   handleSearchResult = (value: string) => {
      this.fetchImagesFromApi(this.state.searchValue);
      this.setState({ searchValue: value });
   };

   render() {
      return (
         <div style={rootStyle}>
            <div>
               <StartPageImage />
            </div>
            <div style={searchDiv}>
               <div>
                  <SearchBar
                     value={this.state.searchValue}
                     onChange={this.handleSearchResult}
                     dropDownList={this.props.drink}
                  />
               </div>
               <div style={buttonFlex}>
                  <Link to="/search">
                     <Buttons
                        text="Search"
                        handleClick={this.somethingHappens}
                     />
                  </Link>
               </div>
            </div>
         </div>
      );
   }
}

const rootStyle: CSSProperties = {
   display: "flex",
   flex: 1,
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center",
};

const searchDiv: CSSProperties = {
    display: "flex",
    flexDirection: "row",
};

const buttonFlex: CSSProperties = {
   display: "flex",
};

export default withRouter(MasterView);

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
