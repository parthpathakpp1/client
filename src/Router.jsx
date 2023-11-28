import React from 'react'
import { BrowserRouter, Route,Routes, } from 'react-router-dom';
import App from './App';
import Activities from './pages/activities/Activities';

import Hotels from './pages/hotels/Hotels';
import ActivitiesDetailsPage from './pages/detailspage/ActivitiesDetails';
import HotelsDetailsPage from './pages/detailspage/HotelsDetails';
import { InputProvider } from './context/InputContext';
import Profile from './pages/profile/Profile';
import OtherTravellers from './pages/othertravellers/OtherTravellers';
import Promo from './pages/promo/Promo';
import Payments from './pages/payment/Payment';
import Settings from './pages/settings/Settings';
import Logout from './pages/logout/Logout';
import Bookings from './pages/bookings/Bookings';
import Flights from './pages/flights/Flights';
import Signup from './pages/signup/SignUp';
import GetStarted from './pages/admin/Admin1';
import ServicePage from './pages/admin/Admin2';
import PlaceSelectorPage from './pages/admin/Admin3';
import BookingPage from './pages/booking/Booking';
import PhotoUploadPage from './pages/admin/Photos';
import RecorderPage from './pages/admin/PhotoDrag'
import AdminExtra from './pages/admin/AdminExtra';
import SetPrice from './pages/admin/SetPrice';
import SetDiscounts from './pages/admin/SetDiscounts';
import Preview from './pages/admin/Preview';
import FinalPage from './pages/admin/FinalPage';
import Review from './pages/admin/Review';
import Services1 from './pages/admin/Services1';
import Services2 from './pages/admin/Services2';
import Services3 from './pages/admin/Services3';
import ExtraContent1 from './pages/admin/ExtraContent1';
import Commitment from './pages/admin/Commitment';
import PlaceSelectorPage1 from './pages/admin/Admin4';

const Router = () => {
  return (
   <BrowserRouter>
   <InputProvider>
    <Routes>
        <Route path='/' element={<App />}  />
        <Route path='/activities' element={<Activities />} />
        <Route path="/activitiesdetails/:id" element={<ActivitiesDetailsPage />} />
        <Route path='/hotelsdetails' element={<HotelsDetailsPage />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/other-travellers' element={<OtherTravellers />} />
        <Route path='/promo' element={<Promo />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/flights' element={<Flights />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/getstarted' element={<GetStarted />} />
        <Route path='/services1' element={<Services1 />} />
        <Route path='/services2' element={<Services2 />} />
        <Route path='/services3' element={<Services3 />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/admin' element={<PlaceSelectorPage />} />
        <Route path='/admin1' element={<PlaceSelectorPage1 />} />
        <Route path='/photos' element={<PhotoUploadPage />} />
        <Route path='/drag' element={<RecorderPage />} />
        <Route path='/extra-content' element={<AdminExtra />} />
        <Route path='/extra-content1' element={<ExtraContent1 />} />
        <Route path='/set-price' element={<SetPrice />} />
        <Route path='/set-discounts' element={<SetDiscounts/>} />
        <Route path='/final-page' element={<FinalPage />} />
        <Route path='/review' element={<Review />} />
        <Route path='/commitment' element={<Commitment />} />
    </Routes>
    </InputProvider>
   </BrowserRouter>
  )
}

export default Router;