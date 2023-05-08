import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-family: 'Roboto';
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
  font-size: 16px;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
