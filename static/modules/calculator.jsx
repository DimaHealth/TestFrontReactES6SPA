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
    //   let fd=this.state.fd;
    //   let sp=this.state.sp;
    //   let sd=this.state.sd;
    this.setState({fp});
   
  }

  handleFixDiscountChange(fd) {
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
     if (this.state.fd != 0){
       a = this.state.fp*((100-this.state.fd)/100);
     }
     else {
       a=this.state.fp;
     };

     if (this.state.sd != 0){
       b = this.state.sp*((100-this.state.sd)/100);
     }
     else {
       b=this.state.sp;
     };
     let c=(a+b);
    return(
      <div className = "calculator-body">
        <CalcInput  className="inp" value={this.state.fp} onChange={this.handleFixPriceChange} />
        <CalcInput  className="inp" value={this.state.fd} onChange={this.handleFixDiscountChange} />
        <br/> <span> Сумма: {a}<span className="remontResult"></span></span>
        <br/>
        <CalcInput  className="inp" value={this.state.sp} onChange={this.handleSparesPriceChange} />
        <CalcInput  className="inp" value={this.state.sd} onChange={this.handleSparesDiscountChange}/>
        <br/> <span>Сумма: {b}<span className="zapchastResult"></span></span>
        <br/> <span>
         Итого: {c}<span className="mainResult"></span>
         </span>
      </div>
        );
    }
}
export default Calculator;