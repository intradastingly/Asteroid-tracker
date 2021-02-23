import React from 'react'
import PicOfTheDay from './picOfTheDay';
import ImageSection from './ImageSection';


function Content() {
    return (
        <div>
            <PicOfTheDay image={'./assets/galaxy.jpg'}/>
            <ImageSection />
        </div>
    )
}

export default Content;