import React from "react";
import Carousel from "react-bootstrap/Carousel";

import ExampleCarouselImage from "../carousel/ExampleCarouselImage";
import { Button } from "react-bootstrap";
import slide1 from "../../assets/slider.webp";
import slide2 from "../../assets/slider2.webp";
import slide3 from "../../assets/slider3.webp";
import styles from './Slider.module.css';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item className={styles.carouselItem}   >
        <ExampleCarouselImage text="First slide" src={slide1} alt="side1" />
        <Carousel.Caption className={ styles.carouselCaptionCustom  } >
          <div className={styles.animatedText}>
          <h1 className="mb-4 header-font"  >نحن نقدم خدمة طبية يمكنك الوثوق بها</h1>
          <p className="mb-5 headr-text">تمتع بأفضل العلاجات والخدمات الطبية التي تلبي احتياجاتك وتوفر لك الراحة.</p>
          <div className="d-flex gap-4  text-center justify-content-center align-items-center">
            
          <Button value="اعرف المزيد" variant="primary" as="input" type="button" />
           <Button  variant="dark">احجز موعد الأن</Button>
          </div>




          </div>
          <div>
          </div>

      
        </Carousel.Caption>


      </Carousel.Item>
      
      <Carousel.Item>
        <ExampleCarouselImage
          text="Second slide"
          src={slide2}
          alt="Second slide"
        />
        <Carousel.Caption  className={styles.carouselCaptionCustom}>
          <div className={styles.animatedText}>
          <h1  className="header-font"> خدمة طبية متميزة بأيدي خبراء</h1>
          <p  className="headr-text mb-5">رعاية طبية فائقة الجودة لضمان راحتك وسلامتك.</p>
          <div className="d-flex gap-4 mr-8 text-center justify-content-center align-items-center">
            
            <Button value="اعرف المزيد" variant="primary" as="input" type="button" />
             <Button  variant="dark">احجز موعد الأن</Button>
            </div>
          </div>
       

        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage
          text="Third slide"
          src={slide3}
          alt="Third slide"
        />
        <Carousel.Caption className={styles.carouselCaptionCustom}>
        <div className={styles.animatedText}>
        <h3  className="header-font">   تجربة طبية متكاملة تقدم لك </h3>
        <p  className="headr-text mb-5">تجربة طبية استثنائية مع أفضل الأطباء والمعدات.</p>
        <div className="d-flex gap-4 mr-8 text-center justify-content-center align-items-center">
            
            <Button value="اعرف المزيد" variant="primary" as="input" type="button" />
             <Button  variant="dark">احجز موعد الأن</Button>
            </div>
          
          </div>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
