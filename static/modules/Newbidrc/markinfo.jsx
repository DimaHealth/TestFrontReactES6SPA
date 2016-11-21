import React from 'react'
import ReactDOM from 'react-dom'

// const order = {
    
//     title: 'Fresh fruits package',
//     image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
//     initialQty: 3,
//     price: 8
// };



class Markinfo extends React.Component {
    constructor(props) {
        super(props);
       // this.state = {
        //     value: '',
        //     message: []
        // };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        let x = $.get('./static/json/auto brands.json');
        console.log(x);
        console.log(x.respomseText);
        this.setState( x) ;
 
    }

    // handleChange(event) {
    //     this.setState({ value: event.target.value });
    // }
    // handleSubmit(event) {
    //     let {message, value} = this.state;
    //     message.push(value);
    //     this.setState({ message, value: '' });
    // }
    render() {
        return (
             <div className="rightColumn-markModYear_markInfo">
                            <select>
                                <option value="">Acton Martin</option>
                                <option value="">BMW</option>
                                <option value="">Mercedes</option>
                            </select>
                        </div>
        );
    }
}
export default Markinfo;