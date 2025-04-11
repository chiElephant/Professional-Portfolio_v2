import { Spotlight } from './ui/Spotlight';
import { Vortex } from './ui/vortex';
import { TextGenerate } from './ui/text-generate.tsx';
import MagicButton from './ui/magic-button';
import { FaLocationArrow } from 'react-icons/fa';
import Image from 'next/image';
import Logo from '../../public/logo-horz-trans.svg'

const Hero = () => {
  return (
    <div className='pb-20 pt-36 h-screen'>

      <Spotlight
        className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
        fill='#9300F3'
      />
      <Spotlight
        className='left-80 top-28 h-[80vh] w-[50vw]'
        fill='#A5E1FF'
      />
      <Spotlight
        className='h-[80vh] w-[50vw] top-10 left-full'
        fill='#62D0FF'
      />


      <div className='flex justify-center relative my-10 sm:my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <Vortex
            backgroundColor='transparent'
            rangeY={600}
            particleCount={500}
            className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
          >
            <h2 className='uppercase tracking-widest text-xs text-center max-w-80 subpixel-antialiased'>
              Web, mobile, and software systems — built with care.
            </h2>

            <TextGenerate
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words={'Inspired Solutions,\nLasting Impressions.'}
              />

            <p className='text-center tracking-wide text-lg md:text-xl lg:text-2xl font-medium flex flex-wrap justify-center items-center gap-2 mb-10'>
              We’re
              <Image
                src={Logo}
                alt='303Devs'
                className='inline-block'
                style={{ height: '2.5em', width: 'auto', paddingBottom: '0.6em' }} // 👈 Keeps logo proportional to text
                />
              — a Colorado studio making tech personal.
            </p>
          </Vortex>

          <a href='#about'>
            <MagicButton
              title='Step Inside'
              icon={<FaLocationArrow />}
              position='right'
              />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
