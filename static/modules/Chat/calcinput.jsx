import React from 'react'



class CalcInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (!e.target.value.match(/[^0-9]/g)){
      if (e.target.value==""){
        e.target.value=0;
      }
    this.props.onChange(Number(e.target.value));
    }
  }

  render() {
    const value = this.props.value;
    const maxlength = this.props.maxlength;
    return (
        <input value={value}
               maxLength={maxlength}
               onChange={this.handleChange} />
    );
  }
}

export default CalcInput;
