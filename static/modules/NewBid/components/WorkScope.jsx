import React from 'react'
import ReactDOM from 'react-dom'

class WorkScope extends React.Component {
    constructor(props) {
        super(props);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    handleMessageChange(event) {
        this.props.onMessageChange( event.target.value );
    }

    render() {
        return (
            <div>
               <div className="rightColumn-whattoDo_descWorks">
                 <textarea className="rightColumn-whattoDo_descWorksInfo" onChange={this.handleMessageChange} placeholder="Опишите работы которые необходимо сделать" type="text" rows="6" cols="6"></textarea>
               </div>
               <div className="rightColumn-whattoDo_photo">
                 <p className="rightColumn-whattoDo_photoInfo">Вы можете добавить несколько фотографий это поможет автосервису точнее определить стоимость работ</p>
               </div>
               <div className="rightColumn-whattoDo_uploadPhoto">
                 <p className="rightColumn-whattoDo_uploadPhotoBut">
                   <input className="whattoDo-uploadPhotoBut-uploadButTitle" type="file"  name="photo" multiple accept="image/*"/>
                 </p>
               </div>
            </div>
        );
    }
}
export default WorkScope;