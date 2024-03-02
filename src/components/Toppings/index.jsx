import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [toppingData, setToppingData] = useState([]);
  const [basket, setBasket] = useState([]);

  const handleChange = (e, topping) => {
    e.target.checked
      ? setBasket([...basket, topping])
      : setBasket(basket.filter((item) => item.name !== topping.name));
  };
  useEffect(() => {
    axios
      .get("http://localhost:3050/toppings")
      .then((res) => setToppingData(res.data));
  }, []);
  return (
    <div className="container my-5">
      <h1>Sos Çeşitleri</h1>
      <p>Tanesi 3&#8378;</p>
      <h2>Sos Ücreti:{basket.length * 3}</h2>
      <div className="row gap-3 mt-4">
        {toppingData.map((topping, i) => (
          <div
            style={{ width: "150px" }}
            className="d-flex flex-column align-items-center"
            key={i}
          >
            <img className="img-fluid" src={topping.imagePath} alt="" />
            <label htmlFor={topping.name} className="text-nowrap">
              {topping.name}
            </label>
            <input
              className="form-check-input"
              onChange={(e) => handleChange(e, topping)}
              type="checkbox"
              name=""
              id={topping.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
