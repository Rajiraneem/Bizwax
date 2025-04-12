import React, { ReactNode, useEffect, useState } from 'react';
import { FaMobileAlt } from 'react-icons/fa';

interface Props {
  children: ReactNode;
}

const MobileOnlyWrapper: React.FC<Props> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#254c64] text-white animate-fadeIn">
        <div className="text-center bg-[#2c5d7c] p-6 rounded-xl shadow-lg">
          <div className="flex justify-center mb-4 animate-bounce">
            <FaMobileAlt className="text-yellow-400 text-5xl" />
          </div>
          <h1 className="text-2xl font-semibold mb-2">Mobile View Only</h1>
          <p className="text-sm opacity-80">
            Please switch to a mobile device or enable mobile view in your browser.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default MobileOnlyWrapper;
