import React from "react";
import { ProductsGridWrapper } from "./styles";
import { ProductTile } from "../ProductTile";

export function ProductsGrid({products}) {
 return (
     <ProductsGridWrapper>
         {products.map(product => (
             <ProductTile imageFluid={product.images[0].localFile.childImageSharp.fluid} 
             key={product.shopifyId} 
             minPrice={product.priceRange.minVariantPrice.amount}
             title={product.title}
             description={product.description}
             handle={product.handle}
             />
         ))}
     </ProductsGridWrapper>
 )
}