import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileHeader from './MobileHeader';
import Project from './Project';
import projectList from '../data/ProjectList';
import helpers from '../utility/utils';

const Projects = () => (
    <div className='projects-container'>
        <div className='desktop-header-container'><Header /></div>
        <div className='mobile-header-container'><MobileHeader /></div>
        <div onClick={helpers.navOutsideClick}>
            <h1 className='projects-title'>Here is some of my recent work.</h1>
            <div className='projects'>
                {
                    projectList.map((project) => <Project
                        key={project.name}
                        projectImage={project.image}
                        projectTitle={project.name}
                        projectDescription={project.description}
                        projectTech={project.technologies}
                        projectUrl={project.url}
                        projectGithub={project.github}
                    />)
                }
            </div>
        </div>
        <Footer />
    </div>
)

export default Projects;