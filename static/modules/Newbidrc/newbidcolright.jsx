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
        this.state = { auto:{modelId: null, markId: null, year: null} };
        this.onMarkSelect = this.onMarkSelect.bind(this);
        this.onModelSelect = this.onModelSelect.bind(this);
        this.onYearSelect = this.onYearSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onMarkSelect(e) {
          let auto = this.state.auto;
          auto.markId=e;
          auto.modelId=null;
          auto.year=null;
          this.setState({ auto, modelyears: [], models: [] });
          // $.getJSON('./static/json/'+ e + '.json', function(data) {this.setState({model: data})}.bind(this));
        if(e){
          $.getJSON('https://test.uremont.com/auto/models?mark='+ e , function(data) {this.setState({models: data})}.bind(this));
        }
    }

      onModelSelect(e) {
        let auto = this.state.auto;
         auto.modelId=e;
         auto.year=null;
         this.setState({ auto, modelyears: [] });
        // $.getJSON('./static/json/'+ e + '.json', function(data) {this.setState({modelyear: data})}.bind(this));
        if(e){
        $.getJSON('https://test.uremont.com/auto/year?model='+ e, function(data) {this.setState({modelyears: data})}.bind(this));
        }
    }

   onYearSelect(e) {
        let auto = this.state.auto;
        auto.year=e;
        this.setState({ auto });
    }
    handleSubmit(event) {
        let {message, value} = this.state;
        message.push(value);
        this.setState({ message, value: '' });
    }
    componentDidMount(){
      $.getJSON('./static/json/auto brands.json', function(data) {this.setState({marks: data})}.bind(this));
    }
    render() {
//      $.getJSON('./static/json/auto brands.json', function(data) {this.setState({data: data})}.bind(this));
//      console.log(this.state.data);
        return (
            <div className="rightColumn">
                <div className="rightColumn-markModYear">
                    <Markinfo options = {this.state.marks} onFuck={this.onMarkSelect} placeholder='Марка'/>
                    <Markinfo options = {this.state.models} onFuck={this.onModelSelect} placeholder='Модель'/>
                    <Markinfo years = {this.state.modelyears} onFuck={this.onYearSelect} placeholder='Год'/>
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