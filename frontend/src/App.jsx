import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, SignIn, SignUp, Profile, CreateForm } from './pages/index';
import { Header, PrivateRoute } from './components/index'; 
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />

        <Route element={<PrivateRoute />} >
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-form' element={<CreateForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;