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
        this.onMarkSelect = this.onMarkSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onMarkSelect(e) {
        let auto = this.state.auto;
        auto.markId=e;
        this.setState({ auto });
        $.getJSON('./static/json/'+ e + '.json', function(data) {this.setState({model: data})}.bind(this));
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
                    <Markinfo options = {this.state.data} value={this.state.message} onFuck={this.onMarkSelect} placeholder='Выберите марку'/>
                    <Markinfo options = {this.state.model}/>
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