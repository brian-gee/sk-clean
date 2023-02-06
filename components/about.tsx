import Image from 'next/image';

export default function About({}) {
  return (
    <main id="about" className="pt-20 p-4 flex justify-center">
      <div className="card max-w-2xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">About Us</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            cum. Qui architecto eius praesentium, aperiam veniam inventore nemo
            accusantium corporis et recusandae deleniti expedita consequatur
            porro maiores. Vero, fuga ipsa.
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
