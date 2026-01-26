import React from 'react';
import Logo from './Logo';

interface HeaderProps {
  title?: string;
  backButton?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, backButton }) => {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border px-4 h-12 flex items-center justify-between transition-colors duration-200">
      <div className="flex items-center gap-3 text-secondary">
        {backButton}
        {title ? <h1 className="text-sm font-medium tracking-[0.02em]">{title}</h1> : <Logo />}
      </div>
      {/* Menu removed completely */}
    </header>
  );
};

export default Header;
