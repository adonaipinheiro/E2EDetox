import React from 'react';

import {Container, TagName} from './styles';

interface Props {
  data: any;
}

const Tag: React.FC<Props> = ({data}) => {
  return (
    <Container color={data.color}>
      <TagName>{data.tag}</TagName>
    </Container>
  );
};

export default Tag;
