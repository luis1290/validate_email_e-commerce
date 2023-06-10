import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function ValidateEmail() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [data, setData] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (token) {
      axios.post("http://localhost:8000/users/email-validate", { token })
        .then(res => setData(true))
        .catch(error => {
          console.log(error)
          setError(true)
        })
    }
  }, [token])
  return (
    <>
      <h1> email validado</h1>
    </>
  )

}

