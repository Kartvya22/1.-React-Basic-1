import "./ItemData.css";

function ItemData(props) {
  const d = props.day;
  const m = props.month;
  const y = props.year;
  return (
    <div className="itemData" >
      <span > {d} </span>
      <span> {m} </span>
      <span> {y} </span>
    </div>
  );
}

export default ItemData;
