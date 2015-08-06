# json2csv [![spm version](https://moekit.com/badge/json2csv)](https://moekit.com/package/json2csv)

---



## Install

```
$ spm install json2csv --save
```

## Usage

```js
//引入json2csv文件
var json2csv = require('json2csv');

//json是指要导出的数组数据
//id 触发元素的ID，例如导出按钮
//fileName 是指导出的.csv格式的文件名称
//thead 自定义表头名称，请与json数组属性名相对应
var option = {
    'json':json,
    'id':'element',
    'fileName':'结果页',
    'thead':{
        'name': '名字',
        'gender':'姓别'
    }
}

//定义好对象属性后，将此对象传入json2csv();

json2csv(option);

// use json2csv
```



```html

	在触发导出的元素上必须ID 属性，格式如下;

	<a href="javascript:;" id="element">Export</a>

```