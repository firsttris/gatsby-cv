import * as React from 'react';
import { Props as Skill, ResumeSkill } from './ResumeSkill';

interface Props {
  title: string;
  skills: Skill[];
}

export const ResumeSkillList = (props: Props) => (
  <div className="resume-skill-item">
    <h4 className="resume-skills-cat font-weight-bold">{props.title}</h4>
    <ul className="list-unstyled mb-4">
      {props.skills.map((skill: Skill, index: number) => (
        <ResumeSkill key={index} name={skill.name} xpInPercentage={skill.xpInPercentage} />
      ))}
    </ul>
  </div>
);