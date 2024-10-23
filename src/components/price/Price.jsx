import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Ensure FontAwesomeIcon is imported
import { Button } from "react-bootstrap";

const Price = ({ itemPrice }) => {
  const { title, price, icon, points } = itemPrice;
  return (
    <div
      className="text-color  d-flex gap-4 flex-column  p-5 "
      style={{ backgroundColor: "#fff", height: "80%" }}
    >
      <FontAwesomeIcon icon={icon} size="3x" style={{ color: "#1A76D1" }} />{" "}
      {/* Render icon correctly */}
      <h4 className="dark-text blue-text"> {title}</h4>
      <p className="m-0">{price}</p>
      <ul>
        {points.map((item) => (
          <li  id={ item.id} className="d-flex gap-3 text-right  justify-content-end mb-3">
            <li className="m-0 fs-6 ">{item.text} </li>
            <FontAwesomeIcon
              icon={item.icon}
              className={item.isCorrect ? "blue-text" : "gray-text"}
            />
          </li>
        ))}
      </ul>
      {/* <p>{text}</p> */}
      <Button
        className="pt-1 pb-3 fs-5 "
        variant="primary"
        as="input"
        type="button"
        value="احجز موعد الأن "
      />{" "}
    </div>
  );
};

export default Price;
