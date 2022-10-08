import * as React from 'react';
import { OutboundLink } from "gatsby-plugin-google-gtag"

export interface Props {
  github: string;
  website: string;
}


export const SocialMedia = (props: Props) => (
  <div className="secondary-info ml-md-auto mt-2">
    <ul className="list-unstyled">
      <li className="mb-2">
        <OutboundLink href={`http://${props.github}`} target="_blank" rel="noopener noreferrer" className="link-unstyled">
          <span className="fa-container text-center mr-2">
            <i className="fab fa-github fa-fw"/>
          </span>
          {props.github}
        </OutboundLink>
      </li>
      <li className="mb-2">
        <OutboundLink href={`http://${props.website}`} target="_blank" rel="noopener noreferrer" className="link-unstyled">
          <span className="fa-container text-center mr-2">
            <i className="fas fa-globe fa-fw"/>
          </span>
          {props.website}
        </OutboundLink>
      </li>
    </ul>
  </div>
);
