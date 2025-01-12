import React from 'react';

const SlidingText = () => {
  return (
    <div className="h2 sliding-text-wrapper bg-c1-0">
      <div className="sliding-text font-questrial text-cyan-50">
        {/* Repeat the text to ensure a seamless loop */}
        <span>LET'S MAKE IT HAPPEN ⋅ LET'S MAKE IT HAPPEN ⋅ LET'S MAKE IT HAPPEN ⋅ LET'S MAKE IT HAPPEN ⋅ </span>
        <span>LET'S MAKE IT HAPPEN ⋅ LET'S MAKE IT HAPPEN ⋅ LET'S MAKE IT HAPPEN ⋅ LET'S MAKE IT HAPPEN ⋅ </span>
      </div>
    </div>
  );
};

export default SlidingText;