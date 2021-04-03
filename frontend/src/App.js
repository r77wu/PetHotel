import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdoptionIntro from "./components/Adoption/AdoptionIntro/AdoptionIntro";
import GroomingIntro from "./components/Grooming/GroomingIntro/GroomingIntro";
import Header from "./components/Header/Header";
import PetHostelIntro from "./components/PetHostel/PetHotelIntro/PetHotelIntro";
import PetHostelMain from "./components/PetHostel/PetHotelMain/PetHotelMain";
import GroomingMain from "./components/Grooming/GroomingMain/GroomingMain";
import AdoptionMain from "./components/Adoption/AdoptionMain/AdoptionMain";
import Account from "./components/Account/Account";
import ProtectedRoute from "./HOC/ProtectedRoute";
import HotelReservation from "./components/Reservation/HotelReservation/HotelReservation";
import GroomReservation from "./components/Reservation/GroomReservation/GroomReservation";
import LoginForm from "./components/Account/Login/LoginForm";
import SignupForm from "./components/Account/Signup/SignupForm";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <div>
            <PetHostelIntro />
            <GroomingIntro />
            <AdoptionIntro />
          </div>
        </Route>
        <Route path="/petshotel" exact component={PetHostelMain} />
        <Route path="/grooming" exact component={GroomingMain} />
        <Route path="/adoption" exact component={AdoptionMain} />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/signup" exact component={SignupForm} />
        <ProtectedRoute path="/account" component={Account} />
        <ProtectedRoute
          path="/reservation/hotel-reservation"
          component={HotelReservation}
        />
        <ProtectedRoute
          path="/reservation/groom-reservation"
          component={GroomReservation}
        />
      </Switch>
    </Router>
  );
}

export default App;
