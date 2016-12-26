import './app.less'
import React, {Component,PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Dialog from '../src/Dialog'
import packageJson from '../package.json'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //弹框控制
            modalIsOpen:false
        }
    }
    showDialog(e){
        e.preventDefault()
        this.setState({modalIsOpen:true})
    }
    hideDialog(){
        e.preventDefault()
        this.setState({modalIsOpen:false})
    }
    openModal(){
        this.setState({modalIsOpen:true})
    }
    closeModal(){
        this.setState({modalIsOpen:false})
    }
    DialogSaveClicked(){
        alert(1)
    }
    renderDialog(){
        return (
            <div className="form-horizontal">
                <div className="form-group">
                    <p>这是个dialog例子</p>
                </div>
            </div>
        )
    }
    render() {
        const isOpen = this.state.modalIsOpen
        return (
            <div className="app">
                <h1>{packageJson.name}</h1>
                <h2>{packageJson.description}</h2>
                <form>
                    <button onClick={this.showDialog.bind(this)}>显示dialog</button>
                    <button onClick={this.hideDialog.bind(this)}>隐藏dialog</button>
                    <Dialog buttonText="确定" handleSaveClicked={this.DialogSaveClicked.bind(this)} openModal={this.openModal.bind(this)} closeModal={this.closeModal.bind(this)}  isOpen={isOpen} renderHTML={this.renderDialog.bind(this)}></Dialog>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));
