
import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import Buttons from './buttons';


interface Props {
    image: string,
    drinkTitle: string,
    drinkRecipe: string,
}

function DetailView(props: Props) {

function somethingHappens(){
    //route back to master view
}
    // test error boundry
    // const haha: any = null
    // console.log(haha.lol)
return (
        <div style={rootStyle}>
            <img style={imageStyle} src={props.image} alt=""/>
             <h2 >{props.drinkTitle}</h2>
             <p>{props.drinkRecipe}</p>
             <Link to="/">
                 <Buttons text="Back" handleClick={somethingHappens}/>
             </Link>
        </div>
    );

}

const rootStyle: CSSProperties = {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: "1",
}

const imageStyle: CSSProperties = {
    maxWidth: "10rem",
    borderRadius: "2rem",
    margin: "2rem 0",
}




export default DetailView;