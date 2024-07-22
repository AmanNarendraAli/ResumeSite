export const getImageUrl = (image) => {
  return new URL("assets/$(path)", import.meta.url).href;
};