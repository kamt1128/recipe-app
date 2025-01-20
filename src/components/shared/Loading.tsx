import React, { memo } from "react";
import '@styles/_loading.scss';

const Loading: React.FC = () => {
  return (
    <div className="loading" role="status" aria-live="polite">
      <div className="loading__spinner"></div>
    </div>
  );
};

export default memo(Loading);