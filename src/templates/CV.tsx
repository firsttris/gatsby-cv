import { graphql } from 'gatsby';
import * as React from 'react';
import { CertificationList } from './../components/CertificationList';
import { EducationList } from './../components/EducationList';
import { Header } from './../components/Header';
import { LanguageList } from './../components/LanguageList';
import { OtherSkillList } from './../components/OtherSkillList';
import { Project, Props as ProjectProps } from './../components/Project';
import { ResumeSkillList } from './../components/ResumeSkillList';
import './CV.css';

interface Props {
  data: any;
}

export default (props: Props) => (
  <div className="container">
    <article className="resume-wrapper text-center position-relative">
      <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
        <Header
          role="Full Stack Developer"
          name="Tristan Teufel"
          phone="0176 45744166"
          email="tristanteufel@gmail.com"
          socialMedia={{
            github: 'github.com/firsttris',
            linkedin: 'sadsadadasd',
            website: 'sadasdasdasd',
            xing: 'asdasdasd'
          }}
        />
        <div className="resume-body p-5">
          <section className="resume-section summary-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">CAREER SUMMARY</h2>
            <div className="resume-section-content">
              <p className="mb-0">
                Summarise your career here. You can make a PDF version of your resume using our free Sketch template
                here. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum
                dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                vel, aliquet nec, vulputate eget.
              </p>
            </div>
          </section>
          <div className="row">
            <div className="col-lg-9">
              <section className="resume-section experience-section mb-5">
                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
                <div className="resume-section-content">
                  <div className="resume-timeline position-relative">
                    {props.data.allFile.edges[0].node.childProjectsJson.projects.map(
                      (project: ProjectProps, index: number) => (
                        <Project key={index} {...project} />
                      )
                    )}
                  </div>
                </div>
              </section>
            </div>
            <div className="col-lg-3">
              <section className="resume-section skills-section mb-5">
                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
                <div className="resume-section-content">
                  <ResumeSkillList title="Frontend" skills={[{ name: 'reactjs', xpInPercentage: '50%' }]} />

                  <ResumeSkillList title="Backend" skills={[{ name: 'nodeJs', xpInPercentage: '50%' }]} />

                  <OtherSkillList skills={['devOps', 'docker']} />
                </div>
              </section>
              <section className="resume-section education-section mb-5">
                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                <div className="resume-section-content">
                  <EducationList
                    educations={[
                      {
                        titel: 'bachelor',
                        uni: 'karlsruhe',
                        from: '2008',
                        to: '2012'
                      },
                      {
                        titel: 'bachelor',
                        uni: 'karlsruhe',
                        from: '2008',
                        to: '2012'
                      }
                    ]}
                  />
                </div>
              </section>
              <section className="resume-section reference-section mb-5">
                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Certifications</h2>
                <div className="resume-section-content">
                  <CertificationList
                    certifications={[
                      { title: 'Oracle ADF', description: 'Some oracle JAva Thing' },
                      { title: 'FreecodeCamp', description: 'Responsive Web Development Projects' }
                    ]}
                  />
                </div>
              </section>
              <section className="resume-section language-section mb-5">
                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Languages</h2>
                <div className="resume-section-content">
                  <LanguageList languages={[{ language: 'German', skill: '(native)' }]} />
                </div>
              </section>
              <section className="resume-section interests-section mb-5">
                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
                <div className="resume-section-content">
                  <ul className="list-unstyled">
                    <li className="mb-1">Climbing</li>
                    <li className="mb-1">Snowboarding</li>
                    <li className="mb-1">Cooking</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
);

export const query = graphql`
  query MyQuery {
    allFile(filter: { name: { eq: "projects-de" } }) {
      edges {
        node {
          name
          childProjectsJson {
            id
            projects {
              title
              company
              description
              from
              role
              to
              technologies
              achievements
              location
            }
          }
        }
      }
    }
  }
`;
