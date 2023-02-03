export default function Hero() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("/house-with-pool.jpg")`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl">Your Pool</h1>
            <h3 className="mb-5 text-3xl">Reimagined</h3>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
}
