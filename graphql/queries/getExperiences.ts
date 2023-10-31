import { gql } from "@apollo/client";

export const GET_EXPERIENCES = gql`
  query {
    workCollection {
      items {
        sys {
          id
        }
        title
        description {
          json
        }
        logo {
          title
          fileName
          url
        }
        company
        location
        projectLinks
      }
    }
  }
`;
