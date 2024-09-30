import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
  mutation AddComment($commentOn: Int!, $content: String!, $authorName: String!, $parentId: ID) {
    createComment(input: {
      commentOn: $commentOn,
      content: $content,
      author: $authorName,
      parent: $parentId
    }) {
      comment {
        id
        content
        author {
          node {
            name
          }
        }
        date
        parent {
          node {
            id
          }
        }
      }
    }
  }
`;