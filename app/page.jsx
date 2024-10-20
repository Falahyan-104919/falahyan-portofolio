import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

//Component
import Socials from '@/components/Socials';
import Summary from '@/components/Summary';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import Link from 'next/link';
import TypeWriter from '@/components/TypeWriter';

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <div className="flex flex-row gap-1 text-2xl justify-center  xl:justify-start">
              <TypeWriter />
              <span>Developer</span>
            </div>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent-default ml-1">Falahyan</span>
            </h1>
            <Summary />
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <Link href="/CV_Falahyan_v2.pdf" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl ml-1" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-3"
                  iconStyles="w-[48px] h-[48px] border border-accent-default rounded-full flex justify-center items-center text-accent-default text-2xl hover:bg-accent-default hover:text-accent-hover hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
