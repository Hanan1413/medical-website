import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Help.module.css";
const Help = ({ service }) => {
  const { title, description, icon } = service;
  return (
    <div className="d-flex flex-column mt-5 mb-5 md-p-5 ">
      <FontAwesomeIcon
        icon={service.icon}
        className={styles.roundBackground}
        size="2x"
      />

      <h3 className="m-4">{title}</h3>
      <p className="w-md-50 m-auto ">{description}</p>
    </div>
  );
};

export default Help;
