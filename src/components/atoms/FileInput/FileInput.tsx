import { useFormikContext } from 'formik';
import { rgba } from 'polished';
import React from 'react'
import styled from 'styled-components';
import Text from '../Text/Text';

interface IFile {
  name: string
}

const ImageInput = styled.input`
  display: none;
`;

const FileButton = styled.div`
  border: 1px solid ${props => props.theme.colors['grey-200']};
  font-size: ${props => props.theme.fontSizes.m};
  width: ${props => props.theme.measures.xl};
  height: ${props => props.theme.measures.l};
  display: grid;
  place-items: center;
  border-radius: 10px;
  background-color: ${props => rgba(props.theme.colors.primary, .8)};
  cursor: pointer;
  transition: all .2s ease;
  &:hover {
    box-shadow: ${(props) => props.theme.shadows.withShadow};
    background-color: ${props => rgba(props.theme.colors.primary, 0.7)};
    color: ${props => props.theme.colors['grey-600']};
  }
`;

const FileInput: React.FC<IFile> = (props) => {

  const { setFieldValue } = useFormikContext()
  const HandleClick = () => {
    const element = document.getElementsByName(props.name)[0]
    element.click()
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(props.name, e.currentTarget.files![0])
  }

  return (
    <FileButton onClick={HandleClick} >
      <ImageInput {...props} type='file' onChange={handleFileUpload} placeholder={'image'} />
      <Text size='m'>
        Add File
      </Text>
    </FileButton>
  )
}

export default FileInput