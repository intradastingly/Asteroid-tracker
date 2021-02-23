import React, {Component, CSSProperties} from 'react'
import PicOfTheDay from './picOfTheDay';
import ImageSection from './ImageSection';



interface Props {
  
}
interface State {
    photo: []
}
class Content extends Component<Props,State> {

    constructor(props: Props) {
        super(props) 
    }

    state: State = {
        photo: []
    }

    private readonly API_KEY = 'NW1Na7xNlbyBru0G2316TY2b2wkLoDTj2LvXJzq6';
    private readonly NASA_URL = 'https://images-api.nasa.gov/search?q=';

   

    async fetchImagesFromApi() {
        try {
            const url = this.NASA_URL + "galaxies";

        const response = await fetch(url, {
            headers: { 'Authorization': this.API_KEY }
        });

        const result: any= await response.json();
        this.setState({ photo: result.photo})

        } catch (error: unknown) {
        console.error(error);
        }
    }

    render() {
        console.log(this.state)
        return (
            <div style={rootStyle}>
                <PicOfTheDay image={'./assets/galaxy.jpg'}/>
                <ImageSection />
            </div>
        )  
    }
}


const rootStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    flex: "1",
}
export default Content;