import React from 'react';
import { Hero } from '../components/Hero';
import { PopularSpaces } from '../components/PopularSpaces';
import { SpaceForEveryMoment } from '../components/SpaceForEveryMoment';
import { ValueProposition } from '../components/ValueProposition';
import { HostCTA } from '../components/HostCTA';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <SpaceForEveryMoment />
        <ValueProposition />
        <PopularSpaces />
        <HostCTA />
      </main>
      <Footer />
    </div>
  );
}