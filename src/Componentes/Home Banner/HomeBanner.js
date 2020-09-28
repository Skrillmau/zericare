import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import styles from "./home.module.css";
import hBannerjson from "./hBanner.json";
import React from "react";
import Fade from 'react-reveal/Fade'
import VisibilitySensor from "react-visibility-sensor";

SwiperCore.use([Pagination, Autoplay]);
export default function HomeBanner(props) {
	var slides = [];
	Object.keys(hBannerjson.slides).forEach(function (key) {
		slides.push(hBannerjson.slides[key]);
	});

	return (
		<div className={styles.main}>
			<Swiper pagination={{ clickable: true }} autoplay={{ delay: 4000 }} loop="true">
				<img className={styles.logo} src="" alt=" Logo PHL Banner" />
				{slides.map((item, i) => {
					return (
						<SwiperSlide key={i}>
                            <img src=
                            "https://image.freepik.com/vector-gratis/fondo-elegante-textura-blanca_23-2148438405.jpg" style={{ width: "100%" }} alt={"imagen"} />
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

