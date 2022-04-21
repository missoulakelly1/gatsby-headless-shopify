import React from "react";
import { Layout, CartContents, SEO } from 'components';


export default function CartPage() {
    return (
    <Layout>Cart Page
        <SEO description="The Madhatter Cart" title="Cart" />
        <CartContents />
    </Layout>
    );
}