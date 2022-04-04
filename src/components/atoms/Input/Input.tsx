import React from 'react'
import styled from 'styled-components';
import { Field } from 'formik'

interface IInput {
  placeholder?: string,
  name: string,
  type: 'text' | 'email' | 'password' | 'file'
}

const StyledInput = styled(Field)`
  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.black};
  background: transparent;
  outline: none;
  border: none;
  padding: ${props => props.theme.fontSizes.xs} ${props => props.theme.spacing.xxs};
  &::-webkit-input-placeholder {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.white};
  width: fit-content;
  border: 1px solid ${props => props.theme.colors['grey-200']};
  transition: all ease 0.3s;
  &:hover {
    box-shadow: ${props => props.theme.shadows.withShadow};
  }
`;

const Input: React.FC<IInput> = (props) => {
  return (
    <Wrapper>
      <StyledInput {...props}/>
    </Wrapper>
  )
}

export default Input