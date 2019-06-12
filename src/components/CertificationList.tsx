import * as React from 'react';
import { Certification, Props as CertificationProps } from './Certification';

interface Props {
  certifications: CertificationProps[];
}

export const CertificationList = (props: Props) => (
  <ul className="list-unstyled resume-awards-list">
    {props.certifications.map((certification: CertificationProps, index: number) => (
      <Certification key={index} {...certification} />
    ))}
  </ul>
);
