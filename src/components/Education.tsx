import * as React from 'react';

export interface Props {
  title: string;
  uni: string;
  from: string;
  to: string;
}

export const Education = (props: Props) => (
  <li className="mb-2">
    <div className="resume-degree font-weight-bold">{props.title}</div>
    <div className="resume-degree-org">{props.uni}</div>
    <div className="resume-degree-time">
      {props.from} - {props.to}
    </div>
  </li>
);
