import Image from 'next/image';
import bg from '../public/house-with-pool.jpg';
import communityPool from '../public/community-pool.jpg';
import boyGoggles from '../public/boy-smiling-with-goggles.jpg';

export default function Hero() {
  return (
    <main>
      <div className="sticky">
        <Image
          className="object-cover opacity-30"
          alt="House with pool"
          src={bg}
          placeholder="blur"
          quality={100}
          fill
          loading="eager"
          sizes="100vw"
        />
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-2 text-5xl tracking-wider">Your Pool</h1>
              <h3 className="mb-5 text-3xl tracking-wider">Reimagined</h3>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
