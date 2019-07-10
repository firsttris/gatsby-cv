import * as React from 'react';

const Paper = require('../../src/assets/images/backgrounds/paper.png');

export interface Props {
  name: string;
  xpInPercentage: string;
}

export const ResumeSkill = (props: Props) => (
  <li className="mb-2">
    <div className="resume-skill-name">
      <a
        href={`http://google.com/search?q=${props.name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="link-unstyled"
      >
        {props.name}
      </a>
    </div>
    <div className="progress resume-progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: props.xpInPercentage, backgroundImage: `url(${Paper})` }}
      />
    </div>
  </li>
);
