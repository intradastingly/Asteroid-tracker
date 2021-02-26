import React, {Component, CSSProperties} from 'react'
interface Props {

}
interface State {
    photos: []
}
class Content extends Component<Props,State> {

    state: State = {
        photos: []
    }

    private readonly API_KEY = '1';
    private readonly COCKTAILS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s';

    async componentDidMount() {
        try {
            fetch(this.COCKTAILS_URL + this.API_KEY)
                .then(response => response.json())
                .then(photoData => this.setState({photos: photoData}))
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        console.log(this.state.photos)
        return (
            <div style={rootStyle}>
                hej
            </div>
        )  
    }
}


const rootStyle: CSSProperties = {
    display: "flex",
   
}
export default Content;