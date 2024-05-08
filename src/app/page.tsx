'use client';
import { useColorAssets } from '@/hooks/view/useColorAssets';
import { useState } from 'react';
import { Footer } from './components/ footer/footer';
import { Header } from './components/header/header';
import { AboutMe } from './components/screens/aboutMe';
import { AboutThisSite } from './components/screens/aboutThisSite';
import { TopPage } from './components/screens/topPage';

export default function Home() {
  const ColorAssets = useColorAssets();
  const [backgroundColor, setBackgroundColor] = useState<string>(
    ColorAssets.mainGreen
  );

  return (
    <div className="dotBackground">
      <Header />
      <TopPage
        backgroundColor={backgroundColor}
        handleClick={setBackgroundColor}
      />
      <AboutThisSite />
      <AboutMe />
      {/* <Works />
      <MySkillSet />
      <Profile />
      <ContactMe backgroundColor={backgroundColor} />  */}
      <Footer backgroundColor={backgroundColor} />
    </div>
  );
}
