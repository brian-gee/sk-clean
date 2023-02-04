import Card from './card';

export default function Services({}) {
  return (
    <main>
      <div className="flex flex-wrap justify-center">
        <Card
          heading="Look at me!"
          description="Wow even more text!"
          image="/pexels-vlada.jpg"
          alt="some alt text"
        />
        <Card
          heading="Look at me!"
          description="Wow even more text!"
          image="/pexels-vinc.jpg"
          alt="some alt text"
        />
        <Card
          heading="Look at me!"
          description="Wow even more text!"
          image="/pexels-rachel.jpg"
          alt="some alt text"
        />
      </div>
    </main>
  );
}
