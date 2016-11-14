import React from 'react'
import ReactDOM from 'react-dom'

class Newbidka extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            message: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange() {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        let {message, value} = this.state;
        message.push(value);
        this.setState({ message, value: '' });
    }
    render() {
        return (
            <div className="carcasnb">
                <div className="leftColumn">
                    <div className="leftColumn-auto">
                        <p className="leftColumn-auto_title">Автомобиль</p>
                    </div>
                    <div className="leftColumn-problem">
                        <p className="leftColumn-problem_title">Что нужно сделать?</p>
                    </div>
                    <div className="leftColumn-inform">
                        <p className="leftColumn-inform_title">Информация</p>
                    </div>
                </div>
                <div className="rightColumn">
                    <div className="rightColumn-markModYear">
                        <div className="rightColumn-markModYear_markInfo">
                            <select>
                                <option value="">Aston Martin</option>
                                <option value="">BMW</option>
                                <option value="">Mercedes</option>
                            </select>
                        </div>
                        <div className="rightColumn-markModYear_modInfo">
                            <select>
                                <option value="">One-77</option>
                                <option value="">M6</option>
                                <option value="">Sprinter</option>
                            </select>
                        </div>
                        <div className="rightColumn-markModYear_yearInfo">
                            <select>
                                <option value="">2001</option>
                                <option value="">2007</option>
                                <option value="">2016</option>
                            </select>
                        </div>
                    </div>
                    <div className="rightColumn-whattoDo">
                        <div className="rightColumn-whattoDo_descWorks">
                            <textarea className="rightColumn-whattoDo_descWorksInfo" placeholder="Опишите работы которые необходимо сделать" type="text" rows="6" cols="6"></textarea>
                        </div>
                        <div className="rightColumn-whattoDo_photo">
                            <p className="rightColumn-whattoDo_photoInfo">Вы можете добавить несколько фотографий это поможет автосервису точнее определить стоимость работ</p>
                        </div>
                        <div className="rightColumn-whattoDo_uploadPhoto">
                            <p className="rightColumn-whattoDo_uploadPhotoBut" align="center">
                                <button className="whattoDo-uploadPhotoBut-uploadButTitle" type="file">Загрузить фото</button>
                            </p>
                        </div>
                    </div>
                    <div className="rightColumn-dateofRem">
                        <p className="rightColumn-dateofRem_title">Желаемая дата ремонта</p>
                        <input className="rightColumn-dateofRem_titleInfo" type="date" /><br />
                        <button className="rightColumn-dateofRem_titleSbmBtn" type="submit">Отправить</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newbidka;