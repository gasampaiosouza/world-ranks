import Image from 'next/image';

const Hero = () => {
  return (
    <header>
      <Image
        src="/hero-banner.jpg"
        alt="Hero default image"
        quality={100}
        layout="responsive"
        width={300}
        height={100}
      />
    </header>
  );
};

export default Hero;
