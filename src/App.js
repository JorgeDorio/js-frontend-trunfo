import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

// O requisito 4 foi realizado com o auxílio dos alunos Tiago Lourinho e Abner Sousa através de chamadas no slack e no zoom, respectivamente.
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: 'Nome',
      cardDescription: '',
      cardAttr1: 99,
      cardAttr2: 99,
      cardAttr3: 99,
      cardImage: 'https://www.cursoemvideo.com/wp-content/uploads/bb-plugin/cache/javascript-circle.jpg',
      cardRare: 'normal',
      cardTrunfo: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
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
