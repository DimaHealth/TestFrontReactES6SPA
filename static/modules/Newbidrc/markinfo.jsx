import React from 'react'
import ReactDOM from 'react-dom'

// export const Selector = props => {
//   const selectOptions = renderOptions(props.options);
 
//   return (
//     <select>
//         { selectOptions }
//     </select>
//   );
// };
 
// const renderOptions = options => (
//   options.map(option => this.renderPostPreview(option))
// );
 
// const renderOption = option => (
//   <option id={option.id} value={option.name} />
// );

class Markinfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
//        console.log(e.target.value);
        this.setState({value: e.target.value});
        this.props.onFuck(Number(e.target.value));
    }
    
    render() {
        if(this.props.options!=null){
          var options = this.props.options.map((option, key) => {
            return (
                <option key={key} value={option.id}>{option.name}</option>
            )
          })
        }
        else if (this.props.years!=null){
          let year=this.props.years[0];
          let y;
          if (this.props.years[1]!=9999){
            y=this.props.years[1]-year;
          }
          else{
            let d = new Date();
            y=d.getFullYear()-year;
          };
          var options=[];
          var years=[];
          for ( let x=0; x<=y; x++ ){years[x]=year;year++};
          var options = years.map((year, key) => {
            return (
                <option key={key} value={year}>{year}</option>
            )
          })
        //   do{
        //     //   options[x]='<option key=' + x + '>' + year + '</option>';
        //   options[x] = function(option) {
        //     return (
        //         <option key={x} value={year}>{year}</option>
        //     )
        //   }
        //       x++;
        //       year++;
        //   } while (year<=this.props.years[1])
        console.log(options);
        };
        return (
                            <select onChange={this.handleChange}>
                              <option selected value={this.props.placeholder}>{this.props.placeholder}</option>  
                              {options}
                            </select>
        );
    }
}
export default Markinfo;