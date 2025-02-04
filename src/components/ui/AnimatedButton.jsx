import React from 'react';

const AnimatedButton = ({ onClick, label, icon, color = 'bg-blue-500', hoverColor = 'hover:bg-blue-600' }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} ${hoverColor} text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none`}
    >
      {icon && <span className="material-icons">{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default AnimatedButton;
