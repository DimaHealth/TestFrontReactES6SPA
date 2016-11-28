import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import Select from 'react-select'


 class ChooseCar extends React.Component {
     constructor(props) {
        super(props);
        this.state = { selectedMark: null, selectedModel: null, selectedYear: null, yearSelectState: null };
        this.onMarkSelect = this.onMarkSelect.bind(this);
        this.onModelSelect = this.onModelSelect.bind(this);
        this.onYearSelect = this.onYearSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onMarkSelect(e) {
        if(e){
          $.getJSON('https://test.uremont.com/auto/models?mark='+ e, function(data) {this.setState({selectedMark:e, models: data.map((option) => ({value: option.id, label: option.name})), modelyears: null, selectedYear: null, yearSelectState: null })}.bind(this));
        }
        else{
          this.setState({selectedMark:e, modelyears: null, models: null, selectedModel: null, selectedYear: null, yearSelectState: null });
        }
        this.props.onCarChange( e, null, null);
    }

      onModelSelect(e) {
          console.log(e);
        if(e){
              var options=[];
          $.getJSON('https://test.uremont.com/auto/year?model='+ e, function(data) {
              var y=0;
              if(data[1]==9999){
                  for (let x = data[0]; x <= new Date().getFullYear; x++) {
                      options.push({ value: y, label: x });
                      y++;
                  }

              } else if(data==null) {
                  options=null;
              } else {
                  for(let x=data[0]; x<=data[1];x++){
                    options.push({value: y, label: x});
                    y++
                  }
              }

          })
          this.setState({ selectedModel:e, modelyears: options, selectedYear: null, yearSelectState: null });
        } else {
            this.setState({selectedModel:e, modelyears: null, selectedYear: null, yearSelectState: null });
        }
        this.props.onCarChange( this.state.selectedMark, e, null);
    }

   onYearSelect(e) {
       if(e){

         this.setState({ selectedYear: e.label, yearSelectState: e });
         this.props.onCarChange( this.state.selectedMark, this.state.selectedModel, e.label);
      } else {

         this.setState({ selectedYear: null, yearSelectState: e });
         this.props.onCarChange( this.state.selectedMark, this.state.selectedModel, e);
      }
    }

    handleChange(e) {
        this.setState({ startDate: e });
    }

    componentDidMount(){
      $.getJSON('./static/json/auto brands.json', function(data) {this.setState({marks: data.map((option) => ({value: option.id, label: option.name}))})}.bind(this));

    }


    render() {
//      $.getJSON('./static/json/auto brands.json', function(data) {this.setState({data: data})}.bind(this));

        return (
            <div className="rightColumn">
                <div className="leftColumn-auto"><p className="leftColumn-auto_title">Автомобиль</p></div>
                <div className="rightColumn-markModYear">
                    <Select className="rightColumn-markModYear-select" options = {this.state.marks} onChange={this.onMarkSelect} placeholder='Марка' simpleValue clearable={true} name="selected-state" disabled={this.state.disabled} value={this.state.selectedMark}/>
                    <Select className="rightColumn-markModYear-select" options = {this.state.models} onChange={this.onModelSelect} placeholder='Модель' simpleValue clearable={true} name="selected-state" disabled={this.state.disabled} value={this.state.selectedModel}/>
                    <Select className="rightColumn-markModYear-select" options = {this.state.modelyears} onChange={this.onYearSelect} placeholder='Год' clearable={true} name="selected-state" disabled={this.state.disabled} value={this.state.yearSelectState}/>
                </div>
            </div>

        );
    }
}
export default ChooseCar;