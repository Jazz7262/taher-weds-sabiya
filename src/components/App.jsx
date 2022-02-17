import React from "react";
import Compliments from "./Compliments";
import CountDown from "./CountDown";
import Couple from "./Couple";
import DeveloperInfo from "./DeveloperInfo";
import Guest from "./Guest";
import InvitationQuote from "./InvitationQuote.jsx";
import InviteNote from "./InviteNote";
import Navbar from "./Navbar";
import PraisingContent from "./PraisingContent";
import Slide from "./Slide";
import Timeline from "./Timeline";

function App() {
    return (
        <>
            <Navbar />
            <PraisingContent />
            <Slide />
            <Guest />
            <Couple />
            <InvitationQuote />
            <Timeline />
            <CountDown />
            <InviteNote />
            <Compliments />
            <DeveloperInfo />
        </>
    );
}

export default App;
