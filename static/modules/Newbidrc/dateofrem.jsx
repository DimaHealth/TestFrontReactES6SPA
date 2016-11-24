import React from 'react'
import ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'


class Dateofrem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            message: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ startDate: date });
    }
    handleSubmit(event) {
       
    }


     getInitialState(e) {
    return {
      startDate: moment()
    };
}
 
//   handleChange: function(date) {
//     this.setState({
//       startDate: date
//     });
//   },
    render() {
        return (
                    <div className="rightColumn-dateofRem">
                        <p className="rightColumn-dateofRem_title">Желаемая дата ремонта</p>
                       <DatePicker dateFormat="YYYY/MM/DD" selected={this.state.startDate} onChange={this.handleChange} />
                    </div>
                        
        );
    }
}
export default Dateofrem;