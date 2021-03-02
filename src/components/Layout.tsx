import React, {Component, CSSProperties} from 'react';
import DetailView from './DetailView';
import MasterView from './MasterView';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from './errorBoundary';




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
        // if(this.drinkTitle) {
        //     const nullbull: any = null;
        //     console.log(nullbull.azaz)
        // }
        return (
            <div style={rootStyle}>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <ErrorBoundary>
                            <MasterView drink={this.state.drink} onSearchDrink={this.displayDrink}/>
                        </ErrorBoundary>
                    </Route>  
                    <Route path="/search">
                        <ErrorBoundary>
                            <DetailView image={this.image} drinkTitle={this.drinkTitle} drinkRecipe={this.drinkRecipe}/>
                        </ErrorBoundary>
                    </Route>
                    <Route path="/random">
                        <ErrorBoundary>
                            <DetailView image={this.image} drinkTitle={this.drinkTitle} drinkRecipe={this.drinkRecipe}/>
                        </ErrorBoundary>
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