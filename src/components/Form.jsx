import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <h1>Adicionar nova carta</h1>
        <label htmlFor="nameInput">
          Nome
          <input
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            id="nameInput"
          />
        </label>

        <label htmlFor="textAreaInput">
          Descrição
          <input
            type="textarea"
            data-testid="description-input"
            id="textAreaInput"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label className="attr" htmlFor="numberInput">
          Attr1
          <input
            type="number"
            data-testid="attr1-input"
            id="numberInput"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label className="attr" htmlFor="number2Input">
          Attr2
          <input
            type="number"
            data-testid="attr2-input"
            id="number2Input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label className="attr" htmlFor="number3Input">
          Attr3
          <input
            type="number"
            data-testid="attr3-input"
            id="number3Input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="imageWay">
          <input
            type="text"
            data-testid="image-input"
            id="imageWay"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rarity">
          Raridade
          <select
            name="rarity"
            data-testid="rare-input"
            id="rarity"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label className="checkboxArea" htmlFor="isSuperTrunfo">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="isSuperTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trube Trunfo
        </label>

        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

// Resferência: https://stackoverflow.com/questions/38684925/react-eslint-error-missing-in-props-validation
Form.propTypes = {
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

export default Form;
