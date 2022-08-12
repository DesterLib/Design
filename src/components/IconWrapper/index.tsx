import React from 'react';

export interface IconProps {
    icon: string;
}

const Icon = ({ icon }: IconProps) => {
    return <i style={{ fontSize: '22px' }} className={`ti ti-${icon}`}></i>;
};

export default Icon;
