import { useState, useEffect } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button
          className="fixed bottom-0 right-0 mb-6 mr-8 btn-circle opacity-50 hover:opacity-100"
          onClick={handleClick}>
          <BsFillArrowUpCircleFill className="text-xl md:text-4xl" />
        </button>
      )}
    </>
  );
}
