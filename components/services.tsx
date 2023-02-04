import Card from './card';

export default function Services({}) {
  return (
    <main className="grid grid-cols-3 grid-rows-3">
      <Card
        heading="Look at me!"
        description="Wow even more text!"
        image="/pexels-octavio.jpg"
        alt="some alt text"
      />
      <Card
        heading="Look at me!"
        description="Wow even more text!"
        image="/pexels-octavio.jpg"
        alt="some alt text"
      />
      <Card
        heading="Look at me!"
        description="Wow even more text!"
        image="/pexels-octavio.jpg"
        alt="some alt text"
      />
    </main>
  );
}
