import React from 'react';
import { Layout, SEO, HomePageCollectionsGrid, FeaturedProducts } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);
  console.log(collections);
  return (
  <Layout>
    <SEO title="Home Page" description="The madhatter store home page" />
   <HomePageCollectionsGrid
        collections={
          collections.filter(
            collection => collection.title !== 'Featured Hats'
          ) || []
        }
      />
      {!!collections.find(
        collection => collection.title === 'Featured Hats') && <FeaturedProducts />}
  </Layout>
  )
}
;

export default IndexPage;
