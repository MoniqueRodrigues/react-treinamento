import React from 'react';
import Contador from './Contador'



//React.Component é um outro objeto que reside na biblioteca do react
//Essa biblioteca exige que essa subclasse tenha um metodo chamado render para que ele saiba o que será reinderizado quando chamar o componente
// export default class App extends React.Component{
//     render(){
//         return <h1>Olá React!!</h1>        //retorna/exporta o jsx que queremos reinderizar

//     }

// }



export default class App extends React.Component{
    render(){
        return  <Contador />
            
          
    }
    
    
}