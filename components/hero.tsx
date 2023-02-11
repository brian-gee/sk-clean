import Image from 'next/image';
import bg from '../public/house-with-pool.jpg';

export default function Hero() {
  return (
    <main>
      <div className="sticky">
        <Image
          alt="House with pool"
          src={bg}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl">Your Pool</h1>
              <h3 className="mb-5 text-3xl">Reimagined</h3>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
