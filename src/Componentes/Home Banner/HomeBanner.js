import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import styles from "./home.module.css";
import React from "react";
import Fade from 'react-reveal/Fade'
import banner1 from '../../assets/pexels-anna-shvets-3683074.jpg'
import banner2 from '../../assets/pexels-miguel-á-padriñán-806427.jpg'
import banner3 from '../../assets/banner3.jpg'

SwiperCore.use([Pagination, Autoplay]);
export default function HomeBanner(props) {
	var slides = [{path:banner1,text:"Somos una forma plataforma \n que unifica la salud en Colombia"},{path:banner2, text:"Somos una compañía \n comprometida con la salud, \n de todos nuestros clientes \n "},{path:banner3, text:"Revolucionamos la forma de cuidar  \n  de ti y tu familia"}];
	
	return (
		<div className={styles.main}>
			<Swiper pagination={{ clickable: true }} autoplay={{ delay: 4000 }} loop="true">
				{slides.map((item, i) => {
                    console.log(item.path);
					return (
						<SwiperSlide key={i}>
                            <img src=
                            {item.path} style={{ width: "100%"}} alt={"imagen"} height="830px"/>
							<div className={styles.slideTxt}>
								{item.text.split("\n").map((line) => (
									<p className={styles.slideP}><Fade  bottom>{line}</Fade></p>
									
								))}
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

