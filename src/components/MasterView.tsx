import React, {Component, CSSProperties} from 'react';
import SearchBar from './SearchBar';
import StartPageImage from "./startPageImage";
import Buttons from "./buttons";
import { Link } from "react-router-dom"


interface Props {
    onChange: (value:string)  => void;
}
interface State {
    searchValue: string;
}

// handleNewSearchValue = (value: string) => {
//     this.setState({ searchValue: value });
//   };
  
  class MasterView extends Component<Props,State> {

    state: State = {
        searchValue: ''
      }

    somethingHappens() {
        console.log('SEARCH FOR DRINK')
    }

    somethingElseHappens(){
        console.log("RANDOM DRINK")
    }

    getValue = (value: string) => {
        // this.setState({ searchValue: value })
        // const {onChange} = this.props
        // onChange(this.state.searchValue)
        console.log(value)
        //this.props.parentCallback(value)
    }
 
    render() {
        return (
            <div style={rootStyle}>
                <StartPageImage />
                <SearchBar value={this.getValue}/>
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