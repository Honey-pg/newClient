import React from 'react';
import Header from './components/Header';
import JournalBanner from './components/JournalBanner';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutJournal from './components/AboutJournal';
import Timeline from './components/Timeline';
import EditorInChief from './components/EditorInChief';
import ArticlesSection from './components/ArticlesSection';
import MoreFromIoT from './components/MoreFromIoT';
import CallsForPapers from './components/CallsForPapers';
import OpenCalls from './components/OpenCalls';
import SpecialIssues from './components/SpecialIssues';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="bg-light-gray font-inter">
      <Header />
      <JournalBanner />
      <NavBar />

      <main className="container mx-auto px-4 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full lg:w-3/4 flex flex-col gap-10">
            <AboutJournal />
            <Timeline />
            <EditorInChief />
            <ArticlesSection />
            <MoreFromIoT />
            <CallsForPapers />
            <OpenCalls />
            <SpecialIssues />
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
