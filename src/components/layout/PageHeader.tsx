
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  className = "" 
}) => {
  return (
    <div className={`py-8 bg-cyber-gradient text-white ${className}`}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-gray-100">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
