import React, {PropTypes, Component} from 'react'
import classnames from 'classnames'
import Modal  from 'react-modal'
import './Dialog.less'
class Dialog extends Component {
    constructor(props, context) {
        super(props, context)
    }
    renderButtons(){
        const {isOpen,openModal,closeModal,handleSaveClicked} = this.props
        const buttonText = this.props.buttonText || '保存'
        const isRender = this.props.hideButton
        if(!isRender) {
            return (
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={closeModal}>取消</button>
                    <button type="button" className="btn btn-primary" onClick={handleSaveClicked}>{buttonText}</button>
                </div>
            )
        }
    }
    render() {
        const {isOpen,openModal,closeModal,handleSaveClicked} = this.props
        const {renderHTML} = this.props
        const buttonText = this.props.buttonText || '保存'
        const title = this.props.title || '提交'
        return (
            <div id="dialog" className="form-horizontal form-wizard">
                <Modal isOpen={isOpen}  onRequestClose={closeModal}  className="Modal__Bootstrap modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={closeModal}>
                                <span aria-hidden="true">&times;</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <h4 className="modal-title">{title}</h4>
                        </div>
                        <div className="modal-body">
                            {renderHTML()}
                        </div>
                        {this.renderButtons()}
                    </div>
                </Modal>
            </div>
        )
    }
}

Dialog.propTypes = {
    //dialog内容区域html展示
    renderHTML: PropTypes.func,
    //提交按钮的触发事件
    handleSaveClicked: PropTypes.func,
    //打开dialog触发的事件
    openModal: PropTypes.func,
    //关闭dialog触发的事件
    closeModal: PropTypes.func,
    //dialog的title
    title: PropTypes.string,
    //提交按钮的文字描述
    buttonText:PropTypes.string,
    //显示dialog
    isOpen:PropTypes.bool,
    //按钮区域隐藏与否
    hideButton: PropTypes.bool
}

export default Dialog
