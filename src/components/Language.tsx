import * as React from 'react';

export interface Props {
  language: string;
  skill: string;
}

export const Language = (props: Props) => (
  <li className="mb-2">
    <span className="resume-lang-name font-weight-bold">{props.language}</span>{' '}
    <small className="text-muted font-weight-normal">{props.skill}</small>
  </li>
);
