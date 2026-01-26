import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const BelthranLogoIcon: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
      {...props}
    >
      <path
        d="M20 14h24v10c0 8-6 14-12 14s-12-6-12-14V14z"
        fill="currentColor"
      />
      <path d="M30 38h4v10h-4z" fill="currentColor" />
      <path d="M24 48h16v4H24z" fill="currentColor" />
    </svg>
  );
};

export default BelthranLogoIcon;
