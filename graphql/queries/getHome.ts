// graphql/queries/getHome.ts

import { gql } from "@apollo/client";

export const GET_HOME = gql`
  query {
    portfolio(id: "7Rt5DCsu7DXuVLfeNMoNL") {
      title
      resume {
        url
      }
      description {
        json
      }
      sys {
        id
      }
    }
  }
`;
