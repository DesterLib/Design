import React from 'react';

type MaterialIconProps = {
    name: React.ReactNode | string;
};

const MaterialIcon: React.FC<MaterialIconProps> = ({ name }) => {
    return <span className='material-symbols-rounded'>{name}</span>;
};

export default MaterialIcon;
