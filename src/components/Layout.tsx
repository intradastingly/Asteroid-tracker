import React, {Component, CSSProperties} from 'react';
import DetailView from './DetailView';
import MasterView from './MasterView';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';



interface State {}
interface Props {}
class Layout extends Component<Props,State> { 
    state: State = {
        searchValue: ''
    }

    image = "../assets/drink.png";
    drinkTitle = 'Bloody Mary'  
    drinkRecipe = "Only alcohol in this drink"
    COCKTAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

    async fetchDataFromApi(searchValue: string) {
        try {
            fetch(this.COCKTAILS_URL + searchValue)
                .then(response => response.json())
                .then(drinks => this.setState({drinks}))
        } catch (error) {
            console.log(error);
        }
    }

    handleSearchResult(value: string){
        this.setState({searchValue: value});
    }

    render() {
        return (
            <div style={rootStyle}>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <MasterView updateSearch={this.handleSearchResult}/>
                        </Route>  
                        <Route path="/Search">
                            <DetailView image={this.image} drinkTitle={this.drinkTitle} drinkRecipe={this.drinkRecipe}/>
                        </Route>
                        <Route path="/Random">
                            <DetailView image={this.image} drinkTitle={this.drinkTitle} drinkRecipe={this.drinkRecipe}/>
                        </Route>
                    </Switch>
            </div>
        )
    }      
}





const rootStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    background: '#F5FFC6',
    width: "100%",
    height: "100%"
}

export const Context = React.createContext('default');
export default Layout;