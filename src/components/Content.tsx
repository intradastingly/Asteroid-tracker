import React, {CSSProperties} from 'react'
import PicOfTheDay from './picOfTheDay';
import ImageSection from './ImageSection';


function Content() {
    return (
        <div style={rootStyle}>
            <PicOfTheDay image={'./assets/galaxy.jpg'}/>
            <ImageSection />
        </div>
    )
}


const rootStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    flex: "1",
}
export default Content;