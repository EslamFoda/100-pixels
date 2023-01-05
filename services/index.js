import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUPLIC_GRAPHCMS_ENDPOINT;

export const getWorks = async () => {
  const query = gql`
  query Works {
    works {
      about
      video {
        id
        url
      }
      imgs {
        id
        height
        url
      }
      createdAt
      id
      publishedAt
      slug
      title
      updatedAt
    }
  }
  `;

  const results = await request(graphqlAPI, query);

  return results;
};


