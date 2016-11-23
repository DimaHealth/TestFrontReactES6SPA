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
        this.state = {data: [],
                      selected:''
                     };
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({selected: e.target.value});
    }
    
    render() {
        if(this.props.options!=null){
        var options = this.props.options.map(function(option, key) {
            return (
                <option key={key} value={option.id}>{option.name}</option>
            )
        })};
        return (
             <div className="rightColumn-markModYear_markInfo">
                            <select onChange={this.handleChange}>
                              {options}
                            </select>
                        </div>
        );
    }
}
export default Markinfo;