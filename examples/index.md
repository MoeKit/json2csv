# Demo

---

## Normal usage

````html
<a href="javascript:;"  download="result.csv" id="element" style="display:inline-block;  background-color: #f0ad4e;border-color: #eea236;padding:0 10px; height:30px;line-height:30px;border-radius:4px;color:#fff;">Export</a>

````

````javascript
var json2csv = require('json2csv');

var json = [{
	'name':'yyy',
	'gender':'female'
},{
	'name':'yyy1',
	'gender':'female'
},{
	'name':'yyy2',
	'gender':'female'
}];

var option = {
	'json':json,
	'id':'element',
	'fileName':'结果页',
	'thead':{
		'name': '名字',
		'gender':'姓别'
	}
}


json2csv(option)
````
