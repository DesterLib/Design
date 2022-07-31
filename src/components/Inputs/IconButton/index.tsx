import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MaterialIcon from '../Icon';
import alpha from '../../Functions/alpha';

const IconWrapper = styled.div({
    transition: '0.2s ease-out',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
    padding: '0'
});

const TransitionGradiant = styled.span<{
    round?: boolean;
    variant: 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error';
}>(({ variant, round, theme: { palette, shape } }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    borderRadius: round ? shape.borderRadius.round : shape.borderRadius.s,
    transition: 'opacity 0.2s linear',
    backgroundImage: `linear-gradient(45deg, ${palette[variant].dark} 0%, ${palette[variant].dark} 100%)`,
    zIndex: '-1',
}));

const StyledIconButton = styled(motion.button)<{
    size: 'small' | 'medium' | 'large';
    round: boolean;
    wide: boolean;
    shadow: boolean;
    variant: 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error';
}>(({ shadow, variant, wide, round, theme: { palette, shape } }) => ({
    position: 'relative',
    zIndex: '105',
    fontWeight: '500',
    fontSize: '15px',
    border: '0px',
    cursor: 'pointer',
    aspectRatio: wide ? 'auto' : '1/1',
    width: 'fit-content',
    boxShadow: shadow
        ? 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
        : 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: palette[variant].text,
    backgroundImage: `linear-gradient(45deg, ${palette[variant].dark} 0%, ${palette[variant].main} 100%)`,
    borderRadius: round ? shape.borderRadius.round : shape.borderRadius.s,
    '&:hover .transition-gradiant': {
        opacity: '1',
    },
    '&:disabled': {
        backgroundImage: `linear-gradient(45deg, ${alpha(palette[variant].light, 0.6)} 0%, ${alpha(
            palette[variant].light,
            0.5,
        )} 100%)`,
    },
    '&:disabled .transition-gradiant': {
        opacity: '0',
    },
}));

type DefaultProps = {
    /**
     * Is the button round?
     */
    round?: boolean;
    /**
     * Is the button wide?
     */
    wide?: boolean;
    /**
     * Is the button large?
     */
    large?: boolean;
    /**
     * Is icon material
     */
    materialIcon?: boolean;
    /**
     * Does the button have an icon?
     */
    icon?: React.ReactNode | string;
    /**
     * Is the button large ?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Is the button disabled?
     */
    disabled?: boolean;

    shadow?: boolean;
    /**
     * Optional click handler
     */
    onClick?: () => void;
};

type IconButtonProps = DefaultProps & React.ComponentProps<typeof StyledIconButton>;

/**
 * Primary UI component for user interaction
 */
export const IconButton: React.FC<IconButtonProps> = ({
    icon,
    materialIcon = true,
    round = false,
    size = 'small',
    variant = 'primary',
    wide,
    shadow,
    ...props
}) => {
    return (
        <StyledIconButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type='button'
            wide={wide}
            variant={variant}
            shadow={shadow}
            size={size}
            round={round}
            {...props}
        >
            <TransitionGradiant round={round} variant={variant} className='transition-gradiant' />
            <IconWrapper>
                {materialIcon && <MaterialIcon name={icon} />}
                {!materialIcon && icon}
            </IconWrapper>
        </StyledIconButton>
    );
};
