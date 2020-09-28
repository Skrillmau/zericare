import React from 'react';
import Styles from './titContent.module.css'

const TitContent = (props) => {
    let Style = props.contentType

    if (Style === 'txt'){
        Style = Styles.txt
    } else {
        Style = Styles.default
    }
    return (
        <div className={Styles.div}>
            <h1 className={Styles.title}>{props.title}</h1>
            <div className={Style}>{props.children}</div>
        </div>
    );
};

export default TitContent;