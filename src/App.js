import React, {Component} from 'react';

import "./index.css";
  
  class App extends Component {
  
      constructor(props) {
          super(props);
          this.state = {
              items: [],
              isLoaded: false,
          }
      }
  
      componentDidMount() {
          fetch('https://uamytlt3b0.execute-api.us-west-2.amazonaws.com/petstore/pets')
              .then(res => res.json())
              .then(json => {
                  this.setState({
                      isLoaded: true,
                      items: json,
                  })
              });
      }
  
      transformInTable = () => {
          if (this.state.isLoaded) {
              let table = []
              this.state.items.forEach((obj) => {
                  let children = []
                  for (let item in obj) {
                      children.push(<td>{obj[item]}</td>)
                  }
                  table.push(<tr>{children}</tr>)
              })
              return table
          }
      }
  
      render() {
  
          var {isLoaded} = this.state;
  
          if (!isLoaded) {
              return <div> Carregando... </div>;
          } else {
              return (
                  <div className = "App" >
                      <table id="table">
                      <caption>Pet Store</caption>
                        <th>ID</th>
                        <th>Tipo</th>
                        <th>Preço</th>
                          <tbody>
                              {this.transformInTable()}
                          </tbody>
                      </table>
                  </div>
              );
          }
      }
  }
  
  export default App;