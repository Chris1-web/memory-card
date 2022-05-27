function Randomizer(originalImages) {
  const randomImages = [];
  do {
    const randomNumber = Math.floor(Math.random() * originalImages.length);
    !randomImages.includes(originalImages[randomNumber]) &&
      randomImages.push(originalImages[randomNumber]);
  } while (randomImages.length < 12);
  return randomImages;
}

export default Randomizer;
