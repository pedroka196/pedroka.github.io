Dygraph.Plugins.SelectSeries = (function(){

	"use strict";

	var boxes = function(){this.div_ = null;};

	boxes.prototype.activate = function(dygraph){

		boxes.div_ = document.createElement("div");
		boxes.div_.style = 'width:220px; float:right;';

		var colunas = dygraph.getLabels();
		colunas.shift();

		colunas.forEach(function(value){ 
			boxes.div_.innerHTML += '<p style="font-size:14px;margin:5px"><input type="checkbox" checked=""> ' + value + '</p>';
		});		

		colunas.forEach(function(value,index){
			var i = boxes.div_.getElementsByTagName("input")[index];
			i.addEventListener('change',function(){dygraph.setVisibility(index,i.checked);});
		});

		dygraph.graphDiv.parentNode.insertAdjacentElement("beforebegin", boxes.div_);
	};

	return boxes;

})();

