import { motion } from 'framer-motion';
import { styled, theme } from 'main/theme/stitches.config';
import React from 'react';
import alpha from 'utils/alpha';

import Icon from 'components/Icon/Icon';

const StyledIconButton = styled(motion.button, {
    padding: '0px',
    borderRadius: '$md',
    fontFamily: '$sans',
    textTransform: 'uppercase',
    fontSize: '12px',
    width: '40px',
    height: '40px',
    fontWeight: '600',
    letterSpacing: '1px',
    cursor: 'pointer',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.4s ease',
    variants: {
        color: {
            primary: {},
            secondary: {},
            success: {},
            info: {},
            warning: {},
            error: {},
        },
        variant: {
            filled: {
                backgroundColor: '$blue500',
                color: 'white',
                '&:hover': {
                    backgroundColor: '$blue400',
                },
                '&:active': {
                    backgroundColor: '$primary600',
                },
            },
            outlined: {
                color: '$blue500',
                backgroundColor: 'transparent',
                boxShadow: 'inset 0px 0px 0px 1px $colors$blue400',
                '&:hover': {
                    boxShadow: 'inset 0px 0px 0px 1px $colors$blue400',
                },
                '&:active': {
                    boxShadow: 'inset 0px 0px 0px 1px $colors$primary600',
                },
            },
            opaque: {
                color: '$blue500',
                backgroundColor: alpha(theme.colors.blue400.value, 0.1),
                '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: alpha(theme.colors.blue500.value, 0.2),
                },
            },
            transparent: {
                color: '$blue500',
                backgroundColor: 'transparent',
                '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: alpha(theme.colors.blue500.value, 0.1),
                },
            },
            plain: {
                color: '$textPrimary',
                backgroundColor: alpha('#808080', 0.1),
                '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: alpha('#808080', 0.2),
                },
            },
        },
        shadow: {
            true: {
                boxShadow: '0px 4px 14px 0px $colors$blue500',
            },
        },
    },
});

export interface IconButtonProps {
    variant?: 'filled' | 'outlined' | 'opaque' | 'transparent' | 'plain';
    shadow?: boolean;
    icon: string;
}

const IconButton: React.FC<IconButtonProps> = React.forwardRef(
    ({ variant, icon, ...props }, ref: any) => {
        return (
            <StyledIconButton
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variant={variant}
                {...props}
            >
                <Icon name={icon} />
            </StyledIconButton>
        );
    },
);
export default IconButton;
