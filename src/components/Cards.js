import Card from "./Card";

function Cards(props) {
  return (
    <div className="cards">
      {props.originalImages.map((image, i) => {
        return <Card src={image} alt="animal" key={i} dataindexnumber={i} />;
      })}
    </div>
  );
}
export default Cards;
