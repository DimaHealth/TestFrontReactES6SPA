import React from 'react'
import ReactDOM from 'react-dom'
import Tabs from './tabs'
import Infotable from './infotable'
import Chatform from './chatform'
import Calculator from './calculator'

class Form extends React.Component {
	render() {
		return (
    <div className="carcas">
        <Tabs />
        <div className = "right-column_chat">
           <Infotable />
            <div className="chat-window">
                <div className="message-block_example">
                    <p className="message-block_text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sequi omnis, impedit pariatur ut sint tempore officiis voluptate velit dolorem ullam ducimus animi eligendi nam at ea nulla voluptatibus ipsam!
                    </p>
                </div>
            </div>
            <div className="calculator-and-chatTextarea">
<<<<<<< HEAD
                <Calculator />
                <Chatform />
=======
                <table className="calculator-body">
                    <tr>
                        <td>
                            <p className="calcTitle">Ремонт</p>
                        </td>
                        <td><input className = "calcInput" type="number" /></td>
                        <td>
                            <p className="calcText">-</p>
                        </td>
                        <td><input className = "calcInput" type="number" /></td>
                        <td>
                            <p className="calcText">%</p>
                        </td>
                        <td><input className = "calcInput" type="number" value="26000" /></td>
                    </tr>
                    <tr>
                        <td>
                            <p className="calcTitle">Запчасти</p>
                        </td>
                        <td><input className = "calcInput" type="number" /></td>
                        <td>
                            <p className="calcText">-</p>
                        </td>
                        <td><input className = "calcInput" type="number" /></td>
                        <td>
                            <p className="calcText">%</p>
                        </td>
                        <td><input className = "calcInput" type="number" value="0" /></td>
                    </tr>
                    <tr>
                        <td className="resultRow"> <input className = "calcInput" type="number" /> </td>
                    </tr>
                </table>
>>>>>>> origin/master
                <div id="send-message_form">
                </div>
            </div>
        </div>
   </div>
		);
	}
}

export default Form;
