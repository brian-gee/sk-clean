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
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <Image src={image} alt={alt} width="500" height="500" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{heading}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </main>
  );
}
