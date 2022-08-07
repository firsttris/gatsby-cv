import Img from 'gatsby-image';
import * as React from 'react';
import { Props as socialMediaProps, SocialMedia } from './SocialMedia';
import Paper from "../assets/images/backgrounds/paper.png";

interface Props {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  socialMedia: socialMediaProps;
}

export const Header = (props: Props) => (
  <header className='resume-header pt-lg-0'>
    <div className="media flex-lg-row">
      <div
        className="media-body p-4 d-flex flex-lg-row mx-lg-0"
        style={{ backgroundImage: `url(${Paper})`, color: 'lightgrey' }}
      >
        <div className="primary-info">
          <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">{props.name}</h1>
          <div className="title mb-3">{props.role}</div>
          <ul className="list-unstyled">
          <li className="mb-2">                
          <i className="fa fa-map-marker fa-fw mr-2" data-fa-transform="grow-3" />
                {props.location}
            </li>
            <li className="mb-2">
              <a href={`mailto:${props.email}`} className="link-unstyled">
                <i className="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3" />
                {props.email}
              </a>
            </li>
            <li>
              <a href={`tel:${props.phone}`} className="link-unstyled">
                <i className="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-3" />
                {props.phone}
              </a>
            </li>
            <SocialMedia {...props.socialMedia} />
          </ul>
        </div>

      </div>
    </div>
  </header>
);
