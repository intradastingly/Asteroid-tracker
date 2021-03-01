import React, {Component, CSSProperties} from 'react';
import DetailView from './DetailView';
import MasterView from './MasterView';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';


class Layout extends Component { 

    image = "../assets/drink.png";
    drinkTitle = 'Bloody Mary'  
    drinkRecipe = "Only alcohol in this drink"

    getSearchResult(value: string){
        console.log(value)
    }

    render() {
        return (
            <div style={rootStyle}>
                    <Header />
                    <Switch>
                        <Context.Provider value={this.getSearchResult}>
                            <Route exact path="/" component={MasterView}/>
                        </Context.Provider>
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


const Context = React.createContext('default');
export Context; 

const rootStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    background: '#F5FFC6',
    width: "100%",
    height: "100%"
}

export default Layout;