import gql from "graphql-tag";
export const GET_DATA_FROM_GRAPHQL_API = gql`
  query FetchData {
      page {
        user_firstname
        user_lastname
        user_email
        user_id
    }
  }
`; 