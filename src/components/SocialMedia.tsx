import * as React from 'react';

export interface Props {
  linkedin: string;
  github: string;
  xing: string;
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
        <a href={`http://${props.linkedin}`} target="_blank" rel="noopener noreferrer" className="link-unstyled">
          <span className="fa-container text-center mr-2">
            <i className="fab fa-linkedin-in fa-fw" style={iconsStyle} />
          </span>
          {props.linkedin}
        </a>
      </li>
      <li className="mb-3">
        <a href={`http://${props.github}`} target="_blank" rel="noopener noreferrer" className="link-unstyled">
          <span className="fa-container text-center mr-2">
            <i className="fab fa-github fa-fw" style={iconsStyle} />
          </span>
          {props.github}
        </a>
      </li>
      <li className="mb-3">
        <a href={`http://${props.xing}`} target="_blank" rel="noopener noreferrer" className="link-unstyled">
          <span className="fa-container text-center mr-2">
            <i className="fab fa-xing fa-fw" style={iconsStyle} />
          </span>
          {props.xing}
        </a>
      </li>
      <li>
        <a href={`http://${props.website}`} target="_blank" rel="noopener noreferrer" className="link-unstyled">
          <span className="fa-container text-center mr-2">
            <i className="fas fa-globe" style={iconsStyle} />
          </span>
          {props.website}
        </a>
      </li>
    </ul>
  </div>
);
