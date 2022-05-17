import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink } from "./navigation.module.css"
import ProductContext from "../../context/ProductContext";

export function Navigation({ className }) {
 const {collections} = React.useContext(ProductContext);

  return (
    <nav className={[navStyle, className].join(" ")}>
      <Link
        key="All"
        className={navLink}
        to="/all-products"
        activeClassName={activeLink}
      >
        All products
      </Link>
      <Link
        className={navLink}
        activeClassName={activeLink}
        to="/">
            Contact
        </Link>

      {/* {collections.map((collection) => (
        <Link
          key={collection.shopifyId}
          className={navLink}
          //to={`/collections/${collection.handle}`}
          to={`/all-products?c=${encodeURIComponent(
            collection.shopifyId
          )}`}
          activeClassName={activeLink}
        >
          {collection.title}
        </Link>
      ))} */}
    </nav>
  )
}