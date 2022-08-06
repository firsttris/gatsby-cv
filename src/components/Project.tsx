import * as React from 'react';
import { AchievementList } from './AchievementList';
import { TechnologyList } from './TechnologyList';

const Paper = require('../../src/assets/images/backgrounds/paper.png');

export interface Props {
  title: string;
  role: string;
  url: string;
  company: string;
  from: string;
  to: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export const Project = (props: Props) => (
  <article className="resume-timeline-item position-relative pb-5">
    <div className="resume-timeline-item-header mb-2">
      <div className="d-flex flex-column flex-md-row">
        <h3 className="resume-position-title font-weight-bold mb-1">{props.title}</h3>
        <div className="resume-company-name ml-auto">{props.company}</div>
      </div>
      {props.role}
      <a href={props.url} rel="external nofollow" className="link-unstyled link-hover" target="_blank">{props.url}</a>
      {
        props.from.length > 0 &&
      <div className="resume-position-time">
        {props.from} - {props.to}{' '}
        <span
          style={{
            backgroundImage: `url(${Paper})`,
            color: 'white',
            padding: '0px 7px',
            borderRadius: '25px',
            float: 'right'
          }}
        >
          {props.location}
        </span>
      </div>
      }
    </div>
    <div className="resume-timeline-item-desc">
      { 
        props.description.trim().length > 0 &&
        <p>{props.description}</p>
      }
      <AchievementList achievements={props.achievements} />
      {
      props.technologies.filter(n => n.length > 0).length > 0 && 
      <TechnologyList technologies={props.technologies} />
      }
    </div>
  </article>
);
