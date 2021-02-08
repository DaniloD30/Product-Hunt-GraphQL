import { gql } from "@apollo/client";

export const LOAD_POSTS = gql`
  query {
    posts {
      edges {
        node {
          id
          name
          description
          reviewsRating
          votesCount
          featuredAt
          website
          thumbnail {
            url
          }
          media {
            videoUrl
            type
            url
          }
        }
      }
    }
  }
`;

// export const hospital = gql`
// query hospital($uid: uuid!) {
//   hospital: hospital_by_pk(uid: $uid) {
//     uid
//     shortname
//     name
//     address
//     directions
//   }
//   me {
//     uid
//     phone
//     managedHospitals (where: { hospital: { uid: { _eq: $uid }}}) {
//       coophone
//     }
//   }
// }`