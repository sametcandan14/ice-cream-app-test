const Card = ({ scoop }) => {
  return (
    <div
      className="d-flex flex-column align-items-center "
      style={{ width: "150px" }}
    >
      <img className="img-fluid" src={scoop.imagePath} alt="" />
      <label className="lead">{scoop.name} </label>
      <div></div>
    </div>
  );
};

export default Card;
