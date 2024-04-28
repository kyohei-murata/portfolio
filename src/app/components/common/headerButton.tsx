'use client';
import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Button, Typography } from '@mui/material';

type Props = {
  text: string;
  scrollTarget: string;
};

export const HeaderButton = (props: Props): JSX.Element => {
  const topOffset = 50;
  const ColorAssets = useColorAssets();
  const scrollTopPage = () => {
    const topPageY =
      document.querySelector('#top-page')?.getBoundingClientRect().top ?? 0;
    window.scrollTo({
      top: window.pageYOffset + topPageY - window.innerHeight / 2 + topOffset,
      behavior: 'smooth',
    });
  };
  const scrollAboutThisSite = () => {
    const topPageY =
      document.querySelector('#about-this-site')?.getBoundingClientRect().top ??
      0;
    window.scrollTo({
      top: window.pageYOffset + topPageY - window.innerHeight / 2 + topOffset,
      behavior: 'smooth',
    });
  };
  const scrollAboutMe = () => {
    const topPageY =
      document.querySelector('#about-me')?.getBoundingClientRect().top ?? 0;
    window.scrollTo({
      top: window.pageYOffset + topPageY - window.innerHeight / 2 + topOffset,
      behavior: 'smooth',
    });
  };
  const scrollMySkills = () => {
    const topPageY =
      document.querySelector('#my-skills')?.getBoundingClientRect().top ?? 0;
    window.scrollTo({
      top: window.pageYOffset + topPageY - window.innerHeight / 2 + topOffset,
      behavior: 'smooth',
    });
  };
  const scrollProfile = () => {
    const topPageY =
      document.querySelector('#profile')?.getBoundingClientRect().top ?? 0;
    window.scrollTo({
      top: window.pageYOffset + topPageY - window.innerHeight / 2 + 200,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={
        props.scrollTarget === 'topPage'
          ? scrollTopPage
          : props.scrollTarget === 'aboutThisSite'
          ? scrollAboutThisSite
          : props.scrollTarget === 'aboutMe'
          ? scrollAboutMe
          : props.scrollTarget === 'mySkills'
          ? scrollMySkills
          : scrollProfile
      }
    >
      <Typography fontSize={14} color={ColorAssets.textBlack}>
        {props.text}
      </Typography>
    </Button>
  );
};
