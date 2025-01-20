import React, { memo } from 'react';
import '@styles/_footer.scss';
import productsImage from '@assets/images/products-footer.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h3 className='footer__text'>Con el Patrocinio de</h3>
      <img src={productsImage} alt="Products" className="footer__img" loading="lazy" />
    </footer>
  );
};

export default memo(Footer);