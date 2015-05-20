/*** minified***/
"use strict";document.onclick=function(e){function o(e){var o,n,r=e;if("null"==r)return alert("not a dom reference");for(o=t(r);r.tagName;)n=r.localName+(n?">"+n:""),r=r.parentNode;return n=n+":nth-of-type("+o+")"}function t(e){for(var o=1,t=e.tagName;e.previousSibling;)e=e.previousSibling,1===e.nodeType&&t.toLowerCase()==e.tagName.toLowerCase()&&o++;return o}console.log("event:",e),console.log("target html:",e.target),console.log("inner html found:",e.target.innerHTML);var n=o(e.target);console.log("selector: ",n),console.log("class list:",e.target.classList),console.log("id:",e.target.id)};

/*** src ***/
"use strict";
// var variant = prompt("Variant Name: ", "name");
// var value = prompt("Value: ", "name");

document.onclick = function(event) { 
	// console.log('variant name: ', variant);
	// console.log('value: ', value); 
	console.log('event:', event);
	console.log('target html:', event.target);
	console.log('inner html found:', event.target.innerHTML);
	var c = getSelector(event.target);
	console.log('selector: ', c);
	console.log('class list:', event.target.classList);
	console.log('id:', event.target.id);

	function getSelector(_context){
	     var index, localName,pathSelector, that = _context, node;
	     if(that =='null') return alert('not a dom reference');
	     index =  getIndex(that);
	     while(that.tagName){
	       pathSelector = that.localName+(pathSelector?'>'+pathSelector :'');
	       that = that.parentNode;
	     }
	    pathSelector = pathSelector+':nth-of-type('+index+')';
	    return pathSelector;
	}

	function getIndex(node){
	    var i=1;
	    var tagName = node.tagName;
	    while(node.previousSibling){
	    node = node.previousSibling;
	        if(node.nodeType === 1 && (tagName.toLowerCase() == node.tagName.toLowerCase())){
	            i++;
	        }
	    }
	    return i;
	}
}