import React from 'react'
import ReactDOM from 'react-dom'

class Filtertable extends React.Component {
    constructor(props){
        super(props);
        this.searchChanged = this.searchChanged.bind(this);
    }

    searchChanged(e){
        
    }

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
                        <input onChange = {this.searchChanged} type="text"/>
                    </td>
                </tr>
             </tbody>
          </table>
        );
    }
}

export default Filtertable;