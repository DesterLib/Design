import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import MaterialIcon from '../Icon';
import alpha from '../../Functions/alpha';

const TransitionGradiant = styled.span<{
    variant: 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error',
}>(({ variant, theme: { palette, shape } }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    borderRadius: shape.borderRadius.s,
    transition: 'opacity 0.2s linear',
    backgroundImage: `linear-gradient(45deg, ${palette[variant].main} 0%, ${palette[variant].light} 100%)`,
    zIndex: '-1',
}));

const StartIconWrapper = styled.span({
    paddingRight: '10px',
});

const EndIconWrapper = styled.span({
    paddingLeft: '10px',
});

const StyledButton = styled(motion.button)<{
    variant: 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error',
    size?: 'small' | 'medium' | 'large'
}>(({ variant, theme: { palette, shape } }) => ({
    position: 'relative',
    zIndex: '105',
    fontWeight: '500',
    fontSize: '15px',
    height: '40px',
    border: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '10px 15px',
    color: palette[variant].text,
    backgroundImage: `linear-gradient(45deg, ${palette[variant].dark} 0%, ${palette[variant].main} 100%)`,
    borderRadius: shape.borderRadius.s,
    '&:hover .transition-gradiant': {
        opacity: '1',
    },
    '&:disabled': {
        cursor: 'not-allowed',
        color: palette.text.disabled,
        backgroundImage: `linear-gradient(45deg, ${alpha(palette[variant].light, 0.3)} 0%, ${alpha(
            palette[variant].light,
            0.3,
        )} 100%)`,
    },
    '&:disabled .transition-gradiant': {
        opacity: '0',
    },
}));

type DefaultProps = {
    /**
     * Does the button have a variant ?
     */
    variant?: 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error' | undefined;
    /**
     * Is the button round ?
     */
    round?: boolean;
    /**
     * Is the button large ?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Does the button have an starticon ?
     */
    startIcon?: string;
    /**
     * Does the button have an endIcon ?
     */
    endIcon?: string;
    /**
     * Size of the icon
     */
    iconSize?: number;
    /**
     * Is the button disabled ?
     */
    disabled?: boolean;
    /**
     * Does the button have children ?
     */
    children?: React.ReactNode;
    /**
     * Optional click handler
     */
    onClick?: () => void;
};

type ButtonProps = DefaultProps & React.ComponentProps<typeof StyledButton>;

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
    children,
    large = false,
    round = false,
    materialIcon = true,
    disabled,
    size = 'medium',
    startIcon,
    variant = 'primary',
    endIcon,
    iconSize,
    ...props
}) => {
    return (
        <>
            <StyledButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type='button'
                large={large}
                disabled={disabled}
                round={round}
                startIcon={startIcon}
                size={size}
                endIcon={endIcon}
                variant={variant}
                {...props}
            >
                <TransitionGradiant variant={variant} className='transition-gradiant' />
                {startIcon && (
                    <StartIconWrapper>
                        <MaterialIcon name={startIcon} />
                    </StartIconWrapper>
                )}
                {children}
                {endIcon && (
                    <EndIconWrapper>
                        <MaterialIcon name={endIcon} />
                    </EndIconWrapper>
                )}
            </StyledButton>
        </>
    );
};

export default Button;
