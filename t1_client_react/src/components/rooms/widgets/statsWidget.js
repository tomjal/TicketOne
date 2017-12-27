import React from 'react';

const StatsWidget = ({ statsObject }) => (
  <div>
    Solved cases: {statsObject.solved}, Unsolved cases: {statsObject.unsolved}
  </div>
);

export default StatsWidget;