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
        return (
            <div>
                <input 
                    list="listid"
                    style={searchBox}
                    placeholder="Drink"
                    value={this.props.value}
                    onChange={this.handleChange}
                />
                <datalist id='listid' style={dropDownListStyle}>
                    {dropDownList.map((list, i) => (
                        <option 
                            key={i}
                            label={list.strDrink} 
                            value={list.strDrink}
                        />
                    ))}
                </datalist>
            </div>
        );
    }
}

const searchBox: CSSProperties = {
    width: '16rem',
    height: '1.5rem',
    background: 'white',
    padding: '.5rem',
    fontSize: '1.5rem',
    border: 'none',
    borderRadius: '.5rem',
    backgroundImage:'none',
    boxShadow: 'none',
    marginBottom: '2rem'
}

const dropDownListStyle: CSSProperties = {
    position: 'fixed',
    border: 'none',
    borderRadius: '.5rem',
    backgroundImage:'none',
    boxShadow: 'none',
    marginBottom: '2rem'
}


export default SearchBar;