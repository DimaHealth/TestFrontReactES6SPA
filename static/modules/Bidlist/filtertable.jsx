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
        if (!e.target.value.match(/[^0-9]/g)){
      if (e.target.value==""){
        e.target.value=0;
      }
    this.props.onChange(Number(e.target.value));
    }
    }

    render() {
        var searchIDReqest = this.props.value;
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
                        <input ref="filterInput" onChange = {this.searchChanged} value = {searchIDReqest}/>
                    </td>
                </tr>
             </tbody>
          </table>
        );
    }
}

export default Filtertable;