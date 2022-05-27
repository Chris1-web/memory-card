function Card(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      data-index-number={props.dataindexnumber}
    />
  );
}

export default Card;
