import React from 'react'
import ReactDOM from 'react-dom'

class WorkScope extends React.Component {
    constructor(props) {
        super(props);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    handleMessageChange(event) {
        this.props.onMessageChange(event.target.value);
    }

    render() {
        return (
            <div className="worksRow">
                <div className="worksRow-problem">
                    <p>Что нужно починить?</p>
                </div>
                <div className="worksRow-whattoDo">
                    <div className="worksRow-whattoDo_descWorks">
                        <textarea className="worksRow-whattoDo_descWorksInfo todo" onChange={this.handleMessageChange} placeholder="Опишите работы которые необходимо сделать"  name="work" type="text" rows="6" cols="6"></textarea>
                    </div>
                    <div className="worksRow-whattoDo_photoDesc">
                        <div className="worksRow-whattoDo_photo">
                            <p className="worksRow-whattoDo_photoInfo">Вы можете добавить несколько фотографий это поможет автосервису точнее определить стоимость работ</p>
                        </div>
                        <div className="worksRow-whattoDo_uploadPhoto">
                            <p className="worksRow-whattoDo_uploadPhotoBut">
                                <input className="worksRow-uploadPhotoBut-uploadButTitle" type="file" name="photo" multiple accept="image/*" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default WorkScope;