function Point(x, y){

	this.x = x;
	this.y = y;
};

/*Base class for shapes, all shapes inherit from this*/
var Shape = Base.extend({

	constructor: function(startPoint, colour, lineWidth) {
		this.startPoint = startPoint;
		this.colour = colour;
		this.lineWidth = lineWidth;
		this.isFinished = false;
	}
});

var Pen = Shape.extend({

	constructor: function(startPoint, colour, lineWidth) {
		this.base(startPoint, colour, lineWidth);
		this.points = [];
		this.name = "pen";
	},
	
	setEndPoint: function(endPt) {
		this.points.push(endPt);
	},
	
	draw: function(context) {
		context.strokeStyle = this.colour;
		context.lineWidth = this.lineWidth;
		context.beginPath();
		context.moveTo(this.startPoint.x, this.startPoint.y);

		for(var i = 0; i < this.points.length; ++i) {
			var currPoint = this.points[i];			
			context.lineTo(currPoint.x, currPoint.y);				
		}

		context.stroke();
	}
});

var Line = Shape.extend({

	constuctor: function(startPoint, colour, lineWidth) {
		this.base(startPoint, colour, lineWidth);
		this.endX = this.startPoint.x;
		this.endY = this.startPoint.y;
		this.name = "line";
	},

	setEndPoint: function(endPt) {
		this.endX = endPt.x;
		this.endY = endPt.y;
	},

	draw: function(context) {
		context.strokeStyle = this.colour;
		context.lineWidth = this.lineWidth;
		context.beginPath();
		context.moveTo(this.startPoint.x, this.startPoint.y);
		context.lineTo(this.endX, this.endY);
		context.stroke();
	}
});

var Rectangle = Shape.extend({
	constuctor: function(startPoint, colour, lineWidth) {
		this.base(startPoint, colour, lineWidth);
		this.endX = this.startPoint.x;
		this.endY = this.startPoint.y;
		this.name = "rectangle";
	},

	setEndPoint: function(endPt) {
		this.endX = endPt.x;
		this.endY = endPt.y;
	},

	draw: function(context) {
		context.strokeStyle = this.colour;
		context.lineWidth = this.lineWidth;
		context.beginPath();
		context.rect(this.startPoint.x, this.startPoint.y, this.endX - this.startPoint.x, this.endY - this.startPoint.y);
		context.stroke();
	}
});

var Circle = Shape.extend({
	constuctor: function(startPoint, colour, lineWidth) {
		this.base(startPoint, colour, lineWidth);
		this.endX = this.startPoint.x;
		this.endY = this.startPoint.y;
		this.radius = 0;
		this.name = "circle";
	},

	setEndPoint: function(endPt) {
		this.endX = endPt.x;
		this.endY = endPt.y;
		this.radius = this.endX - this.startPoint.x;
	},

	draw: function(context) { 
		context.strokeStyle = this.colour;
		context.lineWidth = this.lineWidth;
		context.beginPath();
      	context.arc(this.startPoint.x, this.startPoint.y, Math.abs(this.radius), 0, 2 * Math.PI, false);
		context.stroke();
	}
});

var Texti = Shape.extend({
	constructor: function(startPoint, colour, lineWidth) {
		this.base(startPoint, colour, lineWidth);
		this.endX = this.startPoint.x;
		this.endY = this.startPoint.y;
		this.name = "text";
		var inputText = " ";
		var texti = $("#textBox");
		$("#textBox").css({'top': this.endY + 80, 'left': this.endX + 45});
		texti.show();
	},

	setEndPoint: function(endPt) {
		this.endX = endPt.x;
		this.endY = endPt.y;
	},

	setText: function(texts) {	
		this.inputText = texts;	
	},

	draw: function(context) {
		var texti = $("#textBox");
		context.strokeStyle = this.colour;
		context.lineWidth = this.lineWidth;
		context.beginPath();
		context.moveTo(this.startPoint.x, this.startPoint.y);
		context.fillText(this.inputText, this.startPoint.x, this.startPoint.y);
		texti.hide();
		texti.val('');
	}
});
