import "../../../src/wordpress-style.css";
import { gql } from "@apollo/client";
import client from "../../../lib/apollo-client";
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
import Comments from "@/components/comments/Comments";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import onlineStore from '@/images/BuildingStore.png'
import errorimg from "@/images/WordPressError.png";
import installation from '@/images/WordPressInstallation.png'
import performance from '@/images/WordpressPerfomancce.png'
import security from '@/images/WordPressSecurity.png'
import seo from '@/images/WordPressSEO.png'

const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($postSlug: String!) {
    postBy(slug: $postSlug) {
      id
      title
      content
      excerpt
      date
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
          parentId
          replies {
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
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { postSlug } = params;
  const post = await fetchPostBySlug(postSlug);

  if (!post || !post.postBy) {
    return {
      title: "Post Not Found - WPArena",
      description: "The post you are looking for was not found.",
    };
  }

  return {
    title: `${post.postBy.title} - WPArena`,
    description: post.postBy.excerpt
      ? post.postBy.excerpt.replace(/(<([^>]+)>)/gi, "")
      : "Read this post on WPArena.",
  };
}

export default async function PostDetail({ params }) {
  const { postSlug } = params;
  const data = await fetchPostBySlug(postSlug);

  const post = data?.postBy;
  const recentPosts = data?.recentPosts?.nodes;
  const genesisSidebar = data?.genesisSidebar;

  if (!post) {
    return <p>Post not found.</p>;
  }

  // Prepare comments data structure
  const comments = post.comments.nodes.map(comment => ({
    ...comment,
    replies: comment.replies?.nodes || []
  }));

  return (
    <div className="main-post-page">
    <BreadCrumb/>
    <div className="container mx-auto px-4 xs:px-4 sm:px-4 lg:px-48  py-6 section-contianer">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-1 custom-col-1">
          <h1 className="text-[26px]  font-semibold mb-6">{post.title}</h1>

          {/* Author Section */}
          <div className="entry-meta-container mb-5">
          <div className="entry-meta flex pt-2 pb-2">

            {post.author?.node?.avatar?.url && (
              <Image
                className="rounded-full w-12 h-12"
                src={post.author?.node?.avatar?.url}
                alt={post.author?.node?.name}
                width={30}
                height={30}
              />
            )}
            <div className="ml-4">
              <p className="text-sm mb-1 font-bold no-margin" >{post.author?.node?.name}</p>
              <p className="text-sm text-gray-500 mb-0 no-margin">
                {post.date
                  ? new Date(post.date).toLocaleDateString()
                  : "Invalid Date"}
              </p>
              </div>
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
            className="prose prose-lg mb-8 "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Comments Section */}
          <Comments comments={comments} postId={post.id} />
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/4 custom-col-2">
          {/* Recent Posts Section */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-0 bg-gray-700 text-white text-center py-2 rounded-md rounded-b-none">
              Recent Posts
            </h3>
            <ul className="space-y-4">
              {recentPosts && recentPosts.length > 0 ? (
                recentPosts.map((recentPost) => (
                  <li key={recentPost.id} className="border-b pb-2">
                    <Link
                      href={`/${recentPost.slug}`}
                      className="text-blue-500 hover:underline flex items-center"
                    >
                      {recentPost.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li>No recent posts available.</li>
              )}
            </ul>
          </section>
          <section>
  <h3 className="text-xl font-semibold mb-0 bg-gray-700 text-white text-center py-2 rounded-md rounded-b-none">
    Our Services
  </h3>
  
  <div className="bg-white-100 p-8">
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-8">
      {/* WordPress Installation */}
      <div className="flex flex-col items-center text-center">
        <Image 
          src={installation} // Replace with your image path
          alt="WordPress Installation"
          width={30} // Adjusted size
          height={30}
          className="mb-4"
        />
        <h3 className="text-sm ">WordPress Installation</h3> {/* Font size changed to sm */}
      </div>

      {/* WordPress Performance */}
      <div className="flex flex-col items-center text-center">
        <Image 
          src={performance} // Replace with your image path
          alt="WordPress Performance"
          width={30} // Adjusted size
          height={30}
          className="mb-4"
        />
        <h3 className="text-sm ">WordPress Performance</h3> {/* Font size changed to sm */}
      </div>

      {/* WordPress Security */}
      <div className="flex flex-col items-center text-center">
        <Image 
          src={security} // Replace with your image path
          alt="WordPress Security"
          width={20} // Adjusted size
          height={20}
          className="mb-4"
        />
        <h3 className="text-sm ">WordPress Security</h3> {/* Font size changed to sm */}
      </div>

      {/* WordPress SEO */}
      <div className="flex flex-col items-center text-center">
        <Image 
          src={seo} // Replace with your image path
          alt="WordPress SEO"
          width={30} // Adjusted size
          height={30}
          className="mb-4"
        />
        <h3 className="text-sm ">WordPress SEO</h3> {/* Font size changed to sm */}
      </div>

      {/* WordPress Errors */}
      <div className="flex flex-col items-center text-center">
        <Image 
          src={errorimg} // Replace with your image path
          alt="WordPress Errors"
          width={30} // Adjusted size
          height={30}
          className="mb-4"
        />
        <h3 className="text-sm ">WordPress Errors</h3> {/* Font size changed to sm */}
      </div>

      {/* Building an Online Store */}
      <div className="flex flex-col items-center text-center">
        <Image 
          src={onlineStore} // Replace with your image path
          alt="Building an Online Store"
          width={30} // Adjusted size
          height={30}
          className="mb-4"
        />
        <h3 className="text-sm ">Building Store</h3> {/* Font size changed to sm */}
      </div>
    </div>
  </div>
</section>

         
        </aside>
      </div>
    </div>
    </div>
  );
}