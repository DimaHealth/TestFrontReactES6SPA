import React from 'react'
import ReactDOM from 'react-dom'
import Markinfo from './markinfo'
import Modinfo from './modinfo'
import Yearinfo from './yearinfo'
import Dateofrem from './dateofrem'
import Descworks from './descworks'
import Photo from './photo'
import Uploadphoto from './uploadphoto'

 class Bidcolright extends React.Component {
     constructor(props) {
         super(props);
        this.state = {
            auto:{
                modelId: '',
                markId: '',
                year:''
            },
            message:'',
            messageImg:'',
            desiredDate:''

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        let {message, value} = this.state;
        message.push(value);
        this.setState({ message, value: '' });
    }
    componentDidMount(){
      $.getJSON('./static/json/auto brands.json', function(data) {this.setState({data: data})}.bind(this));
    }
    render() {
//      $.getJSON('./static/json/auto brands.json', function(data) {this.setState({data: data})}.bind(this));
//      console.log(this.state.data);
        return (
            <div className="rightColumn">
                <div className="rightColumn-markModYear">
                    <Markinfo options = {this.state.data} />
                    <Markinfo />
                    <Markinfo />
                </div>


                <div className="rightColumn-whattoDo">
                   <Descworks />
                   <Photo />
                   <Uploadphoto />
                </div>
                <Dateofrem />
            </div>

        );
    }
}
export default Bidcolright;