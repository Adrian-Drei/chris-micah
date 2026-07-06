export const setTitle = (title: string) => {
  document.title = title;
  document
    .querySelector('[property="og:title"]')!
    .setAttribute("content", title);
  document
    .querySelector('[name="twitter:title"]')!
    .setAttribute("content", title);
};

export const setDescription = (description: string) => {
  document
    .querySelector('[name="description"]')!
    .setAttribute("content", description);
  document
    .querySelector('[property="og:description"]')!
    .setAttribute("content", description);
  document
    .querySelector('[name="twitter:description"]')!
    .setAttribute("content", description);
};

export const setImage = (image: string) => {
  document
    .querySelector('[property="og:image"]')!
    .setAttribute("content", image);
  document
    .querySelector('[name="twitter:image"]')!
    .setAttribute("content", image);
};
