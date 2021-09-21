import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color:red;
`

type ChildProps = {
    name: string,
    id: number,
    bio?: string,
  }
  export const Child: FC<ChildProps> = ({name, id, bio}): ReactElement => { 
    /* function body */ 
    return (
        <Title>{bio}</Title>
    )
  };