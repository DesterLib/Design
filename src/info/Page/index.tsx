import React from 'react';
import IntroBanner from '../../assets/banners/intro-banner.svg';

const Page = ({ title }: any) => {
  return (
    <div style={{width: '100%'}}>
      <h1>{title}</h1>
      <img style={{width: '100%'}} src={IntroBanner} />
    </div>
  );
};

export default Page;
