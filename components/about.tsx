import Image from 'next/image';

export default function About({}) {
  return (
    <main id="about" className="pt-20 p-4 flex justify-center">
      <div className="card max-w-2xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">About Us</h2>
          <p className="text-sm">
            SK Cleaning is a locally-owned and operated pool cleaning company
            that has been serving the community for many years. Our team of
            experienced technicians is dedicated to providing the highest
            quality pool cleaning services to our clients. From routine
            maintenance to specialized services, we have the expertise and
            equipment to keep your pool in top condition.
          </p>
        </div>
        <figure>
          <Image
            src={'/pexels-kindel.jpg'}
            alt={'Kids playing in pool'}
            width="500"
            height="500"
          />
        </figure>
      </div>
    </main>
  );
}
