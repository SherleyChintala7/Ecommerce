import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "./Banner.css";

const Banner = () => {
  const [blur, setBlur] = useState(true);
  const [timeLeft, setTimeLeft] = useState(20);
  const [name, setName] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  // Timer logic
  useEffect(() => {
    if (!blur || timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, blur]);

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Enter your name ");
      return;
    }

    setBlur(false);
    setCouponApplied(true);
    setCelebrate(true);

    setTimeout(() => setCelebrate(false), 5000);
  };

  return (
    <>
      {celebrate && <Confetti />}

      <div className="banner">
        {/* Background Image */}
        {/* <div className={`banner-bg ${blur ? "blur" : ""}`}></div> */}
        <div><img src="/sale.jpeg" alt=""className={`banner-bg ${blur ? "blur" : ""}`} style={{width:"100%", height:"400px"}}/></div>

        {/* Overlay Content */}
        <div className="banner-content">
          {!couponApplied ? (
            <form className="coupon-form" onSubmit={handleSubmit}>
              <h2>🎁 Limited Time Offer</h2>
              <p>⏳ Hurry! {timeLeft}s left</p>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <button type="submit">Apply Coupon</button>
            </form>
          ) : (
            <div className="success-box">
              <h1>🎉 Congratulations {name}!</h1>
              <p>Your coupon has been applied successfully ✅</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Banner;