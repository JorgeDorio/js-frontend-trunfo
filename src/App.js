import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

// O requisito 4 foi realizado com o auxílio dos alunos Tiago Lourinho e Abner Sousa através de chamadas no slack e no zoom, respectivamente.
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  validationButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxAttr = 90;
    const attr1Validation = cardAttr1 >= 0 && cardAttr1 <= maxAttr;
    const attr2Validation = cardAttr2 >= 0 && cardAttr2 <= maxAttr;
    const attr3Validation = cardAttr3 >= 0 && cardAttr3 <= maxAttr;

    const allAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const attrsLimit = 210;
    const validationAttr = allAttr <= attrsLimit;

    const testValidation = [
      !cardName.length,
      !cardDescription.length,
      !attr1Validation,
      !attr2Validation,
      !attr3Validation,
      !validationAttr,
      !cardImage.length,
    ];

    const filledForm = testValidation.every((error) => error !== true);
    this.setState({ isSaveButtonDisabled: !filledForm });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.validationButton);
  }

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
      onSaveButtonClick,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <main>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </main>
    );
  }
}

export default App;
