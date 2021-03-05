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
}
class MasterView extends Component<Props, State> {
    state: State = {
        searchValue: ''
    }

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
        this.fetchImagesFromApi(this.state.searchValue)
    }

    handleSearchResult = (value: string) => {
        this.fetchImagesFromApi(this.state.searchValue)
        this.setState({ searchValue: value });
    }

    render() {
        return (
            <div style={rootStyle}>
                <StartPageImage />
                <SearchBar 
                    value={this.state.searchValue} 
                    onChange={this.handleSearchResult}
                    dropDownList={this.props.drink}
                />
                <div style={buttonFlex}>
                    <Link to="/search">
                        <Buttons text="Search" handleClick={this.somethingHappens}/>
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

export default withRouter(MasterView);