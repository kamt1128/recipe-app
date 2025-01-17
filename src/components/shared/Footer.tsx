import React from 'react';
import '@styles/_footer.scss';
import productsImage from '@assets/images/products-footer.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h3 className='footer__text'>Con el Patrocinio de</h3>
      <div className="content-image">
        <img src={productsImage} alt="Products" className="content-image__img" />
      </div>
    </footer>
  );
};

export default Footer;