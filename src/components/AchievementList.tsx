import * as React from 'react';

interface Props {
  achievements: string[];
}

export const AchievementList = (props: Props) => (
  <div>
    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
    <ul>
      {props.achievements.map((task: string, index: number) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </div>
);
