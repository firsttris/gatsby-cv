import * as React from 'react';
import { getTranslatedLabel } from './../translations/provider';

interface Props {
  achievements: string[];
}

export const AchievementList = (props: Props) => (
  <div>
    <h4 className="resume-timeline-item-desc-heading font-weight-bold">{getTranslatedLabel('ACHIEVEMENTS')}</h4>
    <ul style={{ marginLeft: '17px' }}>
      {props.achievements.map((task: string, index: number) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </div>
);
