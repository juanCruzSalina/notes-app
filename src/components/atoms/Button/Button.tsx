import { rgba } from 'polished';
import React from 'react'
import styled from 'styled-components';
import Text from '../Text/Text';

interface IButton {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any,
  isSubmit?: boolean
}

const StyleButton = styled.button<IButton>`
  width: fit-content;
  padding: ${props => props.theme.fontSizes.xs} ${props => props.theme.spacing.s};
  background-color: ${props => rgba(props.theme.colors.primary, 0.8)};
  color: ${props => props.theme.colors.light};
  border: 1px solid ${props => props.theme.colors['grey-200']};
  border-radius: 5px;
  cursor: pointer;
  transition: all .2s ease;
  &:hover {
    box-shadow: ${(props) => props.theme.shadows.withShadow};
    background-color: ${props => rgba(props.theme.colors.primary, 0.7)};
    color: ${props => props.theme.colors['grey-600']};
  }
`;

const ButtonText = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button: React.FC<IButton> = (props) => {
  return (
    <StyleButton
      type={props.isSubmit ? 'submit' : undefined}
      {...props}
    >
      <ButtonText size='m'>
        {props.children}
      </ButtonText>
    </StyleButton>
  )
}

export default Button