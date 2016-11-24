import React from 'react'
import ReactDOM from 'react-dom'

class Filtertable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: 0
        }
        this.searchChanged = this.searchChanged.bind(this);
    }

    searchChanged(e){
        if (e.target.value.match(/[0-9]/)){
            this.props.searchUpdate(e.target.value);
        }
        else{
            this.props.searchUpdate(0);
        }
    }

    render() {
        var searchIDReqest = this.state.search;
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
                        <input ref="filterInput" onChange = {this.searchChanged} type="number"/>
                    </td>
                </tr>
             </tbody>
          </table>
        );
    }
}

export default Filtertable;