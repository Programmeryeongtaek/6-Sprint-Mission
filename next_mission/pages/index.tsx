import Head from 'next/head';
import feature1 from '@/public/images/home/feature1-image.png';
import feature2 from '@/public/images/home/feature2-image.png';
import feature3 from '@/public/images/home/feature3-image.png';
import Image from 'next/image';
import FaceBookIcon from '@/public/images/social/facebook-logo.svg';
import TwitterIcon from '@/public/images/social/twitter-logo.svg';
import YoutubeIcon from '@/public/images/social/youtube-logo.svg';
import InstagramIcon from '@/public/images/social/instagram-logo.svg';

interface ArticleProps {
  tag: string;
  title: string;
  content: string;
}

export const Article: React.FC<ArticleProps> = ({ tag, title, content }) => {
  return (
    <div>
      <span>{tag}</span>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>판다마켓</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col m-auto w-[1920px]">
        <header className="h-[540px] bg-[#cfe5ff] bg-TopBannerImage bg-contain bg-no-repeat bg-center">
          <div className="absolute flex flex-col items-center">
            <h1 className="w-[295px] h-[112px]">
              일상의 모든 물건을 거래해보세요
            </h1>
            <button className="w-[355px] h-[60px]">구경하러가기</button>
          </div>
        </header>

        <main className="flex flex-col gap-20 m-auto my-10">
          <article className="flex my-20">
            <Image width={588} height={444} src={feature1} alt="메인 사진1" />
            <Article
              tag="Hot Item"
              title="인기 있는 상품을 확인해보세요"
              content="가장 HOT한 중고거래 물품을 판다 마켓에서 확인해보세요"
            />
          </article>
          <article className="flex">
            <Article
              tag="Search"
              title="구매를 원하는 상품을 검색하세요"
              content="구매하고 싶은 물품은 검색해서 쉽게 찾아보세요"
            />
            <Image width={588} height={444} src={feature2} alt="메인 사진2" />
          </article>
          <article className="flex">
            <Image width={588} height={444} src={feature3} alt="메인 사진3" />
            <Article
              tag="register"
              title="판매를 원하는 상품을 등록하세요"
              content="어떤 물건이든 판매하고 싶은 상품을 쉽게 등록하세요"
            />
          </article>
        </main>

        <div className="h-[540px] bg-[#cfe5ff] bg-BottomBannerImage bg-contain bg-no-repeat bg-center">
          <div className="w-[295px] h-[112px]">
            <h1>믿을 수 있는 판다마켓 중고 거래</h1>
          </div>
        </div>

        <footer className="h-[160px] flex">
          <p>@Codeit - 2014</p>
          <div className="flex gap-[30px]">
            <p>Privacy Plicy</p>
            <p>FAQ</p>
          </div>
          <div className="flex gap-3">
            <FaceBookIcon
              width={20}
              height={20}
              alt="페이스북으로 이동"
            ></FaceBookIcon>
            <TwitterIcon
              width={20}
              height={20}
              alt="트위터으로 이동"
            ></TwitterIcon>
            <YoutubeIcon
              width={20}
              height={20}
              alt="유튜브로 이동"
            ></YoutubeIcon>
            <InstagramIcon
              width={20}
              height={20}
              alt="인스타그램으로 이동"
            ></InstagramIcon>
          </div>
        </footer>
      </div>
    </>
  );
}
