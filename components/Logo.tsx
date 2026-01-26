import React from 'react';
import BelthranLogoIcon from './icons/BelthranLogoIcon';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 text-secondary">
      <div className="w-5 h-5 flex items-center justify-center">
        <BelthranLogoIcon className="w-5 h-5 text-current" />
      </div>
      <span className="text-[13px] font-medium tracking-[0.04em] transition-colors duration-200">
        Belthran Consulting
      </span>
    </div>
  );
};

export default Logo;
