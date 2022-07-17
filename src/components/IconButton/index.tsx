import * as React from 'react';
import styled from 'styled-components';
import alpha from '../alpha';
import { motion } from 'framer-motion';
import MaterialIcon from '../Icon';

const TransitionGradiant = styled.span<{
    icon?: boolean;
}>(({ icon, theme: { palette, shape } }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    borderRadius: icon ? shape.borderRadius.round : shape.borderRadius.s,
    transition: 'opacity 0.2s linear',
    backgroundImage: `linear-gradient(45deg, ${palette.primary.dark} 0%, ${palette.primary.dark} 100%)`,
    zIndex: '-1',
}));

const StyledIconButton = styled(motion.button)<{
    size: string;
    round: boolean;
    wide: boolean;
}>(({ wide, round, theme: { palette, shape } }) => ({
    position: 'relative',
    zIndex: '105',
    fontWeight: '500',
    fontSize: '15px',
    border: '0px',
    cursor: 'pointer',
    aspectRatio: wide ? 'auto' : '1/1',
    padding: wide ? '10px 15px' : '10px',
    width: wide ? 'fit-content' : '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `linear-gradient(45deg, ${palette.primary.dark} 0%, ${palette.primary.main} 100%)`,
    borderRadius: round ? shape.borderRadius.round : shape.borderRadius.s,
    '&:hover .transition-gradiant': {
        opacity: '1',
    },
    '&:disabled': {
        backgroundImage: `linear-gradient(45deg, ${alpha(palette.primary.light, 0.6)} 0%, ${alpha(
            palette.primary.light,
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
    wide,
    ...props
}) => {
    return (
        <StyledIconButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type='button'
            wide={wide}
            round={round}
            {...props}
        >
            <TransitionGradiant className='transition-gradiant' />
            {materialIcon && <MaterialIcon name={icon} />}
            {!materialIcon && icon}
        </StyledIconButton>
    );
};
