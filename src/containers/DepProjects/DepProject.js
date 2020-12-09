import React, {useContext} from "react";
import "./DepProjects.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { depProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function DepProject() {
  const {isDark} = useContext(StyleContext)
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

  if(depProjects.viewProjects){
      return (
          <div id="experience">
              <Fade bottom duration={1000} distance="20px">
              <div className="experience-container" id="workExperience">
                  <div>
                      <h1 className="experience-heading">Deployed Projects</h1>
                      <div className="experience-cards-div">
                      {depProjects.experience.map((card) => {
                          return (
                              <ExperienceCard
                                  isDark={isDark}
                                  onClick={() => {openInNewTab(card.link)}}
                                  cardInfo={{
                                      company: card.company,
                                      desc: card.desc,
                                      companylogo: card.companylogo,
                                      role: card.role
                                  }}
                              />
                          );
                      })}
                      </div>
                  </div>
              </div>
              </Fade>
          </div>
      );
  }
  return null;
}
