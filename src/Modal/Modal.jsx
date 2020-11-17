import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
    triggerNode: PropTypes.element.isRequired,
    title: PropTypes.string,
  };

  static defaultProps = {
    onClose: null,
    open: false,
    title: "default modal title",
  };
  render() {
    const { children, title, onClose, open, triggerNode } = this.props;
    return (
      <>
        {triggerNode}
        {open && (
          <div className="modal__wrapper">
            {/**
             * Added role attribute for adhering to a11y compliant.
             */}
            <div
              className="modal__container"
              role="dialog"
              aria-labelledby="panelTitle"
            >
              <div className="modal__title">
                <h1 id="panelTitle">{title}</h1>
                <button onClick={onClose} className="modal__close">
                  X
                </button>
              </div>
              <div className="modal__body">{children}</div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Modal;
