import React from 'react'
import ReactDOM from 'react-dom'

class WorkScope extends React.Component {
    constructor(props) {
        super(props);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleAddImage = this.handleAddImage.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleMessageChange(event) {
        this.props.onMessageChange(event.target.value);
    }

    handleClick(){
//      var reader = new FileReader();
      let input = document.createElement("input");
//      input.addEventListener('change',this.handleAddImage,false);
      input.onchange = this.handleAddImage;
      input.type = "file";
      input.setAttribute('multiple','');
      var click = document.createEvent("MouseEvents");
      click.initEvent("click", true, true);
      input.dispatchEvent(click);
//      console.log(reader);

    }

    handleAddImage(evt) {
    var files = evt.target.files; // FileList object
    var lfiles=[];
    document.getElementById('outputMulti').innerHTML = "";
    for (var i = 0, f; f = files[i]; i++) {

      // Проверка, что файл является изображением
      if (!f.type.match('image.*')) {
        alert("Выбирите изображения....");
      } else{

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = ((theFile) => {return (e) => {
          // Создание миниатюр
          var span = document.createElement('span');
          span.innerHTML = ['<img class="img-thumbnail preview" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('outputMulti').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
      lfiles.push(f.name);
      console.log(f);
    }}
    if(lfiles){this.props.onFileLoad(lfiles)};
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
                                <div className="worksRow-uploadPhotoBut_uploadButTitle" onClick={this.handleClick}>Добавить</div>
                            </p>
                        </div>
                        <div id='outputMulti'></div>
                    </div>
                            
                </div>
                
            </div>
        );
    }
}
export default WorkScope;
//                                <input className="worksRow-uploadPhotoBut_uploadButTitle" type="file" name="photo" multiple accept="image/*" />
