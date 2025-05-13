// app/api/projects/route.js
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export async function GET() {
  const client = new ApolloClient({
    uri: process.env.HYGRAPH_API_URL,
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_API_TOKEN}`,
    },
    cache: new InMemoryCache(),
  });

  try {
    const { data } = await client.query({
      query: gql`
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
      `,
    });

    return Response.json(data.projetos || []);
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
    return Response.json(
      { error: "Falha ao carregar projetos" },
      { status: 500 }
    );
  }
}
