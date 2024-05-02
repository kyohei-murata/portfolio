'use client';
import { useColorAssets } from '@/hooks/view/useColorAssets';
import { Timeline } from '@mui/lab';
import { Box, Stack, Typography } from '@mui/material';
import { useRef } from 'react';
import { CustomizedTimeline } from '../ui-kits/timeLine';
import '/Users/muratakyohei/NextPractice/myportfolio/src/app/globals.css';

export const Profile = (): JSX.Element => {
  const ColorAssets = useColorAssets();
  const timelineDot_1Ref = useRef<HTMLDivElement>(null);
  const timelineDot_2Ref = useRef<HTMLDivElement>(null);
  const timelineDot_3Ref = useRef<HTMLDivElement>(null);
  const timelineDot_4Ref = useRef<HTMLDivElement>(null);
  const timelineDot_5Ref = useRef<HTMLDivElement>(null);
  const timelineDot_6Ref = useRef<HTMLDivElement>(null);
  const timelineDot_7Ref = useRef<HTMLDivElement>(null);
  const timelineDot_8Ref = useRef<HTMLDivElement>(null);
  const timelineDot_9Ref = useRef<HTMLDivElement>(null);

  const typography_1Ref = useRef<HTMLDivElement>(null);
  const typography_2Ref = useRef<HTMLDivElement>(null);
  const typography_3Ref = useRef<HTMLDivElement>(null);
  const typography_4Ref = useRef<HTMLDivElement>(null);
  const typography_5Ref = useRef<HTMLDivElement>(null);
  const typography_6Ref = useRef<HTMLDivElement>(null);
  const typography_7Ref = useRef<HTMLDivElement>(null);
  const typography_8Ref = useRef<HTMLDivElement>(null);
  const typography_9Ref = useRef<HTMLDivElement>(null);
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      py={16}
      justifyContent={'center'}
    >
      <Stack display={'flex'} alignItems={'center'} spacing={6}>
        <Typography
          variant="h3"
          color={ColorAssets.textBlack}
          fontWeight={'Bold'}
        >
          Profile
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color={ColorAssets.textBlack}
          id={'profile'}
        >
          私のこれまでの人生をまとめてみました
        </Typography>

        <Timeline>
          <CustomizedTimeline
            imageSrc="/babyCar.svg"
            imageAlt="circle"
            size="medium"
            py="60px"
            title="京都市の病院で産声を上げる"
            isNotAnimation
          />
          <CustomizedTimeline
            imageSrc="/circleAct.svg"
            imageAlt="circle"
            size="small"
            py="52px"
            title="中学で剣道部に入る"
            direction="left"
            imageRef={timelineDot_1Ref}
            typographyRef={typography_1Ref}
          />
          <CustomizedTimeline
            imageSrc="/shutIn.svg"
            imageAlt="circle"
            size="medium"
            title="引きこもり期に入る"
            body="小学校とのギャップに耐えられず１年半引きこもる　毎日13時間ゲームをし、ゲーム制作に興味を持つ"
            bodyFontSize="14px"
            py="26px"
            direction="right"
            imageRef={timelineDot_2Ref}
            typographyRef={typography_2Ref}
          />
          <CustomizedTimeline
            imageSrc="/school.png"
            imageAlt="circle"
            size="large"
            title="工業高校に情報通信科に入学"
            body="広く情報学を学び、プログラミングの楽しさを知る。毎試験で十数人に勉強を教えた経験から、教育へ興味を持つ。将来エンジニアになるか、教育に携わるか迷っていた"
            bodyFontSize="14px"
            py="26px"
            direction="left"
            imageRef={timelineDot_3Ref}
            typographyRef={typography_3Ref}
          />
          <CustomizedTimeline
            imageSrc="/university.png"
            imageAlt="circle"
            size="small"
            py="52px"
            title="開志専門職大学に入学"
            direction="right"
            imageRef={timelineDot_4Ref}
            typographyRef={typography_4Ref}
          />
          <CustomizedTimeline
            imageSrc="/group.png"
            imageAlt="circle"
            size="large"
            title="起業へ興味を持つ"
            body="事業提案を行う授業で、企画の楽しさを知る。延長で友人と参加したビジネスコンテストにて優勝し、起業やアプリ開発に興味を持つ。"
            bodyFontSize="14px"
            py="38px"
            direction="left"
            imageRef={timelineDot_5Ref}
            typographyRef={typography_5Ref}
          />
          <CustomizedTimeline
            imageSrc="/door.png"
            imageAlt="circle"
            size="medium"
            title="休学期間に入る"
            body="アプリ開発や起業をするために1年間休学を　　する。"
            bodyFontSize="14px"
            py="38px"
            direction="right"
            imageRef={timelineDot_6Ref}
            typographyRef={typography_6Ref}
          />
          <CustomizedTimeline
            imageSrc="/programming.png"
            imageAlt="circle"
            size="medium"
            title="目標の転換"
            body="ハッカソンで2つ目のアプリのデモを作成し、特別賞を受賞する。その後起業家の方から厳しいお言葉をいただき、今後について悩み始める"
            bodyFontSize="14px"
            py="30px"
            direction="left"
            imageRef={timelineDot_7Ref}
            typographyRef={typography_7Ref}
          />
          <CustomizedTimeline
            imageSrc="/hand.png"
            imageAlt="circle"
            size="large"
            title="マーケターとして再スタート"
            body="スタートアップに拾っていただき、心機一転SNS運用を担当しマーケティングの知識を付ける。起業の厳しさや楽しさを目の当たりにし、自分の弱みと強みを知ることができた。"
            bodyFontSize="14px"
            py="26px"
            direction="right"
            imageRef={timelineDot_8Ref}
            typographyRef={typography_8Ref}
          />
          <CustomizedTimeline
            imageSrc="/suit.png"
            imageAlt="circle"
            size="large"
            title="復学、就活"
            body="前から興味があったメンタルヘルスサービスでの起業を夢に、一度エンジニアとして働くことを決意する。そのために復学し、就活中"
            bodyFontSize="14px"
            py="26px"
            direction="left"
            imageRef={timelineDot_9Ref}
            typographyRef={typography_9Ref}
          />
        </Timeline>
        <Typography variant="h5" py={'12px'} fontWeight={'bold'}>
          いろんな方への感謝とこれからの目標
        </Typography>
        <Typography
          textAlign={'left'}
          maxWidth={'700px'}
          color={ColorAssets.textBlack}
        >
          日々やりたいことに夢中で忘れがちですが、今の私がいるのは本当にいろんな方のおかげです。
          一緒に夢を追いかけてくれる友人や、アドバイスをくれた起業家の方、拾っていただいたスタートアップの方々、そして引きこもっていた
          私を支えてくれた家族に本当に感謝です。
          <br />
          <br />
          今まで情報学を通じて、さまざまな方と出会うことができ、いろんな体験をしてきました。今後は自分が得た経験を通じて誰かの役に立ちたい
          と思っています。
          <br />
          <br />
          また、将来はメンタルヘルスサービスを提供する会社を立ち上げ、多くの方々を支えられる存在になりたいと考えています。
          <br />
          <br />
          そのためには、まずはエンジニアとして働きさまざまな経験を積み、知識量を増やしていきたいと思います。そして、よりよいサービスを提供
          するために色々な方と積極的に関わってきたいと思っています。
          <br />
          <br />
          エンジニアとしてはもちろん、人としてもまだまだではありますが今後も成長していけるように日々努力していきます。
        </Typography>
      </Stack>
    </Box>
  );
};
