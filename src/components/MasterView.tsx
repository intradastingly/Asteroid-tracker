import React, { Component, CSSProperties } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import SearchBar from './SearchBar';
import StartPageImage from './StartPageImage';
import Buttons from './Buttons';
import Grid from '@material-ui/core/Grid';

interface Props extends RouteComponentProps {
   drink: any[];
   onSearchDrink: (value: []) => void;
}

interface State {
   searchValue: string;
}

class MasterView extends Component<Props, State> {
   state: State = {
      searchValue: '',
   };

   COCKTAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

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
            <Grid style={searchDiv} container justify="center">
               <Grid item>
                  <SearchBar
                     value={this.state.searchValue}
                     onChange={this.handleSearchResult}
                     dropDownList={this.props.drink}
                  />
               </Grid>
               <Grid item style={buttonFlex}>
                  <Link to="/search">
                     <Buttons
                        text="Search"
                        handleClick={this.somethingHappens}
                     />
                  </Link>
               </Grid>
            </Grid>
         </div>
      );
   }
}

const rootStyle: CSSProperties = {
   display: 'flex',
   flexGrow: 1,
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
};

const searchDiv: CSSProperties = {
   display: 'flex',
   flexDirection: 'row',
};

const buttonFlex: CSSProperties = {
   display: 'flex',
};

export default withRouter(MasterView);
