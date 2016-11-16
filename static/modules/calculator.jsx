import React from 'react'
import ReactDOM from 'react-dom'

class Calculator extends React.Component {
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
            Итого: <span className="mainResult" name = "maResult"></span>
            </span>
            </div>
        );
    }
}
export default Calculator;