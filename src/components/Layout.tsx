import React, {CSSProperties} from 'react';
import DetailView from './DetailView';
import MasterView from './MasterView';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';



function Layout() { 

    // api image
    const image = "../assets/drink.png";

    //api drink title
    const drinkTitle = 'Bloody Mary'  

    // api drink recipe
    const drinkRecipe = "Only alcohol in this drink"
    return (
        <div style={rootStyle}>
                <Header />
            <Switch>
                <Route exact path="/" component={MasterView}/>
                <Route path="/Search">
                    <DetailView image={image} drinkTitle={drinkTitle} drinkRecipe={drinkRecipe}/>
                </Route>
                <Route path="/Random">
                    <DetailView image={image} drinkTitle={drinkTitle} drinkRecipe={drinkRecipe}/>
                </Route>
            </Switch>
        </div>
    )
}


const rootStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    background: '#F5FFC6',
    width: "100%",
    height: "100%"
}

export default Layout;