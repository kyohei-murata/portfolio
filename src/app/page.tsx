import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Header } from './components/header/header';
import { AboutMe } from './components/screens/aboutMe';
import { AboutThisSite } from './components/screens/aboutThisSite';
import { MySkillSet } from './components/screens/mySkillSet';
import { Profile } from './components/screens/profile';
import { TopPage } from './components/screens/topPage';
import { Works } from './components/screens/works';

export default function Home() {
  const ColorAssets = useColorAssets();

  return (
    <div className="dotBackground">
      <Header />
      <TopPage />
      <AboutThisSite />
      <AboutMe />
      <Works />
      <MySkillSet />
      <Profile />
    </div>
  );
}
