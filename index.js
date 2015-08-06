var $ = require('./csv.js')


function parse_object(obj, path) {
    if (path == undefined)
        path = "";

    var type = Object.prototype.toString.call(obj).replace('[object ','').replace(']','').toLowerCase();//$.type(obj);

    var scalar = (type == "number" || type == "string" || type == "boolean" || type == "null");

    if (type == "array" || type == "object") {
        var d = {};
        for (var i in obj) {

            var newD = parse_object(obj[i], path + i + "/");

            for(i in newD){

            	d[i] = newD[i];
            }
        }

        return d;
    }

    else if (scalar) {
        var d = {};
        var endPath = path.substr(0, path.length-1);
        d[endPath] = obj;
        return d;
    }
    
    else return {};
}

function arrayFrom(json) {
    var queue = [], next = json;
    while (next !== undefined) {
        if (Object.prototype.toString.call(next) == "[object Array]")
            return next;
        if (typeof(next) == "object") 
          for (var key in next)
             queue.push(next[key]);
      
        next = queue.shift();
    }
  
    return [json];
}

var doCSV = function (obj) {
	
    var inArray = arrayFrom(obj.json);
    var arr= [];

    if(!!obj.thead){
		inArray.map(function(v) {
	  		var objArr={};
			 Object.keys(obj.thead).forEach(function(k){
			 	objArr[obj.thead[k]] = v[k];
			 })
			arr.push(objArr);
		});
		inArray = arr;
	}

    var id = document.getElementById(obj.id);
    var fileName = !!obj.fileName ? obj.fileName : 'result';
    var outArray = [];
    for (var row in inArray){
        outArray[outArray.length] = parse_object(inArray[row]);
      }
    var csv = $.csv.fromObjects(outArray);
    var uri = "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(csv);
    id.setAttribute('href',uri);
    id.setAttribute('download',fileName+'.csv');
}

module.exports = doCSV;
