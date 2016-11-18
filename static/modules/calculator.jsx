import React from 'react'
import ReactDOM from 'react-dom'
import CalcInput from './calcinput'




class Calculator extends React.Component {
<<<<<<< HEAD
    render() {
        return(
            <div className = "calculator-body">
            <input  className="inp" name="remontSum"  />
            <input  className="inp" name="remontProc" />
            <br/> <span> Сумма: <span className="remontResult"></span></span>
            <br/>
            <input  className="inp" name="zapchastSum"/>
            <input  className="inp" name="zapchastProc"/>
            <br/> <span>Сумма: <span className="zapchastResult"></span></span>
            <br/> <span>
            Итого: <span className="mainResult" name = "mResult"></span>
            </span>
            </div>
=======
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
     let c=parseFloat(a)+parseFloat(b);
    return(
      <div className = "calculator-body">
        <CalcInput  className="inp" placeholder='0' value={this.state.fp} onChange={this.handleFixPriceChange} />
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
>>>>>>> origin/master
        );
    }
}
export default Calculator;