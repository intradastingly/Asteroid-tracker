import React, { ChangeEvent, Component, CSSProperties} from "react";
interface Props{
    value: string;
    onChange: (value: string) => void;
}
interface State {}
class SearchBar extends Component<Props,State>  {

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(event.target.value)
    }

    render() {
        return (
            <input 
                style={searchBox}
                placeholder="Search"
                value={this.props.value}
                onChange={this.handleChange}
            />
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