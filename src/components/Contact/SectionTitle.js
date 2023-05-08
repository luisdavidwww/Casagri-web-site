import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-size: 1.7rem;
    font-family: 'PT Sans', sans-serif;
  }

  h2 {
    font-family: 'PT Sans', sans-serif;
    font-size: 37px;
    text-align: center;
    align-items: center;
    color: #0C572F;
    margin-top: 50px;
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 35px;
      margin-button: -10px;
    }
  }
`;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}
