import * as React from 'react';
import { OutboundLink } from "gatsby-plugin-google-gtag"

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
    <OutboundLink href={props.cert_url} target="_blank" rel="noopener noreferrer" className="link-unstyled">
    <div className="resume-award-name">{props.title}</div>
    </OutboundLink>
    <div className="resume-award-validity">{props.validity}</div>
  </li>
);
