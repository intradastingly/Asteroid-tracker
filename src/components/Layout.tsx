import React, {Component, CSSProperties} from 'react';
import DetailView from './DetailView';
import MasterView from './MasterView';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';



interface State {
    drink: any[]
}
interface Props {}


class Layout extends Component<Props,State> { 
    state: State = {
        drink: []
    }
   
    image = "../assets/drink.png";
    drinkTitle = 'Bloody Mary'  
    drinkRecipe = "Only alcohol in this drink"

    displayDrink = (value: []) => {
        this.setState({drink: value});
    }

    render() {
        console.log(this.state)
        return (
            <div style={rootStyle}>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <MasterView drink={this.state.drink} onSearchDrink={this.displayDrink}/>
                    </Route>  
                    <Route path="/search">
                        <DetailView image={this.image} drinkTitle={this.drinkTitle} drinkRecipe={this.drinkRecipe}/>
                    </Route>
                    <Route path="/random">
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

export default Layout;