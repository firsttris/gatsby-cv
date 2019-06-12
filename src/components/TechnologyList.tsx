import * as React from 'react';

export interface Props {
  technologies: string[];
}

export const TechnologyList = (props: Props) => (
  <div>
    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
    <ul className="list-inline">
      {props.technologies.map((tech: string, index: number) => (
        <li className="list-inline-item" key={index}>
          <span className="badge badge-primary badge-pill" style={{ backgroundColor: '#434E5E' }}>
            <a
              href={`http://google.com/search?q=${tech}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-unstyled"
            >
              {tech}
            </a>
          </span>
        </li>
      ))}
    </ul>
  </div>
);
