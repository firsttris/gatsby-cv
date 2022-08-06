import * as React from 'react';
import { Certification, Props as CertificationProps } from './Certification';
import * as dayjs from 'dayjs'

interface Props {
  certifications: CertificationProps[];
}

const datef = 'DD/MM/YYYY';

// TODO: Fix sorting and filter by "show" parameter
export const CertificationList = (props: Props) => (
  <ul className="list-unstyled resume-awards-list">
    {props.certifications.map((certification: CertificationProps, index: number) => (
      <Certification key={index} {...certification} />
    ))}
  </ul>
);
