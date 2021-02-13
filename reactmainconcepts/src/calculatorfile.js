import React from 'react';

class CalculatorOutput extends React.Component {
    constructor(props)
    {
      super(props);
    //   this.state = {
    //     output: 0
    //   }
    }
    render() {
        const output = this.props.output;
        console.log(output)
        if(output!=0)
        {
            return (
                <div align="center">
                  <h2>{output}</h2>
                </div>
              )        
        }
        else
        {
            return (
                <div align="center">
                    <h2>|</h2>
                </div>
            )
        }
    }
  }
  
  class CalculatorButtons extends React.Component {
    constructor(props)
    {
      super(props);
      this.state = {
          result: 0,
          temp: 0,
          operation:''
      };
      this.handleAdd = this.handleAdd.bind(this);
      this.handleDivision =this.handleDivision.bind(this);
      this.handleMultiply = this.handleDivision.bind(this);
      this.handleSubtract = this.handleSubtract.bind(this);
      this.writeNumber = this.writeNumber.bind(this);
      this.clearAll = this.clearAll.bind(this);
      this.showResult = this.showResult.bind(this);
    }
  
    handleAdd(event) {
        this.setState({
            temp: this.state.result,
            result: 0,
            operation: '+'
        })
    }

    handleDivision(event) {
        this.setState({
            temp: this.state.result,
            result: 0,
            operation: '/'
        })
    }

    handleMultiply(event) {
        this.setState({
            temp: this.state.result,
            result: 0,
            operation: 'x'
        })
    }

    handleSubtract(event) {
        this.setState({
            temp: this.state.result,
            result: 0,
            operation: '-'
        })
    }

    writeNumber(event) {
//        console.log('write number called', this.state.result)
        this.setState({ 
            result : ((this.state.result*10) + parseInt(event.target.value)) // 
        });
        console.log(this.state.result)
    }

    clearAll() {
        this.setState({
            result: 0
        })
    }

    showResult() {
        const operation=this.state.operation;
        if(operation=='+')
        {
            this.setState({
                result: this.state.result + this.state.temp
            })
        }
        else if(operation=='-')
        {
            this.setState({
                result: this.state.temp - this.state.result
            })
        }
        else if(operation=='x')
        {
            this.setState({
                result: this.state.result * this.state.temp
            })
        }
        else if(operation=='/')
        {
            this.setState({
                result: this.state.result / this.state.temp
            })
        }
    }

    render() {
      return (<div>
        <CalculatorOutput output={this.state.result} />
        <div align="center">
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleSubtract}>-</button>
        <button onClick={this.handleMultiply}>x</button>
        <button onClick={this.handleDivision}>/</button>
        </div>
        <div align="center">
        <button onClick={this.writeNumber} value={9}>9</button>
        <button onClick={this.writeNumber} value={8}>8</button>
        <button onClick={this.writeNumber} value={7}>7</button>
        <button onClick={this.writeNumber} value={6}>6</button>
        </div>
        <div align="center">
        <button onClick={this.writeNumber} value={5}>5</button>
        <button onClick={this.writeNumber} value={4}>4</button>
        <button onClick={this.writeNumber} value={3}>3</button>
        <button onClick={this.writeNumber} value={2}>2</button>
        </div>
        <div align="center">
        <button onClick={this.writeNumber} value={1}>1</button>
        <button onClick={this.writeNumber} value={0}>0</button>
        <button onClick={this.showResult} value={0}>=</button>
        <button onClick={this.clearAll}>Clear</button>
        </div>
      </div>);
    }
  }
  
  class Calculator extends React.Component
  {
    constructor(props)
    {
      super(props);
    }
    render() {
      return (
        <div>
          <h1 align="center">Calculator App</h1>
          <CalculatorButtons/>
        </div>
      )
    }
  
  }

  export default Calculator;