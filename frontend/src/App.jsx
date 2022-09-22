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
import Booking from './pages/Booking/Booking';
import Error404 from './pages/Error404/Error404';
import PrivateRoute from './utils/PrivateRoute';
import UpdateOffer from './pages/UpdateOffer/UpdateOffer';
import './App.scss';
import DashboardOffers from './pages/Dashboard/DashboardOffers';
import DashboardBookings from './pages/Dashboard/DashboardBookings';
import DashboardProfile from './pages/Dashboard/DashboardProfile';
import DashboardCreateOffer from './pages/Dashboard/DashboardCreateOffer';
import DashboardUsers from './pages/Dashboard/DashboardUsers';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Routes>
        {/* Public */}

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
          path="/legal/"
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
          path="/cgv/"
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

        <Route path="/login/" exact element={<Login />} />

        <Route path="/register/" exact element={<Register />} />

        <Route path="/forgot-password/" exact element={<ForgotPassword />} />

        <Route path="*" element={<Error404 />} />

        <Route
          path="/locations/"
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
          path="/locations/:locationId/offers/"
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
          path="/locations/:locationId/offers/:offerId/"
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

        {/* Private */}

        <Route
          path="/booking/"
          exact
          element={
            <PrivateRoute>
              <Header />
              <Container>
                <Booking />
              </Container>
              <Footer />
            </PrivateRoute>
          }
        />

        <Route
          path="/offers/:offerId/update"
          exact
          element={
            <PrivateRoute>
              <Header />
              <Container>
                <UpdateOffer />
              </Container>
              <Footer />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/offers"
          exact
          element={
            <PrivateRoute>
              <Header />
              <Container>
                <DashboardOffers />
              </Container>
              <Footer />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/bookings"
          exact
          element={
            <PrivateRoute>
              <Header />
              <Container>
                <DashboardBookings />
              </Container>
              <Footer />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/profile"
          exact
          element={
            <PrivateRoute>
              <Header />
              <Container>
                <DashboardProfile />
              </Container>
              <Footer />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/offer/:offerId"
          exact
          element={
            <PrivateRoute>
              <Header />
              <Container>
                <DashboardCreateOffer />
              </Container>
              <Footer />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/users/"
          exact
          element={
            <PrivateRoute>
              <Header />
              <Container>
                <DashboardUsers />
              </Container>
              <Footer />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
