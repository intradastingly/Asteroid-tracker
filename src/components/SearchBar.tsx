import React, { ChangeEvent, Component, CSSProperties} from "react";
interface Props{
    value: string;
    onChange: (value: string) => void;
    dropDownList: any[];
}
interface State {}
class SearchBar extends Component<Props,State>  {

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(event.target.value)
    }

    render() {
        const dropDownList = this.props.dropDownList;
        console.log(dropDownList[0])
        return (
            <div>
                <input 
                    list="listid"
                    style={searchBox}
                    placeholder="Search"
                    value={this.props.value}
                    onChange={this.handleChange}
                />
                <datalist id='listid'>
                    {dropDownList.map((list) => (
                        <option label={list.strDrink} value={list.strDrink}/>
                    ))}
                </datalist>
            </div>
        );
    }
}


const searchBox: CSSProperties = {
    width: '12rem',
    borderRadius: '3rem',
    background: 'white',
    padding: '.5rem',
    outline: "none",
}

export default SearchBar;