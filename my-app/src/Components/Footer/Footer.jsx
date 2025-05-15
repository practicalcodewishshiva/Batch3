import React, { useState } from "react";
import CustomModal from "../ReusableComponents/CustomModal";

function Footer() {
  const [modalTrack, setModalTrack] = React.useState(false);
  function modalOpenClick() {
    setModalTrack(true);
  }

  function modalCloseClick() {
    setModalTrack(false);
  }
  return (
    <>
      <h1>this is footer</h1>
      <button onClick={modalOpenClick}>Show Modal Popup </button>
      <button onClick={modalCloseClick}>Close Modal Popup</button>
      <CustomModal
        modalTrack={modalTrack}
        modalOpenClick={modalOpenClick}
        modalCloseClick={modalCloseClick}
      />
    </>
  );
}

export default Footer;
