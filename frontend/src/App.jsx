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
import OfferDetail from './pages/OfferDetail/OfferDetail';
import Container from './components/Container/Container';
import UserCard from './components/UserCard/UserCard';
import DashboardUser from './pages/Dashboard/DashboardUser/DashboardUser';
import DashboardSeller from './pages/Dashboard/DashboardSeller/DashboardSeller';
import DashboardAdmin from './pages/Dashboard/DashboardAdmin/DashboardAdmin';
import Booking from './pages/Booking/Booking';

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* Public */}

      <Route path="/usercard" exact element={<UserCard />} />

      <Route
        path="/"
        exact
        element={
          <>
            <Header />
            <Homepage />
          </>
        }
      />

      <Route
        path="/legal"
        exact
        element={
          <>
            <Header />
            <Container>
              <Legal />
            </Container>
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
            <Container>
              <Cgv />
            </Container>
            <Footer />
          </>
        }
      />

      <Route path="/login" exact element={<Login />} />

      <Route path="/register" exact element={<Register />} />

      <Route path="/forgot-password" exact element={<ForgotPassword />} />

      {/* Private */}

      <Route
        path="/locations"
        exact
        element={
          <>
            <Header />
            <Container>
              <Locations />
            </Container>
            <Footer />
          </>
        }
      />

      <Route
        path="/locations/:id/offers/"
        exact
        element={
          <>
            <Header />
            <Container>
              <LocationOffers />
            </Container>
            <Footer />
          </>
        }
      />

      <Route
        path="/locations/:locationId/offers/:offerId"
        exact
        element={
          <>
            <Header />
            <Container>
              <OfferDetail />
            </Container>
            <Footer />
          </>
        }
      />

      <Route
        path="/dashboard/user"
        exact
        element={
          <>
            <Header />
            <Container>
              <DashboardUser />
            </Container>
            <Footer />
          </>
        }
      />

      <Route
        path="/dashboard/seller"
        exact
        element={
          <>
            <Header />
            <Container>
              <DashboardSeller />
            </Container>
            <Footer />
          </>
        }
      />

      <Route
        path="/dashboard/admin"
        exact
        element={
          <>
            <Header />
            <Container>
              <DashboardAdmin />
            </Container>
            <Footer />
          </>
        }
      />

      <Route
        path="/booking"
        exact
        element={
          <>
            <Header />
            <Container>
              <Booking />
            </Container>
            <Footer />
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
