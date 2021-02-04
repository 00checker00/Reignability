(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.stage_president = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C543D").s().p("EA4IAMVMhwPAAAIAA4pIAoAAIAAW5MBupAAAIAA25IA+AAIAAAAIAAYpg");
	this.shape.setTransform(360.775,209.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#36803A").s().p("EA4PBU5MhweAAAIAA4pMBweAAAIABAAIAAYpgEg3Xg8QIAA26IAAhvMBuoAAAIAABvIAAW6g");
	this.shape_1.setTransform(360.025,662.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DBFFDD").s().p("Eg4PBkAIAAgMIABAAIAArZMBweAAAIAALlgEg4OA/yIAAu6IgBAAMAAAiU3MBwfAAAIAAUXIg+AAIAAhvMhupAAAIAABvIgoAAIAAYqMBwPAAAMAAAB2wg");
	this.shape_2.setTransform(359.975,640);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stage_president, new cjs.Rectangle(0,0,720,1280), null);


// stage content:
(lib.Animate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,51,0,0.459)").s().p("EgfnAjzQhvAAhOhPQhOhNAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/QAAAQBuAABOBNQBOBPAABuMAAAA/QQAABuhOBOQhOBPhuAAgEAeWAhpQgdAdgUAiICEAAQBPAAA4g5QAmglAMgwQgegHggAAQh4ABhWBVgEANiAhpQgeAdgUAiIH/AAQgUgigdgdQhWhVh4gBQh5ABhVBVgEgCMAhpQgeAdgTAiIH8AAQgTgigdgdQhWhVh4gBQh5ABhUBVgEgTdAhpQgeAdgSAiIH9AAQgTgigegdQhVhVh5gBQh5ABhVBVgEgigAgdQAMAuAlAkQA4A5BQAAICQAAQgTgigegdQhWhVh4gBQgnAAgjAKgAWcVRQhVBVAAB5QAAB5BVBVQBVBVB5ABQB5gBBVhVQBWhVAAh5QAAh5hWhVQhVhVh5gBQh5ABhVBVgAGtVRQhVBVAAB5QAAB5BVBVQBWBVB4ABQB6gBBUhVQBWhVAAh5QAAh5hWhVQhUhVh6gBQh4ABhWBVgAqiVRQhVBVgBB5QABB5BVBVQBVBVB5ABQB5gBBVhVQBVhVABh5QgBh5hVhVQhVhVh5gBQh5ABhVBVgA8NVRQhVBVAAB5QAAB5BVBVQBVBVB6ABQB4gBBWhVQBVhVAAh5QAAh5hVhVQhWhVh4gBQh6ABhVBVgEAgaAHLQhJATg7A6QhVBVAAB5QAAB5BVBVQA7A6BJASQAkAJAmAAQAkAAAggHIAAo5QgggGgkgBQgmAAgkAJgANiIYQhWBVAAB5QAAB5BWBVQBVBVB5AAQB4AABWhVQBVhVAAh5QAAh5hVhVQhWhWh4AAQh5AAhVBWgAiMIYQhWBVAAB5QAAB5BWBVQBUBVB5AAQB4AABWhVQBVhVAAh5QAAh5hVhVQhWhWh4AAQh5AAhUBWgAzdIYQhWBVABB5QgBB5BWBVQBVBVB5AAQB5AABVhVQBWhVgBh5QABh5hWhVQhVhWh5AAQh5AAhVBWgEginAHNIAAIyQAnAKAqAAQB4AABWhVQBVhVABh5QgBh5hVhVQhWhWh4AAQgqAAgnALgAWcj/QhVBVAAB5QAAB4BVBVQBVBVB5AAQB5AABVhVQBWhVAAh4QAAh5hWhVQhVhWh5AAQh5AAhVBWgAGtj/QhVBVAAB5QAAB4BVBVQBWBVB4AAQB6AABUhVQBWhVAAh4QAAh5hWhVQhUhWh6AAQh4AAhWBWgAqij/QhVBVgBB5QABB4BVBVQBVBVB5AAQB5AABVhVQBVhVABh4QgBh5hVhVQhVhWh5AAQh5AAhVBWgA8Nj/QhVBVAAB5QAAB4BVBVQBVBVB6AAQB4AABWhVQBVhVAAh4QAAh5hVhVQhWhWh4AAQh6AAhVBWgEAgagRtQhgAMhIBIQhVBVAAB5QAAB5BVBVQBIBHBgAMQATACATAAQA4AAAwgSIAAojQgwgRg4gBQgTAAgTACgAM9wZQhVBVAAB5QAAB5BVBVQBWBVB5AAQB4AABWhVQBUhVABh5QgBh5hUhVQhWhWh4AAQh5AAhWBWgAiwwZQhWBVAAB5QAAB5BWBVQBUBVB5AAQB4AABWhVQBVhVAAh5QAAh5hVhVQhWhWh4AAQh5AAhUBWgA0BwZQhWBVABB5QgBB5BWBVQBVBVB5AAQB4AABWhVQBWhVgBh5QABh5hWhVQhWhWh4AAQh5AAhVBWgEgingRsIAAJBQAVADAYAAQB4AABWhVQBVhVAAh5QAAh5hVhVQhWhWh4AAQgYAAgVADgAV48xQgeAegUAjQgjA/AABOQAAB5BVBVQBVBVB5ABQB5gBBWhVQBUhVAAh5QAAhOgig/QgVgjgdgeQhWhVh5gBQh5ABhVBVgAGJ8xQgeAegTAjQgkA/AABOQAAB5BVBVQBWBVB4ABQB5gBBVhVQBWhVAAh5QAAhOgjg/QgUgjgfgeQhVhVh5gBQh4ABhWBVgArG8xQgeAegUAjQgkA/AABOQABB5BVBVQBVBVB5ABQB5gBBVhVQBVhVABh5QAAhOgkg/QgUgjgegeQhVhVh5gBQh5ABhVBVgA8w8xQgfAegUAjQgjA/AABOQAAB5BWBVQBUBVB6ABQB4gBBWhVQBVhVAAh5QAAhOgkg/QgTgjgegeQhWhVh4gBQh6ABhUBVgEAdyghYQBVBUB5AAQA3AAAwgRIgEABQgMgzgngoQg4g4hPAAIiwAAQAVAqAkAlgEAM9ghYQBWBUB5AAQB4AABWhUQAjglAWgqIoPAAQAVAqAkAlgEgCwghYQBUBUB5AAQB4AABWhUQAjglAWgqIoNAAQAUAqAlAlgEgUBghYQBVBUB5AAQB4AABWhUQAkglAVgqIoOAAQAVAqAkAlgEghvghvQgtAtgIA8QAUADAWgBQB4AABWhUQAkglAVgqIh0AAQhQAAg4A4g");
	this.shape.setTransform(368.2,660.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A8FFAE").s().p("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");
	this.shape_1.setTransform(368.2,660.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// default
	this.instance = new lib.stage_president();
	this.instance.setTransform(360,640,1,1,0,0,0,360,640);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(360,640,360,640);
// library properties:
lib.properties = {
	id: 'B22B52CE08C5C54387DEBB6D67E45DE7',
	width: 720,
	height: 1280,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B22B52CE08C5C54387DEBB6D67E45DE7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;