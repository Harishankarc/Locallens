'use client';

import Hero from "@/components/hero";
import Popular from "@/components/popular";
import Services from "@/components/services";

export default function Home() {

  return (
    <div className="bg-black">
      <Hero/>
      <Services/>
      <Popular/>
    </div>
  );
}
