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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    // const checkbox = (<input
    //   type="checkbox"
    //   data-testid={ hasTrunfo ? '' : 'trunfo-input' }
    //   className="isSuperTrunfo"
    //   id="isSuperTrunfo"
    //   name="cardTrunfo"
    //   checked={ cardTrunfo }
    //   onChange={ onInputChange }
    // />);

    return (
      <div className="formArea">
        <form onSubmit={ onSaveButtonClick }>
          <h1>Adicionar nova carta</h1>
          <label htmlFor="nameInput">
            Nome
            <input
              type="text"
              data-testid="name-input"
              value={ cardName }
              name="cardName"
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
              name="cardDescription"
              onChange={ onInputChange }
            />
          </label>

          <label className="attr" htmlFor="numberInput">
            Attr1
            <input
              type="number"
              data-testid="attr1-input"
              name="cardAttr1"
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
              name="cardAttr2"
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
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label className="imageWay" htmlFor="imageWay">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              id="imageWay"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rarity">
            Raridade
            <select
              name="cardRare"
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

          <label className="checkboxArea" htmlFor="cardTrunfo">
            {hasTrunfo ? (<span>Você já tem um Super Trunfo em seu baralho. </span>)
              : (
                <input
                  type="checkbox"
                  data-testid={ hasTrunfo ? '' : 'trunfo-input' }
                  id="cardTrunfo"
                  className="isSuperTrunfo"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />)}
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
      </div>
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
