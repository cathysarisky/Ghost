import React from 'react';

interface PlusBadgeProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

const PlusBadge: React.FC<PlusBadgeProps> = ({ 
    className = '', 
    size = 'md' 
}) => {
    const sizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
    };

    return (
        <span
            className={`inline-flex items-center justify-center rounded-full  font-medium ${sizeClasses[size]} ${className}`}
            data-testid="plus-badge"
        >
            🌟
        </span>
    );
};

export default PlusBadge;
