import React, { useEffect, useRef, useState } from "react";

const inputs = Array(4).fill("");
let newInputIndex = 0;
const Verification = () => {
  const input = useRef();
  const [OTP, setOTP] = useState({ 0: "", 1: "", 2: "", 3: "" });
  const [nextInputIndex, setNextInputIndex] = useState(0);

  const handleChangeText = (text, index) => {
    const newOTP = { ...OTP };
    newOTP[index] = text;
    setOTP(newOTP);
    const lastInputIndex = inputs.length - 1;
    if (!text) newInputIndex = index === 0 ? 0 : index - 1;
    else newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1;
    setNextInputIndex(newInputIndex);
  };
  const submitOTP = () => {};
  useEffect(() => {
    input.current.focus();
  }, [nextInputIndex]);
  return (
    <>
      <p>Please verify your email, PIN has been sent to your email</p>
      {inputs.map((inp, index) => {
        return (
          <div className="container" key={index.toString()}>
            <input
              value={OTP[index]}
              maxLength={1}
              placeholder="0"
              onChange={(text) => handleChangeText(text, index)}
              ref={nextInputIndex === index ? input : null}
            />
          </div>
        );
      })}
      <input type="submit" value="submit" onClick={submitOTP} />
    </>
  );
};

export default Verification;
