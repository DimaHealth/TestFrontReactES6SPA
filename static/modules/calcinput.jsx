import React from 'react'


class CalcInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const value = this.props.value;
    return (
        <input value={value}
               onChange={this.handleChange} />
    );
  }
}

export default CalcInput;
