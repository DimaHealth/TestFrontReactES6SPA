import React from 'react'
import ReactDOM from 'react-dom'

class Filtertable extends React.Component {
    render() {
        return (
        <table className="filterTable">
            <tbody>
                <tr>
                    <td>
                        <p>
                        Фильтрация по № заявки:
                        </p>
                    </td>
                    <td>
                        <input type="text" />
                    </td>
                </tr>
             </tbody>
          </table>
        );
    }
}

export default Filtertable;