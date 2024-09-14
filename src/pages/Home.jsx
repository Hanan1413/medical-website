import React from "react";
import Slider from "../components/slider/Slider";
import { infoData } from "../data/data";
import InfoSection from "../components/info/InfoSection";
import SectionsTitle from "../components/title/SectionsTitle";
import {services} from "../data/data";
import Help from "../components/help/Help";


const Home = () => {
  console.log(services)
  return (
    <div className="text-center">
      <Slider />
       
       <div>
       <div className="container">
        <div className="row">

       {infoData.map((info) =>(
        <InfoSection info={info} />
      ))}
        </div>
        </div>
      <SectionsTitle title="نحن دائمًا مستعدون لمساعدتك وعائلتك" descripton="نقدم لك خدماتنا بكل احترافية واهتمام لضمان راحتك وراحة عائلتك نحن هنا لدعمك في كل خطوة"/>
       
       <div className="container">
        <div className=" h-100 d-flex  flex-column flex-wrap flex-lg-nowrap flex-md-row col-12  gap-5">
        {services.map((service) =>(
        <Help  service={service}/>
      ))}
        </div>
       </div>
       


    
       </div>

    </div>
  );
};

export default Home;
