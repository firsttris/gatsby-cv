import * as React from 'react';

export interface Props {
  title: string;
  validity: string;
  cert_id:string;
  cert_url:string;
  sort_date:string;
  show:boolean;


}

export const Certification = (props: Props) => (
  <li className="mb-2 position-relative">
    <a href={props.cert_url} target="_blank" rel="noopener noreferrer" className="link-unstyled">
    <div className="resume-award-name">{props.title}</div>
    </a>
    <div className="resume-award-validity">{props.validity}</div>
  </li>
);
