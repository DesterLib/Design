import React from 'react';

const Page = ({ title, banner }: any) => {
  return (
    <div style={{width: '100%'}}>
      <h1>{title}</h1>
      <img style={{width: '100%'}} src={banner} />
    </div>
  );
};

export default Page;
