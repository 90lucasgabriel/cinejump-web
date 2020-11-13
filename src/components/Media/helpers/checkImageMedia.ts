const checkImageMedia = (media: string): boolean => {
  const imageExtensions = ['jpg', 'jpe', 'jpeg', 'png', 'gif'];

  return imageExtensions.some(extension =>
    media.toUpperCase().endsWith(extension.toUpperCase()),
  );
};

export default checkImageMedia;
