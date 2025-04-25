import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_API_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export const GET_PROJECTS = gql`
  query GetProjects {
    projetos {
      id
      category
      title
      description
      technologies
      url
      githubUrl
      image {
        url
      }
    }
  }
`;

export const fetchProjects = async () => {
  try {
    const { data } = await client.query({ query: GET_PROJECTS });
    return data?.projetos || [];
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
    return [];
  }
};
