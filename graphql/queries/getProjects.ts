import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query page {
    projectCollection(limit: 10, order: title_ASC) {
      items {
        techs
        description {
          json
        }
        title
        link
        galleryCollection(limit: 5) {
          items {
            url
            fileName
            title
            description
          }
        }
      }
    }
  }
`;
