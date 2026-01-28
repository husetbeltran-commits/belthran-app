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
        d="M22 12v40M22 12h16a10 10 0 0 1 0 20H22m0 0h18a10 10 0 0 1 0 20H22"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BelthranLogoIcon;
