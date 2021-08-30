import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme')
  );

  useEffect(() => {
    if (!currentTheme) {
      localStorage.setItem('theme', 'light');
      setCurrentTheme('light');
    } else if (currentTheme === 'dark') {
      document.getElementsByTagName('body')[0].classList.toggle('dark-mode');
    } //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const themeHandler = () => {
    if (currentTheme === 'dark') {
      document.getElementsByTagName('body')[0].classList.toggle('dark-mode');
      localStorage.setItem('theme', 'light');
      setCurrentTheme('light');
    } else if (currentTheme === 'light') {
      document.getElementsByTagName('body')[0].classList.toggle('dark-mode');
      localStorage.setItem('theme', 'dark');
      setCurrentTheme('dark');
    }
  };

  return (
    <footer className="wrapper">
      <section className="social-links ">
        <a
          title="Facebook"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/ListenBoise-115626550254875/"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          title="Instagram"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/boiselisten"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          title="Youtube"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/boiselisten"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          title="Twitter"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/ListenBoise-115626550254875/"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </section>
      <section className="footer-copyright ">
        <p> Connect with us and stay updated.</p>
        <p>© 2021 Illiad Media, All Rights Reserved</p>
      </section>
      <button onClick={themeHandler}>toggle theme</button>
    </footer>
  );
};

export default Footer;
