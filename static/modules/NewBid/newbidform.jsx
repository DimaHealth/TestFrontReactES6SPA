import React from 'react'
import ReactDOM from 'react-dom'
import ChooseCar from './components/choosecar'
import WorkScope from './components/workscope'
import AdditionalInfo from './components/additionalinfo'
import Submit from './components/submit'
import moment from 'moment'
import Select from 'react-select'


 class NewBidForm extends React.Component {
    constructor(props) {
         super(props);
        this.state = { desiredDate: null, chosenMark: null, chosenModel: null, chosenYear: null, yearSelectState: null , message:''};
        this.onCarChange = this.onCarChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onAddInfoChange = this.onAddInfoChange.bind(this);
    }

    onCarChange(x, y, z){
        this.setState({chosenMark: x, chosenModel: y, chosenYear: z});
    }

    onMessageChange(e) {
        this.setState({message: e});
    }

    onAddInfoChange(e) {
        this.setState({desiredDate: e});
    }

    render() {

        return (
            <div className="rightColumn">
                <ChooseCar onCarChange = {this.onCarChange}/>
                <WorkScope onMessageChange = {this.onMessageChange}/>
                <AdditionalInfo onAddInfoChange = {this.onAddInfoChange}/>
                <button className="rightColumn-dateofRem_titleSbmBtn " type="submit">Отправить</button>
            </div>

        );
    }
}
export default NewBidForm;