import React from 'react'
import Fade from 'react-reveal/Fade'
import Style from './BannerText.module.css'

const BannerText = (props) => {
    return (
                <div className={Style.div}>
                    <div className={Style.i1}>
                        <Fade  delay={400}>
                            <h1 className={Style.title}>
                                {props.title}
                            </h1>
                        </Fade>
                    </div>
                    <div className={Style.i2}>
                        <Fade  delay={400}>
                            <p className={Style.txt}>{props.children}</p>
                        </Fade>
                    </div>
                </div>
    );
};

export default BannerText;