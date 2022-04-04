import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/theme';

import HomePage from './components/pages/HomePage/HomePage';
import NotesPage from './components/pages/NotesPage/NotesPage';
import ProtectedRoute from './utils/ProtectedRoute';
import { auth } from 'config/firebase';
import { useAppDispatch } from 'app/hooks';
import { getData } from 'features/auth/authSlice';

const App: React.FC = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((user => {
      if (user) {
        const { uid, displayName } = user
        dispatch(getData({ uid, displayName }))
        navigate('notes')
      }
    }))
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='notes' element={<ProtectedRoute/>}>
          <Route path='' element={<NotesPage/>}/>
        </Route>
        <Route path='*' element={<HomePage />}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
