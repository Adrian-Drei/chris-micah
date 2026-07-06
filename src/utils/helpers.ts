export const getImageFormat = (imageFormat: string) => {
  return `https://via.placeholder.com/${imageFormat}.png`;
};

export const isInnerHeightReached = () => {
  const scrollPosition = (window.onscroll = () =>
    Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    ));
  const innerHeight = window.innerHeight;
  return scrollPosition() >= innerHeight;
};
