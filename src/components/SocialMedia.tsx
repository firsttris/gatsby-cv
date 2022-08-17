import * as React from 'react';
import { OutboundLink } from "gatsby-plugin-google-gtag"

export interface Props {
  github: string;
  website: string;
}

const iconsStyle = {
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '0.125rem',
  padding: '2px'
};

export const SocialMedia = (props: Props) => (
  <div className="secondary-info ml-md-auto mt-2">
    <ul className="resume-social list-unstyled">
      <li className="mb-3">
        <OutboundLink href={`http://${props.github}`} target="_blank" rel="noopener noreferrer" className="link-unstyled">
          <span className="fa-container text-center mr-2">
            <i className="fab fa-github fa-fw" style={iconsStyle} />
          </span>
          {props.github}
        </OutboundLink>
      </li>
      <li>
        <OutboundLink href={`http://${props.website}`} target="_blank" rel="noopener noreferrer" className="link-unstyled">
          <span className="fa-container text-center mr-2">
            <i className="fas fa-globe" style={iconsStyle} />
          </span>
          {props.website}
        </OutboundLink>
      </li>
    </ul>
  </div>
);
