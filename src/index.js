// ARQUIVO QUE FARÁ A REINDERIZAÇÃO NO DOM!!!!

import React from 'react'; //declaração que pega tudo que esta no pacote react que colocamos como dependencia no arquivo package.json e coloca para dentro da variavel REACT
import ReactDOM from 'react-dom'; //reinderiza os componentes dentro do dom.
import App from './components/App';



// //render é um método do ReactDOM que reinderiza os componentes do react 
// ReactDOM.render(

//     <h1>Olá Mundo</h1>, // instrução para criar 2 parametros- componente no react que lembra o html
//     document.getElementById('app')

// ) 


// CRIANDO PRIMEIRO COMPONENTE:
ReactDOM.render(
    <App />, //por padrão, começa o nome do componente com letra maiuscula
    document.getElementById('app')

)

