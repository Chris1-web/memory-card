function Cards(props) {
  return (
    <div className="cards">
      {props.originalImages.map((image, i) => {
        return <img src={image} alt="animal" key={i} />;
      })}
    </div>
  );
}
export default Cards;
