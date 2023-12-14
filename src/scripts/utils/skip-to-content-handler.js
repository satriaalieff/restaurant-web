const SkipToContentHandler = () => {
  const mainContent = document.getElementById('main');
  mainContent.scrollIntoView({ behavior: 'smooth' });

  const skipLink = document.getElementById('skip-to-content');
  skipLink.blur();
};

export default SkipToContentHandler;
