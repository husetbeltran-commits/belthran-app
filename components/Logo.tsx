import React from 'react';
import BelthranLogoIcon from './icons/BelthranLogoIcon';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 flex items-center justify-center">
        <BelthranLogoIcon className="w-7 h-7 text-primary" />
      </div>
      <span className="font-bold text-xl tracking-tight text-primary transition-colors duration-200">
        BELTHRAN CONSULTING
      </span>
    </div>
  );
};

export default Logo;
