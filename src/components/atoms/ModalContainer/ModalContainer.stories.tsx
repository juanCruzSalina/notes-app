import React, { Fragment } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ModalContainer from './ModalContainer'
import { useAppDispatch } from '../../../app/hooks'
import { toggleModal } from '../../../features/ui/uiSlice'
import Button from '../../atoms/Button/Button'

export default {
  title: 'Components/Atoms/Modal Container',
  component: ModalContainer
} as ComponentMeta<typeof ModalContainer>

const Template: ComponentStory<typeof ModalContainer> = (args) => {

  const dispatch = useAppDispatch()
  const launchModal = () => dispatch(toggleModal())

  return(
    <Fragment>
      <Button onClick={launchModal} >Launch modal</Button>
      <ModalContainer {...args} />
    </Fragment>
  )
}

export const Default = Template.bind({})
Default.args = {
  children:  <div>test</div>
}