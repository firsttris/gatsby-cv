import * as React from 'react';
import { Education, Props as EudcationProps } from './Education';

interface Props {
  educations: EudcationProps[];
}

export const EducationList = (props: Props) => (
  <ul className="list-unstyled">
    {props.educations.map((education: EudcationProps, index: number) => (
      <Education key={index} {...education} />
    ))}
  </ul>
);
