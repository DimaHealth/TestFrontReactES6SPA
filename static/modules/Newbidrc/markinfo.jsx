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
        this.state = {data: []};
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
//        if (this.state.url==''){
//            this.setState({url:'./static/json/auto brands.json'});
//        }
//        else if (){

//        }
//        let x = JSON.parse($.getJSON('./static/json/auto brands.json'));
//        console.log(data);
//        this.setState( x ) ;
 
         $.getJSON(this.props.url, function(data) {this.setState({data: data})}.bind(this));
        
        // console.log(this.state.data);
    }

    // handleChange(event) {
    //      this.setState({ value: event.target.value });
    // }
    // // handleSubmit(event) {
    //     let {message, value} = this.state;
    //     message.push(value);
    //     this.setState({ message, value: '' });
    // }
    render() {
        let url = this.props.url;
//         $.getJSON(this.props.url, function(data) {this.setState({data: data})}.bind(this));
        
      if (!url){
           // this.props.disabled=true;
        }
        else {
        $(function(){
            $.getJSON(url, function(data) {
                $.each(data, function(key, val) {
                    $('#marka').append('<option value="' + val.id + '">' + val.name + '</option>');
                });
            });
        })
        console.log(this.state.data);
        }        return (
             <div className="rightColumn-markModYear_markInfo">
                            <select id ='marka'>
                            </select>
                        </div>
        );
    }
}
export default Markinfo;