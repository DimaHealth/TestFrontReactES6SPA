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
        this.onFileLoad = this.onFileLoad.bind(this);
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

    onFileLoad(e) {
        this.setState({loadedFiles: e});
    }

    onSubmit(e) {
        console.log(this.state);
        e.preventDefault();
    }

    render() {

        return (
            <form className="rightColumn" action='' onSubmit = {this.onSubmit}>
                <ChooseCar className="chooseCar" onCarChange = {this.onCarChange}/>
                <WorkScope onMessageChange = {this.onMessageChange} onFileLoad={this.onFileLoad}/>
            <div className="submitRow">
                <AdditionalInfo onAddInfoChange = {this.onAddInfoChange}/>
                <button className="submitRow-sbmBut" type="submit">Отправить</button>
                </div>
            </form>

        );
    }
}
export default NewBidForm;