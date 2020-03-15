import React, { Component } from 'react';
import './App.css';
import { Table} from 'semantic-ui-react'; 

class App extends Component  { 
  constructor() {
    super(); 
    this.state = {
      displayResult: '0', 
      opperation: '',
      finalReasult: 0
    }
  }

  onSelectNumber = (number) => {
    const { finalReasult, opperation } = this.state;

    switch(opperation) {
      case '+': { this.setState({ displayResult: finalReasult + number, finalReasult: finalReasult + number}); break; }
      case '-': { this.setState({ displayResult: finalReasult - number, finalReasult: finalReasult - number}); break; }
      case '*': { this.setState({ displayResult: finalReasult * number, finalReasult: finalReasult * number}); break; }
      case '/': { this.setState({ displayResult: finalReasult / number, finalReasult: finalReasult / number}); break; }
      default: { this.setState({displayResult: number, finalReasult: number}) }
    }
  }

  render () {
    return (
      <div className="App">
        <h1 className="Calculator">Calculator</h1>
          <Table className='table' celled inverted size='large' > 
          <Table.Header>     
             <Table.Row >              
                <Table.HeaderCell colSpan='4' textAlign='right'>{this.state.displayResult}</Table.HeaderCell> 
              </Table.Row>
            </Table.Header>

          <Table.Body>
            <Table.Row> 
              <Table.Cell className='cell' onClick={() => this.setState({displayResult: '0', finalReasult: 0, opperation: ''})} textAlign='center'>C</Table.Cell>
              <Table.Cell className='cell' onClick={() => this.setState({opperation: '/', displayResult: this.state.displayResult + '/'})} textAlign='center'>/</Table.Cell>
              <Table.Cell className='cell' onClick={() => this.setState({opperation: '*', displayResult: this.state.displayResult + '*'})} textAlign='center'>*</Table.Cell>
              <Table.Cell className='cell' onClick={() => this.onSelectNumber(0)} textAlign='center'>0</Table.Cell>
            </Table.Row> 

            <Table.Row> 
              <Table.Cell className='cell' onClick={() => this.onSelectNumber(1)} textAlign='center'>1</Table.Cell>
              <Table.Cell className='cell' onClick={() => this.onSelectNumber(2)} textAlign='center'>2</Table.Cell>
              <Table.Cell className='cell' onClick={() => this.onSelectNumber(3)} textAlign='center'>3</Table.Cell>
              <Table.Cell className='cell' onClick={() => this.setState({opperation: '+', displayResult: this.state.displayResult + '+'})} textAlign='center'>+</Table.Cell>
            </Table.Row> 

            <Table.Row> 
              <Table.Cell className='cell' onClick={() => this.onSelectNumber(4)} textAlign='center'>4</Table.Cell>
              <Table.Cell className='cell' onClick={() => this.onSelectNumber(5)} textAlign='center'>5</Table.Cell>
              <Table.Cell className='cell' onClick={() => this.onSelectNumber(6)} textAlign='center'>6</Table.Cell>
              <Table.Cell className='cell' onClick={() => this.setState({opperation: '-', displayResult: this.state.displayResult + '-'})} textAlign='center'>-</Table.Cell>
            </Table.Row> 

            <Table.Row> 
              <Table.Cell className='cell' onClick={() => this.onSelectNumber(7)} textAlign='center'>7</Table.Cell>
              <Table.Cell className='cell' onClick={() => this.onSelectNumber(8)} textAlign='center'>8</Table.Cell>
              <Table.Cell className='cell' onClick={() => this.onSelectNumber(9)} textAlign='center'>9</Table.Cell>
              <Table.Cell className='cell' onClick={() => this.setState({displayResult: this.state.finalReasult})} textAlign='center'>=</Table.Cell>
            </Table.Row> 
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default App;
