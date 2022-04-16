import React from 'react';
import {
  CollectionTileContent,
  CollectionTileWrapper,
  Title,
  Description
} from './styles';
import BackgroundImage from 'gatsby-background-image';
import { StyledLink } from '../StyledLink';

export function CollectionTile({
  destination,
  description,
  title,
  backgroundImage,
  sale,
}) {
  return (
    <CollectionTileWrapper>
    <BackgroundImage fluid={backgroundImage} />
    <CollectionTileContent>
    <Title sale={sale}>{title}</Title>
    <Description sale={sale}>{description}</Description>

    </CollectionTileContent>
  </CollectionTileWrapper>
  );
}