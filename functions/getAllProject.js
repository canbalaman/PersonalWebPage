import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getAllProjects = async () => {
  
  const getAllProjectsQuery = gql`
    {
      projects {
        id
        title
        description
        source
        tags
        image {
          url
        }
      }
    }
  `;

  const { projects } = await graphcms.request(getAllProjectsQuery);
  return projects;
};