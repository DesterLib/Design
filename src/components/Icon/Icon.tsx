import { styled } from 'main/theme/stitches.config';
import React from 'react';

const StyledIcon = styled('span', {
    padding: '0px',
    aspectRatio: '1/1',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'inherit',
});

export interface IconProps {
    name: string;
}

const Icon: React.FC<IconProps> = React.forwardRef((props, ref: any) => {
    const { name } = props;
    return (
        <StyledIcon ref={ref} {...props} className='material-symbols-rounded'>
            {name}
        </StyledIcon>
    );
});
export default Icon;
