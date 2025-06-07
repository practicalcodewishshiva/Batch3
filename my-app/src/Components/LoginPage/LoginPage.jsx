import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [phoneNumber, updatePhoneNumber] = React.useState("");
  const navigate = useNavigate();
  function capturePhoneNumber(event) {
    updatePhoneNumber(event.target.value);
    console.log(phoneNumber, "phoneNumber");
  }

  function showCapturePhoneNumberEnteredValue() {
    console.log("clicked", phoneNumber);
    if (phoneNumber === "sravanthi") {
      //    ikkada execute cheyu
      alert("sravanthi found");
      navigate("/Dashboard");
    } else {
      navigate("/not-found");
      alert("sravanthi not found ");
    }
  }

  //   const name = "shiva"
  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <h2 style={{ position: "relative", left: "32px" }}>
          India's last minute app
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            bottom: "46px",
            right: "3px",
          }}
        >
          <p>Log in or Sign up</p>
        </div>
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        <input
          type="text"
          placeholder="Enter Mobile Number"
          onChange={capturePhoneNumber}
          style={{
            borderRadius: "16px",
            padding: "17px",
            position: "relative",
            bottom: "34px",
            left: "32px",
            width: "300px",
          }}
        />
      </Typography>
      <button
        class="button-3"
        role="button"
        onClick={showCapturePhoneNumberEnteredValue}
      >
        {/* Continue */}
        Login
      </button>
    </Box>
  );
}

export default LoginPage;

// react rouuter navigate method
// const navigate = useNavigate();
// navigate("/DashBoard")
