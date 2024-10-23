import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceItem = ({ treatment }) => {
  const { service, description, icon } = treatment;
  return (
    <div className="p-5 service-item d-flex flex-column  ">
      <div className="d-flex justify-content-start gap-3 mb-4">

        <h4 className="dark-text">{service}</h4>
        <FontAwesomeIcon className="fa-2xl blue-text"  icon={icon} />

      </div>
      <p className="fs-7">{description}</p>
    </div>
  );
};

export default ServiceItem;
