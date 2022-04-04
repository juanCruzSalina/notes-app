import React from 'react'
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import { rgba } from 'polished';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { AnimatePresence, motion } from "framer-motion";

import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import InputError from 'components/atoms/InputError/InputError';
import Heading from 'components/atoms/Heading/Heading';
import DatePickerField from 'components/molecules/DatePickerField/DatePickerField';
import FileInput from 'components/atoms/FileInput/FileInput';
import { noteManager } from 'features/notes/notesSlice';
import { reset, uiState } from 'features/ui/uiSlice';



export interface INoteFormValues {
  id?: string;
  title: string;
  body: string;
  date: Date | number;
  image?: File
}

interface INoteForm {
  handleSubmit: (values: INoteFormValues) => void
}

const Wrapper = styled.div`
  grid-area: forms;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  text-align: center;
  display: grid;
  place-items: center;
  background-color: ${props => rgba(props.theme.colors.dark, .5)};
`;

const StyledForm = styled(Form)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${props => rgba(props.theme.colors.primary, .7)};
  border-radius: ${props => props.theme.radius.rounded};
`;

const FormInputs = styled.div`
  height: 70%;
`;

const InputWithError = styled.div`
  height: ${props => props.theme.measures.xl};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const FormButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const FormAnimation = styled(motion.div)`
  width: 70%;
  height: 55%;

`;

const NotesForm: React.FC<INoteForm> = ({ handleSubmit }) => {

  const { currentNote } = useAppSelector(noteManager)
  const { type } = useAppSelector(uiState)
  const dispatch = useAppDispatch()
  const NoteSchema = Yup.object().shape({
    title: Yup.string()
      .required('Note title required!'),

    body: Yup.string()
      .required('Note body required!'),

    date: Yup.date()
      .min(new Date(), `Note can't be settled on the past!`)
      .required('Date is required')
  })

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const enterAnimation = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition },
    exit: {
      opacity: 0,
      transition: { transition }
    }
  };

  return (
    <Wrapper>
      <AnimatePresence>
        {
          (type)
          ? (
            <FormAnimation
            variants={enterAnimation}
              initial={'initial'}
              exit={'exit'}
              animate={'enter'}
              >
                <Formik
                  initialValues={{
                    title: (type === 'edit') ? currentNote!.title : '',
                    body: (type === 'edit') ? currentNote!.body : '',
                    date: (type === 'edit') ? new Date(currentNote!.date) : new Date(),
                    image: undefined
                  }}
                  onSubmit={(values: INoteFormValues) => {
                    handleSubmit(values)
                    dispatch(reset())
                  }}
                  validationSchema={NoteSchema}
                  >
                  {({errors, touched, handleReset}) => (
                    <StyledForm>
                      <Heading size='m'>New note:</Heading>
                      <FormInputs>
                        <InputWithError>
                          <Input name='title' type='text' placeholder='Note title'/>
                          {errors.title && touched.title ? <InputError>{errors.title}</InputError> : null}
                        </InputWithError>
                        <InputWithError>
                          <Input name='body' type='text' placeholder='Note body'/>
                          {errors.body && touched.body ? <InputError>{errors.body}</InputError> : null}
                        </InputWithError>
                        <InputWithError>
                          <DatePickerField name='date'/>
                          {errors.date && touched.date ? <InputError>{errors.date}</InputError> : null}
                        </InputWithError>
                        <InputWithError>
                          <FileInput name='image' />
                        </InputWithError>
                      </FormInputs>
                      <FormButton>
                        <Button onClick={(e: React.SyntheticEvent) => {
                          e.preventDefault()
                          handleReset()
                          dispatch(reset())
                        }}>Cancel</Button>
                        <Button isSubmit>Add Note</Button>
                      </FormButton>
                      </StyledForm>
                    )
                  }
                </Formik>
            </FormAnimation>
          )
          : null
        }
      </AnimatePresence>
    </Wrapper>
  )
}

export default NotesForm