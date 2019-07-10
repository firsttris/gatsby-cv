import * as React from 'react';

const Paper = require('../../src/assets/images/backgrounds/paper.png');

interface Props {
  title: string;
  skills: string[];
}

export const OtherSkillList = (props: Props) => (
  <div className="resume-skill-item">
    <h4 className="resume-skills-cat font-weight-bold">{props.title}</h4>
    <ul className="list-inline">
      {props.skills.map((skill: string, index: number) => (
        <li className="list-inline-item" key={index}>
          <span className="badge" style={{ backgroundImage: `url(${Paper})`, color: 'white' }}>
            <a
              href={`http://google.com/search?q=${skill}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-unstyled"
            >
              {skill}
            </a>
          </span>
        </li>
      ))}
    </ul>
  </div>
);
