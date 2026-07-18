import { useState } from "react";

const STATUS = { IDLE: "idle", SENDING: "sending", SUCCESS: "success", ERROR: "error" };

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export function useContactForm() {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.SENDING);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "kontakt", ...values }),
      });
      if (!res.ok) throw new Error("Request failed");
      setValues({ name: "", email: "", message: "" });
      setStatus(STATUS.SUCCESS);
    } catch {
      setStatus(STATUS.ERROR);
    }
  };

  return { values, status, STATUS, handleChange, handleSubmit };
}
