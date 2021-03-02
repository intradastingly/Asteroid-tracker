import React, {Component, CSSProperties} from 'react';
import DetailView from './DetailView';
import MasterView from './MasterView';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from './errorBoundary';
interface State {
    drink: any[],
}

interface Props {}
class Layout extends Component<Props,State> { 
    state: State = {
        drink: [],
    }

    image = "../assets/drink.png";
    drinkTitle = 'Bloody Mary'  
    drinkRecipe = "Only alcohol in this drink"

    displayDrink = (value: []) => {
        this.setState({drink: value});
    }
 
    render() {
        const drinkMap = this.state.drink;
        console.log(drinkMap)
        return (
            <div style={rootStyle}>
                <Header />
                <Switch>
                    <Route exact path="/">
                        {/* <ErrorBoundary> */}
                            <MasterView drink={this.state.drink} onSearchDrink={this.displayDrink}/>
                        {/* </ErrorBoundary> */}
                    </Route>  
                    <Route path="/search">
                        <ErrorBoundary>
                            {drinkMap.map((data)=> (
                                <DetailView 
                                    image={data.strDrinkThumb + "/preview"} 
                                    drinkTitle={data.strDrink} 
                                    drinkRecipe={data.strInstructions} 
                                    ingredients1={data.strIngredient1}
                                    ingredients2={data.strIngredient2}
                                    ingredients3={data.strIngredient3}
                                    ingredients4={data.strIngredient4}
                                    ingredients5={data.strIngredient5}
                                />
                            ))}
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
    background: '#915460',
    width: "100%",
    height: "100%"
}

export default Layout;