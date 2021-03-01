import React, {Component, CSSProperties} from 'react';
import SearchBar from './SearchBar';
import StartPageImage from "./startPageImage";
import Buttons from "./buttons";
import { Link } from "react-router-dom"
interface Props {
   updateSearch: (value:string)  => void;
}
interface State {
    searchValue: string;
}
  class MasterView extends Component<Props,State> {

    somethingHappens() {
        console.log('SEARCH FOR DRINK')
    }

    somethingElseHappens(){
        console.log("RANDOM DRINK")
    }

    render() {
        return (
            <div style={rootStyle}>
                <StartPageImage />
                <SearchBar onChange={this.props.updateSearch}/>
                <div style={buttonFlex}>
                    <Link to="/Search">
                        <Buttons text="Search" handleClick={this.somethingHappens}/>
                    </Link>
                    <Link to="/Random">
                        <Buttons text="Random" handleClick={this.somethingElseHappens}/>
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

export default MasterView;