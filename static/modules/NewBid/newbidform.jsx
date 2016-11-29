import React from 'react'
import ReactDOM from 'react-dom'
import ChooseCar from './components/choosecar'
import WorkScope from './components/workscope'
import AdditionalInfo from './components/additionalinfo'
import moment from 'moment'
import Select from 'react-select'


 class NewBidForm extends React.Component {
    constructor(props) {
         super(props);
        this.state = { desiredDate: null, chosenMark: null, chosenModel: null, chosenYear: null, message:''};
        this.onCarChange = this.onCarChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onAddInfoChange = this.onAddInfoChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit(e) {
        console.log(e);
        event.preventDefault();
    }

    render() {

        return (
            <form className="rightColumn" action='' onSubmit = {this.onSubmit}>
                <ChooseCar className="chooseCar" onCarChange = {this.onCarChange}/>
                <WorkScope onMessageChange = {this.onMessageChange}/>
                <AdditionalInfo onAddInfoChange = {this.onAddInfoChange}/>
                <button className="rightColumn-dateofRem_titleSbmBtn " type="submit">Отправить</button>
            </form>

        );
    }
}
export default NewBidForm;