import React from 'react'
import Fade from 'react-reveal/Fade'
import Style from './BannerImagen.module.css'

const BannerImagen = (props) => {
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

export default BannerImagen;