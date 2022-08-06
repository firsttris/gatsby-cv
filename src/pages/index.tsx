import 'bootstrap/dist/css/bootstrap.css';
import { navigate } from 'gatsby';
import * as React from 'react';
import './../assets/fontawesome/css/all.css';

export default (): JSX.Element => {
  if (typeof window !== 'undefined') {
    let locale = 'en';
    navigate(`/${locale}/`);
  }

  // Lighthouse suggests title for SEO reasons, want it in the root page
  // TODO remove hard coded title
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <title>Stephen Mott CV</title>
      <div className="fas fa-5x fa-spinner fa-spin" style={{ color: 'Red', margin: 'auto 0' }} />
    </div>
  );
};
