export const getImageUrl = (imagePath) => {
  const url = new URL(`/assets/${imagePath}`, import.meta.url).href;
  console.log("Image URL:", url);
  return url;
};
