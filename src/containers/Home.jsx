// Init
import React from 'react';

// Importing Components
import Header from '../components/common/Header';
import Carousal from '../components/Home/Carousal';
import Explore from '../components/Home/Explore';
import Bestseller from '../components/Home/Bestseller';
import Topdeal from '../components/Home/Topdeal';
import Pickup from '../components/Home/Pickup';
import Footer from '../components/common/Footer';
import NoteState from '../components/Home/NoteState';

// Home Component
export default function Home() {
  return (
    <div>
      <NoteState>
        <Header />
        <Carousal />
        <Explore />
        <Bestseller />
        <Topdeal />
        <Pickup />
        <Footer />
      </NoteState>
    </div>
  );
}
