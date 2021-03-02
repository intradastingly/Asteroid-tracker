import React, {Component, CSSProperties} from 'react';
import DetailView from './DetailView';
import MasterView from './MasterView';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
// import { Drinks } from './MasterView'



interface State {
    drink: any[],
}

interface Props {}
class Layout extends Component<Props,State> { 
    state: State = {
        drink: [],

    }

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
                        <MasterView drink={this.state.drink} onSearchDrink={this.displayDrink}/>
                    </Route>  
                    <Route path="/search">
                        {drinkMap.map((data)=> (
                            <DetailView 
                                image={data.strDrinkThumb + "/preview"} 
                                drinkTitle={data.strDrink} 
                                drinkRecipe={data.strInstructions} 
                            />
                        ))}
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