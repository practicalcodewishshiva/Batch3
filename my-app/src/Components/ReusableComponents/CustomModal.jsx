import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../ReusableComponents/CustomModal.css";
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

export default function CustomModal({
  modalTrack,
  modalOpenClick,
  modalCloseClick,
}) {
  const [phoneNumber, updatePhoneNumber] = React.useState("")
  console.log("modalTrack", modalTrack);

  function capturePhoneNumber(event) {
    updatePhoneNumber(event.target.value)
  }

  function showCapturePhoneNumberEnteredValue(){
    console.log("clicked", phoneNumber)
  }
  return (
    <div>
      <Modal
        open={modalTrack}
        onClose={modalCloseClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
              type="number"
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
          <button class="button-3" role="button" onClick={showCapturePhoneNumberEnteredValue}>
            Continue
          </button>
        </Box>
      </Modal>
    </div>
  );
}

// parent Container
//                      <h2>India's last minute app</h2>
//                        <p>Log in or Sign up</p>

// 7799044392  enter

// shiva
// capture whetever we entered the value

// JS in build konni methods

// onChange    -- prathi value change onChange

// onClick      --- button click
