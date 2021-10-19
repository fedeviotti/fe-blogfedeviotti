import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';

export const query = graphql`
  query GetPost($id: String!) {
    sanityPost(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
      mainImage {
        asset {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
      }
      body {
        children {
          text
        }
      }
    }
  }
`;

type DataProps = {
  sanityPost: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    mainImage: {
      asset: {
        gatsbyImageData: any;
      };
    };
    body: {
      children: {
        text: string;
      }[];
    }[];
  };
};

const SanityPost: React.FC<PageProps<DataProps>> = ({ data }) => {
  const post = data.sanityPost;
  return (
    <Layout>
      {post.mainImage?.asset?.gatsbyImageData && (
        <GatsbyImage
          image={post.mainImage.asset.gatsbyImageData}
          alt={post.title}
        />
      )}
      <h1>{data?.sanityPost?.title}</h1>
      {post.body.map(body => body.children.map(child => <p>{child.text}</p>))}
    </Layout>
  );
};

export default SanityPost;
