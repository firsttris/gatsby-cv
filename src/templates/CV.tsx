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
import { TabSelector } from './../components/TabSelector';
import { getTranslatedLabel, initLocale } from './../translations/provider';
import './CV.css';
const HtmlToReactParser = require('html-to-react').Parser;
const htmlToReactParser = new HtmlToReactParser();
const Lines = require('./../assets/images/backgrounds/lines.png');
const Paper = require('../../src/assets/images/backgrounds/paper.png');

let scrollTo = 0;

interface Props {
  location: any;
  data: any;
  pageContext: any;
}

const scrollToY = () => {
  if (window && scrollTo !== 0) {
    window.scrollTo(0, scrollTo);
  }
};

const saveScrollPosition = () => {
  if (document) {
    scrollTo = document.documentElement.scrollTop;
  }
};

export default (props: Props) => {
  initLocale(props.pageContext.locale);

  const isWorkSelected = () => {
    return (
      (!props.location.pathname.includes('work') && !props.location.pathname.includes('opensource')) ||
      props.location.pathname.includes('work')
    );
  };

  const [selectedItem, setSelectedItem] = React.useState(isWorkSelected() ? 0 : 1);
  const [items, setItems] = React.useState([
    {
      name: getTranslatedLabel('WORK_XP'),
      path: 'work',
      checked: isWorkSelected(),
      icon: 'fas fa-briefcase'
    },
    {
      name: getTranslatedLabel('OPENSOURCE'),
      path: 'opensource',
      checked: props.location.pathname.includes('opensource'),
      icon: 'fab fa-github'
    }
  ]);

  React.useEffect(() => {
    setTimeout(() => scrollToY(), 100);
  });

  const onLanguageClick = (pathname: string) => {
    saveScrollPosition();
    pathname.includes('/de/')
      ? navigate(`/en/${items[selectedItem].path}`)
      : navigate(`/de/${items[selectedItem].path}`);
  };

  return (
    <div className="container">
      <article className="resume-wrapper text-center position-relative">
        <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <Header
            profile={props.data.profile.childImageSharp.fluid}
            role={props.data.social.nodes[0].childSocialJson.role}
            name={props.data.social.nodes[0].childSocialJson.name}
            phone={props.data.social.nodes[0].childSocialJson.phone}
            email={props.data.social.nodes[0].childSocialJson.email}
            socialMedia={{
              github: props.data.social.nodes[0].childSocialJson.social.github,
              linkedin: props.data.social.nodes[0].childSocialJson.social.linkedin,
              website: props.data.social.nodes[0].childSocialJson.social.website,
              xing: props.data.social.nodes[0].childSocialJson.social.xing
            }}
          />
          <div className="resume-body p-5" style={{ backgroundImage: `url(${Lines})` }}>
            <div className="text-right">
              <button
                type="button"
                className="btn"
                onClick={() => onLanguageClick(props.location.pathname)}
                style={{ cursor: 'pointer', backgroundImage: `url(${Paper})`, color: 'lightgrey' }}
              >
                {props.pageContext.locale === 'de' ? 'EN' : 'DE'}
              </button>
            </div>

            <section className="resume-section summary-section mb-5">
              <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                {getTranslatedLabel('CAREER_SUMMARY')}
              </h2>
              <div className="resume-section-content">{htmlToReactParser.parse(props.data.summary.html)}</div>
            </section>

            <div className="row">
              <div className="col-lg-9">
                <TabSelector
                  items={items}
                  onClick={index => {
                    saveScrollPosition();
                    setSelectedItem(index);
                    navigate(`/${props.pageContext.locale}/${items[index].path}`);
                  }}
                />
                <div className="mb-3" />
                {items[0].checked && (
                  <section className="resume-section experience-section mb-5">
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
                )}
                {items[1].checked && (
                  <section className="resume-section experience-section mb-5">
                    <div className="resume-section-content">
                      <div className="resume-timeline position-relative">
                        {props.data.opensource.nodes[0].childOpensourceJson.projects.map(
                          (project: ProjectProps, index: number) => (
                            <Project key={index} {...project} />
                          )
                        )}
                      </div>
                    </div>
                    <div className="my-5 text-center">
                      <div>{getTranslatedLabel('MORE_PROJECTS')}</div>
                      <a
                        href="https://github.com/firsttris?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-unstyled"
                      >
                        https://github.com/firsttris?tab=repositories
                      </a>
                    </div>
                  </section>
                )}
              </div>
              <div className="col-lg-3" style={{ marginTop: '40px' }}>
                <section className="resume-section skills-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    {getTranslatedLabel('SKILLS')}
                  </h2>
                  <div className="resume-section-content">
                    <ResumeSkillList skills={props.data.skills.nodes[0].childSkillsJson.frontend} title={'Frontend'} />
                    <ResumeSkillList skills={props.data.skills.nodes[0].childSkillsJson.backend} title={'Backend'} />
                    <OtherSkillList
                      skills={props.data.skills.nodes[0].childSkillsJson.others}
                      title={getTranslatedLabel('OTHERS')}
                    />
                  </div>
                </section>
                <section className="resume-section education-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    {getTranslatedLabel('EDUCATION')}
                  </h2>
                  <div className="resume-section-content">
                    <EducationList educations={props.data.educations.nodes[0].childEducationsJson.educations} />
                  </div>
                </section>
                <section className="resume-section reference-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    {getTranslatedLabel('CERTIFICATIONS')}
                  </h2>
                  <div className="resume-section-content">
                    <CertificationList certifications={props.data.certs.nodes[0].childCertsJson.certs} />
                  </div>
                </section>
                <section className="resume-section language-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    {getTranslatedLabel('LANGUAGES')}
                  </h2>
                  <div className="resume-section-content">
                    <LanguageList
                      languages={[
                        {
                          language: getTranslatedLabel('GERMAN'),
                          skill: getTranslatedLabel('NATIVE')
                        },
                        {
                          language: getTranslatedLabel('ENGLISH'),
                          skill: getTranslatedLabel('FLUENT')
                        }
                      ]}
                    />
                  </div>
                </section>
                <section className="resume-section interests-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    {getTranslatedLabel('INTEREST')}
                  </h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-1">{getTranslatedLabel('WATERSPORT')}</li>
                      <li className="mb-1">{getTranslatedLabel('HOMEAUTOMATION')}</li>
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
          {getTranslatedLabel('SOURCEONGITHUB')}
        </a>
      </p>
    </div>
  );
};

export const query = graphql`
  query($locale: String!) {
    profile: file(relativePath: { eq: "profil.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
    opensource: allFile(filter: { name: { eq: $locale }, sourceInstanceName: { eq: "opensource" } }) {
      nodes {
        name
        childOpensourceJson {
          id
          projects {
            title
            company
            description
            from
            role
            url
            to
            technologies
            achievements
            location
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
    social: allFile(filter: { name: { eq: "social" } }) {
      nodes {
        childSocialJson {
          email
          name
          phone
          role
          social {
            github
            linkedin
            website
            xing
          }
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

