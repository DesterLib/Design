import * as React from 'react'
import styled, { css } from 'styled-components'

import { breakpoints } from '../../styles/breakpoints'

const Spacer = styled.span`
  padding-left: 1rem;
`

const StyledButton = styled.button<{
  clear: boolean
  large: boolean
  withIcon: boolean
  round: boolean
}>(
  ({ clear, large, round, withIcon, theme: { palette, shape } }) => css`
    outline: none;
    border: 0;
    font-family: 'Hind';
    border-radius: ${round ? shape.borderRadius.xl : shape.borderRadius.xs};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${withIcon ? '0.7rem' : large ? '1.125rem 1rem' : '0.875rem 1rem'};
    color: ${clear ? palette.primary.contrastText : palette.primary.contrastText};

    transition: box-shadow 150ms ease-in;
    z-index: 1;
    background-color: ${clear ? palette.secondary.main : palette.secondary.main};

    &:hover {
      cursor: pointer;
    }

    &:focus {
    }

    &:disabled {
      opacity: 0.4;
    }

    @media ${breakpoints.M} {
      padding: ${withIcon ? '1rem' : large ? '1.125rem 1.5rem' : '0.875rem 1.5rem'};
    }
  `
)

type DefaultProps = {
  /**
   * Clear button styles leaving just a text
   */
  clear?: boolean
  round?: boolean
  /**
   * Is the button large?
   */
  large?: boolean
  /**
   * Does the button have an icon?
   */
  icon?: string
  /**
   * Size of the icon
   */
  iconSize?: number
  /**
   * Is the button disabled?
   */
  disabled?: boolean
  /**
   * Does the button have an icon?
   */
  children?: React.ReactNode | string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

type ButtonProps = DefaultProps & React.ComponentProps<typeof StyledButton>

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  large = false,
  clear = false,
  round = false,
  icon,
  iconSize,
  ...props
}) => {
  // const { palette } = useTheme()

  return (
    <StyledButton
      type="button"
      large={large}
      clear={clear}
      round={round}
      withIcon={!!icon}
      {...props}
    >
      {/* {icon && (
        <Icon color={clear ? color.primaryText : color.buttonText} size={iconSize} name={icon} />
      )} */}
      {icon && children && <Spacer />}
      {children}
    </StyledButton>
  )
}