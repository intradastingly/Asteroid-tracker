import React, { ChangeEvent, Component, CSSProperties } from "react";

interface Props{
    onChange: (value: string) => void;
}
interface State{
    value:string;
}


class SearchBar extends Component<Props,State>  {

    state:State = {
        value: ''
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({value: event.target.value})
    }

    componentDidUpdate(){
        const {onChange} = this.props;
        onChange(this.state.value);
    }

    render() {
        return (
            <input 
                style={searchBox}
                placeholder="Search"
                value={this.state.value}
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