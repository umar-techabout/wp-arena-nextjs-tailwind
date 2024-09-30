import { gql } from '@apollo/client';
import client from '../../lib/apollo-client';

const ADD_COMMENT = gql`
  mutation AddComment($postId: ID!, $name: String!, $website: String, $content: String!, $parentId: ID) {
    createComment(input: {
      commentOn: $postId,
      author: $name,
      authorUrl: $website,
      content: $content,
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

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { postId, name, website, content, parentId } = req.body;

    console.log('Received comment data:', { postId, name, website, content, parentId });

    try {
      const { data, errors } = await client.mutate({
        mutation: ADD_COMMENT,
        variables: { postId, name, website, content, parentId },
      });

      if (errors) {
        console.error('GraphQL errors:', errors);
        return res.status(500).json({ error: 'GraphQL errors', details: errors });
      }

      if (data.createComment && data.createComment.comment) {
        console.log('Comment created successfully:', data.createComment.comment);
        res.status(200).json(data.createComment.comment);
      } else {
        console.error('Unexpected response structure:', data);
        res.status(500).json({ error: 'Unexpected response structure' });
      }
    } catch (error) {
      console.error('Error in comment API route:', error);
      res.status(500).json({ error: error.message || 'Failed to add comment' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}