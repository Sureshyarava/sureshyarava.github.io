import React from 'react';
import '../Css/MacOSTerminalWindow.css'; // Import CSS file for styling
import Project from './Project.jsx';
import Education from './Education.jsx';
import WorkExperience from './WorkExperience.jsx';
import Skills from './Skills.jsx';
import Publication from './Publication.jsx';
import Achievements from './Achievments.jsx';
import Educationlist from '../Json Files/EducationList.json'
import Experiences from '../Json Files/Experiences.json'
import SkillList from '../Json Files/SkillList.json'
import Publications from '../Json Files/Publications.json'
import ProjectList from '../Json Files/ProjectList.json'


const TerminalLine = ({ heading }) => {
    return (
      <div className="terminal-line">
        <span className="username">@sureshyarava/</span>
        <span className="heading">{heading}%</span>
      </div>
    );
  };

const MacOSTerminalWindow = () => {
    return (
        <div className="macos-terminal-window">
            <div className="macos-terminal-header">
                <div className="button close"></div>
                <div className="button minimize"></div>
                <div className="button maximize"></div>
            </div>
            <div className="scrollable-content">
            <TerminalLine id="work_experience" heading="WorkExperience" />
                <div className="center" >
                  {Experiences.map((experience, index) => (
                      <WorkExperience 
                        key = {index}
                        jobTitle={experience.jobTitle}
                        companyName={experience.companyName}
                        datesEmployment={experience.datesEmployment}
                        responsibilities={experience.responsibilities}
                        achievements={experience.achievements}
                        skillsUtilized={experience.skillsUtilized}
                        projects={experience.projects}
                    />
                    ))}
                </div>
                <TerminalLine id="projects" heading="Projects" />
                <div className="center">
                {ProjectList.map((project, index) => (
                <Project
                    key={index}
                    projectName={project.projectName}
                    projectURL={project.projectURL}
                    projectDescription={project.projectDescription}
                    technologiesUsed={project.technologiesUsed.join(", ")}
                />
                ))}
                </div>
                <TerminalLine id="education" heading="Education" />
                <div className="center">
                  {Educationlist.map((education , index) => (
                    <Education 
                        key = {index}
                        heading = {education.heading}
                        degree={education.degree} 
                        major={education.major}
                        gpa={education.gpa} 
                        outOf={education.outOf} 
                        collegeName={education.collegeName}
                        startTime = {education.startTime}
                        endTime = {education.endTime}
                        courses={education.courses}
                    />
                  ))}
                </div>
                <TerminalLine id="skills" heading="Skills" />
                <div className="center">
                {SkillList.map((skill, index) => (
                <Skills key={index} skill={skill} />
            ))}
                </div >
                <TerminalLine id="publications" heading="Publications" />
                <div className="center"> 
                {Publications.map((publication,index) => (
                <Publication
                      key = {publication.index}
                      title={publication.title}
                      authors={publication.authors}
                      journalConference={publication.journalConference}
                      doi={publication.doi}
                      description={publication.description}
                      keywords={publication.keywords}
                      youtubeUrl={publication.youtubeUrl}
                  />
                  ))}
                </div>
                <TerminalLine id="achievements" heading="Achievements" />
                <div className="center">
                <Achievements />
                </div>
            </div>
        </div>
    );
}

export default MacOSTerminalWindow;