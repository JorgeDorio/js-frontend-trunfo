/* eslint-disable react/self-closing-comp */
import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <label htmlFor="nameInput">
          Nome
          <input
            type="text"
            data-testid="name-input"
            id="nameInput"
          />
        </label>

        <label htmlFor="textAreaInput">
          Descrição
          <input
            type="textarea"
            data-testid="description-input"
            id="textAreaInput"
          />
        </label>

        <label htmlFor="numberInput">
          Attr1
          <input
            type="number"
            data-testid="attr1-input"
            id="numberInput"
          />
        </label>

        <label htmlFor="number2Input">
          Attr2
          <input
            type="number"
            data-testid="attr2-input"
            id="number2Input"
          />
        </label>

        <label htmlFor="number3Input">
          Attr3
          <input
            type="number"
            data-testid="attr3-input"
            id="number3Input"
          />
        </label>

        <label htmlFor="imageWay">
          <input
            type="text"
            data-testid="image-input"
            id="imageWay"
          />
        </label>

        <label htmlFor="rarity">
          Raridade
          <select
            name="rarity"
            data-testid="rare-input"
            id="rarity"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="isSuperTrunfo">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="isSuperTrunfo"
          />
        </label>

        <button
          data-testid="save-button"
          type="button"
          id="isSuperTrunfo"
        >
          Salvar
        </button>

      </form>
    );
  }
}

export default Form;
