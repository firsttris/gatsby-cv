import * as React from 'react';

export interface Props {
  name: string;
  xpInPercentage: string;
}

export const ResumeSkill = (props: Props) => (
  <li className="mb-2">
    <div className="resume-skill-name">{props.name}</div>
    <div className="progress resume-progress">
      <div
        className="progress-bar theme-progress-bar-dark"
        role="progressbar"
        style={{ width: props.xpInPercentage }}
      />
    </div>
  </li>
);
