import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const About: React.FC = () => (
  <Layout>
    <Seo title="Using TypeScript" />
    <h1>Federico Viotti</h1>
    <p>Bio</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default About;
