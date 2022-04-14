import React from 'react';
import { Layout, SEO, HomePageCollectionsGrid } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);
  console.log(collections);
  return (
  <Layout>
   <HomePageCollectionsGrid
        collections={
          collections.filter(
            collection => collection.title !== 'Featured Hats'
          ) || []
        }
      />
  </Layout>
  )
}
;

export default IndexPage;
