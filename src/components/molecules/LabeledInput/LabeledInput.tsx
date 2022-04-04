import Input from '../../atoms/Input/Input';
import Text from '../../atoms/Text/Text';
import React, { Fragment } from 'react'
import styled from 'styled-components';

interface ILabeledInput {
  label: string,
  name: string,
  placeholder: string,
  type: 'text' | 'email' | 'password'
}

const LabelText = styled(Text)`
  font-weight: 500;
  margin-bottom: ${props => props.theme.fontSizes.xxs};
`;

const LabeledInput: React.FC<ILabeledInput> = (props) => {
  return (
    <Fragment>
      <LabelText size='m' >{props.label}</LabelText>
      <Input name={props.name} placeholder={props.placeholder} type={props.type}/>
    </Fragment>
  )
}

export default LabeledInput