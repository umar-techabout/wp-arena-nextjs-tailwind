import { gql } from '@apollo/client';
import client from '../../../lib/apollo-client'; // Ensure this path is correct
import BreadCrumb from '../breadcrumb/BreadCrumb';
import Link from 'next/link';
import Image from 'next/image';
// import Pagination from '../pagination/Pagination';
import '../../components/blog-categories/BlogCategories.css'
import '../../components/hero-banner/HeroBanner.css'
import '../../components/themes/Themes.css'

const GET_POSTS_BY_CATEGORY_SLUG_THEMES = gql`
  query GetPostsByCategorySlugThemes($categorySlug: String!, $page: Int!) {
    posts(where: { categoryName: $categorySlug }, page: $page) {
      nodes {
        id
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
      pageCount
    }
  }
`;

const Themes = ({ posts, pageCount, slug = '', ButtonText, isShowBreadCrumb = true, IsShowSearchBar = true }) => {
  // Ensure slug is a string and has a default value
  const title = typeof slug === 'string' && slug.includes('themes') ? 'WpArena Themes' : 'WpArena Plugins';

  return (
    <>
      {/* {isShowBreadCrumb && <BreadCrumb />} */}
      <section id="conference-timeline" className="px-20">
        <div className="text-left px-2">
          <h1 className='text-gray-800 2xl:text-5xl lg:text-[44px] xs:text-4xl text-2xl font-semibold mb-5'>{title}</h1>
          <p className='font-medium md:text-base text-sm md:leading-8 leading-6'>WP Arena is a comprehensive resource for WordPress enthusiasts, offering detailed guides and reviews on themes and plugins. It provides insights into the latest and most popular WordPress themes, helping users select the best options for their websites. The site also features extensive plugin reviews, ensuring users can enhance their WordPress sites with the right tools. WP Arena keeps its audience updated with the newest developments in the WordPress ecosystem.</p>
        </div>
        {IsShowSearchBar && (
          <div className="bg-blue-100 rounded mt-7 pl-4 flex items-center justify-start">
            {/* <form>
              <input type="text" placeholder='Search' />
              <button className='' type='submit'>Search</button>
            </form> */}
          </div>
        )}

        <div className="my-7 w-full">
          {posts?.length > 0 ? (
            posts.map((post) => (
              <div className='' key={post.id}>
                <div className="mb-12 relative">
                  <div className="flex items-start w-auto lg:gap-10 gap-5 lg:flex-row flex-col">
                    <div>
                      <div className='h-[220px] xs:w-[400px] w-80'>
                        <Image width={400} height={220} className='border-2 border-solid border-gray-200 w-full h-full object-cover rounded' src={post.featuredImage?.node?.sourceUrl} alt={post.featuredImage?.node?.altText || post.title} />
                      </div>
                    </div>
                    <div className='h-[220px] flex justify-between flex-col'>
                      <div>
                        <div className=''>
                          <span className='font-semibold'>Recent updated on <Link className='text-[#2980b9] no-underline' href="#">{new Date(post.date).toLocaleDateString()}</Link><i className='wpa-share-icon wpa-message-icon'></i></span>
                        </div>
                        <div className=''>
                          <h3><Link className='text-gray-800 hover:text-[#2980b9] transition-all font-bold no-underline 2xl:text-3xl xl:text-2xl xs:text-xl text-lg' href={`/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }} /></h3>
                        </div>
                        <div className='wpa-blog-list-description wpa-paragraph-text line-limit-2'>
                          <p className='font-medium xs:line-clamp-2 line-clamp-3 relative xl:text-base text-sm xl:leading-7 leading-6' dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                        </div>
                      </div>
                      {/* <div className="text-left">
                        <button className='rounded border-2 border-gray-800 bg-gray-800 hover:border-[#2980b9] hover:bg-[#2980b9] transition-all text-white text-base font-medium uppercase h-11 w-44' type="button">{ButtonText ? "PLUGINS" : "THEMES"}</button>
                      </div> */}
                    </div>
                  </div>
                  <div class="absolute -bottom-6 left-0 w-full h-[1px] bg-gray-100"></div>
                </div>
              </div>
            ))
          ) : (
            <p>No posts available.</p> // You can show a message or handle the empty state here
          )}
        </div>

        {/* {posts.length > 11 && <Pagination pageCount={pageCount} handlePageClick={() => {}} />} */}
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const page = parseInt(context.query.page || '1', 10);

  const { data } = await client.query({
    query: GET_POSTS_BY_CATEGORY_SLUG_THEMES,
    variables: { categorySlug: slug || '', page },
  });

  return {
    props: {
      posts: data.posts.nodes,
      pageCount: data.posts.pageCount,
      slug: slug || '', // Ensure slug is a string
    },
  };
}

export default Themes;
