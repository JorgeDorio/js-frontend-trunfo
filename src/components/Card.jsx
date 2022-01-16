import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <section className="previewArea">
        <h1>Preview</h1>
        <div className="preview">
          <div className="preview2">
            <div className="preview3">
              <h2 data-testid="name-card">{cardName}</h2>
              <img data-testid="image-card" src={ cardImage } alt={ cardName } />
              <p data-testid="description-card">{cardDescription}</p>
              <h3 className="attrp" data-testid="attr1-card">
                Attr01:
                {cardAttr1}
              </h3>
              <h3 className="attrp" data-testid="attr2-card">
                Attr02:
                {cardAttr2}
              </h3>
              <h3 className="attrp" data-testid="attr3-card">
                Attr03:
                {cardAttr3}
              </h3>
              <h3 data-testid="rare-card">
                Tipo:
                {` ${cardRare}`}
              </h3>
              {cardTrunfo && (
                <h4
                  data-testid="trunfo-card"
                >
                  Super Trunfo
                </h4>)}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Card;
