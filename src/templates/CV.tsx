// tslint:disable: jsx-no-lambda
import { graphql, navigate } from 'gatsby';
import * as React from 'react';
import { CertificationList } from './../components/CertificationList';
import { EducationList } from './../components/EducationList';
import { Header } from './../components/Header';
import { LanguageList } from './../components/LanguageList';
import { OtherSkillList } from './../components/OtherSkillList';
import { Project, Props as ProjectProps } from './../components/Project';
import { ResumeSkillList } from './../components/ResumeSkillList';
import { getTranslatedLabel } from './../translations/provider';
import './CV.css';

interface Props {
  location: any;
  data: any;
  pageContext: any;
}

const onLanguageClick = (pathname: string) => {
  pathname.includes('/de/') ? navigate('/en/') : navigate('/de/');
};

export default (props: Props) => (
  <div className="container">
    {console.log(props)}
    <article className="resume-wrapper text-center position-relative">
      <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
        <Header
          role="Full Stack Developer"
          name="Tristan Teufel"
          phone="0176 45744166"
          email="tristanteufel@gmail.com"
          socialMedia={{
            github: 'github.com/firsttris',
            linkedin: 'de.linkedin.com/in/tristanteufel',
            website: 'teufel-it.de',
            xing: 'xing.com/profile/Tristan_Teufel'
          }}
        />
        <div className="resume-body p-5">
          <p onClick={() => onLanguageClick(props.location.pathname)} style={{ cursor: 'pointer' }}>
            {props.pageContext.locale === 'de' ? 'German' : 'English'}
          </p>
          <section className="resume-section summary-section mb-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
              {getTranslatedLabel('CAREER_SUMMARY', props.pageContext.locale)}
            </h2>
            <div className="resume-section-content">
              <p className="mb-0" dangerouslySetInnerHTML={{ __html: props.data.summary.html }} />
            </div>
          </section>
          <div className="row">
            <div className="col-lg-9">
              <section className="resume-section experience-section mb-5">
                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                  {getTranslatedLabel('WORK_XP', props.pageContext.locale)}
                </h2>
                <div className="resume-section-content">
                  <div className="resume-timeline position-relative">
                    {props.data.projects.nodes[0].childProjectsJson.projects.map(
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
                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                  {getTranslatedLabel('SKILLS', props.pageContext.locale)}
                </h2>
                <div className="resume-section-content">
                  <ResumeSkillList skills={props.data.skills.nodes[0].childSkillsJson.frontend} title={'Frontend'} />
                  <ResumeSkillList skills={props.data.skills.nodes[0].childSkillsJson.backend} title={'Backend'} />
                  <OtherSkillList skills={props.data.skills.nodes[0].childSkillsJson.others} title={'Others'} />
                </div>
              </section>
              <section className="resume-section education-section mb-5">
                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                  {getTranslatedLabel('EDUCATION', props.pageContext.locale)}
                </h2>
                <div className="resume-section-content">
                  <EducationList educations={props.data.educations.nodes[0].childEducationsJson.educations} />
                </div>
              </section>
              <section className="resume-section reference-section mb-5">
                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                  {getTranslatedLabel('CERTIFICATIONS', props.pageContext.locale)}
                </h2>
                <div className="resume-section-content">
                  <CertificationList certifications={props.data.certs.nodes[0].childCertsJson.certs} />
                </div>
              </section>
              <section className="resume-section language-section mb-5">
                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                  {getTranslatedLabel('LANGUAGES', props.pageContext.locale)}
                </h2>
                <div className="resume-section-content">
                  <LanguageList
                    languages={[
                      {
                        language: getTranslatedLabel('GERMAN', props.pageContext.locale),
                        skill: getTranslatedLabel('NATIVE', props.pageContext.locale)
                      },
                      {
                        language: getTranslatedLabel('ENGLISH', props.pageContext.locale),
                        skill: getTranslatedLabel('FLUENT', props.pageContext.locale)
                      }
                    ]}
                  />
                </div>
              </section>
              <section className="resume-section interests-section mb-5">
                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                  {getTranslatedLabel('INTEREST', props.pageContext.locale)}
                </h2>
                <div className="resume-section-content">
                  <ul className="list-unstyled">
                    <li className="mb-1">{getTranslatedLabel('WATERSPORT', props.pageContext.locale)}</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </article>
    <p style={{ textAlign: 'center' }}>
      <a
        href="https://github.com/firsttris/gatsby-cv"
        className="link-unstyled"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sourcecode on Github
      </a>
    </p>
  </div>
);

export const query = graphql`
  query($locale: String!) {
    summary: markdownRemark(frontmatter: { locale: { eq: $locale }, name: { eq: "summary" } }) {
      html
      frontmatter {
        locale
        name
      }
    }
    certs: allFile(filter: { name: { eq: $locale }, sourceInstanceName: { eq: "certs" } }) {
      nodes {
        childCertsJson {
          certs {
            title
            description
          }
        }
      }
    }
    projects: allFile(filter: { name: { eq: $locale }, sourceInstanceName: { eq: "projects" } }) {
      nodes {
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
    skills: allFile(filter: { name: { eq: "skills" } }) {
      nodes {
        name
        childSkillsJson {
          frontend {
            name
            xpInPercentage
          }
          backend {
            name
            xpInPercentage
          }
          others
        }
      }
    }
    educations: allFile(filter: { name: { eq: $locale }, sourceInstanceName: { eq: "educations" } }) {
      nodes {
        childEducationsJson {
          id
          educations {
            from
            titel
            to
            uni
          }
        }
      }
    }
  }
`;
