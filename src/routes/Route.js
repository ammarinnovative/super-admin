import React, { createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteSwitch from './RouteSwitch';
import Home from '../views/Website/Home'
import AboutUs from '../views/Website/AboutUs';
import ContactUs from '../views/Website/ContactUs';
import Reviews from '../views/Website/Reviews';
import NotFound from '../views/NotFound'
import Header from '../components/Website/Header';
import Footer from '../components/Website/Footer';
import Bars from '../views/Website/Bars';
import StoreProfile from '../views/Website/StoreProfile';
import BarOwner from '../views/Website/BarOwner';
import Signup from '../views/Dashboard/Signup/index.js';
import Login from '../views/Dashboard/Login/index.js';
import Plan from '../views/Dashboard/Plans/index.js';
import Equipment from '../views/Dashboard/Equipment/index.js';
import Payment from '../views/Dashboard/Payment/index.js';
import Profile from '../views/Dashboard/Profile/index.js';
import BarInformation from '../views/Dashboard/Profile/barinformation';
import ChooseCategory from '../views/Dashboard/Menu/ChooseCategory';
import ChooseSubCategory from '../views/Dashboard/Menu/ChooseSubcategory';
import Addbarinfo from '../views/Dashboard/Bar/Addbarinfo';
import Addfirstmenu from '../views/Dashboard/Bar/addfirstmenu';
import Dashboard from '../views/Dashboard/Home/index.js';
import Menu from '../views/Dashboard/Menu/index.js';
import Subscription  from '../views/Dashboard/Subscription/index.js';
import Event  from '../views/Dashboard/Event/index.js';
import Feed  from '../views/Dashboard/Feed/index.js';
import Analytics from '../views/Dashboard/Analytics/index.js'
import Promotions  from '../views/Dashboard/Promotions/index.js'
import TeamMembers  from '../views/Dashboard/TeamMembers/index.js'
import Contact from '../views/Dashboard/ContactUs/index.js'
import Profilesetting from '../views/Dashboard/Profilesetting/index.js'
import Addevents from '../views/Dashboard/Event/Addevents';
import SingleMenu from '../views/Dashboard/Menu/SingleMenu';
import SingleEvent from '../views/Dashboard/Event/SingleEvent';
import Tips from '../views/Order/Tips';
import SinglePromotion from '../views/Dashboard/Promotions/SinglePromotion';
import Order from '../views/Order/Home/index.js';
import ForgetPasword from "../views/Dashboard/ForgetPassword/index";
import ResetPassword from '../views/Dashboard/ResetPassword/ResetPassword';

export const UserContext = createContext()

export default function AppRoute() {


    

    return (
        <div>
            <Router>
                <Header />
                <RouteSwitch>

                    {/* Website-Routes */}

                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/AboutUs" element={<AboutUs />}></Route>
                    <Route exact path="/ContactUs" element={<ContactUs />}></Route>
                    <Route exact path="/Reviews" element={<Reviews />}></Route>
                    <Route exact path="/Bars" element={<Bars />}></Route>
                    <Route exact path="/StoreProfile" element={<StoreProfile />}></Route>
                    <Route exact path="/BarOwner" element={<BarOwner />}></Route>

                    {/* Website-Routes */}


                    {/* Dashboard-Routes */}
                    <Route exact path="/dashboard/signup" element={<Signup />}></Route>
                    <Route exact path="/dashboard/login" element={<Login />}></Route>
                    <Route exact path="/dashboard/forgetPassword" element={<ForgetPasword />}></Route>
                    <Route exact path="/dashboard/resetPassword" element={<ResetPassword />}></Route>
                    <Route exact path="/dashboard/Plan" element={<Plan />}></Route>
                    <Route exact path="/dashboard/equipment" element={<Equipment />}></Route>
                    <Route exact path="/dashboard/payment" element={<Payment />}></Route>
                    <Route exact path="/dashboard/profile" element={<Profile />}></Route>
                    <Route exact path="/dashboard/profile/barinformation" element={<BarInformation />}></Route>
                    <Route exact path="/dashboard/Menu/choosecategory" element={<ChooseCategory />}></Route>
                    <Route exact path="/dashboard/Menu/Choosesubcategory" element={<ChooseSubCategory />}></Route>
                    <Route exact path="/dashboard/Bar/addbarinfo" element={<Addbarinfo />}></Route>
                    <Route exact path="/dashboard/Bar/addfirstmenu" element={<Addfirstmenu />}></Route>
                    <Route exact path="/Dashboard/Event/Addevents" element={<Addevents />}></Route>
                    <Route exact path="/dashboard" element={<Dashboard />}></Route>
                    <Route exact path="/dashboard/menu" element={<Menu />}></Route>
                    <Route exact path="/dashboard/singlemenu" element={<SingleMenu />}></Route>
                    <Route exact path="/dashboard/subscription" element={<Subscription />}></Route>
                    <Route exact path="/dashboard/event" element={<Event />}></Route>
                    <Route exact path="/dashboard/singleevent" element={<SingleEvent />}></Route>
                    <Route exact path="/dashboard/feed" element={<Feed />}></Route>
                    <Route exact path="/dashboard/analytics" element={<Analytics />}></Route>
                    <Route exact path="/dashboard/promotions" element={<Promotions />}></Route>
                    <Route exact path="/dashboard/singlepromotion" element={<SinglePromotion />}></Route>
                    <Route exact path="/dashboard/setting" element={<Profilesetting />}></Route>
                    <Route exact path="/dashboard/teammembers" element={<TeamMembers />}></Route>
                    <Route exact path="/dashboard/Contact" element={<Contact />}></Route>

                    {/* Dashboard-Routes */}

                    {/* orderdashboard */}
                    <Route exact path="/Order" element={<Order/>}></Route>
                    <Route exact path="/Order/tips" element={< Tips/>}></Route>
                    {/* orderdashboard */}
                    <Route exact path="*" element={<NotFound />}></Route>
                </RouteSwitch>
                <Footer />
            </Router>
        </div>
    )
}