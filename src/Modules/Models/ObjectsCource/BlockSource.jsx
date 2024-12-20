import { useState } from 'react';
import '../../ModulesCss/ObjectsCource/ObjectCource.css';
import javaPng from '../../../assets/java.png';
function Image({ link, id }) {
    return <img src={link} alt="" id={id} />;
}
function Description({ text, id }) {
    return <p id={id}>{text}</p>;
}
function Title({ name, id }) {
    return <h1 id={id}>{name}</h1>;
}
function TakeCource({text, id}) {
    return <button id={id}>{text}</button>
}
function BlockCource({linkImg, imgID, text, textID, title, titleID, buttText, buttID}) {
    return (
        <div className="container">
            <Image link={linkImg} id={imgID} />
            <div className="contText">
                <Title id={titleID} name={title} />
                <Description
                    id={textID}
                    text={text}
                />
                <TakeCource id={buttID} text={buttText}/>
            </div>
        </div>
    );
}
export default BlockCource;

// Далее нужно создать по аналогии еще 2 блока для языков python и c++ и сверстать новую страничку, где это все будет распологаться