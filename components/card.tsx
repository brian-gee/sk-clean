import Image from 'next/image';

export default function Page({
  heading,
  description,
  image,
  alt,
}: {
  heading: string;
  description: string;
  image: string;
  alt: string;
}) {
  return (
    <main>
      <div className="p-10 card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={image} alt={alt} />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl">{heading}</h2>
          <p className="flex justify-center text-xl">{description}</p>
        </div>
      </div>
    </main>
  );
}
