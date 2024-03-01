import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";

const Scoops = () => {
  const [scoopData, setScoopData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3050/scoops")
      .then((res) => setScoopData(res.data));
  }, []);
  return (
    <div className="container">
      <h1>Dondurma Çeşitleri</h1>
      <p>Tanesi 20&#8378;</p>
      <h2>Çeşitler Ücreti 0&#8378;</h2>
      <div>
        {scoopData.map((scoop, i) => (
          <Card key={i} scoop={scoop} />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
