import React from 'react';
import styled from 'styled-components';
import { IconButton } from '../../Inputs/IconButton';

const StyledCardWrapper = styled.div({
    width: '100%',
    height: '100%',
});

const StyledCardContainer = styled.div<{
    variant: 'portrait' | 'landscape';
}>(({ variant, theme: { palette, shape } }) => ({
    width: '100%',
    borderRadius: shape.borderRadius.s,
    transition: '0.2s ease-out',
    maxWidth: variant === 'portrait' ? '220px' : '320px',
    height: '100%',
    overflow: 'hidden',
    '&:hover': {
        boxShadow: `0px 0px 0px 4px ${palette.background.paper}`,
    },
    '&:hover .cardImageWrapper .cardImage': {
        opacity: '0.8',
    },
    '&:hover .topWrapper': {
        opacity: '1',
    },
    '&:hover .centerWrapper': {
        opacity: '1',
    },
    '&:hover .bottomWrapper': {
        opacity: '1',
    },
}));

const StyledCardImageContainer = styled.div<{
    variant: 'portrait' | 'landscape';
}>(({ variant, theme: { palette } }) => ({
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
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

export const TopButtonWrapper = styled.div({
    position: 'absolute',
    top: '0',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    transition: '0.2s ease-out',
    width: '100%',
    opacity: '0',
    zIndex: '10',
});

export const CenterButtonWrapper = styled.div({
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100%',
    right: '0',
    margin: 'auto',
    transition: '0.2s ease-out',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '0',
});

export const BottomButtonWrapper = styled.div(({ theme: { palette, shape } }) => ({
    position: 'absolute',
    bottom: '0',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    transition: '0.2s ease-out',
    borderRadius: shape.borderRadius.s,
    background: `linear-gradient(0deg, ${palette.background.default} 0%, #ffffff00 100%)`,
    width: '100%',
    opacity: '0',
}));

export const PlayButton = styled(IconButton)(({ theme: { palette } }) => ({
    height: '60px',
    width: '60px',
    color: palette.text.primary,
}));

export const StyledIconButton = styled(IconButton)(({ icon, theme: { palette } }) => ({
    '&:hover': {
        color: icon === 'favorite' ? palette.error.main : palette.info.main,
    },
}));

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
    title = 'Card Title',
    image,
    // showRating = false,
    // rating = '100',
    // showDetails,
    // addToFavourite,
}) => {
    return (
        <StyledCardWrapper>
            <StyledCardContainer variant={variant}>
                <TopButtonWrapper className='topWrapper'>
                    <div
                        style={{ padding: '5px 10px', backgroundColor: '#ffffff', borderRadius: '10px' }}
                    >
                        E 24
                    </div>
                </TopButtonWrapper>
                <StyledCardImageContainer className='cardImageWrapper' variant={variant}>
                    <StyledCardImage className='cardImage' src={image} />
                    <CenterButtonWrapper className='centerWrapper'>
                        <PlayButton scale='large' round icon='play_arrow' />
                    </CenterButtonWrapper>
                </StyledCardImageContainer>
                <BottomButtonWrapper className='bottomWrapper'>
                    <StyledIconButton shadow variant='secondary' icon='favorite' />
                    <StyledIconButton shadow variant='secondary' icon='info' />
                </BottomButtonWrapper>
            </StyledCardContainer>
            <p>{title}</p>
        </StyledCardWrapper>
    );
};

export default Card;
