import React from 'react';
import styled from 'styled-components';
import { IconButton } from '../../Inputs/IconButton';

const StyledCardContainer = styled.div({
    width: '100%',
    maxWidth: '220px',
    height: '100%',
});

const StyledCardImageContainer = styled.div<{
    variant: 'portrait' | 'landscape';
}>(({ variant, theme: { palette, shape } }) => ({
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    borderRadius: shape.borderRadius.s,
    paddingBottom: variant === 'portrait' ? '150%' : '60%',
    backgroundColor: palette.primary.text,
    transition: '0.2s ease-out',
}));

const StyledCardImage = styled.img({
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    boxSizing: 'border-box',
    padding: '0',
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: '0',
    height: '0',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
    transition: '0.2s ease-out',
});

export const PlayButton = styled(IconButton)({
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    transition: '0.2s ease-out',
    opacity: '1',
});

type DefaultProps = {
    /**
     * Card variant
     */
    variant?: 'portrait' | 'landscape' | undefined;
    /**
     * Does the card require details button ?
     */
    showDetails?: boolean;
    /**
     * Does the card require favourites button ?
     */
    addToFavourite?: boolean;
    /**
     * Is the card disabled ?
     */
    title?: string;
    disabled?: boolean;
    image?: string;
    showRating?: boolean;
    rating?: string | number;
};

type CardProps = DefaultProps & React.ComponentProps<typeof StyledCardContainer>;

const Card: React.FC<CardProps> = ({
    variant = 'portrait',
    title = 'Test Title',
    image = 'https://www.themoviedb.org/t/p/w1280/ryKwNlAfDXu0do6SX9h4G9Si1kG.jpg',
    showRating = false,
    rating = '100',
    showDetails,
    addToFavourite,
}) => {
    return (
        <StyledCardContainer>
            <StyledCardImageContainer variant={variant}>
                <StyledCardImage src={image} />
                <PlayButton round icon='play_arrow'/>
            </StyledCardImageContainer>
        </StyledCardContainer>
    );
};

export default Card;
