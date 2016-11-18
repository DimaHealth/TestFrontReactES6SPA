import React from 'react'
import ReactDOM from 'react-dom'
import CalcInput from './calcinput'




class Calculator extends React.Component {
   constructor(props) {
    super(props);
    this.handleFixPriceChange = this.handleFixPriceChange.bind(this);
    this.handleFixDiscountChange = this.handleFixDiscountChange.bind(this);
    this.handleSparesPriceChange = this.handleSparesPriceChange.bind(this);
    this.handleSparesDiscountChange = this.handleSparesDiscountChange.bind(this);
    this.state = { fp:0, fd:0, sp:0, sd:0};
  }

  handleFixPriceChange(fp) {
    this.setState({fp});
   
  }

  handleFixDiscountChange(fd) {
    if (fd>100){
      fd=100;
    }
      this.setState({fd});
  }
 
  handleSparesPriceChange(sp) {
    this.setState({sp});
  }

  handleSparesDiscountChange(sd) {
    this.setState({sd});
  }

 render() {
     let a;
     let b;
     a = Number(this.state.fp*((100-this.state.fd)/100));
     b = Number(this.state.sp*((100-this.state.sd)/100));
     let c = Number(a) + Number(b);
    return(
      <div className = "calculator-body">
        <CalcInput  className="inp" value={this.state.fp} maxlength="8" onChange={this.handleFixPriceChange} />
        <CalcInput  className="inp" value={this.state.fd} onChange={this.handleFixDiscountChange} />
        <br/><span> Сумма: {a} руб.<span className="remontResult"></span></span>
        <br/>
        <CalcInput  className="inp" value={this.state.sp} onChange={this.handleSparesPriceChange} />
        <CalcInput  className="inp" value={this.state.sd} onChange={this.handleSparesDiscountChange}/>
        <br/><span>Сумма: {b} руб.<span className="zapchastResult"></span></span>
        <br/><span>
         Итого: {c} руб.<span className="mainResult"></span>
         </span>
      </div>
        );
    }
}
export default Calculator;