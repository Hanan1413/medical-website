import React from "react";
import { treatments } from "../../data/data";
import ServiceItem from "./ServiceItem";

const ServicesPage = () => {
  return (
    <div className="row mt-5 text-right container m-auto ">
      {treatments.map((treatment) => (
        <div  key={treatment.id} className="col-12 col-md-6 col-lg-4 mb-4">
          <ServiceItem  treatment={treatment} />
        </div>
      ))}
    </div>
  );
};

export default ServicesPage;
