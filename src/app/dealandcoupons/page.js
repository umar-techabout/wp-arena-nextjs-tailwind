'use client';
import React, { useState, useEffect } from 'react';
import './CouponsAndDealsFaqs.css';
import pluginsLogo from '@/images/web-plugin-logo.png';
import sassLogo from '@/images/saas-logo.png';
import Themes from '@/components/themes/Themes';
import Plugins from '@/components/plugins/Plugins';
import BreadCrumb from '@/components/breadcrumb/BreadCrumb';
import client from '../../../lib/apollo-client'; // Adjust the path as needed
import { GET_POSTS_BY_CATEGORY_SLUG_PLUGINS, GET_POSTS_BY_CATEGORY_SLUG_THEMES } from '../../app/pages/api/allApi';

const CouponsAndDealsFaqs = ({
  filterTitle,
  showSearchBar = 'true',
  showLogos = true,
  disableClick = false,
  showDescriptionCondition = ' true ',
}) => {
  const [openSections, setOpenSections] = useState({});
  const [pluginsData, setPluginsData] = useState([]);
  const [themesData, setThemesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch both themes and plugins data concurrently
  const fetchData = async () => {
    try {
      const [pluginsResponse, themesResponse] = await Promise.all([
        client.query({
          query: GET_POSTS_BY_CATEGORY_SLUG_PLUGINS,
          variables: { categorySlug: 'plugins' },
        }),
        client.query({
          query: GET_POSTS_BY_CATEGORY_SLUG_THEMES,
          variables: { categorySlug: 'themes' },
        }),
      ]);

      setPluginsData(pluginsResponse.data.posts.nodes);
      setThemesData(themesResponse.data.posts.nodes);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const data = [
    {
      logo: pluginsLogo,
      title: 'plugins',
    },
    {
      logo: sassLogo,
      title: 'themes',
    },
  ];

  const filteredData = filterTitle ? data.filter((item) => item.title === filterTitle) : data;

  return (
    <>
      <BreadCrumb />
      <section className="">
        <div className="md:px-20 xs:px-10 px-5">
          <div className="">
            {filteredData.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className="bg-[#424242] rounded-t-lg lg:py-4 lg:px-8 p-3 lg:mb-7 mb-4 uppercase flex items-center justify-start cursor-pointer"
                  onClick={() => toggleSection(item.title)}
                >
                  <div className="">
                    <h3 className='text-white lg:text-3xl xs:text-xl text-base font-medium'>{item.title}</h3>
                  </div>
                </div>
                {openSections[item.title] && (
                  <section id="conference-timeline" className="">
                    {item.title === 'plugins' ? (
                      <Plugins
                        posts={pluginsData}
                        pageCount={0}
                        isShowBreadCrumb={false}
                        IshwoPluginContent={false}
                        ButtonText={false}
                        isOpenBlog={true}
                        IsShowSearchBar={false}
                      />
                    ) : (
                      <Themes
                        posts={themesData}
                        pageCount={0}
                        ButtonText={false}
                        IshwoPluginContent={false}
                        isShowBreadCrumb={false}
                        IsShowSearchBar={false}
                        isOpenBlog={true}
                      />
                    )}
                  </section>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CouponsAndDealsFaqs;
