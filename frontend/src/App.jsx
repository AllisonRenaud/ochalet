import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Homepage from './pages/Homepage/Homepage';
import Register from './pages/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Legal from './pages/Legal/Legal';
import Cgv from './pages/Cgv/Cgv';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Locations from './pages/Locations/Locations';
import LocationOffers from './pages/LocationOffers/LocationOffers';

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* Public */}

      <Route path="/" exact element={<Homepage />} />

      <Route
        path="/legal"
        exact
        element={
          <>
            <Header />
            <Legal />
            <Footer />
          </>
        }
      />

      <Route
        path="/cgv"
        exact
        element={
          <>
            <Header />
            <Cgv />
            <Footer />
          </>
        }
      />

      <Route
        path="/login"
        exact
        element={
          <>
            <Header isTransparent isWhite />
            <Login />
          </>
        }
      />

      <Route
        path="/register"
        exact
        element={
          <>
            <Header isTransparent />
            <Register />
          </>
        }
      />

      <Route
        path="/forgot-password"
        exact
        element={
          <>
            <Header isTransparent />
            <ForgotPassword />
          </>
        }
      />

      {/* Private */}

      <Route
        path="/locations/:id/offers"
        exact
        element={
          <>
            <Header isTransparent />
            <LocationOffers />
            <Footer />
          </>
        }
      />

      <Route
        path="/locations"
        exact
        element={
          <>
            <Header isTransparent />
            <Locations />
            <Footer />
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
