import * as React from 'react';

interface Props {
  skills: string[];
}

export const OtherSkillList = (props: Props) => (
  <div className="resume-skill-item">
    <h4 className="resume-skills-cat font-weight-bold">Others</h4>
    <ul className="list-inline">
      {props.skills.map((skill: string, index: number) => (
        <li className="list-inline-item" key={index}>
          <span className="badge badge-light">{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);
