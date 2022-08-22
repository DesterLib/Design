import { motion } from 'framer-motion';
import { styled, theme } from 'main/theme/stitches.config';
import React from 'react';
import alpha from 'utils/alpha';

const StyledButton = styled(motion.button, {
    padding: '0px $space$4',
    borderRadius: '$md',
    fontFamily: '$sans',
    textTransform: 'uppercase',
    fontSize: '12px',
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

export interface ButtonProps {
    variant?: 'filled' | 'outlined' | 'opaque' | 'transparent';
    shadow?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = React.forwardRef((props, ref: any) => {
    const { variant, shadow, children } = props;
    return (
        <StyledButton
            ref={ref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variant={variant}
            shadow={shadow}
            {...props}
        >
            {children}
        </StyledButton>
    );
});
export default Button;
