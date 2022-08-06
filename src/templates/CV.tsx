// tslint:disable: jsx-no-lambda
import { graphql, navigate } from 'gatsby';
import * as React from 'react';
import { CertificationList } from './../components/CertificationList';
import { EducationList } from './../components/EducationList';
import { Header } from './../components/Header';
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
      (!props.location.pathname.includes('work') && !props.location.pathname.includes('proj')) ||
      props.location.pathname.includes('work')
    );
  };

  const projectIcon = ():string => {
    return (isWorkSelected() ? 'fa fa-folder':'fa fa-folder-open');
  }

  const [selectedItem, setSelectedItem] = React.useState(isWorkSelected() ? 0 : 1);
  const [items, setItems] = React.useState([
    {
      name: getTranslatedLabel('WORK_XP'),
      path: 'work',
      checked: isWorkSelected(),
      icon: 'fas fa-briefcase',
    },
    {
      name: 'Projects',
      path: 'projects',
      checked: props.location.pathname.includes('proj'),
      icon: projectIcon(),
    },
  ]);

  React.useEffect(() => {
    scrollToY();
  }, [props.location.pathname]);

  const onLanguageClick = (pathname: string) => {
    saveScrollPosition();
    pathname.includes('/de/')
      ? navigate(`/en/${items[selectedItem].path}`)
      : navigate(`/de/${items[selectedItem].path}`);
  };
//TODO remove hardcoded title
  return (
    <div className="container" style={{ userSelect: 'none' }}>
      <title>Stephen Mott CV</title>
      <article className="resume-wrapper text-center position-relative">
        <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <Header
            role={props.data.social.nodes[0].childSocialJson.role}
            name={props.data.social.nodes[0].childSocialJson.name}
            phone={props.data.social.nodes[0].childSocialJson.phone}
            email={props.data.social.nodes[0].childSocialJson.email}
            socialMedia={{
              github: props.data.social.nodes[0].childSocialJson.social.github,
              website: props.data.social.nodes[0].childSocialJson.social.website,            }}
          />
          <div className="resume-body p-5" style={{ backgroundImage: `url(${Lines})`, overflow: 'hidden' }}>

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
                  onClick={(index) => {
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
                        {props.data.work.nodes[0].childWorkJson.projects.map(
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
                        {props.data.projects.nodes[0].childProjectsJson.projects.map(
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
                    <ResumeSkillList skills={props.data.skills.nodes[0].childSkillsJson.languages} title={'Languages and Frameworks'} />
                    <ResumeSkillList skills={props.data.skills.nodes[0].childSkillsJson.tools} title={'Tools and Platforms'} />
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
              </div>
            </div>
          </div>
        </div>
      </article>
      <footer className="footer text-center pt-2">
        <small className="copyright">
          Designed with <i className="fas fa-heart" /> by{' '}
          <a href="http://themes.3rdwavemedia.com" target="_blank">
            Xiaoying Riley
          </a>{' '}
          for developers
        </small>
      </footer>
      <footer className="footer text-center pt-2 pb-5">
        <small className="source-code">
          <i className="fab fa-github" />{' '}
          <a
            href="https://github.com/firsttris/gatsby-cv"
            className="link-unstyled"
            target="_blank"
            rel="noopener noreferrer"
          >
            {getTranslatedLabel('SOURCEONGITHUB')}
          </a>
        </small>
      </footer>
    </div>
  );
};

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
            validity
            cert_id
            cert_url
            sort_date
            show
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
            url
            to
            technologies
            achievements
            location
          }
        }
      }
    }
    work: allFile(filter: { name: { eq: $locale }, sourceInstanceName: { eq: "work" } }) {
      nodes {
        name
        childWorkJson {
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
          languages {
            name
          }
          tools {
            name
          }
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
            website
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
