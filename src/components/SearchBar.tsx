import React, { ChangeEvent, Component, CSSProperties } from "react";
interface Props {
   value: string;
   onChange: (value: string) => void;
   dropDownList: any[];
}
interface State {}
class SearchBar extends Component<Props, State> {
   handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      this.props.onChange(event.target.value);
   };

   render() {
      const dropDownList = this.props.dropDownList;
      return (
         <div>
            <input
               list="listid"
               style={searchBox}
               placeholder="Drink"
               value={this.props.value}
               onChange={this.handleChange}
            />
            <datalist id="listid" style={dropDownListStyle}>
               {dropDownList.map((list, i) => (
                  <option key={i} label={list.strDrink} value={list.strDrink} />
               ))}
            </datalist>
         </div>
      );
   }
}

const searchBox: CSSProperties = {
   maxWidth: "12rem",
//    minWidth: "8rem",
   height: "1.5rem",
   background: "white",
   padding: ".5rem",
   fontSize: "1.5rem",
   border: "none",
   borderRadius: ".5rem",
   marginBottom: "2rem",
//    backgroundImage: "none", DEFAULT
//    boxShadow: "none", DEFAULT
};

const dropDownListStyle: CSSProperties = {
   position: "fixed",
   border: "none",
   borderRadius: ".5rem",
   marginBottom: "2rem",
//    backgroundImage: "none", DEFAULT
//    boxShadow: "none", DEFAULT
};

export default SearchBar;
