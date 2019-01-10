import React from 'react';

const Project = (props) => (
    <div className='project-container'>
        <div className='project__overlay'>
            <a href={props.projectUrl} target="_blank">
                <img className='project-image' src={props.projectImage} />
                <div className="hover">
                    <div className="text">
                        View App
                    </div>
                </div>
            </a>
        </div>
        <h3 className='project-title'>{props.projectTitle}</h3>
        <p className='project-description'>{props.projectDescription}</p>
        <h5 className='project-subtitle'>Technologies:</h5>
        <p className='project-tech'>{props.projectTech}</p>
    </div>
)

export default Project;