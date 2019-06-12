import * as React from 'react';
import { Props as socialMediaProps, SocialMedia } from './SocialMedia';
const profil = require('../../src/assets/images/profil.png');

interface Props {
  name: string;
  role: string;
  email: string;
  phone: string;
  socialMedia: socialMediaProps;
}

export const Header = (props: Props) => (
  <header className="resume-header pt-4 pt-md-0">
    <div className="media flex-column flex-md-row">
      <img className="mr-3 img-fluid picture mx-auto" src={profil} alt="" style={{ height: '216px' }} />
      <div
        className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0"
        style={{ backgroundColor: '#434E5E', color: 'lightgrey' }}
      >
        <div className="primary-info">
          <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">{props.name}</h1>
          <div className="title mb-3">{props.role}</div>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="link-unstyled">
                <i className="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3" />
                {props.email}
              </a>
            </li>
            <li>
              <a href="#" className="link-unstyled">
                <i className="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6" />
                {props.phone}
              </a>
            </li>
          </ul>
        </div>
        <SocialMedia {...props.socialMedia} />
      </div>
    </div>
  </header>
);
