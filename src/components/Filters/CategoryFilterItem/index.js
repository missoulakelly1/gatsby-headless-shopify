import React from "react";
import { CategoryFilterItemWrapper } from "./styles";
import { Checkbox } from "components";
import { navigate, useLocation } from '@reach/router';
import queryString from 'query-string';

export function CategoryFilterItem({title, id}){
    const { search } = useLocation();
    const qs = queryString.parse(search);
    const collectionIds = qs.c;
    
    const onClick = () => {
        let navigateTo = '/all-products';

        navigate(`${navigateTo}?c=${encodeURIComponent(title)}`);
    }
    return (
        <CategoryFilterItemWrapper onClick={onClick}>
            <Checkbox checked={checked}/>
        <div>{title}</div>
        </CategoryFilterItemWrapper>
    )
};