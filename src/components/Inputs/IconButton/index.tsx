import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MaterialIcon from '../Icon';
import alpha from '../../Functions/alpha';

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
    size: string;
    round: boolean;
    wide: boolean;
    variant: 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error';
}>(({ variant, wide, round, theme: { palette, shape } }) => ({
    position: 'relative',
    zIndex: '105',
    fontWeight: '500',
    fontSize: '15px',
    border: '0px',
    cursor: 'pointer',
    aspectRatio: wide ? 'auto' : '1/1',
    padding: wide ? '10px 15px' : '10px',
    width: wide ? 'fit-content' : '50px',
    height: '50px',
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
     * Size of the icon
     */
    iconSize?: number;
    /**
     * Is the button disabled?
     */
    disabled?: boolean;
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
    size,
    variant='primary',
    wide,
    ...props
}) => {
    return (
        <StyledIconButton
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            type='button'
            wide={wide}
            variant={variant}
            round={round}
            {...props}
        >
            <TransitionGradiant round={round} variant={variant} className='transition-gradiant' />
            {materialIcon && <MaterialIcon name={icon} />}
            {!materialIcon && icon}
        </StyledIconButton>
    );
};
