import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [toppingData, setToppingData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3050/toppings")
      .then((res) => setToppingData(res.data));
  }, []);
  return (
    <div className="container my-5">
      <h1>Sos Çeşitleri</h1>
      <p>Tanesi 2&#8378;</p>
      <h2>Sos Ücreti:</h2>
      <div>
        {toppingData.map((topping, i) => (
          <div key={i}>
            <img src={topping.imagePath} alt="" />
            <label className="text-nowrap">{topping.name}</label>
            <input
              className="form-check-input"
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
