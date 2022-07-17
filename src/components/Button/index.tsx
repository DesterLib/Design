import * as React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import alpha from '../alpha';
import MaterialIcon from '../Icon';

const PrimaryTransitionGradiant = styled.span(({ theme: { palette, shape } }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    borderRadius: shape.borderRadius.s,
    transition: 'opacity 0.2s linear',
    backgroundImage: `linear-gradient(45deg, ${palette.primary.main} 0%, ${palette.primary.light} 100%)`,
    zIndex: '-1',
}));

const SecondaryTransitionGradiant = styled.span(({ theme: { palette, shape } }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    borderRadius: shape.borderRadius.s,
    transition: 'opacity 0.2s linear',
    backgroundImage: `linear-gradient(45deg, ${palette.secondary.main} 0%, ${palette.secondary.light} 100%)`,
    zIndex: '-1',
}));

const StartIconWrapper = styled.span({
    paddingRight: '10px',
});

const EndIconWrapper = styled.span({
    paddingLeft: '10px',
});

const BaseButton = styled(motion.button)({
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
});

const PrimaryButton = styled(BaseButton)(({ theme: { palette, shape } }) => ({
    color: palette.primary.text,
    backgroundImage: `linear-gradient(45deg, ${palette.primary.dark} 0%, ${palette.primary.main} 100%)`,
    borderRadius: shape.borderRadius.s,
    '&:hover .transition-gradiant': {
        opacity: '1',
    },
    '&:disabled': {
        cursor: 'not-allowed',
        color: palette.text.disabled,
        backgroundImage: `linear-gradient(45deg, ${alpha(palette.primary.light, 0.3)} 0%, ${alpha(
            palette.primary.light,
            0.3,
        )} 100%)`,
    },
    '&:disabled .transition-gradiant': {
        opacity: '0',
    },
}));

const SecondaryButton = styled(BaseButton)(({ theme: { palette, shape } }) => ({
    color: palette.secondary.text,
    backgroundImage: `linear-gradient(45deg, ${palette.secondary.dark} 0%, ${palette.secondary.main} 100%)`,
    borderRadius: shape.borderRadius.s,
    '&:hover .transition-gradiant': {
        opacity: '1',
    },
    '&:disabled': {
        cursor: 'not-allowed',
        color: palette.text.disabled,
        backgroundImage: `linear-gradient(45deg, ${alpha(palette.secondary.light, 0.3)} 0%, ${alpha(
            palette.secondary.light,
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
    large?: boolean;
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
    children?: React.ReactNode | string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
};

type ButtonProps = DefaultProps & React.ComponentProps<typeof BaseButton>;

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
    children,
    large = false,
    round = false,
    materialIcon = true,
    disabled,
    startIcon,
    variant = 'primary',
    endIcon,
    iconSize,
    ...props
}) => {
    return (
        <>
            {(variant === 'primary' || variant === undefined) && (
                <PrimaryButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type='button'
                    large={large}
                    disabled={disabled}
                    round={round}
                    startIcon={startIcon}
                    endIcon={endIcon}
                    {...props}
                >
                    <PrimaryTransitionGradiant className='transition-gradiant' />
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
                </PrimaryButton>
            )}
            {variant === 'secondary' && (
                <SecondaryButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type='button'
                    large={large}
                    disabled={disabled}
                    round={round}
                    startIcon={startIcon}
                    endIcon={endIcon}
                    {...props}
                >
                    <SecondaryTransitionGradiant className='transition-gradiant' />
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
                </SecondaryButton>
            )}
        </>
    );
};

export default Button;
