import { Link } from 'react-router-dom';

const BrandLogo = ({ className = '', markOnly = false }) => {
  const content = (
    <span className={`brand-logo ${className}`}>
      <img
        src={markOnly ? '/dineOS-only-logo.png' : '/dineOS-logo.png'}
        alt="DineOS"
        className={markOnly ? 'h-10 w-10 object-contain' : 'h-12 w-auto object-contain'}
      />
      {markOnly || <span className="sr-only">DineOS Restaurant OS</span>}
    </span>
  );

  return <Link to="/">{content}</Link>;
};

export default BrandLogo;
