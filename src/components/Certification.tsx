import * as React from 'react';

export interface Props {
  title: string;
  description: string;
}

export const Certification = (props: Props) => (
  <li className="mb-2 position-relative">
    <div className="resume-award-name">{props.title}</div>
    <div className="resume-award-desc">{props.description}</div>
  </li>
);
