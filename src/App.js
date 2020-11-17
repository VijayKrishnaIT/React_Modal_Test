import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [noOfTimesOpened, setNoOfTimesOpened] = useState(0);
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    const incrementTimes = noOfTimesOpened + 1;
    setNoOfTimesOpened(incrementTimes);
    setShow(true);
  };
  const handleClose = () => {
    /**
     * handler to be trigger on click of the close button of modal dialog.
     */
    setShow(false);
  };
  const handleReset = () => {
    /**
     * resetting the count value to zero.
     */
    setNoOfTimesOpened(0);
  };
  return (
    <div className="App">
      <Modal
        onClose={handleClose}
        open={show}
        title="Title of the modal"
        triggerNode={
          <button onClick={handleOpen} className="custom__buttons">
            Open
          </button>
        }
      >
        <span>{`Modal has been clicked ${noOfTimesOpened} times `} </span>
      </Modal>
      <button onClick={handleReset} className="custom__buttons">
        Reset
      </button>
      <div style={{ "text-align": "left" }}>
        <b>Note:</b>{" "}
        <em>High level implementation details are mentioned in read me file</em>
      </div>
    </div>
  );
}

export default App;
