import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.HYGRAPH_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_API_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export const GET_PROJECTS = gql`
  query GetProjects {
    projetos {
      id
      title
      category
      image {
        url
      }
    }
  }
`;

export const fetchProjects = async () => {
  const { data } = await client.query({ query: GET_PROJECTS });
  return data.projects;
};