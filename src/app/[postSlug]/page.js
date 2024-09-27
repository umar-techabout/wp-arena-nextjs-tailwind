import '../../../src/wordpress-style.css';
import { gql } from '@apollo/client';
import client from '../../../lib/apollo-client'; 
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import Comments from '@/components/comments/Comments';
import Image from 'next/image';

const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($postSlug: String!) {
    postBy(slug: $postSlug) {
      id
      title
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      comments {
        nodes {
          id
          content
          author {
            node {
              name
            }
          }
          date
        }
      }
      categories {
        nodes {
          id
          name
          slug
          posts(where: { notIn: [61050] }) {
            nodes {
              id
              title
              slug
              excerpt
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }
      }
      tags {
        nodes {
          id
          name
          slug
        }
      }
      author {
        node {
          name
          description
          avatar {
            url
          }
          posts {
            nodes {
              id
              title
              slug
            }
          }
        }
      }
      ncPostMetaData {
        showRightSidebar
      }
    }
    recentPosts: posts(first: 5, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
      }
    }
    services: services(where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
      }
    }
    genesisSidebar
  }
`;

export async function fetchPostBySlug(postSlug) {
  try {
    const { data } = await client.query({
      query: GET_POST_BY_SLUG,
      variables: { postSlug },
    });
    return data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { postSlug } = params;
  const post = await fetchPostBySlug(postSlug);

  if (!post || !post.postBy) {
    return {
      title: 'Post Not Found - WPArena',
      description: 'The post you are looking for was not found.',
    };
  }

  return {
    title: `${post.postBy.title} - WPArena`,
    description: post.postBy.excerpt ? post.postBy.excerpt.replace(/(<([^>]+)>)/gi, '') : 'Read this post on WPArena.',
  };
}

export default async function PostDetail({ params }) {
  const { postSlug } = params;
  const data = await fetchPostBySlug(postSlug);
  const post = data?.postBy;
  const recentPosts = data?.recentPosts?.nodes;
  const services = data?.services?.nodes;

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="mb-6">
        <BreadCrumb />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

          {/* Author Section */}
          <div className="flex items-center mb-6">
            {post.author?.node?.avatar?.url && (
              <Image
                className="rounded-full w-12 h-12"
                src={post.author?.node?.avatar?.url}
                alt={post.author?.node?.name}
                width={50}
                height={50}
              />
            )}
            <div className="ml-4">
              <p className="text-lg font-semibold">{post.author?.node?.name}</p>
              <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Featured Image */}
          {post.featuredImage?.node?.sourceUrl && (
            <div className="mb-6">
              <Image
                className="rounded-lg"
                src={post.featuredImage?.node?.sourceUrl}
                alt={post.featuredImage?.node?.altText}
                width={1080}
                height={720}
              />
            </div>
          )}

          {/* Post Content */}
          <div
            className="prose prose-lg mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Comments Section */}
          <Comments comments={post.comments.nodes} postId={post.id} />
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/4">
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 bg-gray-700 text-white text-center py-2 rounded-md">Recent Posts</h3>
            <ul className="space-y-4">
              {recentPosts && recentPosts.length > 0 ? (
                recentPosts.map((recentPost) => (
                  <li key={recentPost.id} className="border-b pb-2">
                    <a href={`/post/${recentPost.slug}`} className="text-blue-500 hover:underline">
                      {recentPost.title}
                    </a>
                  </li>
                ))
              ) : (
                <li>No recent posts available.</li>
              )}
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4  bg-gray-700 text-white text-center py-2 rounded-md">Our Services</h3>
            <div className="space-y-2">
              {services && services.length > 0 ? (
                services.map((service) => (
                  <p key={service.id}>{service.title}</p>
                ))
              ) : (
                <p>No services available.</p>
              )}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
