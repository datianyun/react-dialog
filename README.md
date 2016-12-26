# react-dialog


![alt text](http://img1.gtimg.com/house/pics/hv1/19/116/2172/141263899.png "Title")
[在线demo](http://datianyun.github.io/dialog "Title")
### Installation
``` sh
npm install reactui-upload
```

### API

### props

|name|type|default| description|
|-----|---|--------|----|
|renderHTML | function |- | dialog内容区域html展示|
|handleSaveClicked | function | -| 提交按钮的触发事件 |
|openModal | function | - | 打开dialog触发的事件 |
|closeModal | function | - | 关闭dialog触发的事件|
|title | string | -| dialog的title |
|buttonText | string | -| 提交按钮的文字描述 |
|isOpen | boolean | false| 是否显示组件 |
|hideButton | boolean | false | 是否隐藏按钮区域|
### Demo

``` sh
npm run start
```

http://localhost:8888/example/

### Usage
import Dialog from 'reactui-dialog'
``` javascript
<Dialog />
```
