import React from 'react'
import ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'

require('./scss/react-datepicker.min.scss');

class AdditionalInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            message: [],
            chosenDate: null
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if(e){
          this.props.onAddInfoChange(e.format('DD/MM/YYYY'));
        }
        this.setState({ chosenDate: e });
    }

    //   handleChange: function(date) {
    //     this.setState({
    //       startDate: date
    //     });
    //   },
    render() {
        return (
            <div>
                <div className="submitRow-info">
                    <p>Информация</p>
                </div>
                
                    <div className="submitRow-dateofRem">
                        <p className="submitRow-dateofRem_title">Желаемая дата ремонта</p>
                        <DatePicker className="submitRow-dateofRem_date" dateFormat="DD/MM/YYYY" selected={this.state.chosenDate} onChange={this.handleChange} minDate={moment()} placeholderText="Укажите дату" isClearable={true} />
                    </div>
               
            </div>
        );
    }
}
export default AdditionalInfo;