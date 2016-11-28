import React from 'react'
import ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'


class AdditionalInfo extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     value: '',
        //     message: [],
        //     startDate: this.props.startDate
        // };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onAddInfoChange(e);
//        this.setState({ startDate: e });
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
                       <DatePicker dateFormat="DD/MM/YYYY" selected={this.props.startDate} onChange={this.handleChange} minDate={moment()} placeholderText="Укажите дату" isClearable={true}/>
                    </div>
                        
        );
    }
}
export default AdditionalInfo;