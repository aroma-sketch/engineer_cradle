import axios from "axios";
import React, { useState } from "react";
import InputField from "../components/inputField/InputField";
import { post_url, SelectData, UNIQUE_CODE } from "../helper/index";
import Validation from "../components/validation/Validation";
import "./contactForm.css";
export const ContactForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [Status, setStatus] = useState("");
  const [isCheckBox, setIsCheckBox] = useState(false);
  const [errors, setErrors] = useState({ type: "", msg: "", status: false });

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name, "name");
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    console.log(address, "address");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email, "email");
  };

  const handleCheckBox = (e) => {
    setIsCheckBox(e.target.checked);
  };

  const handleDropDown = (e) => {
    setStatus(e.target.value);
  };

  const postContactsData = async () => {
    console.log("post");
    const data = {
      Name: name,
      Address: address,
      Email: email,
      JobStatus: Status,
      DoLiketoCode: isCheckBox,
      Secret: UNIQUE_CODE,
    };

    await axios
      .post(post_url, data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.status,"response");
          setName("");
          setAddress("");
          setEmail("");
          setStatus("");
          setIsCheckBox(false);
        }
      })

      .catch((error) => {
        console.log(error, "something went wrong");
      });
  };

  const handleSubmit = () => {
    const result = Validation(name, address, email, Status, isCheckBox);
    if (!result?.status) {
      console.log(result, "result");
      setErrors(result);
    } else {
      postContactsData();
      setErrors({ type: "", msg: "", status: true });
    }
  };

  return (
    <div className="form-container">
      <div className="form-body">
        <h3 style={{ textAlign: " center" }}>Contact Form </h3>
        <InputField
          className={"input-box"}
          type="text"
          value={name}
          placeholder={"Enter the Name"}
          onChange={handleName}
        ></InputField>
        <div>
          {!errors.status && errors.type === "name" && (
            <p className="paragraph-error" style={{ color: "red" }}>
              {errors.msg}
            </p>
          )}
        </div>
        <InputField
          className={"input-box"}
          type="text"
          value={address}
          placeholder={"Enter the Address"}
          onChange={handleAddress}
        />
        <div>
          {!errors.status && errors.type === "address" && (
            <p className="paragraph-error" style={{ color: "red" }}>
              {errors.msg}
            </p>
          )}
        </div>
        <InputField
          className={"input-box"}
          type="text"
          value={email}
          placeholder={"Enter the Email"}
          onChange={handleEmail}
        />
        <div>
          {!errors.status && errors.type === "email" && (
            <p className="paragraph-error" style={{ color: "red" }}>
              {errors.msg}
            </p>
          )}
        </div>

        <div className="drop-down-check-box-container">
          <select
            className="drop-down"
            value={Status}
            onChange={(e) => handleDropDown(e)}
          >
            {SelectData.map((index) => (
              <option key={index.value} value={index.value}>
                {index.label}
              </option>
            ))}
          </select>
          <div>
            {!errors.status && errors.type === "jobStatus" && (
              <p className="paragraph-error" style={{ color: "red" }}>
                {errors.msg}
              </p>
            )}
          </div>
          <div>
            <div className="check-box">
              <InputField
                className={"check-box"}
                type="checkbox"
                checked={isCheckBox}
                onChange={handleCheckBox}
              />
              <label>Do like to code</label>
            </div>
            <div>
              {!errors.status && errors.type === "doLiketoCode" && (
                <p className="paragraph-error" style={{ color: "red" }}>
                  {errors.msg}
                </p>
              )}
            </div>
          </div>
        </div>
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
