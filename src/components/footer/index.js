import React from 'react';

const Footer = () => {
  return (
    <footer className="wrapper">
      <section class="social-links ">
        <a
          title="Facebook"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/ListenBoise-115626550254875/"
        >
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          title="Instagram"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/boiselisten"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          title="Youtube"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/boiselisten"
        >
          <i class="fab fa-youtube"></i>
        </a>
        <a
          title="Twitter"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/ListenBoise-115626550254875/"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </section>
      <section class="footer-copyright ">
        <p> Connect with us and stay updated.</p>
        <p>© 2021 Illiad Media, All Rights Reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
