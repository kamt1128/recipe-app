import React from 'react';
import '../styles/_footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="sponsor-section">
        <h3>Con el Patrocinio de</h3>
        <div className="sponsor-logos">
          <img src="https://via.placeholder.com/100x100" alt="Sponsor 1" />
          <img src="https://via.placeholder.com/100x100" alt="Sponsor 2" />
          <img src="https://via.placeholder.com/100x100" alt="Sponsor 3" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;