import React from 'react';
import PropTypes from 'prop-types';

import css from './Modal.module.css';

export class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.keyCode === 27) {
      this.props.onClose();
    }
  };

  render() {
    const { image, onClose } = this.props;

    return (
      <div className={css.Overlay} onClick={onClose}>
        <div className={css.Modal}>
          <img
            src={image.largeImageURL}
            alt={image.id}
            onClick={event => event.stopPropagation()}
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

// 1.
// document.addEventListener('keydown', (event) => {
//   if (event.key === 'Escape') {
//     // close modal here
//   }
// 2.
// keydown.escape=“modal = false”
// 3.
// (document).keyup(function(ev){
//     if(ev.keyCode == 27) {
//       modal_menu.close();
//     }
//   });
// or
// handleKeyDown = event => {
//   if (event.keyCode === 27) {
//     this.props.onClose();
//   }
// };