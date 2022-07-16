import React, { FC, HTMLAttributes, ReactChild } from 'react';
import styled from 'styled-components';

export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

const TypographyStyled = styled.div`
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const Typography: FC<TypographyProps> = ({ children }) => {
  return (
    <TypographyStyled>
      {children || `the snozberries taste like snozzberries`}
    </TypographyStyled>
  );
};
