import { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="my-4 d-flex justify-content-center align-items-center gap-3">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        id="terms"
        className="form-check-input"
        type="checkbox"
      />
      <div className="terms">
        <p
          style={{ visibility: isHover ? "visible" : "hidden" }}
          className="bg-light rounded shadow p-2 text-dark"
        >
          Size gerçekten bir şey teslim etmeyeceğiz.
        </p>
        <label htmlFor="terms" className="lead">
          Koşulları okudum ve kabul ediyorum.
        </label>
      </div>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className="btn btn-warning"
      >
        Siparişi Onayla
      </button>
    </div>
  );
};

export default Form;
