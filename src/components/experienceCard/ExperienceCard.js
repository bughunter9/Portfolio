import React, { useState, useEffect, createRef } from "react";
import "./ExperienceCard.css";
import ColorThief from "colorthief";

export default function ExperienceCard({ cardInfo, isDark, ...props }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getRandomColorArray() {
    return Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets.map((item) => (
          <li className={isDark ? "subTitle dark-mode-text" : "subTitle"}>
            {item}
          </li>
        ))
      : null;
  };

  useEffect(() => {
    // Generate 6 random colors
    const colors = Array.from({ length: 6 }, getRandomColorArray);
    setColorArrays(colors);
  }, []);

  return (
    <div
      className={isDark ? "experience-card-dark" : "experience-card"}
      onClick={props.onClick}
    >
      <div
        style={{ background: rgb(colorArrays[0]) }}
        className="experience-banner"
      >
        {/* <div className="experience-blurred_div"></div> */}
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        {/* <img onLoad={() => getColorArrays()}/> */}
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-link dark-mode-text"
              : "experience-text-link"
          }
        >
          {cardInfo.link}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
