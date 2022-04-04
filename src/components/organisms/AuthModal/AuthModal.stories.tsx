import React, { Fragment } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import AuthModal from './AuthModal'
import { useAppDispatch } from 'app/hooks'
import Button from 'components/atoms/Button/Button'
import { toggleModal } from 'features/ui/uiSlice'

export default {
  title: 'Components/Organisms/Auth Modal',
  component: AuthModal
} as ComponentMeta<typeof AuthModal>

const Template: ComponentStory<typeof AuthModal> = (args) => {

  const dispatch = useAppDispatch()
  const handleSignIn = () => {
    dispatch(toggleModal())
  }

  return(
    <Fragment>
      <Button onClick={handleSignIn} >Sign In</Button>
      <AuthModal />
    </Fragment>
  )
}

export const Default = Template.bind({})
Default.args = {}