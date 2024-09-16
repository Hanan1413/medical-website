import React from "react";
import Slider from "../components/slider/Slider";
import { infoData } from "../data/data";
import InfoSection from "../components/info/InfoSection";
import SectionsTitle from "../components/title/SectionsTitle";
import { services } from "../data/data";
import Help from "../components/help/Help";
import ImageVideo from "../components/image-video/ImageVideo";
import { prices } from "../data/data";
import Price from "../components/price/Price";

const Home = () => {
  console.log(prices);
  return (
    <div className="text-center">
      <Slider />

      <div>
        <div className="container">
          <div className="row">
            {infoData.map((info) => (
              <InfoSection  key={info.id} info={info} />
            ))}
          </div>
          <SectionsTitle
            title="نحن دائمًا مستعدون لمساعدتك وعائلتك"
            description="نقدم لك خدماتنا بكل احترافية واهتمام لضمان راحتك وراحة عائلتك نحن هنا لدعمك في كل خطوة"
          />

          <div className="container">
            <div className=" h-100 d-flex  flex-column flex-wrap flex-lg-nowrap flex-md-row col-12  gap-5">
              {services.map((service) => (
                <Help key={service.id} service={service} />
              ))}
            </div>
          </div>

          <SectionsTitle
            title=" نقدم خدمات متنوعة لتحسين صحتك"
            description="نحن ملتزمون بتقديم أفضل الخدمات لتحسين صحتك ورفاهيتك. من خلال فريقنا المتخصص والمرافق الحديثة،"
          />

          <ImageVideo />

          <SectionsTitle
            title=" نقدم لك أفضل علاج بأفضل الأسعار المناسبة"
            description="نحن ملتزمون بتقديم خدمات متميزة تضمن رضاك التام."
          />


        </div>
                 
        <div className="d-flex  flex-column flex-md-row justify-content-center h-100 gap-5 col-12 p-5  " style={{ backgroundColor: "#f9f9f9", height:'400px' }}
          >
          {prices.map(itemPrice => (
            <Price  key={itemPrice.id} itemPrice={itemPrice} />
          ))}
          </div>
         
         <div className="container">
          
         <SectionsTitle  title="نحن دائماً  مستعدون لخدمتك احجز موعد"
          description="احجز موعدك للحصول على أفضل استشارة "
          />
         </div>

      </div>
    </div>
  );
};

export default Home;
