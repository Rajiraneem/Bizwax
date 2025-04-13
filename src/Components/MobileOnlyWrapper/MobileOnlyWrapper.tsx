import { memo, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { FaMobileAlt } from 'react-icons/fa';

interface Props {
  children: ReactNode;
}

const MobileOnlyWrapper: React.FC<Props> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 640);

  const handleResize = useCallback(() => {
    const mobile = window.innerWidth < 640;
    // Only update state if the value has changed
    setIsMobile(prevState => {
      if (prevState === mobile) return prevState;
      return mobile;
    });
  }, []);
  
  useEffect(() => {
    handleResize();

    let timeoutId: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', debouncedResize);
    };
  }, [handleResize]);

  const desktopView = useMemo(() => (
    <div className="h-screen w-screen flex items-center justify-center bg-[#254c64] text-white animate-fadeIn">
      <div className="text-center bg-[#2c5d7c] p-6 rounded-xl shadow-lg max-w-md mx-auto">
        <div className="flex justify-center mb-4 animate-bounce">
          <FaMobileAlt className="text-yellow-400 text-5xl" />
        </div>
        <h1 className="text-2xl font-semibold mb-2">Mobile View Only</h1>
        <p className="text-sm opacity-80">
          Please switch to a mobile device or enable mobile view in your browser.
        </p>
      </div>
    </div>
  ), []);

  if (isMobile === null) {
    return null;
  }

  return isMobile ? <>{children}</> : desktopView;
};

export default memo(MobileOnlyWrapper);