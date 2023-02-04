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
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            alt={alt}
            src={image}
            width={1000}
            height={1000}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{heading}</h2>
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
}
