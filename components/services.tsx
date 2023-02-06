import Card from './card';

export default function Services({}) {
  return (
    <main id="services">
      <div className="pt-20 flex flex-wrap justify-center space-x-10">
        <Card
          heading="Regular Maintenance"
          description="This service involves routine cleaning and upkeep of the pool, including vacuuming, skimming, and checking chemical levels."
          image="/pexels-vlada.jpg"
          alt="woman sitting by pool with laptop"
        />
        <Card
          heading="Leak Detection and Repair"
          description="This service involves locating and repairing leaks in the pool and its plumbing system."
          image="/pexels-vinc.jpg"
          alt="outdoor pool with bushes and trees in background"
        />
        <Card
          heading="Green Pool Clean-Up"
          description="This service involves removing excess green algae from a pool and restoring it to a healthy and clear condition. This service is typically needed when a pool has been neglected or closed for an extended period of time."
          image="/pexels-rachel.jpg"
          alt="some alt text"
        />
      </div>
    </main>
  );
}
