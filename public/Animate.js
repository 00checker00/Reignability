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



(lib.barn_1 = function() {
	this.initialize(img.barn_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,784,504);


(lib.berg_0 = function() {
	this.initialize(img.berg_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1407,568);


(lib.bohrinsel_0 = function() {
	this.initialize(img.bohrinsel_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,177);


(lib.bridge_2 = function() {
	this.initialize(img.bridge_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1001,600);


(lib.car_1 = function() {
	this.initialize(img.car_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,367,357);


(lib.city_2 = function() {
	this.initialize(img.city_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,555);


(lib.energy_0 = function() {
	this.initialize(img.energy_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,709,385);


(lib.energy_0_1 = function() {
	this.initialize(img.energy_0_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,395,131);


(lib.feld_1 = function() {
	this.initialize(img.feld_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1487,353);


(lib.fischer_1 = function() {
	this.initialize(img.fischer_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,273,232);


(lib.hill_1 = function() {
	this.initialize(img.hill_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,607,205);


(lib.krankenhaus_1 = function() {
	this.initialize(img.krankenhaus_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,616,286);


(lib.pollution = function() {
	this.initialize(img.pollution);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5505,1280);


(lib.port_1 = function() {
	this.initialize(img.port_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,399,171);


(lib.port_2 = function() {
	this.initialize(img.port_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,430,258);


(lib.schiff_2 = function() {
	this.initialize(img.schiff_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,146);


(lib.schule_1 = function() {
	this.initialize(img.schule_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,341);


(lib.solar_tower = function() {
	this.initialize(img.solar_tower);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,338);


(lib.trassen_0 = function() {
	this.initialize(img.trassen_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,391,332);


(lib.wald_1 = function() {
	this.initialize(img.wald_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1050,729);


(lib.wind_body1 = function() {
	this.initialize(img.wind_body1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,485);


(lib.wind_body2 = function() {
	this.initialize(img.wind_body2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,223);


(lib.wind_body3 = function() {
	this.initialize(img.wind_body3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,139);


(lib.wind_kopf1 = function() {
	this.initialize(img.wind_kopf1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,556,512);


(lib.wind_kopf2 = function() {
	this.initialize(img.wind_kopf2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,226);


(lib.wind_kopf3 = function() {
	this.initialize(img.wind_kopf3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,116);


(lib.ölfleck = function() {
	this.initialize(img.ölfleck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,53);// helper functions:

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


(lib.puste_ani = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAZOaIAAgBQhzh1gBimQABimBzh1QBohoCNgMIAGgBIACAAIAfgBQATAAATACIOHAAQAhAAAYAXQAXAYAAAhQAAAhgXAXQgYAYghAAIuIAAIgIAAIg4gBQhTAJg8A9QhGBGgBBkQABBjBGBHIAAAAQBHBGBjAAQBkAABGhGQBDhDAEheQABghAYgWQAYgXAiABQAhACAWAYQAWAYgBAhQgFCchwBwQh1B1imAAQimAAh2h0gAs8B3IgBAAIgMgBQi/gWiLiSQieipAAjvQAAjvCdioIABAAQCiitDlABQDfAACdChQAYAYAAAhQgBAhgXAXQgYAXghAAQghgBgYgXQhuhxicAAQihAAhyB5QhzB7AACvQAACvBzB7IAAAAQBjBoCGAQIBagBIABAAIdZAAQAhAAAYAXQAYAXgBAhQABAhgYAXQgYAYghAAI9VAAQgaACgbAAQgZAAgXgBgAECiCIgIgBQiOgNhnhnQh0h1AAimQAAimB0h2QB2h1CmAAQCmAAB1B1QBwBwAFCcQACAhgXAZQgWAYghABQgiABgYgWQgYgXgCghQgDhehDhDQhGhGhkAAQhkAAhGBGIAAABQhHBGABBkQgBBkBHBGQA8A8BTAJIA4AAIAKAAIOGAAQAiAAAXAXQAYAYgBAhQABAhgYAXQgXAYgiAAIuHAAQgSABgUAAIgfAAg");
	this.shape.setTransform(0,-0.0251);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.puste_ani, new cjs.Rectangle(-133,-103.8,266.1,207.6), null);


(lib.player_lock = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(0,0,0,0.486)").s().p("AlAHMIAAiBIAAn/ICoAAIAAkXIEwAAIAAEXICpAAIAAH/IAACBgAB7FEIhdiiIA5AAIAAi1Ii1AAIAAC1IA4AAIhpCiIEKAAgAhSi0ICkAAIAAjRIikAAg");
	this.shape.setTransform(117.775,206.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,102,0.569)").s().p("AEuSsIAAoAIipAAIAAkXIkvAAIAAEXIioAAIAAIAIrOAAQg6AAgpgoQgogpAAg6MAAAghBQAAg6AogpQApgoA6AAMAhBAAAQA6AAAoAoQApApAAA6MAAAAhBQAAA6gpApQgoAog6AAgAiiSmIBpiiIg3AAIAAi3IC1AAIAAC3Ig5AAIBdCigAhlKsIAAjRIClAAIAADRg");
	this.shape_1.setTransform(119.6,119.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.player_lock, new cjs.Rectangle(0,0,239.2,252.2), null);


(lib.pic_president = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D34D6B").s().p("Ag+DbIBKjkIhehYIClh5IgGG1g");
	this.shape.setTransform(89.825,185.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E69D6C").s().p("AjLgpIGXAAImXBTg");
	this.shape_1.setTransform(118.475,159.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEACD").s().p("AibFlIhujlIBphlIiAhrIGXhTICqjBIlCLJg");
	this.shape_2.setTransform(127,171.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BA2F4E").s().p("AhFDbIAGm1IB/BsIhnBlIBtDkg");
	this.shape_3.setTransform(104.45,185.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E39F71").s().p("AgkBHIgch4ICAhMIgtDhIhSAag");
	this.shape_4.setTransform(158.55,92.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFC").s().p("ABgF1ImArpIEEDhIE9BTIimB4IBfBYIhLDlg");
	this.shape_5.setTransform(69.225,170.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4E5F6A").s().p("AldF/QgUghgLhAQgaiYAalGIGYjfIAAAEIgCAHIgRBJIGBLpIqsAAIgHABIgBABQgeAAgVghg");
	this.shape_6.setTransform(39.4375,165.9004);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC8A3").s().p("AADFRIE9AAIAABUgAkSjCIgtjiICABNIgbB5IAaA3g");
	this.shape_7.setTransform(66.05,121.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FAF072").s().p("Ak7FnIgijYIBdjhIgthIIDWjMIBvgTIFGg5IgbJYIh3AAIksh2IhaGDgAhnFlIAyhnICoAAIBlA7IAAAsg");
	this.shape_8.setTransform(65.625,43.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DFD550").s().p("AifAzIAAgrIBlg6ICoAAIAyBlg");
	this.shape_9.setTransform(127.825,74.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ACjAFICcgoIAJAfIicApgAlHgEIAJggICcApIgJAgg");
	this.shape_10.setTransform(100.675,85.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FD8839").s().p("AhKHtIgBu2IDxgjIDvAjIA8EOIAcB5IgbA3IAbDZIAKBeIiqDBgAA+k1IAAArIAqCvIDHgsIBQiDIgzhnIipAAgAl+h6Ih5iQIFBAAIgXCtgAl4jTICdAqIAIgfIicgqg");
	this.shape_11.setTransform(105.55,105.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFAA71").s().p("AkBIWIkEjhIARhJIACgGIAujJIgag2IAbh5IBbmDIEsB2IB2AAIACO1gAlwjhIB4CQICyAdIAWitIAAgrIhlg7IipAAgADFjhIFAAAIhPCEIjIArgAD5ifIAIAgICdgqIgJgfg");
	this.shape_12.setTransform(92.1,101.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#364956").s().p("AEDGTIqYAAIFDrJIgLheIHmD4QAbEZgbCMQgcCMhTAAQgLAAgMgCg");
	this.shape_13.setTransform(164.2375,167.0475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DACE39").s().p("AhWCmIjvgkIjyAkIAbpYIE1A5IBqATIJkDoIBRAfIhRAUIkPBEIhQCWIgiDYIiABMg");
	this.shape_14.setTransform(154.75,43.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004D87").s().p("At8PzQgTAAgQgFIAHAAIKtAAIAvAAICMAAICKAAIB6AAIKaAAQBlAUAgieIAAAZQAAAxgiAjQgjAigwAAgAvyN9IAAgQQALBAAUAhQgfgiAAgvgAIMDFIgajZIBTgbIAtjiIAijYIBQiXIEPhEIAASCgAvyt8QAAgxAigjQAigiAyAAIIlAAIhwAUIjWDLIAtBIIhcDiIAhDYIAtDiIBTAbIguDHIAAgDImZDegAGOveIhqgUIJaAAQAwAAAjAiQAiAjAAAxIAACGg");
	this.shape_15.setTransform(102.4,106.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pic_president, new cjs.Rectangle(0,0,211.6,207.9), null);


(lib.pic_joe = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7B0B12").s().p("AhPgjICfAgIibAng");
	this.shape.setTransform(103.425,111.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99050F").s().p("AhPAOICbgxIAEBHg");
	this.shape_1.setTransform(87.825,111.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6B0000").s().p("AvfDHQgJgPgFgRQgahUAXihIBlgZICDFmIhzAAIgDAAQhCAAgfg4gAn2D/IibmlICrgrIGwF8IG1lnIALhCIJrCQQAOBLgPB6QgPBzgTASQgiAjgwAAgApmD/IiSmLIAugMICTGXgArOD/IiLlzIAzgNICSGAg");
	this.shape_2.setTransform(101.9501,176.7023);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1AD88").s().p("AjNHWIENiWIB3AAIAEBJIicAyICfAWIAHCLgAjNgBIAfAAIAAAdIC2AAIAAgdIAsAAIAAgsIA/AAIAAg4IBLAAIgHDaImEB1gAjNipIAAg+ICRkUIEKhgIgNGyg");
	this.shape_3.setTransform(76.775,68.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AixLUIiTmXIA5gPICcGmgAkOLUIiSmBIAugLICSGMgAmBLUIiElnIAzgMICKFzgAHZprIAAgyIgxAAIAAg2IAxAAIAAA2IAtAAIAAAygAgNpsIAAgtIgwAAIAAg0IAwAAIAAA0IAnAAIAAAtg");
	this.shape_4.setTransform(62.925,129.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABCBjIAAgeIggAAIAAgsIguAAIAAg3IgnAAIhMAAIAAA3Ig+AAIAAAsIgtAAIAAAeIi2AAIAAgeIggAAIAAAAIAAgsIgwAAIAAg3IhIAAIAAhEIB4AAIGPAAIGiAAICuAAIAaAAIAABEIgCAAIjGAAIgMAAIAAA3Ig/AAIAAAsIgsAAIAAAegAArASIAxAAIAAAxIAtAAIAAgxIgtAAIAAg1IgxAAgAm6AWIAwAAIAAAsIAoAAIAAgsIgoAAIAAg0IgwAAg");
	this.shape_5.setTransform(101.025,61.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7D3C19").s().p("AhSJMIhMnQIjHDCICipzIAAjZIEAkgIEpiaIAABNIkLBgIiQEUIAAA+Ih4AAIAABEIBIAAIAAA4IAvAAIAAAsIABAAIAADsIGEh1IAADLIh3AAIkNCWIGSCFIAAKNg");
	this.shape_6.setTransform(61.6,96.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5C2000").s().p("AmkE8IGfiMIk1iPIh3AAIAAjLIGsBlIAAlAIDFAAIDyMvIlIlHIhOG8IgLBCIm1FogAgFnJIAAhLIhzjqIkih9IAAhNIE3CxIDmDrIAlBjg");
	this.shape_7.setTransform(138.525,96.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DE8A5D").s().p("AjOHRICcgoIigggIgDhJIB3AAIE0CPImeCNgAjVB1IAHjaIAnAAIAAA4IAvAAIAAAsIAgAAIAAAdIC3AAIAAgdIAsAAIAAgsIA/AAIAAg4IAMAAIAAE/gAjMipIAOmyIEhB9IBzDpIAABMg");
	this.shape_8.setTransform(116.525,68.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC3300").s().p("AvyrWQAAgxAigiQAjgiAwAAINOAAIkpCaIkAEgIAADZIiiJzIDHjCIBLHQIirArIg5AOIguAMIguALIgzANIgyANIhlAZgAGIKcIBOm8IFIFHIjysvIABAAIAAhEIgZAAIgmhjIjmjrIk3ixIOtAAQAwAAAjAiQAiAiAAAxIAAYCg");
	this.shape_9.setTransform(102.15,84.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pic_joe, new cjs.Rectangle(0,0,203.9,202.2), null);


(lib.pic_activist = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#B2456E").s().p("ADVDyIABhdIhdiGIA1hKIguhOIC6CCIBtDyIAEAJgAmqDtIABjjIGPj+IAAAgIAzBLIgpBMIBNBxIhPBXIADBlg");
	this.shape.setTransform(144.775,180.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCBFA3").s().p("AjDi+IB+gcIBBguIAEBLIDHCqIAAAeImND+g");
	this.shape_1.setTransform(122.1,154.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7CBB3").s().p("AirAuIABg2IgMguICjiFIAGhOIBGAyIB4AaIABABIAFgBIgDHHgAC2gQIAAAAIgDAAg");
	this.shape_2.setTransform(84.175,154.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CE507F").s().p("ACpDeIg7gCIAAhVIgniTIABhLIAqhgIAAgnIFgDcIgBDigAnRDYICFkxIEZiBIAIAxIAuBLIAGAzIhyC4IAABOg");
	this.shape_3.setTransform(55.55,181.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F78A74").s().p("ADSH7Ih4gaIhHgyIihhzIgGgEIhEhjIgBgDIAWnlIBzjoIEqAjIgHPUgABNBLIAsAAIABi8IgrAAgAAAjUICqBUIALgXIiqhUg");
	this.shape_4.setTransform(80.85,84.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABzCcIACi8IAsAAIgCC8gAiYCaIABi8IAsAAIgBC8gAAwhIICshQIAKAYIirBQgAjliFIALgWICqBTIgMAXg");
	this.shape_5.setTransform(103.875,77);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FC8467").s().p("AjknpIAGAAIGWAEIA0EAIgCAjIgICNIgJCIIg8CEIgoBWIicByIhAAvIh/AbIgFABgAhlA8IAsAAIACi8IgsAAgAioipIALAYICqhQIgKgYg");
	this.shape_6.setTransform(125.575,86.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8B7355").s().p("AkiP5IABhOIBzi6IgGgyIgvhMIgIgwIgJg4IAlhbIgVgyIgLhZIAzhvIgxhxIAvieIhEjRIA7nLIDAiPIEBhlIApgQIgEF4IkqgjIhzDoIgXHlIABAEIBFBjIAFADIggAyIAoA+IgBBuIgdAtIAQA7IAMAuIgBA3IAAAoIgqBfIgBBMIAnCTIgBBWg");
	this.shape_7.setTransform(73.975,101.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B79770").s().p("ABXP8IgChlIBPhXIhOhyIAqhLIg0hMIAAgfIAAgfIABgxIAsg9IhWh/IA3jAIgWgRIA9iCIAJiJIAIiNIACgjIg1kBImVgDIgGgBIADl4IAqAQIE1B3IDbDcIAlIfIhQDhIAyCoIg3BuIA2BxIgOBZIgXAxIAGALIAuBOIg2BLIBdCGIAABdg");
	this.shape_8.setTransform(134.425,102.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006600").s().p("ANcPzIhtjzIi6iDIgGgLIAYgwIANhZIg2hyIA3huIgxioIBQjhIgmofIjbjbIk2h4INAAAQAyAAAhAiQAjAjAAAwIAAb7QAAAxgjAhQghAjgyAAgAvQPQQgighAAgxIAA77QAAgwAigjQAigiAyAAINnAAIkBBlIjACPIg7HLIBEDRIgwCeIAyBxIgzBvIAKBZIAWAyIglBbIAJA4IkaCAIiFEyIFoAEIDYABIA7ABIpeABQgyAAgigjgAAKH2IACAAIAAABgADSFKIgFhLICdhzIAnhVIAWAQIg3DAIBWCAIgsA9IgBAwgAlvGVIAcgtIABhuIgng+IAggyICiB0IgFBNIijCFg");
	this.shape_9.setTransform(101.1,102.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pic_activist, new cjs.Rectangle(0,0,202.2,204.7), null);


(lib.button_check = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,hover:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// hidden
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(219,255,221,0.008)").s().p("Am2HwQgXAAgRgQQgRgRgBgYIAAttQABgYARgRQARgQAXAAINtAAQAYAAARAQQAQARAAAYIAANtQAAAYgQARQgRAQgYAAg");
	this.shape.setTransform(49.65,49.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(219,255,221,0.008)").s().p("AoCJHQgcAAgUgUQgUgUAAgcIAAwFQAAgcAUgUQAUgUAcAAIQFAAQAdAAAUAUQATAUAAAcIAAQFQAAAcgTAUQgUAUgdAAg");
	this.shape_1.setTransform(49.65,49.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Ebene_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#36803A").s().p("AlPFPIF0qEIBMhOIDfDfIhNBNIiPiOIljJnIgEACg");
	this.shape_2.setTransform(49.825,51.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Am3G3IHntNIBlhlIEjEkIhkBlIi7i7InTMoIgFABg");
	this.shape_3.setTransform(49.875,51.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

	// Ebene_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DBFFDD").s().p("Am2HwQgXAAgRgQQgRgRgBgYIAAttQABgYARgRQARgQAXAAINtAAQAYAAARAQQAQARAAAYIAANtQAAAYgQARQgRAQgYAAg");
	this.shape_4.setTransform(49.65,49.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s().p("AoCJHQgcAAgUgUQgUgUAAgcIAAwFQAAgcAUgUQAUgUAcAAIQFAAQAdAAAUAUQATAUAAAcIAAQFQAAAcgTAUQgUAUgdAAg");
	this.shape_5.setTransform(49.65,49.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-8.6,116.6,116.6);


(lib.button_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,"hover":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// hidden
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(219,255,221,0.008)").s().p("Am2HwQgXAAgRgQQgRgRgBgYIAAttQABgYARgRQARgQAXAAINtAAQAYAAARAQQAQARAAAYIAANtQAAAYgQARQgRAQgYAAg");
	this.shape.setTransform(49.65,49.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(219,255,221,0.008)").s().p("AoCJHQgcAAgUgUQgUgUAAgcIAAwFQAAgcAUgUQAUgUAcAAIQFAAQAdAAAUAUQATAUAAAcIAAQFQAAAcgTAUQgUAUgdAAg");
	this.shape_1.setTransform(49.65,49.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Ebene_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#36803A").s().p("Ai7AAIEqkrIBNBMIjdDfIDdDeIAAAEIhLBLg");
	this.shape_2.setTransform(45.675,50.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DBFFDD").s().p("Am2HwQgXAAgRgQQgRgRgBgYIAAttQABgYARgRQARgQAXAAINtAAQAYAAARAQQAQARAAAYIAANtQAAAYgQARQgRAQgYAAgAjjAEIEsEtIBMhKIAAgFIjejeIDejeIhOhNg");
	this.shape_3.setTransform(49.65,49.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjcAAIFelgIBbBbIkEEFIEEEEIAAAFIhYBYg");
	this.shape_4.setTransform(45,50.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s().p("AoCJHQgcAAgUgUQgUgUAAgcIAAwFQAAgcAUgUQAUgUAcAAIQFAAQAdAAAUAUQATAUAAAcIAAQFQAAAcgTAUQgUAUgdAAgAkLAEIFiFiIBYhXIAAgFIkFkGIEFkEIhbhag");
	this.shape_5.setTransform(49.65,49.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-8.6,116.6,116.6);


(lib.wolken_tween = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.energy_0_1();
	this.instance.setTransform(-197.5,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wolken_tween, new cjs.Rectangle(-197.5,-65.5,395,131), null);


(lib.wind_kopf3_tween = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wind_kopf3();
	this.instance.setTransform(-59.5,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wind_kopf3_tween, new cjs.Rectangle(-59.5,-58,119,116), null);


(lib.wind_kopf2_tween = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wind_kopf2();
	this.instance.setTransform(-103,-113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wind_kopf2_tween, new cjs.Rectangle(-103,-113,206,226), null);


(lib.wind_kopf1_tween = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wind_kopf1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.wind_kopf1_tween, new cjs.Rectangle(0,0,556,512), null);


(lib.oelfleck_tween = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ölfleck();
	this.instance.setTransform(-104,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.oelfleck_tween, new cjs.Rectangle(-104,-26.5,208,53), null);


(lib.light_linie = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("A+rCLIAAkVMA9XAAAIAAEVg");
	this.shape.setTransform(0,-0.0588,1,0.3538);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.light_linie, new cjs.Rectangle(-196.4,-4.9,392.8,9.8), null);


(lib.hold_bubble = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#57FF00").s().p("AgvQ8QgjgiAAgxQAAgxAjgjQAigiAwAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgxAAQgwAAgigjgAKTMVQgjgjAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigigArwMUQgjgiAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAhXB+Qg0g0AAhKQAAhJA0g0QAzg0BJAAQBKAAA0A0QA0A0AABJQAABKg0A0Qg0A0hKAAQhJAAgzg0gAwXBVQgjgiAAgxQAAgwAjgjQAigiAxAAQAxAAAiAiQAjAjAAAwQAAAxgjAiQgiAjgxAAQgxAAgigjgANyBTQgjgiAAgxQAAgwAjgjQAigiAxAAQAxAAAiAiQAjAjAAAwQAAAxgjAiQgiAjgxAAQgxAAgigjgArxpvQgjgiAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAKbpyQgjgiAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAguuUQgigjAAgxQAAgxAigiQAigjAwAAQAyAAAiAjQAiAiAAAxQAAAxgiAjQgiAigyAAQgwAAgigig");
	this.shape.setTransform(-3.275,0.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#57FF00").s().p("AgvQ3QgjgiAAgyQAAgwAjgjQAigjAwAAQAxAAAiAjQAjAjAAAwQAAAygjAiQgiAjgxAAQgwAAgigjgAKTMQQgjgjAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAjQgiAigxAAQgxAAgigigArwMPQgjgjAAgwQAAgyAjgiQAigjAxAAQAxAAAiAjQAjAiAAAyQAAAwgjAjQgiAjgxAAQgxAAgigjgAhXB5Qg0g0AAhJQAAhKA0g0QAzg0BJAAQBKAAA0A0QA0A0AABKQAABJg0A0Qg0A0hKAAQhJAAgzg0gAwXBQQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgANyBOQgjgjAAgwQAAgwAjgjQAigiAxgBQAxABAiAiQAjAjAAAwQAAAwgjAjQgiAjgxgBQgxABgigjgArxp0QgjgjAAgwQAAgyAjgiQAigjAxABQAxgBAiAjQAjAiAAAyQAAAwgjAjQgiAjgxAAQgxAAgigjgAKbp3QgjgiAAgyQAAgwAjgjQAigjAxAAQAxAAAiAjQAjAjAAAwQAAAygjAiQgiAjgxgBQgxABgigjgAguuPQgigjAAgxQAAgwAigjQAigiAwgBQAyABAiAiQAiAjAAAwQAAAxgiAjQgiAjgygBQgwABgigjg");
	this.shape_1.setTransform(-3.275,0.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#57FF00").s().p("AgvQwQgjgiAAgxQAAgxAjgjQAigiAwAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgxAAQgwAAgigjgAKTMJQgjgjAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigigArwMIQgjgiAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAhXByQg0g0AAhJQAAhKA0g0QAzg0BJAAQBKAAA0A0QA0A0AABKQAABJg0A0Qg0A0hKAAQhJAAgzg0gAwXBJQgjgiAAgwQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAwgjAiQgiAjgxAAQgxAAgigjgANyBHQgjgiAAgwQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAwgjAiQgiAjgxAAQgxAAgigjgArxp7QgjgiAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAKbp+QgjgiAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAguuIQgigjAAgxQAAgxAigiQAigjAwAAQAyAAAiAjQAiAiAAAxQAAAxgiAjQgiAigyAAQgwAAgigig");
	this.shape_2.setTransform(-3.275,1.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#57FF00").s().p("AgvQjQgjgiAAgxQAAgxAjgiQAigjAwAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgwAAgigjgAKTL8QgjgjAAgxQAAgxAjgiQAigiAxAAQAxAAAiAiQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigigArwL7QgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAhXBmQg0g1AAhIQAAhLA0gzQAzg1BJAAQBKAAA0A1QA0AzAABLQAABIg0A1Qg0A0hKAAQhJAAgzg0gAwXA8QgjgiAAgwQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAwgjAiQgiAjgxAAQgxAAgigjgANyA7QgjgjAAgwQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAwgjAjQgiAigxAAQgxAAgigigArxqIQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAKYqLQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAgut8QgigiAAgxQAAgxAigiQAigjAwAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgwAAgigjg");
	this.shape_3.setTransform(-3.275,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#57FF00").s().p("AgvQTQgjgiAAgyQAAgwAjgjQAigjAwAAQAxAAAiAjQAjAjAAAwQAAAygjAiQgiAjgxAAQgwAAgigjgAKTLsQgjgjAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAjQgiAigxAAQgxAAgigigArwLrQgjgjAAgwQAAgyAjgiQAigjAxAAQAxAAAiAjQAjAiAAAyQAAAwgjAjQgiAjgxAAQgxAAgigjgAhXBVQg0g0AAhJQAAhKA0g0QAzg0BJAAQBKAAA0A0QA0A0AABKQAABJg0A0Qg0A0hKAAQhJAAgzg0gAwXAsQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgANyAqQgjgjAAgwQAAgwAjgjQAigiAxgBQAxABAiAiQAjAjAAAwQAAAwgjAjQgiAjgxgBQgxABgigjgArxqYQgjgjAAgwQAAgyAjgiQAigjAxABQAxgBAiAjQAjAiAAAyQAAAwgjAjQgiAjgxAAQgxAAgigjgAKWqbQgigiAAgyQAAgwAigjQAigjAxAAQAyAAAiAjQAiAjAAAwQAAAygiAiQgiAjgygBQgxABgigjgAgutrQgigjAAgxQAAgwAigjQAigiAwgBQAyABAiAiQAiAjAAAwQAAAxgiAjQgiAjgygBQgwABgigjg");
	this.shape_4.setTransform(-3.275,4.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#57FF00").s().p("AgvP6QgjgiAAgxQAAgxAjgjQAigiAwAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgxAAQgwAAgigjgAKTLTQgjgjAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigigArwLSQgjgiAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAhXA8Qg0g0AAhJQAAhKA0g0QAzg0BJAAQBKAAA0A0QA0A0AABKQAABJg0A0Qg0A0hKAAQhJAAgzg0gAwXATQgjghAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAhQgiAjgxAAQgxAAgigjgANyARQgjghAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAhQgiAjgxAAQgxAAgigjgArxqxQgjgiAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAKWq0QgigiAAgxQAAgxAigjQAigiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAgutSQgigjAAgxQAAgxAigiQAigjAwAAQAyAAAiAjQAiAiAAAxQAAAxgiAjQgiAigyAAQgwAAgigig");
	this.shape_5.setTransform(-3.275,6.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#57FF00").s().p("AgvPVQgjgiAAgxQAAgxAjgiQAigjAwAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgwAAgigjgAKTKuQgjgjAAgxQAAgxAjgiQAigiAxAAQAxAAAiAiQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigigArwKtQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAhXAYQg0g0AAhJQAAhLA0gzQAzg1BJAAQBKAAA0A1QA0AzAABLQAABJg0A0Qg0A0hKAAQhJAAgzg0gAwXgRQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAigxAAQgxAAgigigANygSQgjgjAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAjQgiAhgxAAQgxAAgighgAKSrWQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgArxrWQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAgustQgigjAAgxQAAgxAigjQAigiAwAAQAyAAAiAiQAiAjAAAxQAAAxgiAjQgiAigyAAQgwAAgigig");
	this.shape_6.setTransform(-3.275,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#57FF00").s().p("AgvOpQgjgiAAgxQAAgxAjgiQAigjAwAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgwAAgigjgAKTKCQgjgjAAgxQAAgxAjgiQAigiAxAAQAxAAAiAiQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigigArwKBQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAhXgTQg0g1AAhJQAAhLA0gzQAzg1BJAAQBKAAA0A1QA0AzAABLQAABJg0A1Qg0AzhKAAQhJAAgzgzgAwXg9QgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgANyg+QgjgjAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAjQgiAigxAAQgxAAgigigAgursQgigjAAgwQAAgyAigiQAigjAwAAQAyAAAiAjQAiAiAAAyQAAAwgiAjQgiAjgyAAQgwAAgigjgAKPr5QgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgArxsCQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjg");
	this.shape_7.setTransform(-3.275,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#57FF00").s().p("AgvOpQgjgiAAgxQAAgxAjgiQAigjAwAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgwAAgigjgAKTKCQgjgjAAgxQAAgxAjgiQAigiAxAAQAxAAAiAiQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigigArwKBQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAhXgTQg0g1AAhJQAAhKAzg4QA0g3BJAAQBKAAA0A3QA0A4AABKQAABJg0A1Qg0AzhKAAQhJAAgzgzgAwXg9QgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgANyg+QgjgjAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAjQgiAigxAAQgxAAgigigAgoo4QghghAAguQAAguAhghQAgggAtAAQAuAAAgAgQAhAhAAAuQAAAughAhQggAgguAAQgtAAgggggAJ9rrQgjgjAAgwQAAgyAjgiQAigjAxABQAxgBAiAjQAjAiAAAyQAAAwgjAjQgiAjgxAAQgxAAgigjgArxsCQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjg");
	this.shape_8.setTransform(-3.275,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#57FF00").s().p("AgvOpQgjgiAAgxQAAgxAjgiQAigjAwAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgwAAgigjgAKTKCQgjgjAAgxQAAgxAjgiQAigiAxAAQAxAAAiAiQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigigArwKBQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAhXgTQg0g1AAhJQAAhLAyhwQAyhxBJAAQBKAAA2BxQA1BwAABLQAABJg0A1Qg0AzhKAAQhJAAgzgzgAwXg9QgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgANyg+QgjgjAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAjQgiAigxAAQgxAAgigigAJjrRQgigjAAgxQAAgxAigjQAigiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAjQgiAigyAAQgxAAgigigArxsCQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjg");
	this.shape_9.setTransform(-3.275,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#57FF00").s().p("AgvOpQgjgiAAgxQAAgxAjgiQAigjAwAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgwAAgigjgAKTKCQgjgjAAgxQAAgxAjgiQAigiAxAAQAxAAAiAiQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigigArwKBQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAhXgTQg0g1AAhJQAAhLA4g4QA4g4BLAIQBLAJAuAvQAuAwAABLQAABJg0A1Qg0AzhKAAQhJAAgzgzgAwXg9QgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgANyg+QgjgjAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAjQgiAigxAAQgxAAgigigAI7qoQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgArxsCQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjg");
	this.shape_10.setTransform(-3.275,14.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#57FF00").s().p("AgvOpQgjgiAAgxQAAgxAjgiQAigjAwAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgwAAgigjgAKTKCQgjgjAAgxQAAgxAjgiQAigiAxAAQAxAAAiAiQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigigArwKBQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAhlgFQg6g6AAhSQAAhSA/g/QA+g+BTAJQBUAIAzA2QA0A1AABTQAABSg6A6Qg6A6hTAAQhRAAg5g6gAwXg9QgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgANyg+QgjgjAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAjQgiAigxAAQgxAAgigigAH5pnQgjgiAAgyQAAgwAjgjQAigjAxAAQAxAAAiAjQAjAjAAAwQAAAygjAiQgiAjgxgBQgxABgigjgArxsCQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjg");
	this.shape_11.setTransform(-3.275,14.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#57FF00").s().p("AgvOpQgjgiAAgxQAAgxAjgiQAigjAwAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgwAAgigjgAKTKCQgjgjAAgxQAAgxAjgiQAigiAxAAQAxAAAiAiQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigigArwKBQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAhtADQg+g9AAhWQAAhYBDhCQBChCBYAKQBYAJA3A5QA2A4AABYQAABWg9A9Qg9A9hYAAQhWAAg8g9gAwXg9QgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgANyg+QgjgjAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAjQgiAigxAAQgxAAgigigAGQn+QgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgArxsCQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjg");
	this.shape_12.setTransform(-3.275,14.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#57FF00").s().p("AgpOpQgjgiABgxQgBgxAjgiQAigjAwAAQAxAAAjAjQAiAiAAAxQAAAxgiAiQgjAjgxAAQgwAAgigjgAKZKCQgjgjAAgxQAAgxAjgiQAigiAxAAQAxAAAjAiQAiAiAAAxQAAAxgiAjQgjAigxAAQgxAAgigigArqKBQgjgiAAgxQAAgxAjgiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAhtAKQhDg2gFhLQgEhLAegwQAdguBDgiQAmgTApgRQA6gVAggVQAWgOA+grQAkgYAaACQAzACAgAhQAgAgAEAtQAEAsgvAzQgwAygOBOQgPBMg+BDQg9BBhZAAQhVABhDg3gAwRg9QgjgiABgxQgBgxAjgiQAigjAxAAQAxAAAjAjQAiAiAAAxQAAAxgiAiQgjAjgxAAQgxAAgigjgANrg+QgigjAAgxQAAgxAigjQAjgiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAjQgiAigxAAQgxAAgjgigArrsCQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAjAjQAiAiAAAxQAAAxgiAiQgjAjgxAAQgxAAgigjg");
	this.shape_13.setTransform(-3.9,14.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#57FF00").s().p("AgeOpQgigiAAgxQAAgxAigiQAhgjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAghgjgAKkKCQgigjAAgxQAAgxAigiQAigiAxAAQAyAAAiAiQAiAiAAAxQAAAxgiAjQgiAigyAAQgxAAgigigArfKBQgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAhcADQg9g9AAhWQAAhYBDhCQBChCBYAKQBYAJA2A5QA3A4AABYQAABWg+A9Qg8A9hYAAQhWAAg9g9gAwGg9QgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgANgg+QgigjAAgxQAAgxAigjQAigiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAjQgiAigyAAQgxAAgigigArgsCQgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjg");
	this.shape_14.setTransform(-5.025,14.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#57FF00").s().p("AgMOpQgjgiAAgxQAAgxAjgiQAhgjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAghgjgAK2KCQgjgjAAgxQAAgxAjgiQAigiAxAAQAxAAAiAiQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigigArNKBQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAhWAQQhDhCAAheQAAhfBJhIQBHhHBgAKQBfAKA7A+QA8A9AABfQAABehDBCQhCBDhfAAQheAAhBhDgAv0g9QgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgANPg+QgjgjAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAjQgiAigxAAQgxAAgigigArOsCQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjg");
	this.shape_15.setTransform(-6.775,14.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#57FF00").s().p("AAMOpQgigiAAgxQAAgxAigiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgALPKCQgjgjAAgxQAAgxAjgiQAigiAxAAQAxAAAiAiQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigigAq0KBQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAhCAVQhFhEAAhhQAAhiBMhJQBIhKBjALQBjAKA8A/QA9BAAABhQAABhhFBEQhDBFhiAAQhhAAhDhFgAvbg9QgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAM2g+QgjgjAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAjQgiAigxAAQgxAAgigigAq1sCQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjg");
	this.shape_16.setTransform(-9.275,14.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#57FF00").s().p("AA1OpQgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAL4KCQgigjAAgxQAAgxAigiQAigiAxAAQAyAAAiAiQAiAiAAAxQAAAxgiAjQgiAigyAAQgxAAgigigAqLKBQgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAgYAVQhFhEAAhhQAAhiBLhJQBJhKBjALQBiAKA9A/QA9BAAABhQAABhhFBEQhDBFhjAAQhhAAhChFgAuyg9QgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAMMg+QgigjAAgxQAAgxAigjQAigiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAjQgiAigyAAQgxAAgigigAqMsCQgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjg");
	this.shape_17.setTransform(-13.425,14.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#57FF00").s().p("AA/OpQgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAMCKCQgigjAAgxQAAgxAigiQAigiAxAAQAyAAAiAiQAiAiAAAxQAAAxgiAjQgiAigyAAQgxAAgigigAqBKBQgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAgOAVQhFhEAAhhQAAhiBLhJQBJhKBjALQBiAKA9A/QA9BAAABhQAABhhFBEQhDBFhjAAQhhAAhChFgAuog9QgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAKIg+QgigjAAgxQAAgxAigjQAigiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAjQgiAigyAAQgxAAgigigAqCsCQgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjg");
	this.shape_18.setTransform(-14.425,14.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#57FF00").s().p("AA/OpQgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAMCKCQgigjAAgxQAAgxAigiQAigiAxAAQAyAAAiAiQAiAiAAAxQAAAxgiAjQgiAigyAAQgxAAgigigAqBKBQgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgACOBrQhkgDhHhIQhJhIAAhnQAAhoBRhRQBQhRBqAKQBfAIBzBfQDGBAgcBiQgdBhhJAUQhJAVhAA0Qg9AzhfAAIgIAAgAuog9QgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAqCsCQgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjg");
	this.shape_19.setTransform(-14.425,14.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#57FF00").s().p("AA/OpQgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAMCKCQgigjAAgxQAAgxAigiQAigiAxAAQAyAAAiAiQAiAiAAAxQAAAxgiAjQgiAigyAAQgxAAgigigAqBKBQgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAgkAnQhMhLAAhrQAAhsBUhSQBPhRBuAMQBsAMBDBFQBEBGAABsQAABrhMBLQhKBLhtABQhrgBhKhLgAuog9QgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAqCsCQgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjg");
	this.shape_20.setTransform(-14.425,14.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#57FF00").s().p("ABZOpQgigiAAgxQAAgxAigiQAjgjAwAAQAyAAAiAjQAjAigBAxQABAxgjAiQgiAjgyAAQgwAAgjgjgApmKBQgjgiAAgxQAAgxAjgiQAhgjAyAAQAxAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgxAAQgyAAghgjgALoJPQgigiAAgyQAAgwAigjQAigjAxAAQAyAAAhAjQAjAjAAAwQAAAygjAiQghAjgyAAQgxAAgigjgAgJAnQhNhLAAhrQAAhsBUhSQBPhRBuAMQBsAMBDBFQBEBGAABsQAABrhMBLQhKBLhtABQhrgBhJhLgAuNg9QgjgiAAgxQAAgxAjgiQAhgjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAghgjgApnsCQgjgiAAgxQAAgxAjgiQAhgjAyAAQAxAAAiAjQAiAiABAxQgBAxgiAiQgiAjgxAAQgyAAghgjg");
	this.shape_21.setTransform(-17.05,14.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#57FF00").s().p("ABuOpQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgApSKBQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgALUIoQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAAKAnQhLhLAAhrQAAhsBShSQBRhRBtAMQBtAMBDBFQBDBGAABsQAABrhMBLQhKBLhsABQhsgBhKhLgAt5g9QgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgApTsCQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjg");
	this.shape_22.setTransform(-19.075,14.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#57FF00").s().p("ACMOpQgigiAAgxQAAgxAigiQAjgjAwAAQAyAAAiAjQAjAigBAxQABAxgjAiQgiAjgyAAQgwAAgjgjgAozKBQgjgiAAgxQAAgxAjgiQAhgjAyAAQAxAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgxAAQgyAAghgjgAK1HtQgjgjABgxQgBgxAjgjQAigiAxAAQAxAAAjAiQAiAjAAAxQAAAxgiAjQgjAigxAAQgxAAgigigAApAnQhMhLAAhrQAAhsBThSQBQhRBuAMQBsAMBDBFQBEBGAABsQAABrhMBLQhKBLhtABQhrgBhKhLgAtag9QgjgiAAgxQAAgxAjgiQAhgjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAghgjgAo0sCQgjgiAAgxQAAgxAjgiQAhgjAyAAQAxAAAiAjQAiAiABAxQgBAxgiAiQgiAjgxAAQgyAAghgjg");
	this.shape_23.setTransform(-22.15,14.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#57FF00").s().p("ADFOpQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAn7KBQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAKDF7QgighAAgwQAAgvAigiQAhghAvAAQAwAAAhAhQAiAiAAAvQAAAwgiAhQghAigwAAQgvAAghgigABhAnQhMhLAAhrQAAhsBThSQBRhRBtAMQBtAMBDBFQBDBGAABsQAABrhMBLQhKBLhsABQhsgBhKhLgAsig9QgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAn8sCQgjgiAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjg");
	this.shape_24.setTransform(-27.775,14.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#57FF00").s().p("AE3OpQgigiAAgxQAAgxAigiQAjgjAwAAQAyAAAiAjQAjAigBAxQABAxgjAiQgiAjgyAAQgwAAgjgjgAmIKBQgjgiAAgxQAAgxAjgiQAhgjAyAAQAxAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgxAAQgyAAghgjgAIrCwQgUgJgjgWQgjgVhagFQhZgFhKhLQhNhLAAhrQAAhsBUhSQBQhRBuAMQBsAMBDBFQBEBGAIBaQAIBZAWAkQAWAiAFASQAGATAAAsQAAArgfAfQgeAfgsAAQgsAAgTgIgAqvg9QgjgiAAgxQAAgxAjgiQAhgjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAghgjgAmJsCQgjgiAAgxQAAgxAjgiQAhgjAyAAQAxAAAiAjQAiAiABAxQgBAxgiAiQgiAjgxAAQgyAAghgjg");
	this.shape_25.setTransform(-39.25,14.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#57FF00").s().p("AFSOXQgigjAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAjQgiAigyAAQgxAAgigigAluKUQgigiAAgxQAAgxAigjQAigiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgADjBGQhRhPAAhyQAAhzBZhYQBWhWB0ANQB0AMBHBLQBIBKAABzQAAByhRBPQhPBRhzAAQhzAAhPhRgAqVgqQgigiAAgxQAAgxAigjQAigiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAlvrvQgigiAAgxQAAgxAigjQAigiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjg");
	this.shape_26.setTransform(-41.925,13.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#57FF00").s().p("AFOOEQgjgjAAgxQAAgxAjgiQAigiAxAAQAxAAAiAiQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigigAlyKnQgjgjAAgwQAAgyAjgiQAigjAxAAQAxAAAiAjQAjAiAAAyQAAAwgjAjQgiAjgxAAQgxAAgigjgADYBfQhThSAAh1QAAh3BbhbQBZhYB5ANQB3AMBKBNQBKBNAAB3QAAB1hUBSQhRBUh4AAQh2AAhShUgAqZgXQgjgiAAgyQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAygjAiQgiAigxAAQgxAAgigigAlzrcQgjgjAAgwQAAgyAjgiQAigjAxABQAxgBAiAjQAjAiAAAyQAAAwgjAjQgiAjgxAAQgxAAgigjg");
	this.shape_27.setTransform(-41.475,11.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#57FF00").s().p("AFLNoQgigiAAgxQAAgxAigjQAigiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAl1LDQgigjAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAjQgiAigyAAQgxAAgigigADTB/QhVhVAAh2QAAh5BdhcQBahbB6AOQB6ANBLBOQBLBOAAB5QAAB2hVBVQhTBUh5AAQh4AAhThUgAqcAEQgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAigyAAQgxAAgigigAl2rAQgigjAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAjQgiAigyAAQgxAAgigig");
	this.shape_28.setTransform(-41.225,8.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#57FF00").s().p("AFQM5QgjgiAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAlwLyQgjgjAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigigADeCoQhShSAAhzQAAh1BahZQBXhYB2AOQB3AMBIBMQBJBLAAB1QAABzhTBSQhQBRh1AAQh0AAhRhRgAqXAzQgjgjAAgwQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAwgjAjQgiAigxAAQgxAAgigigAlxqRQgjgjAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigig");
	this.shape_29.setTransform(-41.675,3.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#57FF00").s().p("AlwMUQgigjgBgxQABgwAigjQAigiAxgBQAxABAiAiQAjAjAAAwQAAAxgjAjQgiAjgxgBQgxABgigjgAFKLHQgjgiABgxQgBgxAjgjQAigiAxAAQAxAAAjAiQAiAjAAAxQAAAxgiAiQgjAjgxAAQgxAAgigjgADQDWQhVhWAAh4QAAh5BehdQBbhcB7APQB7ANBLBPQBLBOAAB5QAAB4hVBWQhTBUh6AAQh5AAhVhUgAqdBYQgjgiABgyQgBgwAjgiQAigjAxAAQAxAAAjAjQAiAiAAAwQAAAygiAiQgjAjgxAAQgxAAgigjgAl3psQgjgjAAgwQAAgyAjgiQAigjAxABQAxgBAjAjQAiAiAAAyQAAAwgiAjQgjAjgxAAQgxAAgigjg");
	this.shape_30.setTransform(-41.1,-0.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#57FF00").s().p("AlwMRQgjgjABgwQgBgyAjgiQAigjAxAAQAxAAAiAjQAjAiAAAyQAAAwgjAjQgiAjgxAAQgxAAgigjgAFQGPIhwiMQgug5gshAQgcg7AAhHQAAh9BhhgQBehgCBAQQCAAMBOBSQBPBSgBB9QAABTgnBDQgDAJgpA0QgoAzhCBMQhCBLgpABIgCAAQgbAAgxgXgAqjBbQgjgiABgyQgBgwAjgiQAigjAxAAQAxAAAjAjQAiAiAAAwQAAAygiAiQgjAjgxAAQgxAAgigjgAl9ppQgjgjAAgwQAAgyAjgiQAigjAxABQAxgBAjAjQAiAiAAAyQAAAwgiAjQgjAjgxAAQgxAAgigjg");
	this.shape_31.setTransform(-40.5,-0.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#57FF00").s().p("AlhMIQgjgiAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjgAC7DuQhahaAAiAQAAiABkhiQBghiCCAQQCDANBPBUQBQBTAACAQAACAhaBaQhZBaiBAAQiAAAhahagAqmBkQgigjAAgxQAAgwAigiQAigjAxAAQAyAAAiAjQAiAiAAAwQAAAxgiAjQgiAigyAAQgxAAgigigAmApgQgigjAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAjQgiAigyAAQgxAAgigig");
	this.shape_32.setTransform(-40.225,-1.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#57FF00").s().p("AlIL9QgjgjAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAjQgiAigxAAQgxAAgigigAC7D6QhahaAAiBQAAiABkhiQBghhCCAPQCDAOBPBUQBQBTAAB/QAACBhaBaQhZBaiBAAQiAAAhahagAqmBvQgigiAAgxQAAgwAigiQAigjAxAAQAyAAAiAjQAiAiAAAwQAAAxgiAiQgiAjgyAAQgxAAgigjgAmApVQgigiAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjg");
	this.shape_33.setTransform(-40.225,-2.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#57FF00").s().p("AkeLnQgjgjAAgxQAAgxAjgiQAigjAxAAQAxAAAiAjQAjAiAAAxQAAAxgjAjQgiAigxAAQgxAAgigigAC7EPQhahaAAiAQAAiABkhiQBghhCCAPQCDANBPBUQBQBTAACAQAACAhaBaQhZBbiBAAQiAAAhahbgAqmCFQgigiAAgxQAAgxAigiQAigiAxAAQAyAAAiAiQAiAiAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAmAo/QgigiAAgxQAAgxAigjQAigiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjg");
	this.shape_34.setTransform(-40.225,-4.575);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#57FF00").s().p("AjfLHQgigjAAgxQAAgxAigiQAigiAxAAQAyAAAiAiQAiAiAAAxQAAAxgiAjQgiAigyAAQgxAAgigigAC7EvQhahaAAiAQAAiABkhiQBghhCCAPQCDANBPBUQBQBTAACAQAACAhaBaQhZBaiBAAQiAAAhahagAqmClQgigiAAgyQAAgxAighQAigjAxAAQAyAAAiAjQAiAhAAAxQAAAygiAiQgiAjgyAAQgxAAgigjgAmAofQgigjAAgwQAAgyAigiQAigjAxABQAygBAiAjQAiAiAAAyQAAAwgiAjQgiAjgyAAQgxAAgigjg");
	this.shape_35.setTransform(-40.225,-7.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#57FF00").s().p("AhzKRQgjgiAAgxQAAgxAjgjQAigiAxAAQAwAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgwAAQgxAAgigjgAC7FlQhahaAAiAQAAiBBkhhQBghiCCAQQCDANBPBUQBQBSAACBQAACAhaBaQhZBaiBAAQiAAAhahagAqmDbQgigjAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAjQgiAigyAAQgxAAgigigAmAnpQgigjAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAjQgiAigyAAQgxAAgigig");
	this.shape_36.setTransform(-40.225,-13.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#57FF00").s().p("ABdIoQgjgjAAgyQAAgyAHgTQAHgSAIgiQAHgiABhiQAAhiBmhkQBihiCEAPQCGAOBQBUQBSBVAACDQAACChcBcQhaBciEAAQg+AAgVAFQgyAMhDAFIgQAAQg+AAgfgfgAqpFHQgigiAAgxQAAgxAigjQAigiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAmDl9QgigiAAgxQAAgxAigjQAigiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjg");
	this.shape_37.setTransform(-39.925,-23.9744);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#57FF00").s().p("ACTHjQhghfAAiIQAAiIBqhoQBlhmCKAQQCKAOBUBYQBVBYAACIQAACIhfBfQheBgiJAAQiIAAhehggAqcFMQgigjAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAjQgiAigyAAQgxAAgigigAmcl4QgigjAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAjQgiAigyAAQgxAAgigig");
	this.shape_38.setTransform(-37.425,-24.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#57FF00").s().p("AB4HlQhjhhAAiLQAAiMBthrQBnhoCOARQCNANBWBbQBYBaAACMQgBCLhiBhQhfBiiNAAQiKAAhhhigAqOFHQgigiAAgxQAAgxAigjQAigiAxAAQAyAAAhAiQAjAjAAAxQAAAxgjAiQghAjgyAAQgxAAgigjgAmyl9QgjgiAAgxQAAgxAjgjQAigiAxAAQAxAAAjAiQAiAjAAAxQAAAxgiAiQgjAjgxAAQgxAAgigjg");
	this.shape_39.setTransform(-35.2,-23.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#57FF00").s().p("ABaHlQhhhhAAiLQAAiMBrhrQBohoCNARQCOANBWBbQBXBaAACMQAACLhiBhQhgBiiMAAQiLAAhhhigApxFHQgigiAAgxQAAgxAigjQAigiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAnPl9QgjgiAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjg");
	this.shape_40.setTransform(-32.275,-23.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#57FF00").s().p("AAtHlQhhhhAAiLQAAiMBrhrQBohoCNARQCOANBWBbQBXBaAACMQAACLhiBhQhgBiiMAAQiLAAhhhigApEFHQgigiAAgxQAAgxAigjQAigiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjgAn8l9QgjgiAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgxAAQgxAAgigjg");
	this.shape_41.setTransform(-27.775,-23.975);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#57FF00").s().p("AgDHPQhuh5AAhnQgBhoCGiFQBnhoCOARQCNANBWBbQBYBaAACMQgBCLhiBhQhfBiiMAAQiMAAhth4gAnMFHQgigiAAgxQAAgxAigjQAjgiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAjgxAAQgxAAgjgjgAogl9QgjgiAAgxQAAgxAjgjQAigiAxAAQAxAAAjAiQAiAjAAAxQAAAxgiAiQgjAjgxAAQgxAAgigjg");
	this.shape_42.setTransform(-24.2,-23.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#57FF00").s().p("AD0JBQiJgDiIh7QiKh8gIhXQgIhXDFiaQBohpCNARQCOANBWBbQBXBaAACMQAACLhiBhQhdBgiFAAIgGAAgAobl2QgigjAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAjQgiAigyAAQgxAAgigig");
	this.shape_43.setTransform(-23.675,-23.5719);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#57FF00").s().p("AgcHcQhohnAAiUQAAiVBzhwQBuhwCWARQCWAOBcBiQBdBfAACVQAACUhoBnQhmBpiWAAQiTAAhnhpgAofl6QgigjAAgxQAAgxAigjQAigiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAjQgiAigyAAQgxAAgigig");
	this.shape_44.setTransform(-21.875,-21.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#57FF00").s().p("AgoHPQhphmAAiUQAAiVB0hxQBthwCWASQCXAOBcBhQBdBgAACVQAACUhpBmQhmBpiVAAQiUAAhmhpgAoSluQgjgiAAgxQAAgxAjgjQAigiAxAAQAxAAAiAiQAjAjAAAxQAAAxgjAiQgiAigxAAQgxAAgigig");
	this.shape_45.setTransform(-20.625,-20.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#57FF00").s().p("AhGG7QhqhpAAiXQAAiXB1hzQBwhzCZATQCZAOBeBjQBfBiAACXQAACXhqBpQhoBriZAAQiWAAhphrgAoBlcQgigiAAgxQAAgxAigjQAigiAxAAQAyAAAiAiQAiAjAAAxQAAAxgiAiQgiAjgyAAQgxAAgigjg");
	this.shape_46.setTransform(-18.125,-18.125);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#57FF00").s().p("AhmGaQhqhpAAiXQAAiYB1hzQBwhyCZASQCZAOBeBkQBfBhAACYQAACXhqBpQhoBriZAAQiWAAhphrgAnhk6QgigjAAgxQAAgxAigiQAigjAxAAQAyAAAiAjQAiAiAAAxQAAAxgiAjQgiAigyAAQgxAAgigig");
	this.shape_47.setTransform(-14.925,-14.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#57FF00").s().p("AicFiQhqhpAIijQAHihAuiDQCpgqCYgRQCZAOBeBkQBfBiAACXQAACXhqBpQhoBriZAAQiVAAhqhrgAmqkGQgjgfAAgxQAAgxAigiQAigjAxAAQAyAAAfAoQAgAnAIBEQAIBDgYAIQgYAHhAAAQhBAAgigfg");
	this.shape_48.setTransform(-9.525,-9.175);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#57FF00").s().p("Aj+EAQhrhpgCisQgCiuBChtQBfg7DiABQCZAOBeBjQBfBjAACWQAACXhrBpQhoBriYAAQiWAAhphrg");
	this.shape_49.setTransform(0.3204,0.5748);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#57FF00").s().p("Aj1D3QhlhmAAiRQAAiQBlhlQBlhmCQAAQCQAABmBmQBlBlAACQQAACRhlBmQhmBliQAAQiQAAhlhlg");
	this.shape_50.setTransform(0.45,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.5,-111.6,216.5,223.7);


(lib.biod_social = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {hill:0,hospital:1,school:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(lib.biod_social_status);
	}
	this.frame_1 = function() {
		this.gotoAndStop(lib.biod_social_status);
	}
	this.frame_2 = function() {
		this.gotoAndStop(lib.biod_social_status);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Ebene_1
	this.instance = new lib.hill_1();
	this.instance.setTransform(-302,-73);

	this.instance_1 = new lib.krankenhaus_1();
	this.instance_1.setTransform(-308,-143);

	this.instance_2 = new lib.schule_1();
	this.instance_2.setTransform(-231,-202);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-308,-202,616,345);


(lib.logo_pause = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#330000").s().p("A32JvIgllJQgSirgOilQgOipACiWIChgOIChgQQBdADAzAdQAzAeAbArQALB6ADB7QAEB4gNByIgmBKQgUAkgmASIhGAHIhXALQABAvACAnQACApAFApIAIBdQgyAShBACQgqAEgkAAIgogBgA14i/QAHApANA8QALA8AKA9QAKA/AGAzIBSgIQAIgqgKg9QgJg+gPg/IgWhrgAuvBGQAKj4APjxQAygHBDgGICFgMQBCgGAygCQAsCmAtCfQAtCdAqCgQAtCfAkCoIhVAIQgyAFg1AEIhdAIQgPgfgThGIg6jJIg8gBQgJAsgDA8IgBB3QABA7gGAsQg1ABgzAHQg0AFgvADQgBkFAHj6gArWiBQgCA6ABArQACAqgDAPQARAGAbgBQAegCARgIQgNgvgJgoIgZhVQgOgsgWg3QgGA8AAA6gAh4HrQgfgGgNgHQgMgIgNgNQg3jggVjoQgWjogQjnQA7gRBEgFQBCgDA3ALQAJB5AKBuQAJBrAQBqQAPBqAYBxIBKATQgBhrgNh6QgMh7gRh5QgSh8gNhrQA8gNBCgHQBCgHA7AKQAIBhAHB6QAHB8AFCAIAMDwIALC9QgQAUgYAUQgXAWgcAPQgbAQggADIiSAPQgeADgcAAQgwAAgvgIgAJdG8Qg8gDgjgSQgehHgLhUQgMhTAAhoQAQgJAggDQAegEAhABIA3AAQAKAiAIAkQAGAlAHAbQAZAFAgABQAeAAAGgVIgMiTQg1gWg0gQIhggeQgvgRgogYQgjhtgOhuQgMhuALh0QAugVA5gMQA3gKBHgFIBFgEQAsgCAsABQAtABAhADQAfADAGAJQAeAlAKA6QAIA5gCA5QgEA6gKAmQgtAJgyAEQgyAFgugLIgCgtIgBgqIhIAEQgJARABAWQAAAYAEAYIAFApQAoANA0APICFAgQAZAGASAKQAQAJACAeIAdD/QAMB2gZB1QgrAKg/AJQg+AKhDAGQgiADggAAQgfAAgegDgARNBaQgaipgSirQgSirgMieICxgOIC8gPQBdgIBHgHQgFApAJAtQAHAtgIAhQg/ACg9AFIh9ALQgGAnAJAlQAJAnAQAhQA1gHA7gEQA9gEBHgCQACA1gHAwQgJAwgIA1IgjADIhQAHQgvAFgkAGQADA8AHA3QAFA4ASA7QA3ABAygDQAzgDAzgFQADAhACApQABAqAAAqQAAArgBAkQg6AIhSAIQhTAIhVAGIiKANQgjiZgZiqg");
	this.shape.setTransform(0.0375,0.0145);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Ebene_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A34KDQgHgBgFgFQgFgFgBgHIgllIIAAgBQgSirgOilQgOiqACiXQAAgIAGgFQAFgGAHgBIChgOIAAAAIChgQIADAAQBiADA3AgIAAAAQA4AhAdAvQACAEABAFQALB6ADB7IAAAAQAEB6gNBzIgCAHIgnBLIAAAAQgXAqgsAUIgGACIhGAHIAAAAIhFAJIADBDIAAAAQACApAFAoIAAABIAIBcQAAAHgEAGQgDAFgHADQg0AThEACQgqAEglAAIgqgBgA1gisIAPBOIAAAAQAMA8AKA+QAIAzAFAsIAvgFQADgigHgvIAAAAQgJg9gOg/IAAAAIgThagAu+JXQgFgDgDgFQgDgFAAgFQgBkFAHj6IAAAAQAKj5APjxQABgIAFgFQAFgFAHgBQAygHBDgGICFgMQBDgGAygCQAHAAAFAEQAGAEACAHQAsClAtCgQAtCdAqCgIAAgBQAuCgAkCpQABAFgCAGQgCAFgFAEQgEADgGABIhVAIQgyAFg1AEIheAIQgGAAgFgDQgGgDgCgGQgPgfgUhJIAAAAIg3i6IgcgBQgFAmgDAuIgBB3IAAAAQABA9gHAtQgBAHgFAFQgGAFgHAAQgzABgzAHIAAAAQg1AFgvADIgBAAQgFAAgEgCgArCiBIAAAAQgCA6ABAqQABAbgBAQQAKABALgBQAOgBALgCQgLglgHghIAAACIgYhVIAAgBIgDgIIAAAWgAh7H/IgBAAQgkgHgOgJIAAAAQgPgJgPgQQgDgDgBgFQg4jhgVjqQgWjpgQjmQAAgHAEgGQAEgGAHgCQA8gRBGgGIABAAQBFgDA5ALQAGACAFAFQAEAFABAGQAJB6AKBtQAJBrAOBpQAPBkAXBqIAlAJQgDhfgLhqIAAAAQgMh6gRh5QgSh8gNhsQgBgHAEgHQAFgGAIgCQA9gMBDgIQBFgHA9ALQAHABAEAFQAFAFABAHQAIBhAHB6QAHB8AFCAIAMDwIAAAAIALC9QABAHgFAHQgSAUgYAVQgZAYgeARIAAgBQgfASgkAEIiSAPQgfADgdAAQgyAAgwgIgAJcHQQhBgDgmgUQgGgEgDgGQgghJgLhXQgMhVAAhpQAAgFACgFQADgEAFgDQATgMAlgDIgBAAQAggEAiABIABAAIA2AAQAHAAAFAEQAGAEABAGQAKAjAJAlIAAABQAEAcAFAWQATADAWAAIAAAAQALAAAFgFIgLiBQgvgTgtgOIAAAAIhhgeIAAAAQgxgRgqgZQgGgEgCgIQgkhugOhwIAAgBQgMhwALh1QAAgGADgEQADgFAFgCQAxgWA7gMIAAAAQA5gLBHgFIAAAAIBGgEQAsgCAtABQAuABAiADQAsAFAHAQQAhAoALA/IAAABQAIA6gCA7IAAABQgFA8gJAnQgCAFgEAEQgEAEgGABQguAKgzAEIAAAAQg2AFgxgMQgGgBgFgGQgEgFAAgHIgCgrIAAAAIgBgXIgmACQgDAJABAKIAAACQAAAVAEAWIAAABIAEAdIBPAYIgBgBICFAgIAAAAQAcAHAUAMIAAAAQAZAMADArIgBgBIAeD/IAAAAQAMB5gaB4QgBAGgEAEQgEAEgGABQgrAKhAAKQg/AKhEAGIAAAAQgiADggAAQghAAgegDgAR9GtQgGgEgCgIQgjiZgZirQgaipgSisQgSirgMifQgBgIAFgGQAGgGAIgBICxgOIC8gPIAAAAQBdgIBHgHQAGgBAGADQAFADADAGQADAFgBAHQgFAlAIAqIAAABQAIAxgIAkQgCAHgFAEQgFAFgHAAQg/ACg9AFIhsAJQgCAcAGAZIABABQAGAdALAaQAvgHAzgDQA+gEBIgCQAIAAAGAGQAGAFAAAJQACA2gHAyIAAABQgJAwgIA0QgBAHgFAFQAAAFgwADIhPAHIhAAIQADAyAGAuIAAABQAEAvAOAxQAuAAAqgCIABAAQAzgDAygFQAIAAAHAFQAGAFABAJQADAhACAqQABAqAAAqQAAAsgBAkQgBAHgFAFQgEAGgIABQg5AIhTAIQhTAIhVAGIiLANIgCAAQgGAAgFgEg");
	this.shape_1.setTransform(0.0369,0.0133);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_pause, new cjs.Rectangle(-162.8,-64.4,325.70000000000005,128.9), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#330000").s().p("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qIgGBWQgBAJgMAFQgNAEgZAAQgbAAgjACIhGAAgAWsDNQghgCgTgFIgYgNQgNgFgSgMQgKhbgDhbIgBhLIABhrQAFgDAZgBQAagBAdABQAdABATADQAFAxABAyIAAAIIACBbQACAzAKAvIAogGIAAgBQAAhGgFhIIgCgoQgEg2AAg3IBDABIBAABQADA0ABA3IAAARQAAA/gCBAQgDA/gFA5QgCAKgSAHQgUAIgcADQgRACgiABIgXAAIgtgBgAQPDKQgTghgLggQgKghgEglQgCglAAgwQgBglADgiQAAgMACgLQAGgtAbgrQAygEA3gCQA4gCAxAEQAYAeAIAhQAIAaACAaIAAASQABAjgBAgQgBAygGAxQgEAygKAzQgwAJg6ABIgTAAQgvAAgygEgAR5BlQANAAAPgEQgEg0AAg1QAAgqgFgnIgFgWIgRABIgaABIgXABIABATIACAqQACAiAFAnQAEAnAKAkIAQAAIAMAAgApnDKQgVghgJggQgLghgEglQgDglAAgwQgBglADgiIADgXQAFgtAbgrQAzgEA3gCQA4gCAxAEQAXAeAJAhQAIAaACAaIAAASQABAjgBAgQgCAygGAxQgDAygLAzQgvAJg7ABIgSAAQgwAAgwgEgAn+BlQANAAAPgEQgFg0AAg1QAAgqgFgnIgDgWIgTABIgaABIgWABIABATIACAqQACAiAEAnQAFAnAJAkIAQAAIANAAgAOEDOIg2AAIgygBQgBgvABg2QAAg3gEgzQgEgsAAgrIAAgMIABhiQALgCAegBIA9ABIAwABQACAygBAzIAAAKQgDAuACAuQACAkAAAhIgCBCQgBAhAAAjIgmAAgEAhJAApIgFg2IAPgLIAWgPIADgCIAUgLQAGgJADgRQADgPAAgbIgVACIgYADIgBAaIAAAEQgBANgFANIgvABQgeABgagDIgBgdQgCgcABgXQACgiAKgXQAogEAugBQAwgCAtACQAwABAnAGQALAQADATQADAUgBAVIgCAnQgCASgPAOQgNAQgSANQgQAPgMAOIgIArIgFAaIgBATIg2gBIgaABIgYABQgHgggBgag");
	this.shape.setTransform(253.1625,279.3375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("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");
	this.shape_1.setTransform(254.5447,155.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(254.4167,204);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,509.1,311.2), null);


(lib.fly = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#003B00").s().p("AiBInQgzgLgZggQgbgkAHhLQAFg/AVgnQANgZATgRQAWgSAYgGQhJhwgfhOQgthxAKhiQARijCsioQAYgXATgMQAagQAXABQAmAAAuArQBOBJAnBTQA9CGgfC0QgNBGgdBSQgWA8gmBZQAsAwALA5QAFAegFAdQgGAfgRAYQghAthFARQgaAGgiADQgSABgqABIgmABQggAAgTgDgABBDOQBkicARi2QAGg9gLgnQgNgugzg+QgggogYgUQgUgPgNgBQgRgBgXAUQhBA1gvBGQhGBlATBSQAEAUANAaIAWAsIAXA0QANAeAQASQANAQAgAcQAaAbAEAbIAWgCQAdAAAbALg");
	this.shape.setTransform(26.2667,55.4272);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003B00").s().p("AgyGkQgsgBglgVQgngWgRglIgHgSQgFgKgFgFQgHgGgMgEIgVgEQhkgShfhRQhFg8gXg9QgUg1AJg+QAIg4Acg5QAkhJAzgjQA0gkBAADQBLADBQA/QBbBHAdBZQAGASAMA3QAKAvALAaQgJiCAsh3QAvh+BghMQA/gxA1AGQAzAGApAyQAPATAQAbIAaAxIAiA5QAUAjALAYQAgBFgGA7QgKBUhgBSQhZBMhuAqQgGArgqAiQgbAWg3AXQguATghAJQgmAKgjAAIgIAAgAlMihQgLADgMAGIgWANIgYAPQgNAIgIAJQgIAJgHAOIgMAZIgKAWQgGANAAALQgBANAIAOQAHANANAHQAkAjAUAQQAgAbAeAPQAtAXBFAMQALgkAIgPQAPgcAXgMQAPgHATAAQARAAAQAHQgFgygIgWQgPgqg1gyQgzgtg/gSQgVgHgRAAQgJAAgIACgAEXkZQgUAFgUAOQgLAIgWAVQgTARgLAJQg2A3gVBUQgSBGAIBfQAPABAbAUQAbASAQABQAJAAANgDQAhgJAsgWQCChCA8hVQgjhQhGhsQgVghgSgIQgLgGgOAAQgIAAgJACg");
	this.shape_1.setTransform(26.5259,75.1206);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003B00").s().p("AhJGWQgogXgZhAQgVg1gBgwQgBg5AcgmQhMhkgZh/QgZiAAih5QAMgqAVgOQAPgLAXAAQAPAAAaAGQBJAPAmAOQA6AVAkAjQAHgaAbgNQAcgMAYANQAeAPAPAyQAqCBgkCdIgPA+QgHAkABAbQAAALAKA/QAHAtgHAcQgLAngwAsQhHBAhDAOQgTAEgQAAQghAAgagPgAgvBEQA/gSBCgCIABhlQgBg4gGgtQgDgagHgOQgMgUgfgRQhOgshpgHQgFBZAEAnQACAcAHAWQAKAhAmA4IgEgFgACTjZQAMBBADBLQAFg5gCgxQgBgmgNgRQgHAFADAQg");
	this.shape_2.setTransform(24.4187,77.4807);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003B00").s().p("ABsHlQhIgIgkgdQg+gyABh1QhmgPhHgdQhbglg1g+QgpgwgTg/QgSg+AJg/QANhhBKhYQAxg4AzgUQAugQAzALQAyALAlAiQA6AsAvBPQAdAwAtBkQgShEABhAQABhHAXg7QAZhAAyguQA0gxA/gNQA5gMAgAYQAcAVANA2QA2DRhUD/QgUA9gYAwQgNAZgEANQgGAQgFAtQgIBHgWArQgdA9g0AXQgdAMgrAAQgRAAgUgCgAjvjkQgcAMgbAaQgTATgfAmQgcAsABAjQAAAiAZAgQASAYAkAZQBbA/BwAQIBRAGQAUACAKgDQALgDATgOQASgPALgDQgYgkgjhNQgjhPgYgkIAFAGQgkg3g3gpIAHAGQgZgTgggIQgQgEgPAAQgSAAgRAFgAFUldQg+AEgyAoQgzAqgKA6QgFAdAJA5QASB5AeBSQAlAFAaAZQAQgXANggQAHgTANgoQAZhSAHgmQAUhrgXhrQgCgJgDgDQgEgEgHAAIgEABg");
	this.shape_3.setTransform(13.1685,75.738);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003B00").s().p("AhlGpQgigVgVgmQgTglgBgqQgChPA4hHQhHiEgLh4QgHhFAMhAQANhFAgg4QATgjAXgSQAfgXAhAGQAwAKAdBSQA9CfARCBIAIBXIAGAyQAeACAVAUQAcAbAFA/QAJBbgeA4QgSAjgiAYQgiAYgoAIIgDABQgfARgjADIgQAAQgpAAghgUgAhYkkQgiAlgFBKQgBAfADAXQACAOAIAfQAOA2AOAcQAQAiAtA9QAGAHAEACQAEAAAHgCIAugOQgEiog7igQgFgHgDgMIgEgUQgEgLgGgHQgIgJgJgBIgBAAQgMAAgOAPg");
	this.shape_4.setTransform(24.4059,76.6245);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003B00").s().p("AAOF2QghgLgZgZQgYgZgLgkQgKgiAFgjQg3AEgegCQgvgFgfgVQgZgRgVggQgKgQgXgtIgwhSQgfg0gQghQgxhnAHhSQAFg4AggQQASgJAjAEQBSAIAsAMQBfAZBMBDQBMBCAkBbQANhYAwhHQAzhLBMgfQAlgPBQgMQAmgFAQAGQAjALATAxQAaBDgQBHQgIAggTAnIgkBEIgkBCQgWAlgYAXIgjAfQgUATgIARQgFAKgDAPIgFAaQgMA5gpAyQguA4g3AMQgNACgNAAQgWAAgWgHgAlOiDQApBFAwBVQAJAQAGAIQAKAMALAGQANAGAbAAIBvAAQARgfAcgWQgZgvgMgUQgXgmgZgYQglglg5gaQhagphdgBQAJAgAgA1gAFLjtIgwAIQg5AKggAbQgPANgRAXIgcAmQgNAQgEAaQgDAQAAAeQApABAVAHQAjANALAaQAlggARgTQAcgfAPgdIAlhKQATghAGgPQAJgVgLgIQgSAEgeAEg");
	this.shape_5.setTransform(17.8285,86.9884);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003B00").s().p("AgOG+QgpgDgSgSQgIgIgHgOIgLgZQgFgKgOgYQgNgVgGgNQgQgnAKgsQALgsAggcQgZg+gRhbIgcidQgOhJgDgaQgGg4AKgrQAOg4AkgXQAZgPAgACQAeABAaAQQArAbAgA/QAvBeAFCQQACArgBBPQgBBUABAnQAiAOAWAiQAVAgAEAnQAGAzgaAvQgaAwguAVQgiAQg1AAIgYgBgAhCgeQAOA/ASAyQANAZAHAaIApACQAJiegPihQgMgkgIgTQgOgigWgSQgPgLgSgFQgSgEgSADQgKAPAGAhIAOA4QAHAggBAYIABgGQANBTAIAog");
	this.shape_6.setTransform(22.9863,76.9308);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003B00").s().p("AhVGxQgegLgYgZQgWgYgLggQgKgeADgiQADghAPgeQg+hLgbgpQgthEgRg9QgXhOAJh9QAFg5ALglQAPgyAfgeQAegeAkgCQAagBAlARQA2AZArApQAqApAbA1QAdgjAugOQAugNArAPQAvAPAiAuQAfApANA2QAKAsgBA8IgGBnQgFBIgHAgQgMA5geAjQgZAZgMANIgSAaQgMASgHAIQgSAXgeASQgVANgkAQQgzAWgkAHQgUAEgSAAQgbAAgXgIgABnivQgKADgDAEQgCADgBALQgCB/AKCEQAqABAWAHQAkAMANAcQAZgSAHgnQADgQAAgyQAAgtAHgiIADgUQABgMgCgJQgCgJgHgMIgMgUIgHgQQgFgJgFgGQgNgMgigDIgfgCQgVAAgMAEgAjGkwQgFACgKAIIgNAMQgIAHgEAGQgJANgBAVIABAlQAAATgCAoQgBAjAIAWQAFAPAMARIAUAeQAQAWAdAwQAbApAcAUQAZAUAdAQQAdgcAmgJQgDhYgEgtQgHhKgPg6IAEAQIgTgmQgagugpggQgqgggvgPQgHgCgFAAIgCAAg");
	this.shape_7.setTransform(22.8226,73.0183);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003B00").s().p("ABYFnQgdgGgYgRQgZgSgPgZQgfgDgdgPQgcgQgVgYQhhhPgwiSQgriDARh7QALhNApgZQAUgMApgDQA/gEAvAQQA/AWBABCQBFBHAmBWQAkBSAABRIAAAAQApARAWAmQAWAogDAxQgCAjgQAOQgFAFgGACQgSAzgqAcQgYAQgeAGQgNADgOAAQgQAAgQgEgAjEhRQAOA9AiA1QAlA7A2AqQAYASAdADQAGgWASgRQASgRAWgGIAIgCIAFgFQAagXAegJQgGhHgwhEQgsg+hQg5QgdgUgwAAIgoACQgbADgOgBQgQBHAbBEg");
	this.shape_8.setTransform(11.107,82.0696);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003B00").s().p("AgOFzQghgIgbgTQgcgUgTgcQgKgRgHgGQgGgFgZgJQgygTgpgzQgegngdhAQgmhUgNhCQgQhUAShGQAMgsAZgSQAWgQAtAAQBeAABKAsQAnAXAcAhQAdAjANApQAahRA7hBQA8hBBOghQArgSAYAMQAWAKAOAhQArBfgDB9QgDBxglBTQguBmhVAvIgRAKQgJAGgEAHQgDAFgCAJIgEAOQgKAngtAZQgdARgiAEQgNACgNAAQgUAAgTgFgAkohjQAEATAPAjIAYA3QAOAgAPAWQARAaASAPQAOAKAVAJIAmAPQAHgbAXgTQAXgSAcgBQAIgngJgnQgJgmgWgeQgMgZgngYQgegRgVgHQgZgIglgCIg/gBQgJAZAHAggAB5iAQgYAegGAVQgEAMgBAlIAAA8QADAjALAYQAIASAVAZQAogSATgMQAggTAUgWQAQgSAMgYQAPgbAJglQAKgtgBgwQgDg6gVgsQhSAUhKBag");
	this.shape_9.setTransform(23.0991,90.2312);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003B00").s().p("AgPGUQglgGgVgTQgZgXgJguQgIglADgnIABggQgBgLgNgeQgphkgMhyQgKhtAQhyQAPheAwgZQAcgPAkAHQAmAGAhAaQAfAYAUAkQAjA+ACBbQABAhgEAvIgFBOQgDAzALAaQAFAKAIANIAPAVQAiAzAFA7QAHBGgiAtQgcAkg0APQgdAJgdAAQgQAAgPgCgAhXkIQgIAGgCARQgHAsABA7QABBpAYBGQAMApAVAmQAkgWAngEQgGgdADgrQAGgvABgZIAAgsIgBgtQABgmgEgQQgJgegagUQgagSghgDIgHAAQgKAAgGAEg");
	this.shape_10.setTransform(22.6549,80.5302);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).wait(2));

	// Ebene_2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,59,0,0.047)").s().p("AsZMbIAA41IYzAAIAAY1g");
	this.shape_11.setTransform(25.6,83.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,59,0,0.008)").s().p("AsZMbIAA41IYzAAIAAY1g");
	this.shape_12.setTransform(25.6,83.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},2).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.8,0,158.89999999999998,163.1);


(lib.button_what = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,"hover":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// hidden
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,0,0.008)").s().p("Aa6KDIuCAAQ49gBqWgDQmzgCgfgDQgUhSgJhuQgLhqgEh1QgEhygChpQgCihAMifQALihAIiaQBagLBdAGIEwAAMAjTAABIOCAAQBUAIBQABQAdBSAPBlQAOBkAEBoQAEBpAABcQACCdgGCkQgIChgZCuQhZAhheAAIgKAAg");
	this.shape.setTransform(194.7435,65.1333);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,0,0,0.008)").s().p("AfyL3IwlAAQ9egBsNgEQoDgCgkgEQgXhhgLiBQgNh9gFiKQgFiHgCh9QgDi9APi9QANi9AJi2QBrgNBuAHIFnAAMAprAABIQlAAQBjAJBeACQAiBgASB4QAQB2AFB6QAFB9AABtQACC5gHDBQgJC/geDNQhpAnhvAAIgLAAg");
	this.shape_1.setTransform(196.7375,64.2667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Ebene_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AndGdIgEkZQgBiNgDiIQgEiKgJh9QAVAEAfgBIA9AAQAbAAALAFIAFCQIAiABIAeAAQAEgTABgjIAGhoIBOAEQAlACAvAHQACDJgCDHQgFDHAIDJQgVAEgeAAIg+AAQgfgCgZACIABjKQAAhkgOhlIglgCIgFByIgCBfIAABfIABBvQglgBgmABIgfAAQgXAAgVgBgAGvBVQgBikgGifIgUAAIgIgBIgOgBIgnAAIgBg3QgCgdACgbQAAgcAEgUQA1gEAoAAIBOgBQAlABApgBQArAAA5gDQAAAjAEAvQACAtgBA9QglABgWAEQgXAFgSACQACCfAECaQAFCcAACRIhRACIhjABIAAlFgAAIGZQggABgegBQANjTATjIQASjJAXjDIBLgDIBWgBIBLADQATCJAUCEQAUCCASCEQAUCEAPCJIg3ABIhCAAQghACgbgCQgJgYgIg7QgIg6gShsIgmgGQgJAkgFAwIgHBgQgDAwgFAjQghgCgjABgAB9iXQgEAwgBAjQgBAigEAOQALAEASABQASABAMgFIgKhKIgLhGQgGgkgMguQgHAwgDAugANeGWQgcgEgPgDQAAgfgDghIgGhHQAWgIAfgEQAfgFAiABQAgACAaAFIACAtQADAbgBAbQAAAbgGASQgZAIgiACQghAAgegDgAr2GYQgKg+gKgyIgRhhQgHgwgGg6QgMBMgIBNQgJBPgNBTQgcgDghACQggACgZgCIgMhbIgKhVIgMhgIgRh+IgZjKQgOhqgWhlQAjgFArgDQAsgCApABQALA1AKBNQAKBOAKBZQACgNAEglIAIhWQAEgvAFgqQADgpAEgTQAPgFAZABIAtADQAGAVAFApIALBcQAFAzAHAvQAHAuAIAfQAJgoAEgxIAJhhIAHhYQADgnAFgWQAgAEAlgCQAkgBAfAGQgVCBgQCIQgRCHgNCIIgbEFQgeAAgfAFQgZADgaAAIgNAAgAM8BPIgGhrQADgHAQgQIAfghIAYgXQAIgTADggQAEggAAg0QgIADgRACQgRACgOAEIgBA7QgBAagGAZIg7ACQglACgggGQgFhbADhDQAChEAMgvQAxgHA6gCQA7gDA5ADQA6ACAxAMQANAgAEAnQADAngBApIgCBOQgDAigRAeQgRAegWAcQgVAdgOAdIgKBVIgGA0IgCAnQgggCgjAAQghAAgcADQgJg/gBg1g");
	this.shape_2.setTransform(189.5611,63.59);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006600").s().p("Ao7HuIgFlQQgBipgEijQgEilgLiWQAZAFAlgBIBJAAQAhAAAMAGIAGCsIAqACIAjAAQAFgXABgqIAHh9IBeAFQAsADA4AIQADDwgDDvQgGDuAKDxQgaAEgjAAIhKAAQglgCgeACIABjyQAAh3gRh5IgsgCIgGCIIgDByIAAByIACCEQgsgBguABIgkABQgcAAgagCgAIEBmQgBjFgIi/IgXAAIgJgBIgRgBIgwAAIgBhCQgCgjACggQAAghAGgYQA/gFAwAAIBdgBQAsABAygBQAzAABEgDQAAAqAFA3QADA3gCBJQgsABgbAFQgbAFgVADQACC+AFC4QAFC7AACuIhhACIh2ABIAAmEgAAKHpQgnABgkgBQAQj8AXjvQAVjyAcjpIBZgDIBngBQAzABAnACQAXCkAYCeQAYCcAWCeQAYCeARCkIhCABIhOAAQgoACgggCQgLgdgKhHQgJhFgWiBIgtgHQgLArgGA5IgIB0QgEA4gGAqQgogCgpABgACWi1QgFA5gBArQgCAogEAQQANAFAVABQAWACAOgGIgLhYIgNhUQgIgsgOg2QgIA4gEA4gAQIHmQgigFgRgDQAAglgEgoIgHhVQAagKAmgFQAlgFAoABQAmACAgAGIACA2QADAhgBAfQAAAhgHAWQgeAJgoACQgoAAgkgDgAuMHoQgLhKgNg8IgUh0QgIg5gIhGQgOBbgKBdQgKBegPBjQgigEgnADQgnACgegCIgOhtIgMhmIgPhzIgUiXQgOhzgQh+QgRiAgah4QAqgGAzgEQA1gCAyABQANA/ALBdQANBdALBqQADgPAEgsIAKhnQAFg5AGgyQAEgxAEgWQASgGAeABIA2ADQAHAaAGAxIANBuQAGA9AIA4QAJA3AKAlQAKgwAFg6IALh0IAIhqQAEgvAGgaQAnAFAsgCQArgCAlAIQgaCZgSCkQgVCigPCiIghE5QgjAAgmAFQgdAEgeAAIgSAAgAPfBeIgHiAQAEgIATgUIAlgnIAcgcQAKgWAEgmQAFgnAAg+QgKADgUADQgUACgRAFQgCAlAAAhQgBAggHAeIhGACQgsACgngGQgGhtADhQQADhSAPg4QA6gJBGgCQBGgEBEAEQBGACA7AOQAPAnAEAuQAFAwgCAwIgDBeQgDApgVAkQgUAkgaAhQgZAigRAjIgMBmIgHA/IgDAuQgmgDgpAAQgoAAghAEQgMhLgBhAg");
	this.shape_3.setTransform(188.4188,63.4731);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

	// Ebene_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006600").s().p("Aa6KDUg3OgABgBZgAIQgUhSgJhuQgLhqgEh1QgEhygChpQgCihAMifQALihAIiaQBagLBdAGMA2FAABQBUAIBQABQAdBSAPBlQANBkAFBoQAEBpAABcQACCdgHCkQgHChgZCuQhZAhheAAIgKAAg");
	this.shape_4.setTransform(195.2425,64.3333);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s().p("EAgOAMCUhCHgABgBrgALQgYhigLiDQgNh/gFiMQgFiIgCh/QgDjAAPi/QANjAAJi4QBtgNBvAGMBAwAACQBkAJBgACQAiBhASB5QAQB4AGB8QAFB/AABuQACC7gIDFQgIDBgfDQQhrAohwAAIgLAAg");
	this.shape_5.setTransform(195.2193,64.3667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-12.6,467.5,154);


(lib.button_play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,"hover":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Ebene_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,0,0.008)").s().p("Aa6KDIuCAAQ49gBqWgDQmzgCgfgDQgUhSgJhuQgLhqgEh1QgEhygChpQgCihAMifQALihAIiaQBagLBdAGIEwAAMAjTAABIOCAAQBUAIBQABQAdBSAPBlQAOBkAEBoQAEBpAABcQACCdgGCkQgIChgZCuQhZAhheAAIgKAAg");
	this.shape.setTransform(195.2435,64.3333);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,0,0,0.008)").s().p("AfyL3IwlAAQ9egBsNgEQoDgCgkgEQgXhhgLiBQgNh9gFiKQgFiHgCh9QgDi9APi9QANi9AJi2QBrgNBuAHIFnAAMAprAABIQlAAQBjAJBeACQAiBgASB4QAQB2AFB6QAFB9AABtQACC5gHDBQgJC/geDNQhpAnhvAAIgLAAg");
	this.shape_1.setTransform(195.2375,64.3667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Ebene_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ALnF/QADgigEghQgCgjgGgbQATgDAjgBIBJgBQAmAAAdgDQACAZACAiQADAjAAAiQgzAGgzADIgwACIgqgCgAkjFzIhlAAIhxgBQgBh3gFh/QgFh/gCiAQgCiBAFh6QAsABAygCQAygCAxADIgHC6QgFBhgCBgQgEBfADBbIA4gEQAggCAkAAIACBmQABAwgFAwQgegEguAAgAGNF1IhHgEQABhbADhYQAEhXAAhcQgehjghhdQgghdgnhiQApgGApgCIBUgDQAYAvAPAtQAPAsANAyQAPggAOgsQAOgsAag4QATgCAigBQAhgCAhAAQAgAAANADQgrBXgcBPQgdBPgaBXQACBCgBBJIgDCRQgBBIAEA5QgUAEgoAAIhUgBgAtbF0QgtAAgigFIgGj5QgEh/ABh+QAAh/AKhvIBtAAIBsgCQA+AHAhAZQAhAaAPAiQAABcgEBcQgFBbgOBTIgfA1QgPAagaAKIgwABIg6ADQgDAjAAAeQgBAeABAfIAABGQgdAJgkAAIgNgBgAshidQAFAtADAwQAEAwABAlIA3gBQAHgegEguQgCgvgGgwIgJhSIg9AAIAHBMgAh8FzQgjABgfgBQAOjCAUi5QASi6AZizIBPgDIBZgBIBPADQAUB+AVB6QAVB5ATB4QAVB7APB/Ig5ABIhFAAQgjABgdgBQgIgXgJg3QgJg1gThkIgngFQgIAhgFAsIgIBZQgEAsgFAgQgjgCgkABgAgBiRQgEAsgBAgQgCAggDAMQALAEASABQASABANgFIgKhEIgLhBQgHghgMgqQgIAsgCArgANZDCIg2gBIgiAAQgKhwgQiNQgSiPgMitQAmACAsAAIBUAAQAngCAeAAIgWDbQgIBigFBTQgHBVgIBWIgpgBg");
	this.shape_2.setTransform(194.4795,64.1725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006600").s().p("Aa6KDIuCAAQ49gBqWgDQmzgCgfgDQgUhSgJhuQgLhqgEh1QgEhygChpQgCihAMifQALihAIiaQBagLBdAGIEwAAMAjTAABIOCAAQBUAIBQABQAdBSAPBlQAOBkAEBoQAEBpAABcQACCdgGCkQgIChgZCuQhZAhheAAIgKAAgANWD4IhKABQgjABgTADQAHAbABAiQAEAigCAiQAnACAygCQA0gDAygGQAAgjgDgiQgBgigDgZQgcADgmAAgAoOiEQADCAAFB/QAFB+ABB4IBwABIBlAAQAvAAAdAEQAFgwgBgxIgBhmQgkAAghADIg4AEQgChbADhfQADhhAFhgIAGi6QgxgDgyACQgyABgrAAQgFB6ABCBgAETl+QgpACgqAGQAnBiAhBeQAgBdAeBjQAABbgEBXQgCBYgBBcIBHAEIBTABQAoAAAUgEQgDg5ABhIIACiRQAChKgDhCQAahWAdhQQAdhPAqhXQgMgDghAAQggAAgiACQgiABgSACQgbA4gNAsQgOAsgPAhQgOgzgPgsQgPgtgYguIhTACgAu6iIQgCB+AEB/IAGD4QAiAGAtAAQAsACAjgLIAAhGQgBgeABgfQAAgdACgkIA7gCIAvgBQAbgLAPgaIAfg0QAOhTAFhcQADhcAAhbQgPgjgggZQgigZg9gIIhtACIhsAAQgKBwAAB/gAg8FzQAFghAEgsIAHhYQAFgsAJgiIAnAGQATBjAIA2QAJA2AJAXQAcABAjgBIBFAAIA6gBQgPh/gWh6QgSh4gWh6QgVh6gUh+IhOgDIhZABIhPADQgZC0gTC6QgUC4gODDQAgABAjgBIAXgBIAwACgALgg+QAQCOAJBvIAiAAIA3ABIAoABQAJhWAGhUQAGhUAIhhIAWjbQgeAAgoACIhUAAQgrAAgmgCQAMCtASCOgAshhCQgCgvgFgtIgIhNIA9AAIAJBTQAGAvADAvQAEAvgIAdIg3ABQgBglgEgwgAAKgWQgSgBgLgDQAEgNABgfQABghAEgsQAEgrAGgsQANAqAGAiIALBBIAKBEQgKADgOAAIgHAAg");
	this.shape_3.setTransform(195.2434,64.3333);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#36803A").s().p("ANuHFQADgpgFgnQgCgpgHggQAWgDApgBQAqgCAtAAQAtAAAigDQADAdABAoQAEApAAApQg8AHg9AEIg4ABQgaAAgXgBgAlYG2Ih3AAIiFgBQgBiNgGiVQgGiWgDiYQgCiYAGiQQAzABA8gCQA7gCA5ADIgHDcQgGBygDByQgEBwADBrQAagBAogDQAmgDArAAIABB4QACA5gGA5QgjgFg3AAgAHVG5IhUgFIAEjUQAFhnAAhsQgjh1gnhuQgmhuguh0QAxgHAwgCIBjgDQAcA3ASA1QASA0AQA8QARgnARg0QAQg0AfhCQAWgCAogBQAogDAmAAQAmAAAPAEQgyBmgiBeQgiBegfBmQADBOgBBXIgDCrQgCBVAFBDQgYAFgvAAIhjgBgAv3G4Qg1AAgogHIgHklQgFiWACiVQAAiWAMiEICAAAICAgCQBJAJAnAdQAnAeARApQAABsgEBtQgGBsgQBiIglA+QgSAfgfAMQgdAAgbABIhFADQgDAqAAAjQgBAkABAkIAABTQgkAKgqAAIgPAAgAuyi5QAGA1ADA4QAFA5ABAsIBBgCQAJgjgFg3QgDg3gHg4IgKhiIhIAAIAIBbgAiSG2QgqACglgCQARjlAXjaQAWjcAejUQAogCA1gBQA0gCA1AAIBdAEQAYCVAYCQQAaCPAWCOQAZCRASCWIhEABIhSAAQgpABgigBQgKgbgKhBQgKg/gXh1IgugHQgKAogGA0IgJBoQgEA0gGAnQgqgDgqABgAgCisQgEA0gBAnQgCAlgEAPQANAEAVABQAWABAPgFIgMhQIgNhNQgIgogPgxQgIA0gEAygAP0DlIhAgBIgoAAQgLiEgTinQgWipgOjMQAtADA0AAIBjAAQAugDAkAAIgaEDQgKBzgGBjQgIBjgKBmIgwgBg");
	this.shape_4.setTransform(194.3442,64.1886);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s().p("AfyL3IwlAAQ9egBsNgEQoDgCgkgEQgXhhgLiBQgNh9gFiKQgFiHgCh9QgDi9APi9QANi9AJi2QBrgNBuAHIFnAAMAprAABIQlAAQBjAJBeACQAiBgASB4QAQB2AFB6QAFB9AABtQACC5gHDBQgJC/geDNQhpAnhvAAIgLAAgAPwEkQgtAAgqACQgpABgWADQAHAgACApQAFAngDApQAuADA7gDQA9gEA8gHQAAgpgEgpQgBgogDgdQgiADgtAAgAptidQADCYAGCWQAGCVABCNICFABIB3AAQA3AAAjAFQAGg5gCg5IgBh4QgrAAgmADQgoADgaABQgDhrAEhwQADhyAGhyIAHjcQg5gDg7ACQg8ACgzgBQgGCQACCYgAFEnDQgwACgxAHQAuB0AmBuQAnBuAjB1QAABsgFBnIgEDUIBUAFIBjABQAvAAAYgFQgFhDAChVIADirQABhXgDhOQAfhmAiheQAiheAyhmQgPgEgmAAQgmAAgoADQgoABgWACQgfBCgQA0QgRA0gRAnQgQg8gSg0QgSg1gcg3IhjADgAxnihQgCCVAFCWIAHElQAoAHA1AAQA0ACApgMIAAhTQgBgkABgkQAAgjADgqIBFgDQAbgBAdAAQAfgMASgfIAlg+QAQhiAGhsQAEhtAAhsQgRgpgngeQgngdhJgJIiAACIiAAAQgMCEAACWgAhHG2QAGgnAEg0IAJhoQAGg0AKgoIAuAHQAXB1AKA/QAKBBAKAbQAiABApgBIBSAAIBEgBQgSiWgZiRQgWiOgaiPQgYiQgYiVIhdgEQg1AAg0ACQg1ABgoACQgeDUgWDcQgXDagRDlQAlACAqgCIAYAAQAeAAAeACgANlhJQATCnALCEIAoAAIBAABIAwABQAKhmAIhjQAGhjAKhzIAakDQgkAAguADIhjAAQg0AAgtgDQAODMAWCpgAuyhOQgDg4gGg1IgIhbIBIAAIAKBiQAHA4ADA3QAFA3gJAjIhBACQgBgsgFg5gAAMgaQgVgBgNgEQAEgPACglQABgnAEg0QAFgyAHg0QAPAxAIAoIANBNIAMBQQgMAEgQAAIgJAAg");
	this.shape_5.setTransform(195.2375,64.3667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.3,-11.5,461.1,151.8);


(lib.button_option = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,"hover":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// hidden
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,0,0.008)").s().p("Aa6KDUg3OgABgBZgAIQgUhSgJhuQgLhqgEh1QgEhygChpQgCihAMifQALihAIiaQBagLBdAGMA2FAABQBUAIBQABQAdBSAPBlQANBkAFBoQAEBpAABcQACCdgHCkQgHChgZCuQhZAhheAAIgKAAg");
	this.shape.setTransform(195.2425,64.3333);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,0,0,0.008)").s().p("AfyL3IwlAAQ9egBsNgEQoDgCgkgEQgXhhgLiBQgNh9gFiKQgFiHgCh9QgDi9APi9QANi9AJi2QBrgNBuAHIFnAAMAprAABIQlAAQBjAJBeACQAiBgASB4QAQB2AFB6QAFB9AABtQACC5gHDBQgJC/geDNQhpAnhvAAIgLAAg");
	this.shape_1.setTransform(196.0375,64.2667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Ebene_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjJGOQAGiLgDiGIgKkFQgEiAAHiCQAegCAmAEQAjAEAmgBIABEJIgBEIIgCD9QgXACgcgBIgyAAQgXAAgIAEgAAWGGQgOgzgGhCQgHhCgDhJIgDiGQgChjAIhjQAHhjAFheQA/gHBBAEQBAAFA9ABQAUAzAKA+QAJA9AEBBQADBAAAA5QABBggFBkQgFBlgRBqQg+AVhCAAQhBgBhBgFgAB0jEQgPAEAAAIQABA3gBAoQgBApABAjQABAkAEAsQAEAtAKBAIA9gKQAFhZgEhhQgFhggQhXQgeACgPAFgAx8GGQgOgzgGhCQgIhCgDhJIgDiGQgChjAIhjQAIhjAFheQA/gHBBAEQBAAFA9ABQAUAzAKA+QAJA9AEBBQADBAAAA5QABBggFBkQgEBlgSBqQg+AVhCAAQhBgBhBgFgAwejEQgPAEAAAIQABA3gBAoQgBApABAjQABAkAEAsQAEAtAKBAIA9gKQAFhZgEhhQgFhggQhXQgeACgPAFgAGWGLIgmgDQgDjYgEjFIgElrQAcgCAXABQAZACAZgBQAOBOAQBgQAQBjAeBuQADgYACgvQACgvAAg5IgBhyQgBg4gDgsIA+ABQAeAAAdAIQgFBVgBBiIgBDLIADDLIABC3IgzgEIgeAAIgZABQgSgqgTg9QgUg9gTg9QgCAhABAqIADBTQACAogBAfQghAEgVAAIgPgBgArsGKQghAAgagGIgEkDQgDiFABiEQAAiFAHh0IBSAAIBSgCQAuAIAZAaQAYAbAMAjQAABggDBgQgEBggKBXIgYA3QgLAagUALIgjABIgtAEIgBBDQgBAgABAgIAABJQgXAJgbAAIgKAAgAq/ieQADAuACAyQADAyABAnIApgBQAGgfgDgxQgCgxgEgyIgHhVIguAAIAGBQgAnIBRQgBifgFiZIgQAAIgGgBIgLgCIgfAAIgBg0QgBgcABgaQAAgbAEgTQApgEAgAAIA9gBQAdABAhgBQAiAAAtgDQAAAiADAtQACArgBA8QgdABgSADIggAGIAFEvQADCXAACLIhAACIhNABIAAk5gAMrGGQgXgDgLgDQAAgegDggIgEhEQASgIAYgFQAYgDAbABQAZAAAVAGIACArQABAagBAaQAAAagEASQgUAHgaACQgbAAgXgDgAQSGGQACgjgDgjQgBgkgFgcQAOgCAYgBIAzgCQAaAAAUgDIADA9QABAkAAAkQgiAGgkADIghACQgQAAgNgCgARhDCIgmgBIgXAAQgHh0gLiTQgMiUgJizQAbACAeAAIA6AAQAbgCAVAAIgPDkIgKC7IgKCwIgcAAgAMQBLIgFhnQADgHAMgQQALgQAOgQIASgWQAHgRADggQADgeAAgzIgUAFQgNABgMAEIgBA6QgBAYgEAZIguADQgdAAgagFQgDhXABhCQAChBAKgtQAmgHAugCQAugDAtADQAuACAnALQAKAfADAmQADAmgBAmIgCBNQgCAggOAdQgNAdgRAbQgRAcgLAcIgIBRIgEA0IgCAkQgagBgbAAQgaAAgWACQgHg8gBgzg");
	this.shape_2.setTransform(193.181,64.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#330000").s().p("Af4L6UhBagABgBqgAKQgYhigLiBQgNh+gFiLQgEiHgCh9QgDi+AOi9QANi+AKi2QBrgNBuAGMBAEAACQBkAJBeACQAiBgASB4QAQB2AGB7QAFB9AABtQABC6gHDCQgJDAgeDNQhpAohwAAIgLAAgAkLnOQgJCaAFCZIAME1QAECegIClIAEAAQAKgFAaAAIA8AAQAhABAcgCIABksIACk5QAAifgCibQgsACgqgFQgfgDgbAAIgWAAgAgPnKQgGBwgJB1QgKB1ACB0QABBNADBUQAEBVAJBOQAHBPAQA8QBNAGBMACQBPAABJgZQAVh/AGh2QAFh3gBhyQAAhDgDhNQgFhMgLhJQgMhJgYg8QhIgChMgGQgagBgbAAQgxAAgwAFgA16nKQgGBwgJB1QgKB1ACB0IAEChQAEBVAJBOQAHBPARA8QBNAGBNACQBNAABKgZQAVh/AGh2QAFh3gBhyQAAhDgDhNQgFhMgLhJQgMhJgXg8QhJgChLgGQgbgBgaAAQgyAAgxAFgAGOnCIAGGuQAEDqADEAIAuADQAbADA2gGQABglgCgvIgDhjQgBgyACgnQAWBJAYBIQAXBIAVAyIAegBIAjAAIA9AFIgBjaIgEjwQAAh6ABh2QABh1AGhkQgjgKgjAAIhKgBQAEA0ABBDIABCGQAABFgCA3QgCA4gDAbQgliBgSh1QgThzgRhcQgeABgdgCIgWAAIgnABgAvcibQgBCbADCeIAGEzQAeAHAoAAQAnADAfgOIAAhWQgBglABgmIAChRIA1gDQAUgCAWAAQAXgNANggIAchAQANhoAEhxQADhxAAhyQgNgqgdggQgegfg2gJIhhACIhhAAQgJCKAACegAotnJQgmAAgxAFQgFAWAAAgQgBAfABAhIACA/IAkAAIANABIAHABIATAAQAGC2ABC8IAAFzQA3AAAlgBIBMgCQAAimgFizQgDiwgCi1QAQgDAVgFQAWgEAigCQABhFgCg0QgEg1AAgpQg1AEgoAAQgnABgigBIhIABgAOpEjQgcAFgVAKIAFBRQADAmAAAjQANAEAcADQAbAEAfAAQAggCAXgJQAFgVAAgfQABgfgBgeIgDg0QgYgGgegBIgMAAQgZAAgYADgAUbEvQggAAgdACQgcABgQADQAGAhABAqQADAqgCApQAgAEApgEQArgDApgHQAAgrgCgrQgBgogDgfQgXADgfAAgAS6hOQANCvAICIIAcAAIAsACIAiABIAMjRIALjfIASkNQgYAAghACIhFAAQgjAAgggCQALDVAOCugAPTixQgEAlgIAVIgVAaQgQATgNATQgPATgDAIIAFB6QABA8AJBIQAagDAfAAQAgAAAeACIADgsIAFg8IAJhhQANghAUghQAUggAQgjQARghABgnIADhaQABgvgEgtQgCgsgNglQgugNg2gCQg1gEg3AEQg2ACguAIQgLA2gDBNQgBBNAEBpQAeAGAigCIA3gCQAFgeABgdIAChEQANgEAQgDQAPgCAIgDQAAA8gDAkgABlBVQgEg0gBgrQgCgqACgwQABgvgBhCQAAgJARgGQASgEAkgEQATBnAFBzQAFBzgGBqIhIALQgMhNgFg0gA0FBVQgEg0gCgrQgBgqABgwQACgvgChCQAAgJASgGQASgEAjgEQATBnAGBzQAFBzgGBqIhIALQgNhNgEg0gAtThEQgCg7gFg4IgHheIA3AAIAIBmQAFA6ADA6QADA6gHAlIgxABQgBgugDg7g");
	this.shape_3.setTransform(195.2868,64.5667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006600").s().p("AjuHXQAHikgEieIgLk1QgFiZAIiaQAkgCAsAEQAqAFAtgBQABCbAACeIgBE5IgCEtQgcACgggBIg8AAQgbAAgKAEgAAbHOQgRg9gIhOQgIhOgDhVQgDhUgBhMQgDh1AKh1QAIh1AHhwQBKgJBNAFQBMAGBIACQAYA7ALBJQAMBKAEBMQADBMAABEQACBxgGB4QgGB2gUB+QhKAZhOAAQhMgBhNgGgACKjpQgSAGAAAIQABBDgBAvQgBAwABAqQABAqAEA1QAFA0AMBNIBIgLQAGhqgFh0QgFhygThnQgjAEgSAEgA1QHOQgQg9gIhOQgJhOgDhVIgFigQgCh1AKh1QAJh1AHhwQBKgJBNAFQBLAGBJACQAXA7ANBJQAKBKAFBMQAEBMAABEQAABxgFB4QgFB2gWB+QhJAZhOAAQhNgBhNgGgAzgjpQgSAGAAAIQABBDgBAvQgBAwABAqQABAqAFA1QAEA0AMBNIBJgLQAFhqgEh0QgGhygThnQgkAEgRAEgAHhHUIgtgEQgDj/gFjqIgFmuQAhgDAcACQAdACAdgBQASBcATBzQASB0AkCDQADgdACg4QADg3AAhEIgBiGQgChDgDg0IBJABQAkAAAjAKQgGBkgBB1QgCB2AAB6IAEDwIABDZIg9gEIgjAAIgdABQgWgygXhIQgXhIgWhKQgDAnABAyIADBjQADAwgBAkQgnAFgZAAIgSgBgAt2HTQgoAAgegHIgFkzQgEieACibQAAieAIiKIBhAAIBhgCQA3AJAdAfQAdAgAOAqQAABxgEByQgEBxgMBoIgcBAQgOAggXANQgWAAgUABIg1AEIgBBRQgCAlACAmIAABWQgbALggAAIgMAAgAtBi8QAEA3ACA8QAEA6ABAvIAxgBQAGglgDg6QgCg6gFg6IgJhnIg2AAIAHBfgAodBgQgBi8gGi3IgTAAIgGgBIgNgBIglAAIgBg/QgBggABgfQAAggAEgWQAxgFAmAAIBIgBQAjABAngBQAoAAA1gEQAAAoADA2QADA0gBBFQgjACgVAEQgVAFgRACQACC2AECwQAECzAAClIhMADQgkABg4AAIAAlzgAPBHOQgbgEgNgDQAAgkgEgmIgFhRQAVgJAdgFQAdgEAfAAQAeACAZAGIACA0QACAegBAfQAAAegGAWQgXAIgfADQggAAgbgEgATSHOQADgpgDgqQgCgqgFghQAQgDAcgCQAdgBAfAAQAfAAAYgDQACAeABApQACArAAArQgpAGgqAEQgVACgSAAQgTAAgQgCgAUwDlIgtgBIgbAAQgIiIgOivQgOivgKjVQAfADAkAAIBFAAQAggDAYAAIgREOIgMDeIgLDRIgigBgAOhBZIgGh6QADgJAPgSQANgTAQgTIAWgaQAIgVADglQAEgkAAg8QgIADgQACQgPACgOAFIgBBEQgBAdgGAeIg2ACQgiABgfgGQgEhoAChNQAChNAMg2QAtgIA3gDQA2gDA1ADQA3ADAuANQAMAlADAsQAEAtgCAuIgCBaQgCAngRAiQgPAigVAgQgTAigOAhIgJBhIgFA8IgCAsQgegCgggBQggABgZADQgJhIgBg8g");
	this.shape_4.setTransform(192.8333,65.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	// Ebene_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006600").s().p("Aa6KDUg3OgABgBZgAIQgUhSgJhuQgLhqgEh1QgEhygChpQgCihAMifQALihAIiaQBagLBdAGMA2FAABQBUAIBQABQAdBSAPBlQANBkAFBoQAEBpAABcQACCdgHCkQgHChgZCuQhZAhheAAIgKAAg");
	this.shape_5.setTransform(195.2425,64.3333);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-11.6,462.6,152.4);


(lib.button_newgame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,"hover":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Ebene_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,0,0.008)").s().p("Aa6KDIuCAAQ49gBqWgDQmzgCgfgDQgUhSgJhuQgLhqgEh1QgEhygChpQgCihAMifQALihAIiaQBagLBdAGIEwAAMAjTAABIOCAAQBUAIBQABQAdBSAPBlQAOBkAEBoQAEBpAABcQACCdgGCkQgIChgZCuQhZAhheAAIgKAAg");
	this.shape.setTransform(195.2435,64.3333);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,0,0,0.008)").s().p("AfyL3IwlAAQ9egBsNgEQoDgCgkgEQgXhhgLiBQgNh9gFiKQgFiHgCh9QgDi9APi9QANi9AJi2QBrgNBuAHIFnAAMAprAABIQlAAQBjAJBeACQAiBgASB4QAQB2AFB6QAFB9AABtQACC5gHDBQgJC/geDNQhpAnhvAAIgLAAg");
	this.shape_1.setTransform(195.2375,64.3667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Ebene_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ATcCLQgHiCgCiDQgCiDAAh5IBpABIBuABQA2AAArgCQgGAgADAiQACAjgFAZQgmgDgjAAIhKAAQgFAdADAeQAEAdAHAbQAfgCAjAAQAkABAqADQgCApgGAkIgPBLIgVAAIgvAAQgcAAgVADQgCAuACArQABArAHAuQAgADAeACIA7AAIgBA5IgDBAIgFA7QgiADgwAAQgxACgygBIhRABQgNh3gGiDgAxjCLQgHiCgCiDQgCiDABh5IBnABIBvABQA2AAAqgCQgEAgACAiQACAjgFAZQgmgDgjAAIhKAAQgFAdADAeQADAdAIAbQAggCAiAAQAkABApADQgBApgGAkIgPBLIgVAAIgvAAQgcAAgVADQgCAuACArQABArAIAuQAfADAeACQAdABAegBIgBA5IgCBAIgGA7QgiADgwAAQgxACgygBIhRABQgNh3gGiDgARwGAIg9gDQgOhHgFhIQgFhHgMhPQgLAvgGAyQgGAxgEAwQgDAwgEAoQgQAFgWAAIgtgDQAEgKgEglIgMhUIgPhZQgHgqgGgUQgFAogCAyQgCAyAAAyQgBAygEApQgRAGgeACQgeACgZgBQgZgCgCgDIADhFIAGh/IAHifQAEhUADhQIAFiQIAEhdIA3gGQAWgCAVABQAVAAAcADQAIAbALBEIAeC2IAXibQAHg+AKgqQAEgFATgCQATgCAZAAIAtAAIAeABQAOABAAAMQABC8AHC6QAJC5AFC2QgPAFgXAAIgLAAgA3OF/IgtgDQgDjSgEjAQgEjBgCigQAggDAdACQAcABAdAAIAjCqQATBgAiBrQAEgYACgtQABguAAg4QABg4gBg2QgBg4gEgqIBIABQAjAAAhAHQgEBTgCBgQgBBhAABkIADDGQACBfAABTIg9gDIgigBIgdACQgUgpgYg8QgXg7gVg8QgBAgAAApIADBRQADAngBAeQgnAEgYAAIgRgBgAGDF9QgfACgbgCQALjFASi9QARi9AVi2QAegCAngBIBOgBIBEACIAkD9IAkD2QASB8ANCCIgyAAIg9ABIg2AAQgIgYgIg3IgYicIgigFQgIAhgEAtIgHBaQgCAtgGAiQgfgDgeABgAHuiQIgGBNQgBAhgCAMQAJAEARACQAQAAAMgFIgJhEIgKhCIgRhOQgGAtgDAsgAn+F8IgThoIgPhcQgHgtgGg2QgKBHgIBJQgHBJgNBOQgagDgdACQgeACgWgCIgLhVIgJhQIgMhaIgPh3IgXi+QgNhjgThfQAfgEAngDQApgCAmABQAIAxAJBJIATCdIAGgvIAHhQIAIhUQACgnAFgRQAOgFAWABQAXABATACQAGATAEAoIAJBVIALBbQAHAsAIAeQAGgnAFgtIAJhbIAGhSQADglAFgVQAdADAhgBQAhgBAcAGQgTB4gOCAQgPB/gMCAQgMB/gNB2QgcAAgcAEQgXAEgXAAIgMgBgADEF8IhhgBQgxgBgpACQgQhwgLiCQgMiCACiEQAAiEATh3QAmgHAugDQAtgDAtAAIBRABQAZArAHA2QAIA2gDA6IgDBvQgHADgXABQgYABgVgBIgYAAIgJgoIgHgqIgIgjIgvAGQgHBaAGBcQAHBdAKBaIAwgDIgCgdIgBgmQgDgTgFgOIgggCQACgKAAgVQAAgVgBgUQgBgTgCgHQAPACAbgCIA1gDIAwgBQAWgBAEACQgDA9gBBFQgBBGgFBEQgFBEgNA6QgXACgiAAIgRgBg");
	this.shape_2.setTransform(195.7,67.205);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#330000").s().p("AfqL1IwhgBQ9WgBsLgEQoAgCgkgEQgYhggLiBQgNh8gFiKQgEiGgCh9QgDi8AOi8QANi9AJi1QBrgNBtAHIFmAAMAphAABIQhAAQBjAJBeACQAhBgATB3QAPB1AGB7QAEB8AABsQACC4gHDBQgJC+geDMQhoAohvAAIgLAAgAWyhuQADCaAICaQAHCZAPCMIBgAAQA6AAA6gBQA5gBAogDIAFhGIAEhLIABhDQgjABgjgBQgjgCglgEQgJg2gBgyQgCgzACg3QAZgCAhgBIA3AAQAYABAAgBIAShYQAIgqABgwQgwgEgrgBQgpgBgkADQgJgggEgiQgFgjAHgiIBWgBQArABArADQAHgegCgoQgEgpAGglQgxAChAAAIiCgBIh7gBQAACPACCZgA0uhuQACCaAICaQAICZAPCMIBfAAQA7AAA5gBQA5gBAogDIAGhGIAEhLIABhDQgjABgkgBQgigCglgEQgJg2gBgyQgCgzACg3QAYgCAhgBIA4AAQAYABAAgBIARhYQAIgqACgwQgxgEgqgBQgpgBglADQgJgggEgiQgEgjAGgiIBXgBQAqABAsADQAHgegDgoQgDgpAGglQgyAChAAAIiCgBIh6gBQgBCPADCZgATgE6QAGBUAQBVIBIADQAkABAVgHQgFjWgKjaQgJjbgBjdQAAgOgRgCIgjgBIg1ABQgeAAgWACQgWACgGAGQgKAxgKBKIgZC2IgkjWQgNhQgKggQghgDgYAAQgZgBgaABIhBAIIgEBtIgHCpQgDBegFBjIgIC8IgHCVIgDBRQACAEAeACQAcACAlgDQAjgCAUgHQAEgwABg7QAAg7ADg7QACg7AHgvQAGAYAJAxIASBpIANBiQAEAsgDAMQAbACAaABQAZAAASgGQAFgvAEg4QAFg4AHg7QAGg6AOg4QAOBdAGBUgA8SmYQABC9AFDiQAFDjADD3QAVABAgADQAeACBAgGQABgjgDguIgEhfQAAgxACgmQAZBIAbBFQAcBGAXAwIAjgBIAoAAIBHAEQAAhhgChxIgDjpQgCh1AChyQAChxAFhiQgngIgpAAIhUgBQAEAxABBCQACBAgBBBQAABDgCA1QgDA1gEAbQgoh9gWhxIgpjIQgiABghgCIgaAAQgWAAgXABgAIUHkQAHgnADg1IAIhqQAFg1AJgnIAoAGIAdC4QAJBAAJAcIBAAAIBHAAIA7gBQgPiZgWiSQgUiRgViQIgrkpIhQgDIhcABQguABgjACQgYDWgVDeQgUDfgODpQAgABAkgBIAZgBQAYAAAXACgAp7D7IATBrIAVB7QAiACAigFQAhgFAhAAQAPiLAOiWQAPiWARiVQARiXAWiOQghgHgmACQgoABghgDQgGAYgEArIgHBhIgKBrQgGA1gIAuQgJgjgIg0IgNhrQgFg3gGgtQgFgvgGgXQgXgCgagBQgbgBgQAFQgFAVgDAuIgKBjIgIBeQgEApgCAOIgXi5QgKhVgKg7QgtAAgwACQguADglAFQAXBwAPB1IAbDfIASCMIANBqIALBeIANBkQAbACAigCQAjgCAeADQAPhbAJhWQAKhXAMhTQAGBAAIA1gAB6HgIBxABQA2ABAhgCQAQhFAGhQQAGhQABhSQAChRAEhIQgGgDgZABIg5ACIg/ADQgfACgRgCQACAIAAAXQACAYAAAYQAAAagCAMIAmABQAGARACAWIACAtQABAXABALIg4AEQgMhqgIhtQgHhtAIhqIA4gHIAJApIAIAyIAKAvQACgBAaABQAZABAcgBQAcgBAIgEQABhAADhDQAChDgJhAQgIg/gdg0IhfAAQg1AAg1ADQg2ADgtAIQgWCMgBCcQgBCcAMCYQANCZAUCEQAmgCAtAAIAXABgAJeAOQgTgCgMgFQAEgNABgnQACgmAEg0QAEg0AHg1IAUBbIALBOQAEAlAHAqQgMAGgSAAIgDAAg");
	this.shape_3.setTransform(195.2715,64.3917);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#36803A").s().p("AW3CkQgIiagCiaQgDiZABiPIB6ABICCABQBAAAAygCQgGAlADApQADAogHAeQgsgDgqgBIhXABQgGAiAEAjQAEAiAJAgQAkgDAqABQAqABAxAEQgCAwgIAqIgRBYQAAABgYgBIg4AAQghABgYACQgCA3ACAzQAAAyAJA2QAmAEAiACQAkABAigBIAABDIgEBLIgGBGQgoADg5ABQg5ABg6AAIhgAAQgPiMgIiZgA0pCkQgJiagCiaQgCiZAAiPIB7ABICCABQBAAAAxgCQgFAlADApQACAogHAeQgrgDgrgBIhWABQgHAiAEAjQAFAiAIAgQAlgDApABQAqABAxAEQgCAwgHAqIgSBYQAAABgYgBIg3AAQghABgZACQgCA3ACAzQABAyAJA2QAlAEAjACQAjABAjgBIgBBDIgDBLIgGBGQgoADg5ABQg6ABg6AAIhgAAQgPiMgHiZgAU5HEIhIgDQgQhVgHhUQgFhUgOhdQgOA4gHA6QgHA7gEA4QgEA4gFAvQgSAGgaAAQgZgBgcgCQAEgMgEgsIgOhiIgShpQgIgxgHgYQgHAvgCA7QgCA7gBA7QgBA7gDAwQgUAHgkACQgkADgcgCQgfgCgCgEIAEhRIAHiVIAHi8QAGhjADheIAHipIADhtIBCgIQAZgBAZABQAYAAAiADQAJAgANBQIAkDWIAai2QAJhKALgxQAFgGAXgCQAWgCAeAAIA1gBIAjABQAQACABAOQAADdAJDbQAKDaAFDWQgRAGgcAAIgLAAgA7VHDQgfgDgWgBQgDj3gFjiQgEjjgCi9QAmgCAhABQAhACAigBIApDIQAXBxAoB+QAEgbACg2QADg1AAhDQAAhBgChAQgBhCgDgxIBUABQApAAAnAIQgFBigCBxQgCByABB1IADDpQACBxAABhIhHgEIgoAAIgiABQgYgwgchGQgbhFgZhIQgCAmABAxIAEBfQACAuAAAjQgtAFgdAAIgVgBgAHHHBQgkABgggBQANjpAUjeQAVjfAZjWQAigCAvgBIBcgBIBQADIAqEpQAWCRAUCQQAWCSAPCZIg8ABIhGAAIhBAAQgJgcgIhAIgdi4IgpgGQgJAngEA1IgJBqQgDA1gGAnQgkgDgkACgAJEipQgEA0gBAmQgCAngDAOQALAFATACQAUAAANgGQgGgrgEglIgMhOIgThbQgHA1gFA0gApYG/IgWh7IgShrQgIg1gHhAQgMBTgKBXQgIBWgQBbQgegDgiACQgjACgagCIgNhkIgLheIgOhqIgSiMIgajfQgQh1gWhwQAkgFAvgDQAwgCAsAAQAKA7ALBVIAWC5QADgOAEgpIAIheIAJhjQADguAGgVQAQgFAaABQAbABAWACQAHAXAEAvQAGAtAGA3IANBrQAIA0AJAjQAIguAGg1IAJhrIAIhhQADgrAGgYQAiADAngBQAngCAhAHQgWCOgSCXQgRCVgOCWQgOCWgQCLQggAAgiAFQgaAEgaAAIgPgBgADmG/IhygBQg6gBgvACQgUiEgNiZQgNiYACicQAAicAWiMQAtgIA2gDQA2gDA1AAIBeAAQAdA0AJA/QAJBAgDBDQgDBDgBBAQgIAEgcABQgbABgagBQgZgBgDABIgJgvIgJgyIgJgpIg4AHQgIBqAHBtQAIBtAMBqIA5gEQgCgLAAgXIgDgtQgCgWgGgRIgmgBQACgMAAgaQAAgYgBgYQgBgWgCgIQASACAegCIA/gDIA5gCQAZgBAGADQgDBHgCBRQgBBSgGBQQgHBQgPBFQgbACgoAAIgUgBg");
	this.shape_4.setTransform(195.825,67.755);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	// Ebene_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006600").s().p("Aa6KDIuCAAQ49gBqWgDQmzgCgfgDQgUhSgJhuQgLhqgEh1QgEhygChpQgCihAMifQALihAIiaQBagLBdAGIEwAAMAjTAABIOCAAQBUAIBQABQAdBSAPBlQAOBkAEBoQAEBpAABcQACCdgGCkQgIChgZCuQhZAhheAAIgKAAg");
	this.shape_5.setTransform(195.2434,64.3333);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.3,-11.5,461.1,151.8);


(lib.button_menu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,"hover":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Ebene_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,0,0.008)").s().p("Aa6KDIuCAAQ49gBqWgDQmzgCgfgDQgUhSgJhuQgLhqgEh1QgEhygChpQgCihAMifQALihAIiaQBagLBdAGIEwAAMAjTAABIOCAAQBUAIBQABQAdBSAPBlQAOBkAEBoQAEBpAABcQACCdgGCkQgIChgZCuQhZAhheAAIgKAAg");
	this.shape.setTransform(195.2435,64.3333);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,0,0,0.008)").s().p("AfyL3IwlAAQ9egBsNgEQoDgCgkgEQgXhhgLiBQgNh9gFiKQgFiHgCh9QgDi9APi9QANi9AJi2QBrgNBuAHIFnAAMAprAABIQlAAQBjAJBeACQAiBgASB4QAQB2AFB6QAFB9AABtQACC5gHDBQgJC/geDNQhpAnhvAAIgLAAg");
	this.shape_1.setTransform(195.2375,64.3667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Ebene_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlrCTQgIiKgCiKQgDiKABiAIB9ABICEABQBBAAAzgCQgGAiAEAkQACAkgHAbQgsgDgsAAIhYAAQgGAfAEAfQAEAeAJAdQAlgCAqABIBdAEQgCArgIAmIgSBPQAAABgYgBIg5AAQghABgZACQgCAxACAtQABAtAJAxQAmAEAjABQAkABAkAAIgBA7IgEBEIgGA/QgpADg5AAQg8ACg7gBIhiABQgOh+gJiKgAnsGWIhJgDQgQhMgHhMQgGhLgNhTQgPAygHA0QgHA1gEAyQgEAygGArQgSAFgaAAIg2gDQAEgLgFgnIgNhYIgSheQgJgtgHgVQgHAqgCA2QgCA0gBA1QgBA1gEArQgUAGgkACQglADgdgBQgfgCgCgEIADhJIAIiFQADhRAFhYIAIiuIAHiXIAEhiQAogFAagCQAbgBAZABQAYAAAiADQAKAcAOBIQAMBIAYB4IAaikQAKhCALgsQAFgFAXgCQAXgCAeAAIA2AAIAkABQAQABABAMQABDIAJDDQAKDEAFDAQgSAGgeAAIgKAAgAB/GVIg1gDQgDjegFjLQgFjMgCipQAmgDAjACQAhACAjgBIAqCzQAXBmAoBwQAEgYADgwQACgwAAg8QABg7gCg5QgBg7gDgsIBVABQAqAAAoAHQgGBYgCBmQgBBmABBpIADDRQACBlAABXIhIgDIgpAAIgjABQgYgrgcg/Qgcg+gahAQgCAiABArIAEBVQADAqgBAgQgvADgdAAIgVAAgAJ3GDQgVgHgJgHQgIgGgJgMQgZi4gBi6QgCi9ADi6QAqgKAvABQAvABAmANQgBBiABBYQAABXAFBXQAFBWAKBcIAzAUQAFhWgChjQgBhjgFhiIgIi8QArgGAvgBQAugBAoALQAABPgCBiQgCBkgEBnIgFDBIgECZQgNAPgSAOQgRAQgUAKQgVALgWABIhnACIgHAAQgzAAgxgOg");
	this.shape_2.setTransform(193.075,65.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#330000").s().p("AfqL0IwhAAQ9WgBsLgEQoAgCgkgEQgXhggMiBQgMh9gFiJQgFiGgCh9QgDi8APi8QAMi9AKi1QBqgNBuAHIFlAAMAphAABIQhAAQBiAJBfACQAhBgASB3QAQB1AFB7QAFB8AABsQACC4gHDBQgJC+geDMQhoAnhvAAIgLAAgAnRiQQADCjAKCiQAKCjARCTIBzAAQBGAABGgCQBDAAAwgEIAHhJIAFhQIABhGQgrAAgqgBQgpgCgtgEQgKg5gCg1QgBg2ABg5QAegDAngBIBDAAQAcABAAgBIAWhdQAJgtACgyQg6gDgzgCQgxgBgsADQgLgigFgkQgEgkAHglIBoAAQAzAAA0ADQAIgfgDgqQgEgrAHgnQg8ABhMAAIibgBIiTAAQgBCWACCigArNEwQAIBZATBZIBWADQAsABAYgHQgGjjgLjmQgMjmAAjqQgBgOgUgCIgpgBIhAAAQgjAAgcADQgaABgHAHQgNA0gLBNIgfDBQgciNgOhVQgQhUgMgiQgogDgdAAQgdgCgfACQggACgvAGIgEB0IgICxIgKDMQgGBpgDBeIgJCdIgEBWQACAEAkADQAjABArgDQAqgDAYgHQAFgyABg+IAEh9QACg/AJgxQAHAZALA0IAVBvIAQBoQAFAugEANIA/ADQAfAAAVgGQAHgyAFg7QAFg8AIg9QAIg+ARg7QAQBiAHBZgAAsnKQACDHAGDwQAGDuADEGQAaAAAlADQAlACBNgFQABgmgEgxIgEhkQgBgzACgoIA/CUQAhBKAdAzIApgBIAwAAIBVAEQAAhngCh3IgEj2QgBh7ABh4QADh4AGhnQgvgJgxAAIhkgBQAEA0ABBFQACBEgBBFQAABGgCA5QgEA4gEAcQgwiEgbh3IgxjTQgpABgngCIgigBQgZAAgbACgAJ4nDQgEDbADDeQABDbAeDYQAKAOAJAIQALAIAZAIQA9ASBAgBIB6gCQAagCAYgMQAYgMAUgTQAVgRAQgRIAEi0IAGjjQAFh6ACh1QADh0AAhcQgvgNg2AAQg4ACgyAHIAJDdQAGB0ABB0QACB0gGBlIg7gXQgNhsgGhlQgFhnAAhmQgBhoABhzQgtgQg3gBIgFAAQg1AAgvALg");
	this.shape_3.setTransform(195.2875,64.3667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#36803A").s().p("AmrCtQgKiigDijQgCiiABiWICTAAICbABQBNAAA7gBQgGAnADArQADAqgIAfQg0gDgzAAIhnAAQgIAlAFAkQAEAkALAiQAsgDAyABQAyACA6ADQgBAygKAtIgWBdQABABgdgBIhCAAQgnABgeADQgCA5ACA2QABA1AKA5QAtAEAqACQAqABAqAAIgBBGIgFBQIgGBJQgxAEhDAAQhGAChGAAIhzAAQgRiTgKijgApCHdIhXgDQgThZgIhZQgGhZgQhiQgSA7gIA+QgIA9gFA8QgFA7gHAyQgUAGggAAIg/gDQAEgNgFguIgQhoIgVhvQgLg0gHgZQgJAxgCA/IgEB9QgBA+gFAyQgXAHgrADQgrADgigBQglgDgCgEIAEhWIAJidQAEheAFhpIAKjMIAIixIAEh0QAvgGAggCQAfgCAeACQAcAAAoADQAMAiAQBUQAPBVAbCNIAgjBQALhNAMg0QAHgHAagBQAcgDAjAAIBAAAIAqABQATACABAOQABDqALDmQALDmAGDjQgVAGgkAAIgKAAgACWHcQglgDgaAAQgEkGgGjuQgFjwgDjHQAugDAoACQAnACApgBIAxDTQAbB3AwCFQAEgdAEg4QADg5gBhGQABhFgChEQgBhFgEg0IBlABQAwAAAvAJQgGBngDB4QAAB4AAB7IAED2QACB3AABnIhUgEIgxAAIgpABQgdgzgghKIhAiUQgCAoABAzIAEBkQAEAxgBAmQg4AEgjAAIgWgBgALmHHQgZgIgKgIQgKgIgKgOQgejYgBjbQgDjeAEjbQAxgLA4AAQA4ABAtAQQgCBzACBoQgBBmAGBnQAFBlANBsIA7AXQAGhlgBh0QgCh0gFh0IgKjdQAygHA4gCQA2AAAvANQAABcgCB0QgDB1gEB6IgHDjIgEC0QgQARgUARQgVATgXAMQgZAMgaACIh5ACIgHAAQg9AAg6gRg");
	this.shape_4.setTransform(192.75,65.1875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	// Ebene_5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s().p("AfqL1IwhgBQ9WgBsLgEQoAgCgkgEQgYhggLiBQgNh8gFiKQgEiGgCh9QgDi8AOi8QANi9AJi1QBrgNBtAHIFmAAMAphAABIQhAAQBjAJBeACQAhBgATB3QAPB1AGB7QAEB8AABsQACC4gHDBQgJC+geDMQhoAohvAAIgLAAgAWyhuQADCaAICaQAHCZAPCMIBgAAQA6AAA6gBQA5gBAogDIAFhGIAEhLIABhDQgjABgjgBQgjgCglgEQgJg2gBgyQgCgzACg3QAZgCAhgBIA3AAQAYABAAgBIAShYQAIgqABgwQgwgEgrgBQgpgBgkADQgJgggEgiQgFgjAHgiIBWgBQArABArADQAHgegCgoQgEgpAGglQgxAChAAAIiCgBIh7gBQAACPACCZgA0uhuQACCaAICaQAICZAPCMIBfAAQA7AAA5gBQA5gBAogDIAGhGIAEhLIABhDQgjABgkgBQgigCglgEQgJg2gBgyQgCgzACg3QAYgCAhgBIA4AAQAYABAAgBIARhYQAIgqACgwQgxgEgqgBQgpgBglADQgJgggEgiQgEgjAGgiIBXgBQAqABAsADQAHgegDgoQgDgpAGglQgyAChAAAIiCgBIh6gBQgBCPADCZgATgE6QAGBUAQBVIBIADQAkABAVgHQgFjWgKjaQgJjbgBjdQAAgOgRgCIgjgBIg1ABQgeAAgWACQgWACgGAGQgKAxgKBKIgZC2IgkjWQgNhQgKggQghgDgYAAQgZgBgaABIhBAIIgEBtIgHCpQgDBegFBjIgIC8IgHCVIgDBRQACAEAeACQAcACAlgDQAjgCAUgHQAEgwABg7QAAg7ADg7QACg7AHgvQAGAYAJAxIASBpIANBiQAEAsgDAMQAbACAaABQAZAAASgGQAFgvAEg4QAFg4AHg7QAGg6AOg4QAOBdAGBUgA8SmYQABC9AFDiQAFDjADD3QAVABAgADQAeACBAgGQABgjgDguIgEhfQAAgxACgmQAZBIAbBFQAcBGAXAwIAjgBIAoAAIBHAEQAAhhgChxIgDjpQgCh1AChyQAChxAFhiQgngIgpAAIhUgBQAEAxABBCQACBAgBBBQAABDgCA1QgDA1gEAbQgoh9gWhxIgpjIQgiABghgCIgaAAQgWAAgXABgAIUHkQAHgnADg1IAIhqQAFg1AJgnIAoAGIAdC4QAJBAAJAcIBAAAIBHAAIA7gBQgPiZgWiSQgUiRgViQIgrkpIhQgDIhcABQguABgjACQgYDWgVDeQgUDfgODpQAgABAkgBIAZgBQAYAAAXACgAp7D7IATBrIAVB7QAiACAigFQAhgFAhAAQAPiLAOiWQAPiWARiVQARiXAWiOQghgHgmACQgoABghgDQgGAYgEArIgHBhIgKBrQgGA1gIAuQgJgjgIg0IgNhrQgFg3gGgtQgFgvgGgXQgXgCgagBQgbgBgQAFQgFAVgDAuIgKBjIgIBeQgEApgCAOIgXi5QgKhVgKg7QgtAAgwACQguADglAFQAXBwAPB1IAbDfIASCMIANBqIALBeIANBkQAbACAigCQAjgCAeADQAPhbAJhWQAKhXAMhTQAGBAAIA1gAB6HgIBxABQA2ABAhgCQAQhFAGhQQAGhQABhSQAChRAEhIQgGgDgZABIg5ACIg/ADQgfACgRgCQACAIAAAXQACAYAAAYQAAAagCAMIAmABQAGARACAWIACAtQABAXABALIg4AEQgMhqgIhtQgHhtAIhqIA4gHIAJApIAIAyIAKAvQACgBAaABQAZABAcgBQAcgBAIgEQABhAADhDQAChDgJhAQgIg/gdg0IhfAAQg1AAg1ADQg2ADgtAIQgWCMgBCcQgBCcAMCYQANCZAUCEQAmgCAtAAIAXABgAJeAOQgTgCgMgFQAEgNABgnQACgmAEg0QAEg0AHg1IAUBbIALBOQAEAlAHAqQgMAGgSAAIgDAAg");
	this.shape_5.setTransform(195.2715,64.3917);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#36803A").s().p("AW3CkQgIiagCiaQgDiZABiPIB6ABICCABQBAAAAygCQgGAlADApQADAogHAeQgsgDgqgBIhXABQgGAiAEAjQAEAiAJAgQAkgDAqABQAqABAxAEQgCAwgIAqIgRBYQAAABgYgBIg4AAQghABgYACQgCA3ACAzQAAAyAJA2QAmAEAiACQAkABAigBIAABDIgEBLIgGBGQgoADg5ABQg5ABg6AAIhgAAQgPiMgIiZgA0pCkQgJiagCiaQgCiZAAiPIB7ABICCABQBAAAAxgCQgFAlADApQACAogHAeQgrgDgrgBIhWABQgHAiAEAjQAFAiAIAgQAlgDApABQAqABAxAEQgCAwgHAqIgSBYQAAABgYgBIg3AAQghABgZACQgCA3ACAzQABAyAJA2QAlAEAjACQAjABAjgBIgBBDIgDBLIgGBGQgoADg5ABQg6ABg6AAIhgAAQgPiMgHiZgAU5HEIhIgDQgQhVgHhUQgFhUgOhdQgOA4gHA6QgHA7gEA4QgEA4gFAvQgSAGgaAAQgZgBgcgCQAEgMgEgsIgOhiIgShpQgIgxgHgYQgHAvgCA7QgCA7gBA7QgBA7gDAwQgUAHgkACQgkADgcgCQgfgCgCgEIAEhRIAHiVIAHi8QAGhjADheIAHipIADhtIBCgIQAZgBAZABQAYAAAiADQAJAgANBQIAkDWIAai2QAJhKALgxQAFgGAXgCQAWgCAeAAIA1gBIAjABQAQACABAOQAADdAJDbQAKDaAFDWQgRAGgcAAIgLAAgA7VHDQgfgDgWgBQgDj3gFjiQgEjjgCi9QAmgCAhABQAhACAigBIApDIQAXBxAoB+QAEgbACg2QADg1AAhDQAAhBgChAQgBhCgDgxIBUABQApAAAnAIQgFBigCBxQgCByABB1IADDpQACBxAABhIhHgEIgoAAIgiABQgYgwgchGQgbhFgZhIQgCAmABAxIAEBfQACAuAAAjQgtAFgdAAIgVgBgAHHHBQgkABgggBQANjpAUjeQAVjfAZjWQAigCAvgBIBcgBIBQADIAqEpQAWCRAUCQQAWCSAPCZIg8ABIhGAAIhBAAQgJgcgIhAIgdi4IgpgGQgJAngEA1IgJBqQgDA1gGAnQgkgDgkACgAJEipQgEA0gBAmQgCAngDAOQALAFATACQAUAAANgGQgGgrgEglIgMhOIgThbQgHA1gFA0gApYG/IgWh7IgShrQgIg1gHhAQgMBTgKBXQgIBWgQBbQgegDgiACQgjACgagCIgNhkIgLheIgOhqIgSiMIgajfQgQh1gWhwQAkgFAvgDQAwgCAsAAQAKA7ALBVIAWC5QADgOAEgpIAIheIAJhjQADguAGgVQAQgFAaABQAbABAWACQAHAXAEAvQAGAtAGA3IANBrQAIA0AJAjQAIguAGg1IAJhrIAIhhQADgrAGgYQAiADAngBQAngCAhAHQgWCOgSCXQgRCVgOCWQgOCWgQCLQggAAgiAFQgaAEgaAAIgPgBgADmG/IhygBQg6gBgvACQgUiEgNiZQgNiYACicQAAicAWiMQAtgIA2gDQA2gDA1AAIBeAAQAdA0AJA/QAJBAgDBDQgDBDgBBAQgIAEgcABQgbABgagBQgZgBgDABIgJgvIgJgyIgJgpIg4AHQgIBqAHBtQAIBtAMBqIA5gEQgCgLAAgXIgDgtQgCgWgGgRIgmgBQACgMAAgaQAAgYgBgYQgBgWgCgIQASACAegCIA/gDIA5gCQAZgBAGADQgDBHgCBRQgBBSgGBQQgHBQgPBFQgbACgoAAIgUgBg");
	this.shape_6.setTransform(195.825,67.755);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// Ebene_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006600").s().p("Aa6KDIuCAAQ49gBqWgDQmzgCgfgDQgUhSgJhuQgLhqgEh1QgEhygChpQgCihAMifQALihAIiaQBagLBdAGIEwAAMAjTAABIOCAAQBUAIBQABQAdBSAPBlQAOBkAEBoQAEBpAABcQACCdgGCkQgIChgZCuQhZAhheAAIgKAAg");
	this.shape_7.setTransform(195.2434,64.3333);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.3,-11.5,461.1,151.8);


(lib.button_cont = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,"hover":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Ebene_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,0,0.008)").s().p("Aa6KDIuCAAQ49gBqWgDQmzgCgfgDQgUhSgJhuQgLhqgEh1QgEhygChpQgCihAMifQALihAIiaQBagLBdAGIEwAAMAjTAABIOCAAQBUAIBQABQAdBSAPBlQAOBkAEBoQAEBpAABcQACCdgGCkQgIChgZCuQhZAhheAAIgKAAg");
	this.shape.setTransform(195.2435,64.3333);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,0,0,0.008)").s().p("AfyL3IwlAAQ9egBsNgEQoDgCgkgEQgXhhgLiBQgNh9gFiKQgFiHgCh9QgDi9APi9QANi9AJi2QBrgNBuAHIFnAAMAprAABIQlAAQBjAJBeACQAiBgASB4QAQB2AFB6QAFB9AABtQACC5gHDBQgJC/geDNQhpAnhvAAIgLAAg");
	this.shape_1.setTransform(195.2375,64.3667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Ebene_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDFEFD").s().p("AS9CHQgHh/gDiAIgCj2IBvAAIBzABIBlgBQgEAfADAhQABAigGAYQgmgCgnAAQgngBglABQgGAcADAdQAEAcAHAbQAhgCAmAAIBQAEQgBApgIAiIgPBKIgUAAQgVgCgeACQgdAAgWADQgCAtACAqQABApAIAuIBAAFQAgABAfgBIgCA3QAAAfgDAfQgBAggDAaQgkADgzABQg0ABg0gBIhVABQgOh0gGiAgABiF4QAJiEgGh+QgFh9gGh8QgGh7AJh7QAlgCAtAEQAtAEAtgCQABB8AACAIgBD7IgCDyQgcABgiAAIg+gBQgcAAgKAEgAxQFwQgQgwgJg/QgJg/gDhEIgEiAQgDheAKheQAJhfAHhZQBNgHBPAEQBPAEBJAAQAYAyANA7QAMA7ADA8QAFA+AAA2QAABbgFBgQgGBfgUBmQhNAThQAAQhPgBhQgFgAvdi9QgSAFAAAGIAABcQgBAmABAhQAAAiAFAqQAGAqAMA+IBLgJQAGhWgGhbQgFhdgThRQgmACgSAEgAGSF1QgcgCgUAAQgCjOgFi7IgGlaQAigCAeABIA8ABIAlCmQAUBeAkBpQAEgXACgsQABgtAAg4QACg2gCg1QgBg2gDgqIBKABQAmAAAiAIQgFBQgBBfQgCBfAABhIADDBQADBeAABQIhAgDIgkAAIgfABQgVgogYg6Igwh1QgBAgABAnIADBQQADAmgBAeQgmADgYAAIgWgBgAp7F1QgcgCgTAAQgDjOgFi7IgGlaQAigCAeABIA8ABIAlCmQAUBeAkBpQAEgXACgsQABgtAAg4QACg2gCg1QgBg2gDgqIBKABQAmAAAiAIQgEBQgCBfQgBBfAABhIADDBQADBeAABQIhBgDIgkAAIgfABQgVgogYg6QgYg5gXg8QgCAgACAnIACBQQADAmgBAeQgmADgYAAIgWgBgAjWBLQAAiYgFiSIgUAAIgHgBIgOAAIglAAIgCgzIAAg0QAAgYAFgTQAzgEAmAAIBLAAIBLAAIBggDQAAAgADArQADApgCA5QgjABgUADIgpAGQADCSAFCNQADCQAACEIhOADQglABg7AAQACiTgCiXgA1MFzIgwAAIhTgDQgLgpgHgtQgGgwgFg9QgHhigDhXQgDhbAEhWQAGhXAShaQAlgJA4gBIAEAAQA1gBAyADQA1ADAlAGQAJA0ADAxQAEAxACAzQAAAxgFA6QgTAGgbACQgbAAgWgDQgagEgJgGIgBguIgFg0QgGgbgKgWIgqAJQgDAYAAAsQgBArADA1QABA1AGA1QAGA1AOArIAugGQAAgkgFgnQgDgpgEgeQAbAAAbgBQAZAAATACQAUAAAKALQAJAMgBAXIgCA+IgEBVQgCAwgGAqQgEAqgJAbQg4AEg3AAIgWAAgANLFlQgUgGgGgGQgHgIgHgKQgXipgBiuQgCitADiuQAlgIApABQAqABAgALQgBBbABBRQAABSAFBRQAEBOAJBVIAtATQAFhPgChcQgBhcgFhbQgDhcgEhSQAlgFAqgBQAqgBAiALIgBCjIgGC9IgFCyQgDBUAAA5QgMAOgPAOQgQAOgRAKQgSAKgTAAIhbADQgwAAgugOg");
	this.shape_2.setTransform(199.415,65.3554);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#330000").s().p("AfxL3IwlgBQ9cgBsOgDQoCgDgkgDQgYhhgLiBQgNh9gFiLQgEiGgCh9QgDi9AOi9QANi9AJi2QBrgNBuAHIFnAAMApqAABIQlAAQBjAJBfACQAhBgATB3QAQB3AFB6QAFB9AABsQABC5gHDCQgIC/gfDMQhoAohwAAIgLAAgAW9iCQAECXAJCXQAHCWAQCKIBkgBQA+ABA+gBQA8gCAqgDQADgfACgmQAEgkAAglIABhBQgkABglgBIhNgGQgIg3gCgwQgCgyACg0QAagEAiAAQAjgCAZACIAYAAIAShXQAJgpACgwQgzgDgsgBQgtAAgnACQgIgggFgiQgEghAHgiQAsgBAuABQAuAAAuADQAHgdgCgnQgEgoAGglQg1AChDAAIiIgCIiCAAIABEjgACgmyQgLCSAHCRQAHCRAFCWQAICUgLCcIADAAQANgFAhAAQAiAAAnACQAoAAAhgCQAAiJACiUIACkpQAAiXgCiSQg0ACg2gFQgogDgiAAIgWAAgAz7mtIgTDYQgMBvADBuIAGCYQADBRALBKQAKBLATA5QBeAGBdABQBfAABbgXQAYh4AHhxQAFhwAAhtQAAg/gFhJQgDhHgPhGQgPhFgcg7QhXAAhdgGIg+gBQg+AAg8AGgAHEmmIAHGYQAGDdADDzQAXAAAhADQAgADBDgGQACgkgEgtIgDhdQgCgvACgmIA4CLQAdBEAYAvIAlgBIArAAIBLAEQAAhfgDhvIgEjkQAAhzAChwQAChvAFhfQgogJgtAAIhXgBQADAxACA/QACA/gCBAQAABCgCA1QgCA0gFAaQgrh6gXhvIgrjEIhHgBIgdgBQgXAAgYACgAsEmmIAHGYQAFDdAEDzQAWAAAiADQAgADBDgGQABgkgDgtIgDhdQgCgvACgmQAcBIAcBDQAcBEAZAvIAlgBIAqAAIBMAEQAAhfgDhvIgEjkQAAhzAChwQAChvAFhfQgpgJgsAAIhYgBQAEAxABA/QACA/gCBAQAABCgBA1QgCA0gFAaQgrh6gXhvIgsjEIhGgBIgegBQgWAAgYACgAkqmpQgFAWAAAdIAAA9IABA9IAtAAIAQAAIAJABIAXAAQAGCsAACzQACCzgCCuQBFAAAsgCIBbgDQAAicgDiqQgFingEisIAvgIQAZgDAqgBQAChEgEgvQgDg0AAgmIhyAFIhYAAIhYAAQguAAg8AEgA66mlQgWBrgHBmQgFBnAEBqQADBnAJB0QAFBJAHA4QAJA1ANAxIBiADIA5AAQBNABBPgGQALggAFgxQAHgyACg4QAEg2ABguIAChKQACgbgLgOQgMgNgXAAQgXgDgeAAIg/ACQAFAjADAwQAGAvAAAqIg3AHQgPgygIhAQgHg+gBg+QgEg/ACgzQAAg0ADgdIAxgKQANAaAHAgIAFA+IACA2QALAHAeAFQAaADAgAAQAfgCAXgHQAGhFAAg6QgCg8gFg6QgEg6gLg9QgrgHg+gDQg8gFg+ACIgFAAQhCABgrAKgAPLmgQgEDMACDNQACDNAaDIQAIAMAJAJQAHAHAXAIQA3AQA4AAIBsgDQAXAAAVgMQAUgMATgRQASgQAOgQQAAhEADhjIAGjTIAHjeQAChsAAhVQgpgNgyABQgxACgsAGQAFBgAEBsQAFBsACBsQACBtgGBdIg1gVQgKhlgGhdQgFhfAAhgQgChhAChqQgmgNgygCIgJAAQgrAAgnAJgAxuBUQgFgxAAgpQgCgnACgtIAAhtQAAgHAVgGQAVgEAtgDQAXBhAFBtQAHBrgHBmIhZALQgOhJgHgyg");
	this.shape_3.setTransform(195.2375,64.0667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#36803A").s().p("AWYCgQgJiWgDiXIgCkkICDAAICHACQBEAAA0gCQgFAlADAoQACAngHAdQgtgDguAAQgugBgsABQgHAiADAiQAGAhAIAgQAngCAsAAQAsABAzADQgCAwgIApIgSBXIgYAAQgZgCgkACQghAAgbAEQgCA1ACAyQACAvAJA3IBMAGQAlABAlgBIgCBCQAAAkgDAkQgCAngEAeQgqADg8ACQg9ABg+gBIhlABQgQiJgHiXgABzG8QALibgHiVQgFiVgHiSQgHiQAKiSQAsgCA1AEQA1AFA1gCQABCTAACWIgBEpQgCCUAACJQghACgpAAQgngCgiAAQghAAgMAFgA0XGzQgUg5gKhLQgKhKgEhRIgFiXQgEhuANhwIATjYQBagJBdAFQBdAFBXAAQAdA7APBGQAOBFAEBHQAFBJAABAQAABsgFBwQgHBygZB3QhaAXhfAAQhdgBhegGgAyPjfQgWAFAAAHIAABtQgBAtABAnQAAApAGAyQAHAxAOBJIBYgLQAIhmgIhqQgFhugXhgQgsACgVAFgAHbG5QgigDgXAAQgDjzgFjdIgHmYQAogDAjACIBHABIAsDEQAXBvAqB7QAGgaACg1QABg0AAhDQAChAgCg+QgBg/gEgyIBYABQAsAAAoAJQgFBfgCBvQgBBxAABzIADDjQAEBvAABfIhMgEIgqAAIglABQgZgugchFIg5iLQgCAmACAvIAEBdQADAugCAjQgsAEgdAAIgZgBgArtG5QgigDgXAAQgDjzgFjdIgHmYQAogDAjACIBHABIAsDEQAXBvAqB7QAFgaACg1QACg0AAhDQAChAgCg+QgCg/gDgyIBYABQAsAAApAJQgGBfgCBvQgBBxAABzIADDjQAEBvAABfIhMgEIgrAAIgkABQgZgugdhFQgchDgchIQgBAmABAvIADBdQAEAugCAjQgsAEgdAAIgZgBgAj8BYQAAizgHisIgXAAIgJgBIgQAAIgsAAIgCg9IAAg8QAAgeAFgWQA9gEAtAAIBZAAIBYAAIBxgEQAAAmAEAzQADAwgCBDQgpABgYADIgwAIQADCsAGCoQADCpAACcIhbADQgsAChFAAQABiugBizgA5BG2Ig4AAIhjgDQgMgwgJg2QgHg4gGhJQgIh0gEhmQgDhrAFhmQAHhnAVhrQAsgJBBgCIAGAAQA+gCA7AFQA+ADAsAHQALA9ADA7QAFA5ACA8QAAA7gFBEQgXAHgfACQggAAgbgDQgegFgLgHIgBg2IgGg+QgHgggMgaIgxAKQgEAdAAA0QgBAzADA/QACA+AHA/QAHA/AQAyIA2gGQAAgrgFguQgEgxgFgjIBAgCQAeAAAWAEQAXAAANANQAKANgBAcIgCBJQgCAvgDA1QgCA4gHAyQgGAygKAfQhEAFhDAAIgWAAgAPjGmQgXgIgHgGQgJgKgIgMQgbjHgCjOQgBjNADjMQAsgKAwABQAxACAnANQgCBqACBhQAABgAFBfQAFBdALBlIA1AVQAFhdgBhsQgChsgGhsQgDhtgFhgQAsgGAxgCQAxgBApANQAABVgCBsIgHDfIgFDSQgEBkAABDQgOAQgRAQQgUASgTALQgWAMgWAAIhsADQg4AAg3gQg");
	this.shape_4.setTransform(200.1779,65.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	// Ebene_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006600").s().p("Aa6KDIuCAAQ49gBqWgDQmzgCgfgDQgUhSgJhuQgLhqgEh1QgEhygChpQgCihAMifQALihAIiaQBagLBdAGIEwAAMAjTAABIOCAAQBUAIBQABQAdBSAPBlQAOBkAEBoQAEBpAABcQACCdgGCkQgIChgZCuQhZAhheAAIgKAAg");
	this.shape_5.setTransform(195.2434,64.3333);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.3,-11.8,461.1,152.10000000000002);


(lib.end_social = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,empty:1,full:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjcHwIA/jDIA0ieIBqiLIgNgbIhMjCIBMjFICvhRICyBRIBMDFIhMDCIgNAaIB1CMIAyCeIA9DDgAorHwIA9i8IAVhAIBchdIgagbIg1iKIA1iLIB9g8IBfAeIBMDEIhZBqIg9C9Ig8C8g");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AjcHwIA/jDIA0ieIBqiLIgNgbIhMjCIBMjFICvhRICyBRIBMDFIhMDCIgNAaIB1CMIAyCeIA9DDgAorHwIA9i8IAVhAIBchdIgagbIg1iKIA1iLIB9g8IBfAeIBMDEIhZBqIg9C9Ig8C8g");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjcHwIA/jDIA0ieIBqiLIgNgbIhMjCIBMjFICvhRICyBRIBMDFIhMDCIgNAaIB1CMIAyCeIA9DDgAorHwIA9i8IAVhAIBchdIgagbIg1iKIA1iLIB9g8IBfAeIBMDEIhZBqIg9C9Ig8C8g");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-49.6,111.1,99.30000000000001);


(lib.end_natur = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,"empty":1,"full":2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhnILIAKiPIhpjDIh6AmIibhCIhCibIBCicIB/g+IgThUIBBidICdhBICbBBIAeAhICIgxICdBBIBBCdIgMBKIBaA4IA0B7IAOAhIhCCbIiaBBIhmgXIiPCKIgJAKIASCPgAAxCwIgIADIARBUIBrhJIgjgsgAiWCOIBBBgIAMAKIAHhRIhIgng");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhnILIAKiPIhpjDIh6AmIibhCIhCibIBCicIB/g+IgThUIBBidICdhBICbBBIAeAhICIgxICdBBIBBCdIgMBKIBaA4IA0B7IAOAhIhCCbIiaBBIhmgXIiPCKIgJAKIASCPgAAxCwIgIADIARBUIBrhJIgjgsgAiWCOIBBBgIAMAKIAHhRIhIgng");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhnILIAKiPIhpjDIh6AmIibhCIhCibIBCicIB/g+IgThUIBBidICdhBICbBBIAeAhICIgxICdBBIBBCdIgMBKIBaA4IA0B7IAOAhIhCCbIiaBBIhmgXIiPCKIgJAKIASCPgAAxCwIgIADIARBUIBrhJIgjgsgAiWCOIBBBgIAMAKIAHhRIhIgng");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.1,-52.2,108.30000000000001,104.5);


(lib.end_dollar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,"empty":1,"full":2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFH7IAQhkIgjACIgFBgIibAAIALhmIgigCIiigxIAaibICEAxIA0AJIATi6IgHgCIiZhEIhCiCIBhiwICdgyIACiUICaAAIgYCEIAjgCIAGiDICGAAIgMCOICNAnIgcCdIh6guIgDAAIgQC5ICLA0IBMCXIhYCbIiVA1IgDB9gAgRELIAtgCIAHieIgsgKgACJDAIgBA3IADgBIAeg9Igbg2gAAFjlIgHCnIAsAIIAHiwgAiHjUIgjA6IAXAzIAXAJIAKhiIAAgZg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgFH7IAQhkIgjACIgFBgIibAAIALhmIgigCIiigxIAaibICEAxIA0AJIATi6IgHgCIiZhEIhCiCIBhiwICdgyIACiUICaAAIgYCEIAjgCIAGiDICGAAIgMCOICNAnIgcCdIh6guIgDAAIgQC5ICLA0IBMCXIhYCbIiVA1IgDB9gAgRELIAtgCIAHieIgsgKgACJDAIgBA3IADgBIAeg9Igbg2gAAFjlIgHCnIAsAIIAHiwgAiHjUIgjA6IAXAzIAXAJIAKhiIAAgZg");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFH7IAQhkIgjACIgFBgIibAAIALhmIgigCIiigxIAaibICEAxIA0AJIATi6IgHgCIiZhEIhCiCIBhiwICdgyIACiUICaAAIgYCEIAjgCIAGiDICGAAIgMCOICNAnIgcCdIh6guIgDAAIgQC5ICLA0IBMCXIhYCbIiVA1IgDB9gAgRELIAtgCIAHieIgsgKgACJDAIgBA3IADgBIAeg9Igbg2gAAFjlIgHCnIAsAIIAHiwgAiHjUIgjA6IAXAzIAXAJIAKhiIAAgZg");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-50.6,74.1,101.30000000000001);


(lib.pillar_dot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,mini:1,small:2,middle:3,big:4};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Ebene_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AkIEJIAAoRIIRAAIAAIRg");
	this.shape.setTransform(0.325,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

	// Ebene_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC33").s().p("AgxAyIgVgyIAVgxIAxgVIAyAVIAVAxIgVAyIgyAVg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC33").s().p("AhbBcIgmhcIAmhbIBbgmIBcAmIAmBbIgmBcIhcAmg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC33").s().p("AiCCDIg3iDIA3iCICCg3ICDA3IA3CCIg3CDIiDA3g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CC33").s().p("AivCwIhKiwIBKivICvhKICwBKIBKCvIhKCwIiwBKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-25.8,53.099999999999994,53);


(lib.pillar_balken = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00CC33").s().p("ApQH+IAAv7IShAAIAAP7g");
	this.shape.setTransform(59.275,50.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pillar_balken, new cjs.Rectangle(0,0,118.6,102), null);


(lib.card_content = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ID_0001:0,ID_0002:1,ID_0003:2,ID_0004:3,ID_0005:4,ID_0006:5,ID_0007:6,ID_0008:7,ID_0009:8,ID_0010:9,ID_0011:10,ID_0012:11,ID_0013:12,ID_0014:13,ID_0015:14,ID_0016:15,ID_0017:16,ID_0018:17,ID_0019:18,ID_0020:19,ID_0021:20,ID_0022:21};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_1 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_2 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_3 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_4 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_5 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_6 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_7 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_8 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_9 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_10 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_11 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_12 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_13 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_14 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_15 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_16 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_17 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_18 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_19 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_20 = function() {
		this.gotoAndStop(lib.content);
	}
	this.frame_21 = function() {
		this.gotoAndStop(lib.content);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1));

	// verlauf
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0.31,0.882],0,128.3,0,-128.2).s().p("A/nRHQhvAAhOhOQhOhOAAhvIAA+CMBHlAAAIAAeCQAABvhOBOQhOBOhvAAg");
	this.shape.setTransform(229.1,348.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(22));

	// Ebene_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAIUAjzIgDgBMgn4AAAQhvABhOhPQhOhNAAhwMAAAg/PQAAhvBOhNIAAgBQBOhOBvAAMA/PAAAQBvAABOBOQBOBPAABuMAAAA/PQAABvhOBOQhOBPhvgBIpDAAIgEABg");
	mask.setTransform(229.1,229.15);

	// can_diesel_fuel_gallon_jerry_oil_icon_123346.svg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("AXSPOIAA61IByAAIAAa1gABzPOIAA61IByAAIAAa1gA5DPOIAA61IBzAAIAAa1gAFYEeIAAnJIQHAAIAAHJgAMfgDQgaAYAAAkQAAAkAaAaQAZAZAkAAQAkAAAYgZQAZgaAAgkQAAgjgZgZQgYgZgkAAQgkAAgZAZgAFYkdIAAnKIQHAAIAAHKgAMfo/QgaAYAAAkQAAAkAaAZQAZAaAkAAQAkAAAYgaQAZgZAAgkQAAgjgZgZQgYgZgkAAQgkAAgZAZgA62tbIAAhyMA1tAAAIAAByg");
	this.shape_1.setTransform(223.35,235.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#532900").s().p("AVfRBIAAqwIwHAAIAAKwIlYAAIAA8pI1eAAIAAcpIlYAAIAA8pIhzAAIAAlYMA5TAAAIAAFYIhzAAIAAcpgAXSPOIByAAIAA62IhyAAgABzPOIByAAIAA62IhyAAgA5DPOIBzAAIAA62IhzAAgAFYEeIQHAAIAAnJIwHAAgAFYkeIQHAAIAAnKIwHAAgA62tbMA1tAAAIAAhyMg1tAAAg");
	this.shape_2.setTransform(223.35,235.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424242").s().p("Ag8FcQgZgaAAgkQAAgkAZgZQAZgZAjAAQAkAAAZAZQAZAaAAAjQAAAkgZAaQgZAZgkAAQgjAAgZgZgAg8jhQgZgZAAgkQAAgkAZgYQAZgZAjAAQAkAAAZAZQAZAZAAAjQAAAkgZAZQgZAagkAAQgjAAgZgag");
	this.shape_3.setTransform(309.3,213);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF098").s().p("AigCSQA3AQA6gPQA5gQAggyQAjg8gShDQgRhCg8giQg4gjhGASQhCASglA8QgbAwANA9QAOA5ArApIm/L+IBuv1QAQh7BHhiIGwo8IKjGDIkfKiQguBwhqBNIs5JLg");
	this.shape_4.setTransform(197.25,237.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#72B6D3").s().p("ACfKbIs9nhQgSgIAHgUQAagxIDrJQHAiuBnEfQBmEfCrgKInxNsQgJAIgCAAIgGABQgHAAgEgEg");
	this.shape_5.setTransform(257.5147,114.8386);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#62355C").s().p("AjbINQghgYgLgkQgMgmAUgjIGds2QAGgNgLgHQgLgCgLAHIkbE3Qh0B/ieBEQibBCirAAImiAAQgtAAAAgsQAAgSAOgNQALgOAUAAIGiAAQCZAACMg7QCOg+BmhxIEck3QAbgdAogFQAlgEAiAYQAhAWAJAmQALAkgSAmImcM1QgHALALALQALAHAMgLIIQp/QAagdAmgHQAkgHAhAUQAhAUAOAkQALAkgOAlIhdDiQgEAJAIAJQAJAJAJgJICBhrQDli6EjAAIAfAAQAtAAAAAtQAAAsgtAAIgfAAQkIAAjLCoIiABtQgbAWgkAAQgjAAgfgUQgdgRgLgmQgJgkANghIBdjiQAFgJgJgJQgLgGgLALIoOJ0QgkAoguAAQgiAAgYgSg");
	this.shape_6.setTransform(270.125,325.1901);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Aq7WhQikgBiHhyQiIh0geikMgG6gm2MAlwAAAMAGxAmHIFdAAIAIAvQAeCkhfB0QhgByikABgAnOVDIa6AAQBvABBIhKQBIhJgChtI9ZAAQALCehpBhgAwvQWQAXB9BnBYQBoBZB+gBQB9ABBJhZQBJhYgXh9IgIgvIZZAAMgGhgkpMgi1AAAg");
	this.shape_7.setTransform(241.5495,227.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFB0CA").s().p("AgmAbQgagHgDgSQgFgYAXgKQAPgPAZABQAYgBAUAPQAdAKAFAYQADASgaAHQgOAVgZgBQgYABgVgVg");
	this.shape_8.setTransform(219.6787,215.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#45413C").s().p("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");
	this.shape_9.setTransform(222.6955,218.1592);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AstFwIgCAAIBQk8IAAgFIgCgMIAVhGIABgFIAJgqIADgGIADgDIANgvQACgHADgGQAIgVAFgSQALgKAGgIQA8ArBPAAIACAAQBugKAHhyIABABQAIgvgRgjIAFAAQAQAAAOgGIgCgFIgBgDIAOAAIgCgKIgCgOQAGAAAEAEQAEAEABADIgch1QgCgJACgEQAMgEAOAAQATAAARAEIAaAfIAUARQAwAqASA4IABABQgBgHAEgDQACgDAFAAIACAJIABAFIAQAJIgCAOQAPALATAAIACAAIAIAFIAFADIAGACIAFAAQAOAFAQAQIAFACIAGACIALAAIAIAEIAIAHIADADICKBGQAFACAGgBIAHgHIAOAIQABAGAIAEIAAACQgBAFADAGIAHAKIAFAEIIgF3QAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIAeAQIBaBAQgFBNAABNIppmhQh+hUh/g8Qhxgzh1AAQh4AAhfAzQiPBfgnCgIhiGfQgxhYARhMg");
	this.shape_10.setTransform(232.6811,198.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E5F8FF").s().p("AFiLQIgDgBQhGgHgzg+IgCAAQjPjwhmknQBdgWA2hKQA6hPgdhuIgPhWQgBgFgFgEQgFgFgGAAQgFAAgEAFQgDAEABAFIAPBXQAbBig1BHIAAAAQgyBJhfARIhjAHQgGAAgCAFIhfCLQhQBwijAAIgJAAQhDAAhEgiIABACQhAgogihAIgBgBQgFgHgCgGIBimeQAnihCQhfQBegyB4AAQB2AABwAyQB/A8B+BWIJqGfIgBAHIACgBQgVCGg0B+QhWDBifCGQgqAlg0AAQgQAAgRgEgAqpB0Qg7ATAfBBQACAGAHADQAEADAGgCQAFgDACgEQABgFgCgGQgTgmAkgLQAFgDACgEQABgGgCgFQgEgGgEgDIgGgBIgGABgAjDjEQgXAKAEAZQADARAaAIQAVAUAZAAQAZAAAOgUQAagIgDgRQgEgZgdgKQgVgPgZAAQgZAAgOAPgAmqlbQgQAGAEAUQACAPATAKQALAPARAAQAPAAAHgPQARgKgDgPQgDgUgTgGQgMgJgQAAQgQAAgHAJgAmqkeIAEACIgGgFQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABABgAm0lmQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIAEgEIgDABgAlwlkIgDgDIgDAAgAmCrJIgBgHIAFgDIAIAAIABAKIgNAAg");
	this.shape_11.setTransform(234.325,231.5862);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE5EE").s().p("AKyEuIgCgHQgcg/gdg0QANAGAIAAQAOAEAJABIAZAVQAEADAEACQAAACAEADQArAnAIAuIABAGIAEAYQgkgXgqgMgAJvEgQgDgPgfgjQhJhfhqgbIAAgEQgBgGgFgEQgFgEgGAAQgkhHgUgiQAHABAHADIAFAAIATAAIAHAEQAFAFAFAAIALAAQAMAIAKABIAJAFQAEACAGgBIAHgGQAdATAhAbQAKAGAIAKQAHADAEAHQAPAMAJANIAdAqIgCAAQgCAEABAEIACAGQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAQAgA4AfBEQgTgFgRAAgAIoBsIAEAEIgGgKgAIFBNIAKAEIABAGIADAEIACAAIAGAAIAAABQABAEADAFIALAAIgbgYIAAAEIgMgOgAFEBmQgXgpgegdQhDhDhOgTIgDgHIgBgCQgphFguguQAnADAkAKIALAEQAJAEAQAGQAGALANABIBMA4IAzBDIAFAGQADABAEAAIACAAQATAfAtBWQgWgGgYAAgArsgsIgEgBQgyibB4hQIAOgNIAXgHIACgBQBSgrBkAKQBdAJBHAwIAGADIAFAAQCMghB5BkIABAEQABAGAFAEQADACAFACQAAADADACIACACQA0AtAtBMQglgHggAAIgNgPQiEhqiHATIgDgCIgTgQIgdggQgEgEgEgBQgUgHgcAAQgVAAgQAHQgEAAgBAEIgFAFQgQgCgMAAQhogKhXAoQhjA3gOBfQgCgEgDgCg");
	this.shape_12.setTransform(233.8419,166.0565);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCCDD").s().p("AK9FSIgDgCIgfgOIobl0IgGgHQgEgFgGgCQgGgDgEADQgEADgCAEQgHgEgCgGIgNgIQACgFgCgFQgEgFgFgDIiIhGIgKgIIgDgDIgLgGIgHgBIgIAAQgWgSgUgGQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgBAAQgNgLgMABIgBAAQgKAAgGgGIgCgBIgMgHQgUg/g2guQCHgUCFBrIANAPQAfAAAmAHIAFAIQAKAbAbAjQAFAEAFADQAFABAFgDIAFgIQABgGgEgFQgWgcgJgVQBOASBDBFQAfAdAWAoQAYAAAWAGQABAEADAEQABAFAFACQAEADAEAAIALAAQAFAAAEgEIADgGQBpAbBJBeQAfAjADAPQARAAATAGIAEAIQABAFAHAEQAGADAEgCQAFgBADgGQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQArANAkAWIACALIAKA9QAPBTAKBFgAoygkQhEAAgzgkIAAgDIAAgBQgBgDgCgDIgDgEQglgcgUgfQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIgBgCIgDgCIgGgIIgFgbIgBgEIgJgPIgCgCQAOhfBig2QBYgpBnAKQAMAAARADQgGALADARIABABIAbBsIgBAAQgNAHgOAAIgPAAQgTgYghgSIAAgCQhLgigyAkIgBAAQgYAWACAXQAAAWAbAYQAFAEAFAAQAFAAAFgEQADgEgBgGQgBgGgFgEQgNgLgBgLQABgOAOgNQAngYA4AaIgBAAQAdAPAMAVIAAABIADAHQAVAegIAsIAAACQgGBdhaAKgAIAhSIAJAAIABAGIAMAJIABAKQgIgMgPgNgAH0hcIAKAAIACAKQgFgHgHgDgAHihrIAQAGIACAJQgHgJgLgGgAjjjeIgBgFIgDgJIAEAAQAHACADAEQAFAEAAAHIAAAGgAmdjtQgBgGADgEQADgEAGAAIACAOIgIAAIgFADg");
	this.shape_13.setTransform(236.9,183.026);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFCE5").s().p("Ah/gRIgSABIgFgFIgDgCIgGgEQgPgRACgQIAMgRQAEgBAPAFIEbBoQAFABAFgCIAWATIgWAYQgCABgBADIAAABg");
	this.shape_14.setTransform(148.143,170.5173);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFACF").s().p("AiShxIASgBIEUBgIgPAmIABgBIgFAOIgCACQgEAUgJAZIgCAGIgDAEIgEAZg");
	this.shape_15.setTransform(148.3,180.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AnWVDQBphhgLieIdZAAQACBthIBJQhIBKhvgBgAu5TrQhnhYgXh9MgGpglYMAi1AAAMAGhAkpI5ZAAIAIAvQAXB9hJBYQhJBZh9gBQh+ABhohZgAGlLsQCliJBWjHQA1iAAWiJIgBgBQAAhTAEhSIABgGIgBgEQgIhOgShkIgLg8IgGgjIgBgGQgJg1gxguIgBgFQgBgGgFgFQgFgEgGAAIgEAAIgYgUQgGgFgFAAQgIAAgMgEIgGgBQgHgBgLgGQgFgDgEAAIgTAAIgGAAIACACIgCAAIgEACIABABIgdgqIgCgKIgLgJIgBgFIgKAAIgBgKIgKAAIgCgKIgQgGQghgbgdgTIAAgBQACgGgDgGQgDgFgFgDIgLgFIgHgCQgEAAgHgFQgFgEgGAAIgJAAQgPgMgIABIgRAAQgRgFgZAAIgDAAIgwg/IgDgCIhRg9QgDgCgDAAIgEgGQgDgFgEAAQgTgFgLgGIgLgEIgDAAQgxgPg4gBQgDgEgFgEQgBgDgFgFQiFhziaAiQhLgxhhgJQhsgLhZAvIgWAIQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIgQAMQiHBZA4CvQAEAQANAEIACADIgBAAQgEAEABAFQADANALASIAEAFIAGAFIADAFIkAhdQgogQgIAUIgBAAIgNASQgCADAAADQgFAgAcAfIAFAEIAEADIEMDzIgUBDQgBADABADIACANIhOE3QgWBbBCBsQAnBHBIAtQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQBNAkBIAAIAJAAQCxAABVh5IBciGIBRgGQBqEtDUD2QA8BJBUAIIgBAAQBUATBBg5gAHvn4IAAgDIgCgCgAHioLIgBgFIgFgFgAHXoQIgBgKIgBgDIgFgCIgFAAIgBgFIgBgDIgEgCIgKAAg");
	this.shape_16.setTransform(242.3042,227.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC0000").s().p("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");
	this.shape_17.setTransform(228.725,227.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhWd/QAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIjoAAItwBXIhmg2IgSgyIGMuNIAMgQIAHgSIg2mRIAthgIhZgpIAvhMIglhLIgSgZIgCAAQgIgFgKACQgvAUgdAPIgDABIgKAGIhLAmQgKAFgKgDQgKgDgEgKIgRghQgFgJAEgLQADgJAJgFICahNQgJgQgEgXQAYgVATgaQAIgMgDgUQAAgGgDgFQgMgeADggIgDAAQgwASgeALIgCACIgMAFIhNAiQgKAEgKgEQgKgEgEgKIgPgiQgDgIADgKQAFgKAJgEICnhHQAXgKAYABIACABQATAAASAIIAPAHQAKgJAKgKIgjhvQgDgKgIgFQgIgGgKAAQgyAMgeAKIAAAAIgDABIgMAEIhRAaQgJADgKgEQgJgFgDgKIgLgkQgEgKAGgJQAEgJAKgEICug2QAXgHAXADIACAAQARADAQAHIgxiPIA/gCIAAgsIgIgZIgFgHQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgEgOIgBgCQgJgGgKAAQgxANgfAKIAAgBIgDABIgMAEIhQAbQgKADgKgFQgIgFgDgKIgLgkQgEgJAFgKQAFgJAKgDICtg3QAXgHAYADIABABQAUACASAKQASAJANAPQAMAMAGAQIABADIABABIACAIIACAGIAVgfIgPh4QgEgHgGgFQgIgGgKAAQgyANgfAJIABAAIgDABIgMAEIhQAbQgLADgJgFQgIgFgEgKIgLgkQgDgJAFgKQAEgJALgEICtg2QAWgHAYADIACAAQAUADARAKQAPAIAMAMIgSiCIBoAaIgHgVQgOgagLgeIgCgHQgIgFgKAAQgxAMgfAKIAAAAIgCABIgMAEIhQAaQgLADgKgFQgIgEgDgLIgLgjQgEgKAFgJQAFgKAKgDICtg2QAXgIAXADIACABQAVADARAJQARAJAOAQQAMAMAGAPIAAADIABABIADAIIABADIgRihQgwALgeAKIgCABIgMADIhRAbQgKADgJgFQgJgEgDgLIgLgjQgEgKAGgJQAEgKAKgDICug2QAWgIAYADIACABQATACASAKQARAJAOAQQANAMAFAPIABADIABABIACAIIAXBFIgnj9IgEgLQgDgKgIgGQgJgFgJAAQgyAMgeAKIAAAAIgDABIgMAEIhQAaQgKADgKgEQgJgFgCgKIgMgkQgEgKAGgJQAEgKAKgDICug2QAXgIAXAEIACAAQAUADARAKQASAJAOAPQALAMAHAQIAAACIABABIADAIIA8C+IAeBDIABADQAFACADgDQAEgCACgDIgIgpIgMhDIgFgfIAAAAIgCgKIgFgHIAAgRIgBgHIgHgjIAAgBIAAgBQgJgXgCgiIgBgGQgDgYgLgPIgEgMQgIgjABgsIACgDIgCgMQgBgJgIgHQgHgHgKgBQgyAGghAGIABAAIgDAAIgMADIhTAPQgKACgKgGQgIgGgCgKIgGglQgCgKAHgJQAFgIALgCICyggQAYgEAXAGIACABQATAFARAMQAPALAMARQALAOADAQIAAADIABABIACAIIAbCVQASAcAPAeQAMAWAPAQIgGhBIgDgfIAAgBIgEgpIgXj3IgBgDIgBgCIgCgGIgEgGQgHgIgJgCQgzACggADIgEABIgLABIhVAJQgKABgJgHQgHgHgCgKIgDglQAAgLAGgIQAHgIAKgBIC1gQQAYgDAXAIIACABQARAHAQANQAMAKAJANICQAxQAYAHARAQIACACQANANAJATQAJASABAUQAEARgFAPIgBADIAAACIgCAIIgfBdIA1D1IAHjlQACgYgCgPIABAAIADhLIAChAIAAgjIABgpIAAAAIAGioIABgxIABgTQAAgLAKgHQAKgIAOAAIAxgCQAOgBAJAHQAKAHAAALIgBAcIgBAeIgJEdIABACIAAABQADARACAUQACAUAJAOIAAARIAAAFIAOCpIADABIAAAtIAAAGIAAAFIAFgeQAGgeAFgiIAOhKIAAgBQAEgPADgXIAsj3IACgIIABgBIAAgDQAEgQAKgOQALgQAQgMQARgMATgFIABgBQAXgGAZAFICyAfQALACAFAIQAHAJgCAKIgHAlQgBALgJAFQgIAGgLgBIhTgQIgMgCIgDgBQgggGgygGQgKACgHAGQgIAHgBAKIgSBmQAZFUgDBFIAAAGIAsgCQAJgWAFgcIABgGQAGgaANgTQALgLACgWQABgOAFgLIAGgOIADgJIAEiTIABgIIAAgCIAAgCQABgRAJgPQAJgSAOgOQAOgOASgIIACgBQAVgJAZAAIC1AFQALABAHAHQAIAIgBAKIgBAlQAAALgIAHQgHAHgLAA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40wIAEgMIAAAAgAMW17QAFABACAFQACAFgBAFIgEALICAAmIAMgiIiug0QgMgDgMAAIAEAmQAIAAAIACIANAEIAEgMIABgBQACgEAEgDIAGgBIAEABgAjg17IABABIACAKIANA2IAJgaIAWhEQgBg0gEgwgAqe2tIitA3IALAiICBgoIgEgLQgCgFACgFQADgFAEgCQAFgCAFADQAFACACAFIAAAAIAFAMIANgEQAHgCAJAAIADgnQgMABgMADgAo01vIAGAKIgEgLgApv2EIABAAIgBgIgAps2sIAPAJIAFABQAMAOAKAPIAGgDQgIgNgMgKQgNgJgPgFgAlA2jIADAQQgEhhgChjIAAgGIAAgFQANAAAKAFIgFg2IgLABQgGAAgEgDQgEgEgBgFQAAgGADgEQADgEAGAAIALgBIAAgEIgngMgAkK4DIAHATIAHAOQAHAMABASQACAPAGAJIAxiUQgCgHgEgFQgDgGgBgFIgBg0IhCgYIgEgBIgLgEIgCgBgAJ/33QAFABADAFQADAEgBAGIgCALICDAXIAHgkIizgeQgLgDgNACIAJAlQAIgBAIABIAOACIACgMIAAgBQABgFAFgCQADgCADAAIAEAAgAIv3UIAIgGIgDgJIgFAPgAIT3vQgLAKgGAPIAAAAIAXgaIAPgPQgLAGgKAKgAm+31IADAFIAKASIgFgZgAnl4tIABABIACAOQAMAJAKALQADgDAEgBIALgCIgHgkgAGQ4TIAJgSIgIgBgAiL5BIAEAPIAIADIALgjIgbgJIAEAagAok5+IizAfIAHAkICEgXIgCgMQgBgFACgFQADgEAFgCQAFgBAFADQAEADACAFIAAAAIADANIANgCQAIgCAJABIAJglIgKgBQgIAAgHACgAGh5bQgIAMgFAPIARACIADgFIAGgGIAGgGQAKgJAIAKIgNgiQgOAIgKANgAn85RQAHAFAGAHIAngIQgGgPgLgLQgMgLgOgGgACp5IQAIgMgCgVgAIL5yQAFAAADAEQAEAEgBAGIAAAMICGADIABgkIi1gFQgMAAgMADIAOAjQAIgCAJAAIANABIAAgNIABgBQABgFAEgDQADgEAFAAIABABgAiY6KIACANIABAGIAoALQAAgPgEgPQgEgPgKgNgAjM7EQAFACADAFQACAEgBAFIAAAAIgDANIADABQATgaAPA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DIIABAAIgUgjIhhi0IAKgEQAEgDACgGQACgFgDgFQgDgFgEgBQgGgBgFACIgJAGIgSggIAhgRIAAABICOEFIASAjIABAAIBPCUIgYAigAFREuIAAABIAAAFIgFAIgAGVDUQADgCAAgEIAGgPQADgJADgOQAEgYABghQABgQgKACIgBAAIAMgkIBgj+IAEACIAOgNQgFgEgGgCIACgHIAAAAIAjALIgHATIgLAKIAGACIgCAEIgJgEQgFgDgGADQgEACgCAFQgCAFACAFIABABQACAEAEACIALAEIhDCyIgGAGIADAEIgCADIgOAlIAAAAIg4CWIACgTgAKQAjIAOAGIgeAcgAjgh8QABgQAIgOIAfAZQgCAIAAAJIglATQgDgQACgPgAjIivQAIgJAMgGIASgKIADAGQADAGAEAEIABAEIAAABIAGALIgMAHQgIAEgFAGgAm7jGQgGgIgOAFIgFACQABgMAHgLIAfAZQgDAJABAJIgBABQgFgLgGgJgAh+i7IABgBQACgLABgMIABgLIBjg2IARAgIh2BAgAm+jzQAIgHAIgFIAZAcIgKAIgAI6joIgjgMIgBgFQAAgGgEgFIAdgeIAHAMQADAIACAIQAEANAAANIgBAGgAl1kCQgCgFgFgCQgGgCgEADIgCAAIgMgFICJhLIARAgIh2BAgAHzkhIgMgFIAEgMIAAAAQACgGgDgEQgCgFgFgCQgFgBgFADQgFACgBAFIgEALIgigNIAEgIQADgFgBgFQgDgPgOgHIgHAHIgUATIg2gVIANghICpBAQAMAEAJAHIgaAcQgHgFgIgDgAB2pZIAFgkIAKABQAFABAFgEQAEgDAAgGQAAgFgDgEIAAgBQgEgDgFgBIgKAAIAAgEIATjJIAEglIABAFQAFAYAQAMQADADAGABIABAAIgaEEIAAABgAhipYIhFkiIgCgGIACADQACACAAADIABAFQACADADAAQAJABAAgJIADhKIAAgBIAOA5IgBAAIAKAnIAvDIIgLACQgFABgEAFQgCAEABAGQACAFAEADQAGADAEgCIALgCIAJAjIgkAIgAjIyHIgCgHQgFghgMgZIgFARIgIAZIACAcIgmimIAjgHIAwDOQgGgUgJgSgAjuzfIAAgBIAIgXIgDgHQgHgSgEgTIACAaIAEApIgBAAgACvyhIAlgCIgDAaIglABgADSzGIgfABIACgYIAGgBIADAAIARgBIACAAQgCgkACgoIAAgNIARABIgNCUIgDgjg");
	this.shape_18.setTransform(226.75,230.6441);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BA2F4E").s().p("AiEGlIALtJID1DPIjIDCIDRG4g");
	this.shape_19.setTransform(234.175,415.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EAEACD").s().p("AkqKtIjSm4IDIjCIj1jOIMMigIFIlyIpsVag");
	this.shape_20.setTransform(277.45,388.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E69D6C").s().p("AmGhPIMNAAIsNCfg");
	this.shape_21.setTransform(261.075,365.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D34D6B").s().p("Ah3GlICOm4Ii1ioIE9jpIgMNJg");
	this.shape_22.setTransform(206.125,415.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFC").s().p("AC5LMIri2XIHzGvIJgCgIk+DoIC2CoIiPG4g");
	this.shape_23.setTransform(166.625,385.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4E5F6A").s().p("AtIM9Qh4iwhhooIWFuhIgBAIIgDAMIghCMILjWYI0hAAIgOABQAfAJAjAAIIkAAQilAgi/AXg");
	this.shape_24.setTransform(79.3,380.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFC8A3").s().p("AAFKHIJiAAIAACggAoPl0IhXmyID4CTIg1DoIAzBqg");
	this.shape_25.setTransform(160.55,292.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DFD550").s().p("AkyBjIAAhUIDBhxIFEAAIBgDFg");
	this.shape_26.setTransform(279.025,201.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AE5AKIErhPIAQA9IkqBPgAp0gJIAQg9IEsBQIgQA9g");
	this.shape_27.setTransform(226.95,222.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFAA71").s().p("AntQBInzmvIAhiMIADgNIBZmBIg0hpIA1joICtroIJBDjIDjAAIAEcfgArCmwIDmEVIFUA2IAslLIAAhTIjDhyIlEAAgAF6mwIJnAAIiYD8ImABUgAHdkyIARA9IErhQIgQg9g");
	this.shape_28.setTransform(210.5,254.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FAF072").s().p("ApdKxIhBmfICxmxIhWiKIGbmGINHiTIg0SAIjkAAIpAjjIitLogAjHKsIBgjFIFDAAIDDByIAABTg");
	this.shape_29.setTransform(159.725,142.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#364956").s().p("ANSMMQi4AXmGg9Ig2gKIz7AAIJs1aIgWi0IWPM8QCzMpjCAAQgqAAg9gng");
	this.shape_30.setTransform(376.3114,383.9283);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FD8839").s().p("AiOOyIgE8fIHQhEIHLBEIB0IFIA0DoIgzBqIAyGiIAWC0IlIFygAB4pSIAABTIBPFQIF/hUICYj8IhgjFIlFAAgArejqIjnkVIJnAAIgsFLgArRmVIErBQIAQg8IkrhRg");
	this.shape_31.setTransform(236.325,262.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E39F71").s().p("AhGCIIg0jnID1iSIhVGwIifAzg");
	this.shape_32.setTransform(337.95,235.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DACE39").s().p("AilE+InLhEInSBEIA1yAIMeCTIUyH4IqjCpIiaEgIhCGfIj1CSg");
	this.shape_33.setTransform(330.65,142.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#004D87").s().p("Ax2AFIolAAQgjAAgfgIIAOgBIUiAAIBaAAIEMAAIEJAAIDqAAIT9AAIA1AIIgWABg");
	this.shape_34.setTransform(228.075,457.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FCBFA3").s().p("AlxlrIDvg0IB4hYIALCOIF3FEIAAA6IrvHjg");
	this.shape_35.setTransform(267.65,326.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F7CBB3").s().p("AlEBXIAChnIgXhXIE0j+IALiUICFBgIDjAwIABACIALgCIgHNjgAFXgeIAAgCIgGAAg");
	this.shape_36.setTransform(196.125,326.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CE507F").s().p("AEVJnIAAolIhKkXIACiPIBQi3IAAhLIKXGjIAAMqgAuzJnIGEvQIIUjzIAOBcIBYCPIALBgIjYFfIAAIZg");
	this.shape_37.setTransform(135.175,396.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("ADaEqIAClnIBTAAIgDFngAkfElIAClmIBTAAIgCFmgABbiKIFDiYIAUAuIlCCXgAmxj9IAUgsIFBCfIgWAsg");
	this.shape_38.setTransform(233.275,178.975);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F78A74").s().p("AGNPDIjjgwIiGhfIkyjcIgJgGIiCi8IgCgGIAqucIDZm4II0BDIgOdGgACSCOIBTABIAClmIhTAAgAAAmTIFACeIAWgrIlBifg");
	this.shape_39.setTransform(189.825,194.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B2456E").s().p("AFaKHIAAojIiwj+IBliOIhXiVIFfD5IFHNLgAtdKHIAAspILxnkIAAA6IBiCRIhPCPICSDZIiVCkIAAI2g");
	this.shape_40.setTransform(316.175,393.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FC8467").s().p("AmvujIMKAIIBjHnIgEBDIgHBxIgICbIgREDIhzD6IhLCjIknDaIh5BZIjuA0IgLACgAi/ByIBTAAIADlnIhTAAgAk9lCIAUAtIFCiXIgUgug");
	this.shape_41.setTransform(274.225,197.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#006600").s().p("AgCAAIAFAAIAAABg");
	this.shape_42.setTransform(230.125,323.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8B7355").s().p("EgIjAhQIAAoZIDZlgIgMhgIhYiPIgOhcIgRhsIBEirIgnhfIgUipIBgjVIhdjUIBZkwIh/mMIBvtoIFpkRIIzjeIgHLMIo0hDIjZG4IgqOdIACAGICCC7IAJAHIg8BeIBLB2IgCDSIg2BUIAeBzIAWBWIgCBpIAABKIhPC3IgCCQIBJEXIAAIlg");
	this.shape_43.setTransform(176.9,245.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B79770").s().p("EACgAhQIAAo2ICWilIiTjZIBPiPIhiiRIAAg6IAAg7IAChdIBSh0IijjyIBplrIgpghIByj5IARkFIAJibIAGhwIAEhEIhjnnIsKgHIAHrMIKXEBIGdGjIBGQHIiWGtIBeE/IhoDTIBlDWIgaCpIgsBdIALAUIBXCVIhlCOICvD/IAAIjg");
	this.shape_44.setTransform(290.9,245.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7B0B12").s().p("AiLg+IEXA4IkRBFg");
	this.shape_45.setTransform(232.05,264.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#99050F").s().p("AiLAYIERhWIAGB9g");
	this.shape_46.setTransform(204.65,264.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6B0000").s().p("EggAAJ7QiVgog3AEIgOABIgHAAIABgBQixgOiWoOIP7m/IFZPAIjaAGQCCAQkIAlQhPAMhEAFIAAADIgMgCQhDAGg4AAQhsAAhHgUgAr/I8Il2wuIEshMIL2KfIL/p6IAVh1ITsFgQMfKSjUBVQjUBVDbAlQDcAlvVAmgAu/I8IlrwAIBRgVIF1QVgAxqI8IlpvVIBYgXIFSPsg");
	this.shape_47.setTransform(228.1551,400.9686);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F1AD88").s().p("AlpM9IHakIIDRAAIAGCAIkSBYIEYAmIALD1gAlpgDIA4AAIAAA0IE/AAIAAg0IBOAAIAAhOIBtAAIAAhiICFAAIgMGBIqrDOgAlpksIAAhsID/nmIHUipIgYL7g");
	this.shape_48.setTransform(185.25,189.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AjEWgIl1wWIBkgZIF2QvgAmJWgIlRvtIBRgUIFrQBgAozWgIlYvBIBYgWIFpPXgAM+zpIAAhXIhVAAIAAhfIBVAAIAABfIBPAAIAABXgAgYzqIAAhPIhTAAIAAhcIBTAAIAABcIBFAAIAABPg");
	this.shape_49.setTransform(160.95,314.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DE8A5D").s().p("AlrMzIEShFIkYg5IgGiAIDRAAIIeD8IrYD3gAl3DOIAMmBIBFAAIAABiIBSAAIAABOIA4AAIAAA0IFCAAIAAg0IBOAAIAAhOIBvAAIAAhiIAVAAIAAIygAlnksIAYr7IH8DbIDLGcIAACEg");
	this.shape_50.setTransform(255.05,189.15);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7D3C19").s().p("AiSQMIiEsxIldFVIEcxRIAAl/IHCn8IIJkPIAACJInUCpIj/HmIAABsIjSAAIAAB5IB+AAIAABiIBUAAIAABOIAAAAIAAGgIKrjOIAAFmIjRAAInaEIILDDrIAAR/g");
	this.shape_51.setTransform(158.625,239.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5C2000").s().p("AriItILZj3Iofj8IjRAAIAAlmILwCxIAAozIFbAAIGoWdIpApBIiIMPIgUB0IsAJ7gAgJsnIAAiEIjLmcIn9jbIAAiJIIiE4IGVGdIBBCvg");
	this.shape_52.setTransform(293.65,239.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AB0CvIAAg1Ig5AAIAAhOIhRAAIAAhhIhFAAIiEAAIAABhIhuAAIAABOIhOAAIAAA1IlAAAIAAg1Ig4AAIAAAAIAAhOIhUAAIAAhhIh+AAIAAh5IDSAAIK9AAILeAAIExAAIAtAAIAAB5IgCAAIlcAAIgVAAIAABhIhvAAIAABOIhOAAIAAA1gABMAgIBWAAIAABWIBOAAIAAhWIhOAAIAAhfIhWAAgAsIAmIBTAAIAABPIBGAAIAAhPIhGAAIAAhbIhTAAg");
	this.shape_53.setTransform(227.825,176.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("A6DX8IAAgRQH/lkEtlpQFemcCAniIB6AAQARj1gcjIQhUBDhYAAQitAAhTiXIhDAGQhvAAhOhOQhOhTAAhvQAAhwBOhNQBOhOBvAAIAsAFIgFgyQAAh1BUhTQBNhTB7AAQCRAABSBvQBJicCxAAQDDAABICtQBDhfCFAAQBkAABIBDQBJBCAKBlIAGAAQBqAABNBIQBOBIAABqQAABphOBJQhNBIhqAAIgsgGQgMBkhNBDQhJBDhjAAQiAAAhIhkQgMAWgsAnQgXCnAXELIC9AAQChIPFeGbQELEyHvFpIAAAXgAigKeICloFIDDF6IAnm9IDUGAIAAi4Qhfi9gtiKIp+AAQgtCmhIChIAnERIC9l6g");
	this.shape_54.setTransform(228.35,206.325);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#990000").s().p("Al7T9QgxAAgjgjQgigiAAgxIAAqVIqVAAQgxAAgjgiQgigiAAgxIAAr4QAAgxAjgiQAigjAxAAIKVAAIAAqVQAAgxAigiQAjgjAxAAIMJAAQAxAAAjAjQAiAiAAAxIAAKVIKDAAQAxAAAiAjQAjAiAAAxIAAL4QAAAxgjAiQgiAigxAAIqDAAIAAKVQAAAxgiAiQgjAjgxAAgAwQEHIKVAAQAxAAAiAiQAiAjAAAxIAAKVIIfAAIAAqVQAAgxAigjQAjgiAwAAIKDAAIAAoMIqDAAQgwAAgjgjQgigiAAgxIAAqVIofAAIAAKVQAAAxgiAiQgiAjgxAAIqVAAg");
	this.shape_55.setTransform(231.725,231.775);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CCCCCC").s().p("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");
	this.shape_56.setTransform(234.05,201.2219);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AjvT8QgHg7gSj9QgQjUgGgdQgGgWgJgFQgFgCgVAAQguAAhlAKQhpAJi0ALQiJAIlsAbQlAAZgvAAIgqAAIAA8ZIAXgFICfgcICIgWIBUiZIDyghIFGguQBlgPBDACQBBACBOAUQA5APA6AXQA5AXBaArQADABACgFQACgFAAgIQAAg6BeB2QAjAvgGAQQgGARAQgHQAHgCAEgFQAFgFAAgEQAAgEARgUQAQgVAXgYQAkglAZgQQAagSAxgSQBpgpBAgLQA+gLB6gBQBmgBA5AEQA7AEA5AMIB1ATQAMADAvAHIBjAQQBDAMAYADQAUAEAPAPQAPAPAeAtIAxBKIFFBBIAAcYIgqAAQgsAAjqgUQiOgMlDgXQi6gMjfgSQh1gKghAAQgjAAgKAJQgRAPirAKQitALgZAAIgbAAIAHBmQAFBjARC1QAPC2gDARQgCAOgFgDQgEgCgRgZQgagngLgDQgFgCgLAKQgMALgLARQgbApgHAAQgGAAgEg6gAD8INQAzABCNAKQIKAlEVARIBiAGIgcgzQgQgdg2haIgqhFIijgXQiFgTjSgHQjTgGhlAMQiWAQg9AkQghAUgoA1QgnA1AAAZQAAATAGAEQAGAEAagBQAiAAAqgMQATgGApAAIASAAgAryEjQg5ADh0ALQhyAKgrAGQggAEgEADQgFACAQAFQARAEgCACQgCABgXABQgvABgTANQgTANgcAvQgyBUgWAjQgVAkgDALQgEALALAAQAcAAEMgSQEOgSCzgOIELgUQAOAAgEgoQgDgngOgFQgKgFAAgDQAAgEANgJQAMgIABgGQACgFgJgIQgMgMiygDQiygCgOgFQgOgFgkgEQgegFDpACQCsABAhgDQAhgDgDgNQgDgSgcgIQgegJhhgKQhRgIhWAAQg/AAhBAEgAznwyQgOAQhABgIhCBjIAAKxQAAKwAIAAQAIAABIhtIBIhsIgCq0QgCmBgDiaQgDiNgFAAIgBABgATbtrQgDDPAAEUIAAKpIBBBoQBABnALAMQAKAKAAqtIAAquIhDhvQgbgugWghQgWgggEAAQgDAAgCDIgAH9zpQgjADgdAFQgdAEg0APQgxANgtAQQhCAWgbAPQgaAOgbAbQgRATgSAcQgSAdgKAZQgPArgDBeQgCBcABH5IADKjIAvgkQA1gpAmgPQAmgPBXgQQBkgSC/gCQDAgCCBAQQBzAOA/AGIA+AGIAA25IinghQigghhxgFIibgGIgSgBIgmACgAgzpxQgTAogoFMQgnFKAAB1IAAB2IAzAgQAVAMARAIQAPAIACgBQAEgEgCn3QgDnpgHAAIAAAAgAp/zaQgFAFiMALQiOALhxARQh0AQgGALQgJANABLMQABLMAJAFQAMAHGmgNQGlgNAGgHQAFgJANiZQAPizALhmQAMhsAXiTQApkUATiZQAYiyACgiQACglgOgJQgogeiIgkQiIglhcgGQgigDgbAAIgJAAQgSAAgCACgAvkDXQgQgBgHgFQgFgEgDgFQgCgGACgGQADgIALgDQAGgCAQgBQASgBAggOIENh1QAPgGAGABQAWACAGAiIAEAYQADAOAHAHQADACACgKQADgLAVgBIAVAAQALAAAJAEQAGADAJAHQALAJAFACQALAGAUAAIAggBQANAAAIAEQALAGgBALQAAAKgNAGQgHADgNAAQgeACgRgCQgagDgRgMIgQgLQgJgFgIACQgHACgIAMQgJAOgFADQgHAFgKgDQgJgCgHgHQgIgJgHgXIgQguQgxARg3AXIiYBEIgmAQQgUAGgRAAIgCAAgAPwDHQgKgBgKgHQgQgLgXgUQgbgYgLgOQgUgXgGgWQgogEgzAHQgcAEg+ANQhuAYg2ASIg9AVQglAMgbAFQgQADgLgEQgGgCgEgGQgFgGABgHQADgOAfgDQAUgCAbgKIAtgQQAdgLA5gPICJggQAtgLAhgDQAVgCA6AAQATABAHAEQAIAFAHANIAKAWQAFALATARQAiAhARALQAPAMADAFQAFAGAAAGQAAAHgDAFQgFAGgIAAIgFgBgACQCnQgFgGgBgIQgCgMAKgQQAJgSAbgjIBviSQBJhfAeglQAagfAVAJQAKAFAJAVIAmBgIA7gwQATgPAMAAQARAAAQAWIAKARQAGAKAGAGQAZAXA2gKQAegGAMAAQAXgCAQAIIAUAIQAGABAHgCIANgEQA5gTA5ATQATAHAHALQAFAGgBAJQgBAJgHAEQgIAGgXgJQgqgRgkAJIggALQgVAGgNgEIgLgFIgMgGQgQgHgZAEQgdAHgOABQgkADgggSQghgTgOggQgiARgZAdIgMAMQgIAFgGACQgWADgRgjQgXgugOgvQgmApg9BSIhqCOQgiAugMAWQgKAUgLABIgBAAQgHAAgFgFgAwgArQgIgCgDgKQgDgJADgJQAEgJASgRQAlghAagsIAQgcQAKgQAJgKQAMgNANgHQAQgHAQACQAOABAQALIAaAVQAWARAZAHQAbAIAZgFQAVgEAWgOQAPgJAXgTIBJg9QARgOANgGQATgIAPAGQALAEAKAPIASAYQAXAXAegDIAXgCQANAAAFAHQAEAGgCAHQgBAIgFAFQgJAHgRADQgjAEgggTQghgSgOghQgVAJgfAaIgnAhQghAbgTAMQgeATgcAGQghAGgkgLQghgKgdgYQgOgLgHgEQgNgHgKADQgMAEgMAVQgoBGg7A8QgOAPgKAAIgFgBgACsjfQgIgDgDgJQgDgIACgJQADgIAFgIIALgNQAaggAdg/QAVgyAdAEQAbAEALAwIA/hIQAcghAWAMQAEACAFAGIAJAKQANAKAVgEQAMgCAYgKQArgSAwgHQAagDAKgDQAUgGAkgZQAjgaAUgGQAVgHANAJQAFAEAEAIIAIAPQANAdAjATQAYANAsANQASAGAIgDQAGgCAGgGIAKgLQARgQAagCQAYgCAUANQAOAKACAMQABAHgDAHQgDAGgHACQgIACgMgGQgOgIgFgBQgLgBgNAKQgNAOgHAFQgZARgygPQhqgggehFQgWAGgkAbQgkAcgVAFQgJADgRAAIgbACQgTADgcALIgwARQgZAIgYgDQgcgDgQgSIhABNQgNAQgLADQgTAFgQgTQgJgMgGgZQgjBAgkA/QgPAZgPAAIgGgBgAwokuQgGgDgDgGQgDgJAIgKQAGgIAMgGIBAgkQAkgWAZgUQAggdARgNQAigZAVAOQAHAFAFAIIAIARQANAcATAWQALAOAKAAQAGgBAHgFIAJgKQAPgRAcgSQAxggAjAKQAJACAhATQAZAOARgDQAJgBAPgJQAPgIAJgBQAKgBAPAGIAZAKQAMAEAPAAIAbABQAPAAAIAEQAFADAEAFQADAGgBAFQgCAQgfABQghABgSgCQgcgFgSgOQgVARgcADQgbADgZgLIgcgQQgQgJgNAAQgRAAgZAQQgbASgUATQgUARgKADQgUAFgVgNQgMgIgRgWQgYghgNgZQhWBKhiA2QgPAJgJAAIgDABQgFAAgFgDgACSoNQgGgGgBgIQgCgKAJgUIAwhxQAKgXANAAQADAAAIADQAIADADAAQAJgBAJgMQAQgWAKgFQAJgFAKAAQAKABAGAHIAIAKQADACADAAQADAAABgDIAagWQAVgTAOgDQAHgCAMAAIASAAQAUgBAYgNIAogYQA1ggAjAQQAHADAKAGIAQALQAXAOAhACQAaABAjgHIAhgGQAUgCANAEIATAHQALAFAHABQAMADAggBQAdgBAPAGQAPAFAWAaIAiAnQALAMAHABQAIACAOgIQAPgJAIABQAIABAEAHQAFAHAAAIQgBAPgPALQgPAJgTAAQgSgBgRgJQgZgNgZgkQgSgXgMgGQgKgEgVAAQgoAAgJgBQgbgCgPgPQg1AOg6ABQgwAAgZgPIgXgQQgOgJgMgBQgQgBgZAPQgbASgOAIQgYAOgVADIgXACQgOACgIADQgLAEgMAKQgMANgHAGQgMAJgMADQgOAEgLgGIgIgGQgFgDgDgBQgJAAgJALQgRAVgIAFQgRANgQgHQgPA6gdA1QgJASgLABIgBAAQgHAAgFgFgAwxqAQgHgDgCgGQgFgNAUgSIBVhIQATgQALgFQAVgHAOAKIAIAIIAIAIQAJAFAPAAQAWgBAFABQAIACATAMQAQAJALgBQALgCAQgOIAygsQAagXARgEQAMgCAQADIAcAFQANACAbAAQAbgBANACQAWADAaAMIAuAYQARAIAIAAQAFAAASgGQAfgMAYACQAVACARALQAJAFAEAIQAFAJgDAIQgDAIgKACQgKACgJgDIgRgHQgLgEgHAAQgKABgOAHQgPAKgHABQgQAFgTgIQgKgEgYgPQglgWgjgGQgOgCgdABQgcAAgOgCIgVgDQgMgBgJACQgKADgRAQIguAoQgbAYgSACQgPACgYgLQgdgOgLgCIgcgCQgQAAgKgGIgJgIQgGgEgFAAQgKgBgKANQgjAmgpAdQgOAKgIABIgEABQgFAAgEgCgAtxuVQgQgRgKghQgEgNgGgDQgGgCgJAEIgsAUQgbALgUAAQgOAAgIgGQgFgDgCgGQgDgGADgFQADgMAagEQAngHAhgUQAWgNAKAAQANgBALALQAJAIAHAOIAKAaQAFAPAHAJQALAOANgBQAGgBALgIIAigbQAUgPANgGQAUgJARAEQAIACAQAJQAPAJAJACQAQAEAhgLQAhgKARADIANAEQAJACAFgBQAHgCAHgIIANgNQAPgLASAGQAKAEAPALQALAFAZABICKAGQASABAIAEQAGAEADAGQAEAGgCAGQgFAOgaAAIiLgEQgbgBgPgEQgXgFgNgNQgHAOgPAJQgPAIgRgCQgTgFgKAAQgJgBgMAEIgUAGQgsANgpgUIgOgGQgHgEgGABQgKAAgRANIgdAXQgdAYgVABIgFABQgZAAgTgXgADPuLQgHgGgBgJQgBgNALgUQAQgcAXgeQAbgiAYAGIAJADQAEACAEgCQADgBADgDIAFgFQAJgHASADIAeAGQANAAAOgIIAYgPQArgeA2gFIAegCQATgBALgDIATgEQALgCAIACQAJADAPAOQAPANAKACQAJABAQgGQAkgMARgBQAhgDASATIAMAOQAHAIAHACQAJACATgIIAlgSQAcgOAQAEIAOAGIANAGQAKADASAAQASgBAJADQALADAUAPQANALADAGQAIAOgJAKQgEAFgJAAQgGABgHgDIgNgIIgLgIQgOgHgZgEIgigDQgSgCgPAEQgJACgPAHIgZAKQggAMgVgLQgGgEgMgNQgMgLgIgEQgOgFgWAGQgYAJgMADQgXAFgVgIQgXgIgNgSQgTAHgoAAQgoAAgSAGQgRAFgpAZQgiAWgXABIgdAAQgRgBgKAFIgNAIQgHAEgGAAIgIgDQgGgCgEABQgIAAgJAMQgTAZgNAeQgKAWgLACIgCAAQgHAAgFgGg");
	this.shape_57.setTransform(234.55,234.4071);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EEEEEE").s().p("Aq7EzIAAC9IgQAAIAAjrIChDAIAAi9IAQAAIAADsgAAsHuQgPgFgMgIQgTgPgEgWIAOgJQACAUASANQAJAHAMAEQANADAOAAQAcAAAUgOQASgOAAgTQABgLgHgKQgHgKgNgGQgLgGgegEIgTgDQgPgCgLgGQgSgIgKgOQgJgOAAgRQAAgNAGgMQAHgLALgJQAMgJAPgEQAPgFARAAQAhAAAZASQAUAQAEAUIgQAJQAAgJgEgIQgGgJgIgGQgKgHgMgEQgMgEgOAAQgOAAgNAEQgNAEgIAHQgKAGgFAJQgFAIAAAJQABALAHALQAJALAMAGQAHAEAJABIAXAEIANABIAUAEQAIADAHADQAQAKAJANQAKANAAAQQAAANgHAMQgGAMgMAJQgZASghAAQgRAAgPgFgAi7HrQgQgHgNgMQgNgNgGgQQgHgQAAgTIAAiQIAQAAIAACQQAAAPAGAOQAGANAKAKQAKALANAFQANAGAOAAQAPAAANgGQANgFAKgLQALgKAFgNQAGgOAAgPIAAiQIAQAAIAACQQAAATgHAQQgHAQgMANQgNAMgQAHQgPAHgTAAQgRAAgQgHgAL+HwIAAhRIhoiXIAUAAIBbCGIBciGIATAAIhnCXIAABRgAJTHwIhhh1IAcAAQAbAAARgHQALgGAJgLQAKgMgBgOQAAgMgHgMQgIgLgNgHQgOgHgTAAIhBAAIAADYIgQAAIAAjoIBRAAQAQAAAPAFQAOAFALAKQAKAJAGAMQAFAMABAMQgBAUgLAPQgMAQgQAHQgLAFgLABQgKABgMAAIBUBmgAEqHwIAAjYIhcAAIAAgQIDIAAIAAAQIhcAAIAADYgAnZHwIAAjoIBCAAQAZAAAUAJQAWAJAPARQAPAQAIAVQAHAUABAXQgBAYgHAUQgIAVgPAQQgPASgWAJQgUAJgZAAgAnJHgIAyAAQArAAAbgfQANgNAGgSQAHgSAAgVQAAgTgHgTQgGgRgNgOQgbgegrAAIgyAAgAshHwIAAjoIAQAAIAADogArvBoQg9gjgjg+Qgkg9AAhIQAAhJAkg+QAjg9A9gkQA+gkBIAAQBHAAA+AkQA9AkAjA9QAjA+AABJQAABIgjA9QgjA+g9AjQg+AkhHAAQhIAAg+gkgArclFQg0AegfA1QggA1AAA/QAAA/AgA0QAfA0A0AfQA0AfA/AAQA9AAA1gfQA1gfAeg0QAeg0AAg/QAAg/geg1Qgeg1g1geQg1ggg9AAQg/AAg0AggAKnCHQhIAAg9gkQg8gjgjg9Qgkg8AAhJQAAhHAkg9QAjg9A8gkQA9gkBIAAQA2AAAzAXQAyAWAlApIgbAZQgfgjgsgTQgsgTguAAQg+AAg0AfQg0AegfA0QgfA1ABA9QgBA/AfA0QAfAzA0AfQA0AgA+AAICXAAIAAi7IisAAIAAgkIDSAAIAAEDgAEICHIAAmeIjoFLIjqlLIAAGeIglAAIAAoSIEPGAIENmAIAAISgApJnCQgHgIAAgMQAAgMAHgIQAJgJALAAQALAAAJAJQAIAIAAAMQAAAMgIAIQgJAIgLAAQgLAAgJgIgArenCQgIgIAAgMQgBgMAJgIQAIgJALAAQAMAAAIAJQAJAIAAAMQAAAMgJAIQgIAIgMAAQgLAAgIgIg");
	this.shape_58.setTransform(234,294.225);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AvMT9IAA6NIBEhLIl4l3IGwmqIF4F3IFAlGIWYAAMAAAAnIgAmRROIAAjsIgQAAIAAC9IihjAIAADrIAQAAIAAi8gACCQXQAFAVAUAPQAMAJAPAEQAPAFAQAAQAhAAAagSQAMgJAGgMQAHgMAAgNQAAgPgKgNQgJgOgQgKQgHgDgJgDIgTgDIgNgCIgXgEQgJgBgIgDQgMgHgIgKQgIgMAAgLQAAgIAEgJQAGgJAJgGQAJgHANgEQANgDANgBQAOABAMADQANAEAKAHQAIAGAFAJQAFAIAAAJIAQgJQgEgUgUgQQgagSghAAQgQAAgPAFQgPAFgMAIQgMAJgHAMQgGALgBANQAAARAKAOQAKAOASAIQALAGAPACIATAEQAeADAMAGQANAHAGAJQAHAKAAALQAAATgSAOQgUAOgdAAQgOAAgNgDQgMgEgJgHQgSgNgBgTgAhpPzQAAASAIAQQAGAQANANQAMAMAQAIQAQAHASAAQARAAAQgHQAQgIANgMQAMgNAHgQQAGgQABgSIAAiRIgQAAIAACRQAAAOgHAOQgEANgLALQgKAKgNAFQgNAGgOAAQgOAAgNgGQgOgFgKgKQgKgLgGgNQgFgOAAgOIAAiRIgRAAgAOHP6IAABQIAQAAIAAhQIBmiYIgTAAIhbCHIhbiHIgUAAgALcRKIAVAAIhUhmQANABAKgCQAKgBAMgFQAPgHAMgPQAMgQAAgUQAAgMgFgMQgGgMgLgJQgKgJgPgGQgOgFgQAAIhRAAIAADoIAQAAIAAjYIBBAAQASAAAOAHQAOAIAIAKQAHAMAAAMQAAAOgJAMQgJAMgMAFQgQAHgbAAIgdAAgAFYNzIBbAAIAADXIARAAIAAjXIBbAAIAAgRIjHAAgAlQRKIBDAAQAZAAAUgJQAWgJAPgRQAOgRAIgVQAIgUAAgXQAAgXgIgVQgIgVgOgQQgPgRgWgIQgUgKgZAAIhDAAgAqXRKIAQAAIAAjoIgQAAgAplD0Qg9AjgjA9QglA+ABBJQgBBIAlA+QAjA+A9AjQA9AlBIAAQBHAAA+glQA9gjAkg+QAjg+AAhIQAAhJgjg+Qgkg9g9gjQg+gkhHAAQhIAAg9AkgAKsDyQg9AkgjA9QgkA9AABIQAABIAkA9QAjA9A9AjQA9AkBHAAIC9AAIAAkEIjSAAIAAAkICsAAIAAC8IiXAAQg9AAg0gfQg1gfgeg0Qgfg1AAg+QAAg+Afg1QAeg0A1geQA0gfA9ABQAvgBArAUQAsATAgAiIAbgYQglgpgzgXQgygXg3AAQhHABg9AjgAGRLhIAlAAIAAoTIkMGAIkQmAIAAITIAlAAIAAmfIDrFMIDnlMgAm/BvQgIAJAAALQAAAMAIAIQAIAIALAAQALAAAJgIQAIgIAAgMQAAgLgIgJQgJgIgLAAQgLAAgIAIgApVBvQgIAJAAALQAAAMAIAIQAJAIALAAQAMAAAIgIQAJgIAAgMQAAgLgJgJQgIgIgMAAQgMAAgIAIgAAcnbILvAAIAAj6IrvAAgAubtSIDJDHIBFhKIjDjDgAlAQ6IAAjHIAzAAQArAAAbAdQANAOAGARQAHATgBAUQABAUgHASQgGASgNANQgbAfgrAAgApSKiQg1gfgfg1Qgfg0AAg/QAAg/Afg1QAfg1A1geQA0ggA+ABQA+gBA0AgQA1AeAeA1QAfA1AAA/QAAA/gfA0QgeA1g1AfQg0Agg+AAQg+AAg0ggg");
	this.shape_59.setTransform(220.25,234);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},11).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).wait(1));

	// contenbt_pic
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00092D").s().p("ACkCRIDrjqQAaAoAAAxQAAAmgPAgQgMAbgYAXQgxAzhHAAQgyAAgogagAlYCRIDsjqQAKAQAHATIBjAAIBUAAQAMglAdgdQAzgyBGAAQAXAAAVAGIjSDQQgDgNgBgNIgBgQIhJAAIhcAAIgBAQQgGA7grArQgzAzhGAAQgzAAgogagAmoAAQAAggALgcQAMghAbgbQAygyBHAAQAXAAAUAGIjRDQQgFgVAAgXg");
	this.shape_60.setTransform(236.35,200.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("ACPCCQgighgKgrIDRjQQArAKAiAiQAOAPALAQIjsDqQgQgKgPgPgAlsCCIgGgGQgWgZgLgcIgGgRIDSjQQArAKAiAiQAOAPAKAQIjrDqQgQgKgPgPg");
	this.shape_61.setTransform(235.325,199.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("ADmB+IAAj7IA/AAIAAD7gAkkB+IAAj7IA+AAIAAD7g");
	this.shape_62.setTransform(236.8,167.65);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFB033").s().p("AmBEIIABAAICgAAIHlBWQgvjVjOh3QAPgfAAglQAAgzgZgoQgKgQgPgOQgigigrgLQgUgFgXAAQhHAAgyAyQgdAdgMAkIhUAAIgLnQQEYnEDRDSQCFCEBFCyQAoBpASB5QAlDvAPFAQAFBhACBqIABAkQg0AGg6APQh8AgiZBMQgyAZg3AeQiDBJiYBlgAimj6IA+AAIAAj8Ig+AAgAmHghIgBAAIAAgPIBKAAIABAPg");
	this.shape_63.setTransform(276.575,205.3442);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFCC33").s().p("AsKLgQhJghhFgbQi7hJijgcQgtgIgqgEQgGgngDgoQgJhhAAhoQABjXApj4QAei0A3iOQBKi+B4h4QDTjSE5HEIALHQIhkAAQgGgSgLgRQgKgQgOgOQgigigrgLQgVgFgXAAQhHAAgyAyQgbAbgMAhQgLAcAAAhQAAAXAFAUIAGAQQALAdAWAYQiNB0haDLIHqh1ICLAAIAPJoQiUhTiHg9gAsvj6IA+AAIAAj8Ig+AAgANRLyIAAj+IDFhuIBPlSIChjBIAAITIBaBlIAAEHgApighIAAgPIBdAAIAAAPg");
	this.shape_64.setTransform(289.1243,205.3442);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#686868").s().p("ABOOrIl8x7ID/o7IAUgsIB8AAIkMJbIF9SHgAuuOrIBx8eQA3geAzgZIIOHdIoSAAIHRGQImpPogAOhjQIgMg6IAaA6IgRAag");
	this.shape_65.setTransform(350.775,364.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#533333").s().p("Ah8OPIgR5vQCXhlCEhJIhycdg");
	this.shape_66.setTransform(253.65,367.075);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#993333").s().p("AAdOAIiy7/QCIA9CSBTIARZvg");
	this.shape_67.setTransform(226.1875,368.55);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#999999").s().p("AEhOeIiwkgInJrHIHQmRIoQAAIHwnDQBGAbBIAgIC0cAg");
	this.shape_68.setTransform(188.15,365.5625);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#006600").s().p("Ao8PfQkLkGAAlzQAAlxCYmSQFfhcFCgbQBBiLB4h2QEKkGF4jFIAHWiQk6nDjSDSQh5B3hKC+Qg3COgdC0QgoD5gBDXQgBBoAJBhQlBgbjrjngAG5M7IAGAHQAPAPAQAKQAoAaAzAAQBGAAAygzQAsgrAGg8IBdAAIAAAAIAIEqIgBAAIiKAAInrB1QBbjLCMh0g");
	this.shape_69.setTransform(154.1,128.825);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#003300").s().p("AgUQXQgPlAgkjwQgTh4gohpQhFiyiEiEQjSjSkZHDIgG2iQF5DFEKEGQB3B2BCCLQFFAZGCgDQB2HzAAFxQAADNhQCrQhCCMh4B1QjzDvlNAVQgChpgFhigAqCQFIigAAIgHkqIBKAAQABANADANQALArAiAhQAPAPAQAKQAoAaAyAAQBHAAAxgzQAYgXAMgbQDOB3AvDUg");
	this.shape_70.setTransform(318.35,128.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#396FC6","#E54BEC"],[0.31,0.882],-331.1,494.4,331.2,-494.5).s().p("EAhfASRIARgaIgag6Ih1o5IgpAAIAAkHIhZhlIAAoSIihDBIhPFRIjGBuIAAD+IiBAAIgGAMIh+AAIgTAsImQkLQA7gPA0gFIgBglQFOgVDzjuQB3h1BCiMQBQirAAjNQAAlyh2nzQmCADlGgZQhBiLh3h2QkLkGl5jFQl3DFkKEGQh4B2hCCLQlCAblfBdQiYGRAAFyQAAFzELEGQDrDmFBAbQAEAoAFAnQArAFAsAHItYH3InwSLIgBEgQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAg");
	this.shape_71.setTransform(229.1,229.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AHXPhIgDgBIGpvnInRmRIIRAAIoNndQCZhLB7ggIGQELIj/I6IF9R7ICEAAIl+yHIENpbIAGgMICBAAIIPAAIApAAIB1I5IAMA6IgDAaIh3RhIpDAAIgEABgEggkAPgIABkgIHwyKINYn2QCjAcC7BJInyHDIISAAInSGRIHKLHICxEgg");
	this.shape_72.setTransform(235.2,358.9625);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#17172E").s().p("AoNC8IAAgBQgOg4DAhiQDAhhEchTQB3gjBpgXQA8gNA3gKIACAGIAFAUIAgCBIABAGIASBHIABAEIhPAfIggAMIgSAGIghAMQg/AVhGAVIgkALIgXAHQh/AkhuAXQiAAahsAKQg1AFgpAAQh3AAgMgpg");
	this.shape_73.setTransform(176.6557,370.0423);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AqCCMIAWgHIAkgKIFBHrIM4qwIg7haQgciQBuBSIA8CXIs0KoIhpBYgAk3ktIDkijIE/jkIB7B5QAWCBhnhCIhBhkIovGOIgCgHQg3AKg7ANg");
	this.shape_74.setTransform(258.35,368.925);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#999999").s().p("AmhBbIAggLIDLE1IgbAVgAluBJIAggMIDBEoIgaAUgAkAAaIgShHIAHgGIDcFQIgbAUgAj6gzQASgBATgDIDME3IgbAVgAjMg4IAkgHIC/EmIgZAUgAhahXIAggMICqEFIgaAUgAguhpIAegOIClD9IgbAUgAgIh7IAdgOICiD1IgbAVgABRjEIAFgFIgHADIgKgQQAIgEgBgEQgBgDgOAAIgMgTIARgEIgYgGIgPgXIAbgVIDcFQIgbAUgABGk2IAbgUIDbFQIgaAUgABwlWIAagVIDcFRIgaAVgACsmEIAagVIDcFRIgbAVgAhAiQIAdgEIAFAHIgRABQgPAAgCgEgAgZiWQASgDAPgFIAHAKIgjAGgAgui6IAhgGIAGAJIgDAAQgSAAgSgDgAgrjfIAIgCIAFAHIgWACg");
	this.shape_75.setTransform(254.9875,367.825);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AEiMjIA/gwQBnBCgWiAIAngeIDhFYIgnAeQhthRAbCPIg/AwgADOxGIh9CIIgZgbICWiiICtC8IgYAagAq5u/ICoi2IAFgGIAGAHICQCbIgYAbIh+iIIiVChg");
	this.shape_76.setTransform(250.825,242.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6D2400").s().p("AjvC4Qhng/gKheIAAgEIg0ADIgDhaIBLgFQASgZAggSQBPgtClglQCkglCZgMQBAgFBBAHQgBA8giBkQg6CshcBMQhdBNiEACIgEAAQiCAAhng+gADKimQhrAHhyAbQhzAZg3AfQg3AfAGBCQAIBCBIAsQBHArBcAAQBdgBBBg2QA/g1Aqh4QAmhxhbAAIgNABg");
	this.shape_77.setTransform(278.025,137.9087);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#993300").s().p("AjFCvQhnhAhSilQghhCgPgwQgHgVgDgSIAVgFQA1gMA2gBQCYgHCoARQCqASBVAiQAtATAWAkIBRgFIAbgBIADBbIgcABIg8AEQgEBWhYBFQheBKiDAPQgYACgWAAQhoAAhTg1gAjhifQhqAEA5B0QA6ByBHAtQBHAtBbgKQBdgLBBgzQBBgzgChCQgDhDg7gYQgsgShNgMIgGgGIgFAFIgtgFQhVgKhPAAIg8ACg");
	this.shape_78.setTransform(193.425,142.9814);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFCC33").s().p("AjqFSIgLgCQm/hdg4jXQgLgqAEgwQAakhEYhPIABgBIAFgBIADABQBlAsBfAuQBTApBOApQGEDTD9D4QBxBvBWB4Qg3ACg4AAIgHAAQmbAAnOhfg");
	this.shape_79.setTransform(256.6652,59.4254);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF9900").s().p("AkvJkQhbk6AfjGQAGgpAJgnQA8kDC6i/QDUjcD0gNIASAAIgBAAQkZBPgaEhQgEAwALArQjHDOhnGEIgVAEQADASAHAWQgbBsgTB6IgPg0g");
	this.shape_80.setTransform(174.6154,82.7125);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFCC99").s().p("ADqXeIgfiBQA4gjBRgYQBdgbBIAFQAXABAZAGIAYAGIgSAEQgyAKgiAJIgIACIgdAKIAUgDIAWgCQBDgIAZABQAOAAAAADQABAEgIAEQgSAKhAAMIghAGQATADAUAAQAqAAAtgPIAHgDIgFAFQgdAYgsAOQgQAFgSADIgKACIgdAEQADAFAfgCIAJgBIAlgGIApgHIgjARIgeAPIgIAEIgeAOIgNAFIgfANQgVAIgSAGIgnAKIgkAGIgJACQgTADgSABIgRAAIgEAAIgFAAgAFBDpQhQguhJguIhHgtQjfiSiRiNQkNkBg4jsIAPA0QAUh6AahsQAPAwAiBCQBRClBnBAQBmBCCEgPQCDgPBdhJQBYhGAEhXIA9gDQANHOAAFJIAACfgAj6o9QhHgug5hyQg6h0BqgFQBrgFB1ANIAuAFIinC3IAXAaICWihIB8CIIAYgbIiOibQBLALAtATQA6AYADBDQADBChCA0QhBAzhcALQgQACgQAAQhJAAg6glgACftZQhWgjipgRQipgSiYAHQg2ACg1ALQBnmDDIjPQA5DXG+BdIALACIANGAIhRAFQgWgkgsgTg");
	this.shape_81.setTransform(203.9,212.4265);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#DDB185").s().p("AmmIrQAAlLgNnNIAbgCIA1gDIAAAEQAKBeBnA/QBoA/CFgBQCDgCBdhNQBchMA6itQAihkACg8QhBgHhAAFQiZAMikAlQimAlhPAtQggASgRAZIhMAFIgbACIgNmAQHSBgGegBQAmCtgYDNQgdECkYEMQhtBpiJBpQhOA8hXA8QhGAwhLAwIAAiegAiiiGQhIgsgHhCQgGhDA2gfQA3gfB0gZQBygbBqgHQBrgJgoB5QgqB5hAA1QhAA2hdABQhcAAhIgrgABPiZIAYgaIisi8IiVCiIAYAbIB9iIg");
	this.shape_82.setTransform(278.3967,164.5125);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B79224").s().p("AuUO4Qh9meAAiaQAAmMCak9QgJAngGAoQgeDGBaE6QA5DrEMECQCRCNDgCSQg9ADg7AAQlTAAk1hdgANIl+Qj9j6mFjSQhOgqhTgoQheguhmgsIgCgBQEWhNFDB9QFHB+CtESQAxBMAaBTQAlB6gNCGQhWh3hxhvg");
	this.shape_83.setTransform(228.4942,117.763);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#866913").s().p("AilHdQEXkNAekBQAYjNgniuQA4AAA4gBQANiHgmh6QDFFaAAG/QAACZgXCMQmhDEmBBbQCLhqBshog");
	this.shape_84.setTransform(308.3375,145.55);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EABB8C").s().p("AhSAtIAAiYIAAkCQBJAuBQAvIAMJ9g");
	this.shape_85.setTransform(228.95,263.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BC9670").s().p("AhIkPIABABQBKgwBGgwIAAEAIAACcIiEFBg");
	this.shape_86.setTransform(243.2875,262.925);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4E75C4").s().p("AiWmtIAACZIClFAICFlAIAAidQAPFJgVF4IjjCiQhTptASjyg");
	this.shape_87.setTransform(235.7383,295.2375);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#191933").s().p("AoCQGQAFh1gQimIM0qqIg8iWIAngeIjhlYIgnAeIh6h6IlADkQAVl5gPlJQJFAmCIDIQCHDHBXR5QAVEXgNDGg");
	this.shape_88.setTransform(293.2249,354.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#26264C").s().p("AAIQEQhRg1iChcQlKjqg+iNQg9iNB2oVQB2oWDKiiQDJiiGmgDQgSDyBSJvIiXBrQhqAXh2AiQkcBTjABiQjABiAOA4IAAABQAPA3DSgTQBsgKCAgaQBugXB/gkIFpIpIBphYQARCngGB1g");
	this.shape_89.setTransform(180.1926,355.025);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#CE11D6","#FD97AA"],[0,1],190,-190,-190,190).s().p("EAUVAjzIAAgEIiLAAQANjGgVkXQhXx6iHjHQiIjIpFgmIAAj/QBXg8BOg7QGBhcGhjDQAXiMAAiaQAAm/jFlaQgZhTgxhNQiukRlHh+QlCh9kWBMIgFACIgRABQj1AMjVDdQi6C+g8EFQiaE9AAGNQAACZB8GfQFtBtGUgTIBHAtIAAEBQmnACjKCiQjJCjh2IVQh2IWA9CNQA+COFJDpQCDBcBSA1IqNAAIAAAEIt6AAQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAg");
	this.shape_90.setTransform(229.1,229.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ao8B4QBFgVBAgWIDQE/IAbgUIjKk2IASgGIDHEwIAagUIjBkoIBPgfIgBgFIC2EYIAbgUIjclQIARgBIDWFIIAbgVIjMk3IAKgBIDJEzIAZgUIi/kmIAngKQASgFAVgIICwENIAagUIiqkGIAMgFICoEDIAbgVIikj9IAIgDICjD7IAbgVIihj1IAigSIgoAIIgHgKQAsgOAcgYICmD+IAbgUIjclQIgbAUIAQAYQgZgGgWgCQhJgFhdAbQhRAYg4AkIgFgUIIumNIBBBjIg/AwIDhFZIA/gxIA7BbIs4KvgAAwlEIDcFQIAagTIjblRgABalkIDcFRIAagUIjclRgACWmRIDbFQIAbgUIjclRgAkphAIAIAAIgHAFgAg4ihIAJgCIAFAHIgKABgAgjjNQBAgMASgKIAKAPQgsAPgqAAgAhBjsIgJAHIgUACIAdgJgAg4jvQAigJAxgKIAMATQgZAAhCAHg");
	this.shape_91.setTransform(257.1625,369.175);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("As+cuQk8iQAAnKQAAnKB2kvQAhhYEVnQQlbKpD8JMQATzqH1ksQAsgtDtgNQgOA5gNBOQggC7AXAvIAHAJQAYAnAkAAQAhAAAYgQQAHgFAGgGQAbgaAiitIAVh2QASBEAnBsQBBCwAtAeIAKAFQAoAVAggTQAdgQAMgZIAGgQQALgkg6inQg5iogjhAIgEgHQAigIARgKIAMgIQF7FBCzGxQDDHZAHHdQAIHdjDB5QjDB5jxAFQKlrknjt6QDNSxpVGuQAQADmrASQgwACguAAQlyAAkZh/gAAQWwIClAAIADiXIC1hAIBqi7Ihci1IiohAIATjgIAEABICUA3IAhi+IiqgvIAOirIihAAIgHCeIgrACIAeifIi6AAIgDCzIi+A8Ih1DVIBRCcIC4BUIAIACIgXDgIg/gLIifg7IgfC7IDEA6IAoAEIgMB7IC6AAIAGh0IAqgDgAAMPBIA3AMIgJC/Ig4ADgAC9Q0IAHhKIAgBCIgkBJIgEABgAAVMBIAKjKIA0gBIgIDVgAiZLPIgcg+IAqhFIAZgGIAAAdIgMB2gAua4eQJ+Cmgjm/QFnHbEUpQQBSHpHCkwQh4LtljGnQgKgGgKgEQgogQgqmTQi0GagvACQiBAGjwmcQA6Gqg1AJQg5AJgdAaQj2mQkOpeg");
	this.shape_92.setTransform(234.7889,231.4253);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#000000","#7C7C7C"],[0,1],-196.6,-196.5,196.4,196.5).s().p("EgfnAjzQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAgAvMHyQh2EvABHKQgBHKE9CQQE9CPGsgRQGrgTgQgDQJUmtjNyyQHkN6qlLkQDxgFDDh5QDCh5gHndQgHndjDnZQizmwl8lCIgLAIQgRAKgjAIIAFAHQAiBBA6CnQA6CngLAjIgGAQQgMAagdARQghASgogVIgJgFQgtgehBiwQgnhsgThEIgUB2QgiCugcAaQgGAFgGAFQgYAQghAAQgmgBgXgmIgHgJQgWgvAfi7QANhNAOg6QjsANgsAuQn1EsgTTpQj8pMFaqpQkUHRgiBXgAleoZQAdgaA6gJQA0gJg6mqQDxGcCBgGQAvgCCzmaQArGUAoAPQAKAEAKAGQFjmnB4rtQnCExhSnqQkVJQlmnbQAjG/p+ilQENJdD2GQgABJXHIAVh5IgrADIgGB0Ii6AAIANh6IgogFIjFg6IAgi6ICfA6IA/AMIAWjhIgIgBIi3hVIhRicIB1jVIC+g7IACi0IC7AAIgeCfIArgCIAGidICiAAIgOCrICqAvIghC+IiUg4IgEgBIgTDgICoBAIBcC2IhqC7Ii1BAIgDCWgAA7SmIA4gDIAJi+Ig3gNgAD2RLIgBBDIAEgCIAkhJIghhCgABYJPIgKDJIA2AKIAIjVgAhSJkIgqBFIAbA+IAcAKIAMh2IAAgeg");
	this.shape_93.setTransform(229.1,229.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#000000","#7C7C7C"],[0,1],-196.6,-56.1,196.4,336.9).s().p("AfsN3IraAAIiSiEIgyA3IBWBNIhnAAIgkggIgdAgIosAAIA2mFQoOkhnwCSIhKIUIijAAIAFlpIuOgQIgHF5Ip9AAIAA3jQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuIAAXjgA7HHFIPpASIABhLIvpgSgAH3GsQmRqopCIfQC6g7CxAAQFCAAEmDEgAHKhBQB3EjC/j3IAfjfQi/Cxh3jdQh3kii+D3IgfDfQBVhPBGAAQBYAABCB6gABdAjIA4mJIhCgJIg3GJQANgEAMAAQAVAAATANgAEBN3IAkj9IBYANIghDwgABNN3IAnkWIBZANIgmEJgAhmN3IAqkuIBaAMIgnEigAvgN3IADiiICHADIgDCfgAzhN3IADilICDACIgDCjgA3lN3IADirICCADIgDCogAkVNhIArkxIBZANIgrExgAnENJIAqkxIBZAMIgqExg");
	this.shape_94.setTransform(229.1,88.725);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0066FF").s().p("AgPBvQh3jbi+CwIAfjeQC+j3B2EiQB3DcC/iwIgfDeQhYByhIAAQhWAAg/ieg");
	this.shape_95.setTransform(276.5,71.0393);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CCCCCC").s().p("AQgMOImhl4IgVgSIgRgQIh2hqIA/hGIG5npIAdggIAkAgIDeDIICXCHIA1AvIC7CoIAdAaIlFFpIiSCiIg/BFgAQ/JGIBlBbIAjgnIBTheIhThJIgSgQgAOAGbIBhBXIA/hGIA4g9Ig4gyIgqgmgAVWEQIhxB/IBkBaIAdggIBahkIhNhFIgGgGIgSgQgAMwBtIhxB/IBhBYIB2iDIhfhWIgDgCgAQmDjIBhBYIBAhHIAVgYIAegiIAEgEIhihXgAOLAJIgVAXIgTAVIAhAdIBAA7IBchnIAbgdIgqglIg3gygAqlCvIBCnUIBKoUQHwiSIOEhIg2GFIhOInIgGAvIgCANgACdC3IBZANIArkxIhZgMgAgSCeIBXAMIArkwIhZgMgAjDCGIBbAMIArkwIhbgMgAlxBtIBZANIAqkwIhZgNgAohBUIBZANIArkwIhZgNgADgklIgHA0IBZANIAJhBIAhjwIhYgNgAAsklIgEAcIBYAMIAGgoIAmkJIhZgNgAiHklIgBADIBcANIACgQIAokiIhbgMgAk2k7IBZANIArkxIhZgNgAnllTIBZAMIAqkxIhZgMgA6cB+IAGmjIAHl5IOOAQIgFFpIgHG0gAwGgeICHADIAEiyIiHgCgA0GghICCABIAFixIiEgCgA4KgnICCADIADixIiDgDgAwBklIAAAQICHADIAAgTIADifIiHgDgA0CklIAAANICDABIAAgOIADijIiDgCgA4GklIAAAHICCADIAAgKIADioIiCgDg");
	this.shape_96.setTransform(232.4,206.8387);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#666666").s().p("AP+SxImil4IiaiKIgZgXIAxg2IABgCIADADIA6A0IBEA9IGiF4ICRCCIgyA5gABNPpIlRgvIpDhRIkWgnIAIg7IGbA5IT4CzIgIA7gApVMjImxg8IAJg7IIzBPIPMCIIgJA7gABsMOIv2iOIAIg7IR+ChICtAYIgIA7gAsgIbIAIg7IR3CgIgJA7gAa6H+IjUi+Ih3hsIhJhCIjGixIhVhNIAxg3ICTCEICsCaIAzAtIAVAUIBsBhIDtDVIgCACIgwA1gA8bINIABhLIOiAPIgBBMgA8KnRIABhLIPpASIgBBLgAofpzQJBogGSKpQnHkwoMCngAgmt8IA2mKIBBAJIg3GKQgdgUgjALg");
	this.shape_97.setTransform(235.825,180.625);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#9F5F2A").s().p("AhVRMIAA6rICRiiIiRe0gAhVuyIBTBJIhTBegAg3v2IBwh+IAXAJIAGAGIgMCpIgeAhgAhVyyIAVAJIgVAYg");
	this.shape_98.setTransform(363.2625,348.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#713E14").s().p("A9+LFIGHimIgBAVIUdo9IRgkBIP6m6IAAWJg");
	this.shape_99.setTransform(111.1,387.325);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#482910").s().p("AAlTZIAA2JIhDgXIAAn+IGhF4IAAYmgAmClEICThJIAFB/gAgesqIAAg4IGhF4IAAA4gADjtdIB2iEIAqAmIAABvIg/BGgAicubIgDgDIgBACIiigrIAHgvIDBg+Ig/BGIB1BqgAAhwMIBxh/IAIgCIBeBWIh2CDgADmymICdgyIAAAGIhcBng");
	this.shape_100.setTransform(299.325,334.125);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C66D23").s().p("AsflaIRZhjIHmBjIyJHxIm2Eng");
	this.shape_101.setTransform(463.55,339.55);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#DA741F").s().p("AqqjGINvhPIHmBPI1VHcg");
	this.shape_102.setTransform(463.525,272.95);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#CB640F").s().p("AkrsBIFElpIgcgaIBagJIAxAsIAwg2IEGgbInlD8IAAHdIh1AoIAAMYIgPALIkSNBgAkRxlIBOBGIhaBjg");
	this.shape_103.setTransform(399.25,348.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#A36D41").s().p("AilBAIAAhaIB3BqIhDAggAhRgzID3g8IhQCAIg8Acg");
	this.shape_104.setTransform(391.575,204.5875);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#60310B").s().p("APMU+IAA4lIBfBVIAyg4IiRiCIAAg4IBnBdIA/hGIAAargAFeipIgGh+Ik+iIIHpBEIAJg7Iz5iyIBlgdIRPCaIAIg6IvLiJIBbgaIFeBQIB8gjIE1AsIAJg7IiugYIDHg3ICaCKIAAH9gAt5owIJDBRIyBBVgAPqpMIB2iEIASAQIAACnIgjAogAHmsBIAwgNIAUASIAAA4gAPMtVIA3AxIg3A+gAPRuvIB2iEIBiBXIgDAEIg0AYIAAAiIhABGgASmzxIBNgVIBKBCIAABbgAPMxyIirAAIAWgYICGglIApAlIgaAegAVI0eIBwgfIAAAmIg9Amg");
	this.shape_105.setTransform(240.875,323.975);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#49280D").s().p("AihAqIh7AAII5h5Im+Cgg");
	this.shape_106.setTransform(403.425,185.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#7A4216").s().p("AKEWvIERtBIAQgKIG1koISKnxInmhiIxZBiIB1goIVVndInmhPItvBPIHmj8IkGAbIACgCIjtjVIA7gcIBRiBIj5A8IgVgUIA9gmIG+ihIEHAAIZNAAMAAdAhkI1+L5gEgz3ASiMACrgpQID2AAIJ9AAIgGGjIOPARIAHm0ICjAAIhCHVIP/CPIACgNIChAqIgwA3IAZAXIjHA3Ix+ihIgJA7IP3CNIh9AjIlehQIhcAaIozhOIgJA6IGxA9IhlAdImbg6IgIA7IEXAnIo+CmISBhVIFRAwIE+CIIiTBJICZA1IDLBHIBDAYIv5G4IxhEBI0dI/gA1BtzIR4CgIAIg7Ix4iggEgk8gOCIOjARIABhMIujgQgAhBssIBXAYIARAQIgvANgAMTt4IAFgGIARAQgAiT2uIIrAAIm4HpIjBA+gAODwvIBDggIDTC+IhbAJgAKEu2IAzgYIgeAhgAmlvSIArkxIBZANIgrExgApVvqIAqkxIBZAMIgrExgAsGwDIArkxIBbANIgrExgAu0wbIAqkyIBZANIgqExgADxwgIADADIgHACgAxkw0IArkxIBZAMIgrEygAEgxTIATgVICqAAIicAygAGXzXIA3AyIiGAlgA5JynIAEiyICHADIgECxgA9JyrIADixICEACIgFCwgEghNgSwIACiyICDADIgDCygAHZ2uIBnAAIDFCyIhOAVgAKu2uILaAAIo6B7IB8AAIhwAfgAlp16IAHg0IBbAAIgJBAgAoa2TIAEgbIBaAAIgGAngA5E2eIAAgQICHAAIAAASgArL2rIABgDIBdAAIgCAPgA9F2iIAAgMICDAAIAAANgEghJgWnIAAgHICCAAIAAAKg");
	this.shape_107.setTransform(290.3,322.975);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C3C3C3").s().p("ADuJ+IBKiFIB0DsIgbDhgAhaoVIglhFIALhGIg6gmIgSAYIgSBdIghhzIg4AAIAThUIiTAfICOg2IAbgVIiLAAIB1hTICYguICPALICTBYIBkDPIAcAaIAACBIiUA0IhuBogAhBrzIA/CgIDFgpIADhPIgnhfIjNhKg");
	this.shape_108.setTransform(234.975,214.25);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#2D2D2D").s().p("AnEKvIhPhiIhTgZIhQmpIAjinIiAimIhyhCIgvgcICPhtIBlAAIDjlkIDxhbICJBcIiZAtIh0BUIgnBWIhtCTIAABiIhxEuIBWDGIAthGIAAhqIAsBBIAAC+IBuBKIEnhSICAi2ICIgyIB8AAIAbhnIgvjsIAAiBIgcgZIhkjQIA4hRIC1gkIgVBIIAADFIDxDPIg+BhIApCIIAYASIDPAAIBbBwIkAAAIhWBoIhXCzIi0FvIiGgnIhqCAIjBAmgAgloeIA5BEIAmAeICmAVIjGAog");
	this.shape_109.setTransform(232.1,192.975);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#ADADAD").s().p("AsNNwIhZABIBOhMIBFiiIghC/ICViYIB1CvICLEEgAt/LKIhRCsIhYAJgAt8j4IB1gkIAqjKIhQiFIAshnIEIjFIJdjFIDSAAIH7C2ID4JpIg6gqIhqA5Igyg2IhsAAIB3h2IgXhoIipAAIAthHIipjcIhJBkIhthvIh0BJIA0CFIh0AAIgkiRIhrgrIhUBoIinAXIm0EQIAADLIBTA4IiPBtg");
	this.shape_110.setTransform(207.9,173.65);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#767676").s().p("AyeOKIAAkRIA8lgIgjAsIAojCIhPgtID3k9IDfjDIC2ndIByBCICACmIgjCoIBQGpIAVFnIiLkEIh1ivIiVCZIAhi/IhFCiIhOBKIiLCFIAhh/IBQirIioC0IhNBkIEAArIHjETIhiDKIgOggIhAiPIjpgkIisguIjiCZIGRgHIDZCbIgjD1IAAiGIizhkIiECVIBoi8Ih8BEIhXC4IAAi+IiwCOIgsBIIicD9gAK5BLIC0luICzgHID6BxIAADVIiFh/IhRD+IhWhHIjADjgAhiljIAAi+IgrhBIAABqIguBGIhVjGIBxkvIAAhiIBtiTIAIgLICSggIgTBVIA4AAIAhByIAShdIASgXIA6AmIgKBGIAlBFIB7C5IASDpIiCC2IhzgjIgag2IBihwIAehNIgsAdIigAVIhOAqIAAEMgAgJsPIAADKIA8gxIDMgUIAqgoIAAh/IgshqIhfg4gAg0xKIhLBqIDUiSgAGyxfIg6ACIArhMIB0gQIAxBAIgDBPg");
	this.shape_111.setTransform(196.425,257.275);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1A1A1A").s().p("AIzMSIhbhyIBnh5IDtAAIGuhbIIDkyIA8AAIiECWImJE3ImDDOIhdAbgA7JiVIhPk2IAAmEIBBAmIBAFCID3GIIBPCEIgpDKIh1Akg");
	this.shape_112.setTransform(270.65,121.25);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#515151").s().p("A0JVQIAAkqIAthIICwiOIAAC/IBXi4IB7hEIhnC7ICEiUICzBkIAACGIkAF5IAAj/IiSD8IAwkKIjMDQIicD6gAJMRLIA7nXIAcjhIDAjjIBWBHIBRj+ICEB+IAAjUIj5hxIizAHIBWi0IBXhnID/AAIAAGFIDGCrIAAJYIgXgkIhUioIg4D+IA4CsIijisIAvEXIiYhVIAAF3IjMjBIhBEigApnMvIjZibImRAGIDiiYICsAtIDpAkIBACPIgmBpgAuNEmIkBgsIBOhjIBXgJIggB+ICKiEIBZgBIGvDuIg0DEgAh/nKIBOgpICfgVIAsgdIgeBNIhiBvIAaA2IBzAkIkmBSgAEXquIBuhpICTg0IAwDsIgbBnIh8AAIiIAzgAiVq0ICojEIBeA5IAsBpIAACAIgpAnIjLAVIg+AxgANkpTIgXgSIgqiIIA/hhIjyjQIAAjFIAVhIIi1AkIg4BSIiShYIiQgLIiIhcIjxBbIjkFlIhlAAIhTg5IAAjKIG1kQICmgYIBVhnIBqAqIAkCRIB0AAIgziEIB0hJIBtBvIBJhkICoDbIgtBHICpAAIAYBpIh3B2IBsAAIAxA2IBrg6IA5AqIBdBAIBbDiIguA3IhnB6gAjAvuICLgoIjVCSgAETvkIgmgdIg5hEIATiCIDPBKIAmBfIgwg/Ih0AQIgrBMIA5gCICUA1gAiWyWICKAAIgbAVIiOA2IgIAKg");
	this.shape_113.setTransform(210.35,248.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#000000","#7C7C7C"],[0,1],0,180.1,0,-180.2).s().p("EgfnAjzQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAgA3EYOIhLEKICcj6IDMjQIgxEKICSj8IAAD/IEBl5IAjj1IAmAcIAmhpIAPAhIBhjKIAzjEIgVloIBTAZIBPBiIFnCeIDBgmIBqiBICGAoIhJCEICiFJIg7HXICEEnIBCkiIDLDBIAAl3ICYBVIgukXICjCsIg4isIA4j+IBTCoIAYAkIAApYIjGisIAAmEID5A+IBdgaIGDjOIGIk4ICEiWIg7AAIoEEyImuBbIjtAAIAug3IhbjiIhchAIj4poIn7i3IjRAAIpeDFIkIDFIgsBoIj2mJIhBlCIhBglIAAGDIBPE3IDaGpIC6CZIAvAcIi2HdIjfDCIj2E+IBOAtIgoDBIAkgrIg9FgIAAERIh6E9ICbj9g");
	this.shape_114.setTransform(229.1,229.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("ALaRBIFIhiIiNzYImIGIIx6xxIqqKuIjCicINctbIR/R7IHbmzIDKYtIEzhsIk9HOg");
	this.shape_115.setTransform(259.5,194);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#CCCCCC").s().p("ASOZVIAAiwIDEAAIAABSIApAAIAABegAJFZVIAAiwIDEAAIAABSIAqAAIAABegAgCZVIAAiwIDDAAIAABSIApAAIAABegApLZVIAAiwIDFAAIAABSIAoAAIAABegAyTZVIAAiwIDEAAIAABSIApAAIAABegA16O7IAAjuICwAAIAADFIhSAAIAAApgA16FyIAAjtICwAAIAADEIhSAAIAAApgA16jVIAAjuICwAAIAADFIhSAAIAAApgA16seIAAjtICwAAIAADEIhSAAIAAApgA161mIAAjuICwAAIAADFIhSAAIAAApg");
	this.shape_116.setTransform(207.5,207.525);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6E6E6E").s().p("ATNXeIAAhdIAAhTIDFAAIAABTIApAAIAAhTIBuAAIAACwgAKFXeIAAhdIAAhTIDEAAIAABTIAqAAIAAhTIBtAAIAACwgAA9XeIAAhdIAAhTIDEAAIAABTIApAAIAAhTIBtAAIAACwgAoLXeIAAhdIAAhTIDEAAIAABTIApAAIAAhTIBuAAIAACwgAxTXeIAAhdIAAhTIDEAAIAABTIApAAIAAhTIBtAAIAACwgA4nSfIAAlbIBdAAIBSAAIAADEIhSAAIAAAqIBSAAIAABtgA4nJXIAAlcIBdAAIBSAAIAADFIhSAAIAAApIBSAAIAABugA4nAOIAAlaIBdAAIBSAAIAADEIhSAAIAAAqIBSAAIAABsgA4no5IAAlcIBdAAIBSAAIAADFIhSAAIAAApIBSAAIAABugA4nyCIAAlbIBdAAIBSAAIAADEIhSAAIAAAqIBSAAIAABtg");
	this.shape_117.setTransform(224.85,219.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#000000","#7C7C7C"],[0,1],-196.6,-196.5,196.4,196.5).s().p("EgfnAjzQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAgA1rV9IDtAAIFbAAIDtAAIFcAAIDsAAIFbAAIDuAAIFbAAIDtAAIFbAAIAAiwIhuAAIAABTIgoAAIAAhTIjFAAIAABTIgpAAIAAhTIjEAAIhuAAIAABTIgpAAIAAhTIjEAAIAABTIgqAAIAAhTIjEAAIhuAAIAABTIgoAAIAAhTIjFAAIAABTIgoAAIAAhTIjEAAIhuAAIAABTIgpAAIAAhTIjFAAIAABTIgoAAIAAhTIjFAAIhtAAIAABTIgqAAIAAhTIjEAAIAABTIgpAAIAAhTIjEAAgA5S4+IAAFbIAADtIAAFcIAADtIAAFbIAADsIAAFcIAADtIAAFbICwAAIAAhtIhSAAIAAgqIBSAAIAAjEIhSAAIAAgpIBSAAIAAjEIAAhuIhSAAIAAgpIBSAAIAAjFIhSAAIAAgoIBSAAIAAjEIAAhtIhSAAIAAgqIBSAAIAAjEIhSAAIAAgpIBSAAIAAjEIAAhuIhSAAIAAgpIBSAAIAAjFIhSAAIAAgoIBSAAIAAjFIAAhtIhSAAIAAgqIBSAAIAAjEIhSAAIAAgpIBSAAIAAjEIiwAAgAVSKAIlIBiIHDDrIE9nOIkzBsIjK4tInbGzIx/x7ItcNbIDCCcIKqquIR6RyIGImJg");
	this.shape_118.setTransform(229.1,229.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#CCCCCC").s().p("Ag0QKQhHgOgvgPQhggfAAgmQAAg5DWgpQDWgoEwAAQEwAADXAoQDXApAAA5QAAAmhgAfIgBAAQgvAPhHAOQjXAokwAAQkwAAjWgogABnGRQibjvEph4IK7EUQBCEGjQBgQhcAXhUAAQkzAAjYkqgAEYguIBHi0I7BqqIBBilIbBKrIBGizIK7EUIjOIJgAIGqKQiJkeEThAQHLhWDwFpQBYDRjiCNg");
	this.shape_119.setTransform(201.248,183.725);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#000000","#7C7C7C"],[0,1],-196.6,-196.5,196.4,196.5).s().p("EgfnAjzQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAgAq8KOIAABUIAABvQABBREDA5QEFA5FvAAQFwAAEEg5QEFg5AAhRIAAhpIAAhaQgBg2hzgsIgBAAQg5AVhXATQkEA6lwAAQlvAAkFg6QhVgTg6gVQh1AsAAA2gAlLGBQjWApAAA4QAAAmBgAfQAvAPBHAOQDXAoEwAAQEvAADXgoQBHgOAwgPIABAAQBfgfAAgmQAAg4jXgpQjXgpkvAAQkwAAjXApgAQCHDIMMBiIAAiggAO7E+IQuiSIg5jVgAiug0QESF8GnhpQDRhghDkGIq6kUQkpB4CcDvgAOZCbILVkwIhRiKgA551SIbBKqIhHC0IK8EUIDOoLIq8kUIhGCzI7BqrgAF62uQkUBBCKEdIK6EUQDiiOhXjQQjDkklRAAQhQAAhXAQg");
	this.shape_120.setTransform(229.1,229.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AxOJhQkEg5AAhRIAAhvIAAhUQAAg2B1gsQA5AVBWATQEFA6FwAAQFwAAEDg6QBWgTA6gVIAAAAQB0AsAAA2IAABaIAABpQAABRkEA5QkDA5lwAAQlwAAkFg5gAFsBJIMLg+IAACggAUZmjIA6DWIwuCSgAOHqZIBRCKIrVExg");
	this.shape_121.setTransform(295.325,266.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(255,255,255,0.518)").s().p("Ag8HyQhTlmgWgmQg4A2iJCTQBqiNAuhBQh2AGnyBIIAGgXQIbh3BPgeQhNhJkLjsQELDOBdBBQgDhfg+l2QB1GEAjBOQAtgvBehxQhABjgjA4IgPAZIAYABQCUgDLRhUQsOCQhgAiQBLBODhDTQjki7hXhDQgCBRAkE7g");
	this.shape_122.setTransform(140.325,296.15);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00CC00").s().p("AnajoQFDFzh1BwQgahvg/hOQgcCGBgDHQjrkpAylKgABrgvQiEA8ipETQgjmLLJkfQiTIXmCDEQBriqAxjWg");
	this.shape_123.setTransform(312.4792,166.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#000000","#7C7C7C"],[0,1],-247.4,247.5,247.5,-247.4).s().p("EgfnAjzQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAgAucSYQgkk7ADhRQBXBDDkC7QjhjThMhOQBhgjMOiQQrRBTiVADISBqnIENG9IJKlCIKLiXIh+qQIA4qaIqXhTIpokDIkcJcIm0H5IGYGBIvuNUQAig4BBhkQhfBxgsAvQgkhOh1mEQA+F3ADBfQhdhBkLjPQELDsBNBLQhOAeobB2IgHAXQHzhIB1gGQgtBBhrCNQCJiSA4g2QAXAmBSFmIAYAHIAAAAgAEukEIlnlRIFBl2IDTm/IHGDAIHqA+IgqHrIBdHlInhBxImvDsgAIgjiQhhjHAdiGQA+BOAbBvQB0hwlCl0QgyFLDrEpIAAAAgAMPkcQGEjECSoYQrJEfAiGMQCqkTCFg9QgxDXhtCqg");
	this.shape_124.setTransform(229.1,229.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("A08SiIAPgZIPvtVImZl/IG1n6IEcpcIJnEDIKXBTIg4KaIB+KPIqLCYIpKFCIkMm9IyCKnIgJAAIgOAAgAh2m1IlCF2IFoFQID/GmIGvjtIHhhxIhdnkIAqnrInqg+InGi/g");
	this.shape_125.setTransform(267.4,175.6916);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#993300").ss(1,1,1).p("AgXq3IAvVv");
	this.shape_126.setTransform(239.55,388.575);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(1,1,1).p("AwiiIIIQAAIE6FXADbDYIE4k6IIQh1");
	this.shape_127.setTransform(236.025,324.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#A0E3FF").s().p("AEIBdIhui5IA8AAIBjAAIB0C5gAk+BdIhti5IBtAAIAxAAIBzC5g");
	this.shape_128.setTransform(236.5,176.95);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#0B7AA7").s().p("AHIBdIhzi5ICgAAIAAC5gABSBdIAAg+QgsgggqACQgnACgmAhIAAA5IgtAAIhzi5IAdAAICDAAIAABIQAlggAngDQAqgCAtAiIAAhFIBRAAIATAAIBtC5gAn0BdIAAi5IBkAAIBtC5g");
	this.shape_129.setTransform(233.725,176.95);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#680000").s().p("AgCAvIg9AAIAAgkIheAAIAAg5ICYAAICjAAIAAA5IhaAAIAAAkg");
	this.shape_130.setTransform(234.875,220.075);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("ADPCTIgTAAIAAklIBPAAIAAElgAjYCTIgyAAIAAklIBPAAIAAElg");
	this.shape_131.setTransform(231.225,152.975);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#A18DCE").s().p("AneMJIGu2dIIPh1IimYSg");
	this.shape_132.setTransform(294.05,380.45);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#C7AFFF").s().p("AlaLiIi/3DIIQAAIIjXDg");
	this.shape_133.setTransform(183.9,384.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#A95AD8").s().p("AhLkEICXEMIiKD9g");
	this.shape_134.setTransform(250.275,345.075);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#C76BFF").s().p("AhjgbICtkEIAZI/g");
	this.shape_135.setTransform(224.25,347.75);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#C743AA").s().p("AAeK4Igv1vIAvVvIgpAAIgjsvIgZpAIA2AAIA2AAIANIKIAWNlg");
	this.shape_136.setTransform(238.925,388.575);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#7B6C9E").s().p("AgJoGIE5FYIk5lYIoQAAIM0m2IgcC/IDfFLIiuEEIDHE7IAjMwg");
	this.shape_137.setTransform(183.9,362.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFB64A").s().p("AHOS0IjflKIAcjAIAdi/Iiwg4IoRlnIhrrrQIrhnGbmtIAaOkQgnADglAgIAAhIIiDAAIAAkmIhOAAIAAEmIhtAAIhjAAIAAC6IDQAAICkAAIAtAAIAAg5QAmghAogCIAKF+IiYAAIAAA7IBeAAIAAAkIA8AAIAaOtg");
	this.shape_138.setTransform(185.5,198.55);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#655982").s().p("AniBeICLj8IiZkOIDIlDIgcjUIM0F1IoOB0Ik5E8IE5k8ImvWeg");
	this.shape_139.setTransform(292.3,361.825);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#DB8F56").s().p("AmfS0IgautIBIAAIAAgkIBZAAIAAg7IikAAIgKl+QArgDAsAhIAAA+IDRAAICkAAIAsAAIAAi6IieAAIhjAAIAAkmIhPAAIAAEmIhRAAIAABFQgtgigsACIgaukQFVFxJvDIIhoKDIliFnIjxBaIAdDTIAcDTIjIFEg");
	this.shape_140.setTransform(278.75,198.55);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#B23800").s().p("AqrHFIEqxMQCEgHB9gWIBrLrIIQFnICwA4IgcC/g");
	this.shape_141.setTransform(146.75,199.075);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#7F2800").s().p("AGoo8IC8JHQmbGtorBnQh9AXiEAHQCEuFOHj0g");
	this.shape_142.setTransform(169.325,77);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#7F523E").s().p("Ai7kjIF3AAIi8JHg");
	this.shape_143.setTransform(230.525,48.925);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#351100").s().p("ApqG5IDzhaIFhlmIBoqEQCkA0C3ApIC9P3Iy3DDg");
	this.shape_144.setTransform(318.8,200.25);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#441500").s().p("AE1ISQpvjIlVlwIC8pIQPWDsCNPxQi3gpikg0g");
	this.shape_145.setTransform(296.1,82.05);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#111130","#FD97AA"],[0,1],190,190,-190,-190).s().p("EAPDAjzICl4TIs1l1IS4jCIi9v3QiNvyvXjtIl2AAQuJD0iDOGIkqRLIU6DhIs1G2IC/XEIzJAAQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAg");
	this.shape_146.setTransform(229.1,229.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#C9C9C9").s().p("Ah3NgIAA6/IDvAAIi2a/g");
	this.shape_147.setTransform(246.9375,371.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AA/NgIi26/IDvAAIAAa/g");
	this.shape_148.setTransform(222.8625,371.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#5B4646").s().p("AGzOWItlqKIIqrLIoRAAIFanWIBoBsIDTAAIC4a/IAAABg");
	this.shape_149.setTransform(185.65,366.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#3D2F2F").s().p("AmzOXIC46/ICKAAIBKAAIBlhvIFcHZIoRAAIIqLMItlKJIgBABg");
	this.shape_150.setTransform(284.15,366.2875);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E2A141").s().p("Ah/CsIgHlWIENAAIAAFWg");
	this.shape_151.setTransform(246.8125,222.15);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#2B2020").s().p("AAgHWIjwAAIgJnNIEGAAIAAlWIkNAAIgDiIIGNAAIA5IAIg5Grg");
	this.shape_152.setTransform(255.8,238.425);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFB64A").s().p("AgENNIoSokIAjiTIBBkOIhrAAIAAnxIDYAAIAAAqIBbl6QE7DYG8gLIAHL6ImNAAIhdHkIA5HIgADFh4IB+AAIAAl9Ih+AAgAEXHtIAAlXIEAAAIAHFXg");
	this.shape_153.setTransform(179.8,190.025);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#4F3C3C").s().p("ADfSPIjTAAIg4nIIBcnkIGNAAIADCIIkAAAIAAFXIEHAAIAJHNgAlBrjIiOkbIHgiQIGyAAIgNJ3IgtABQmeAAksjNg");
	this.shape_154.setTransform(188.5,168.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D89A3E").s().p("Ah7NrIA5mrIg5oAImOAAIgHr7QCzgFDIgqQCQGcGKgDIBqIYIAiCsIneIJIhlBvgAlIjHIB/AAIAAl9Ih/AAg");
	this.shape_155.setTransform(285.225,197.925);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("ArGY4INlqKIorrNIIRAAIlbnXIHdoJIgiisIGeAAIHgJqIk1d5gApSy6IAAl9IB/AAIAAF9gAxiy6IAAl9IB+AAIAAF9g");
	this.shape_156.setTransform(311.825,299.025);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#1E1717").s().p("AxufvIlV87IJeqoIEHAAIgjCTIIRIkIlaHWIIRAAIoqLMINlKKgAMd2mQjIAqizAFIANp3IGzAAQEKAbCdFBQBnDUBUGxIiMAAIgGAAQmGAAiPmZg");
	this.shape_157.setTransform(190.525,255.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#1160DC","#FDE54C"],[0,1],0,-268.8,0,268.7).s().p("EAZpAjzIE295InhpqImeAAIhqoZICMAAQhTmxhojUQidlBkKgbImzAAImxAAInhCQICOEbIhbF6IAAgrIjYAAIAAHxIBrAAIhBEPIkHAAIpeKoIFVc7In3AAQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAg");
	this.shape_158.setTransform(229.1,229.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFB9B6").s().p("ADUAxQgVgVAAgcQAAgbAVgVQATgTAdgBQAdABATATQAVAVAAAbQAAAcgVAVQgTATgdAAQgdAAgTgTgAkzAxQgVgVABgcQgBgbAVgVQATgTAdgBQAcABAVATQATAVABAbQgBAcgTAVQgVATgcAAQgdAAgTgTg");
	this.shape_159.setTransform(237.65,352.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#070704").s().p("AByCOQglglgOgwQgWgwghgLQgggMgmBGQgNAwgnAmQg6A7hUAAQhTAAg7g7Qg7g7AAhTQAAhSA7g7QA7g7BTAAQBUAAA6A7QAmAlAOAwQAsg6AeAMQAgANAUAfQAOgvAkgkQA7g7BUAAQBTAAA7A7QA7A7AABSQAABTg7A7Qg7A7hTAAQhUAAg7g7g");
	this.shape_160.setTransform(240.475,195.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("AoRHeQgagbgEgjIgBgPQAAgsAfggQARgRAUgIIAAgCQAAhDAvgvQASgRAUgLQgPgiAAgoQAAhPA4g2QAkglAugMQgSgaAAghQAAgXAIgUQgVgmAAgvQAAhMA1g1QA1g0BLAAQBLAAA1A0IABACQAHgLAKgKQA5g4BPAAQBQAAA4A4IALALQAJgZAVgWQAmglA2gBQA2ABAmAlQAMANAJANQgUgCgWADQhUAOg3A3Qg2A4AABKQAABKA0A1IANAMQAxAoBBAAQAmABAggOQACAnAPAgQgZAkAAAvIACAVIgGAFQgRARgTAMQgEBZg/BAQhDBDhfAAQhfAAhDhDQgagagQgeIgBAAQgFBFgyAyQg2A4hPAAQgnAAghgOQgJAMgLALQgvAvhCAAQgOAAgOgCQgHALgKALQggAfgsAAQgtAAgggfg");
	this.shape_161.setTransform(178.5625,105.95);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#0E0C0F").s().p("AKgJyQgSgTgBgaQgbgDgUgUQgJgJgGgKQgQAGgTAAQgrAAgfgfQgZgYgEghQgSALgUAIQgiAMgnAAQhWAAg+g9QgwgwgKhAQgDgRAAgTQAAgZAFgXQgNgDgMgEQgYAMgeAAQg1AAgkgmQglglAAg0IABgOQgTACgUAAQhMAAg7goIgEAFIgBAAQgIAtgiAiQgsAthAAAQg/AAgugtQglglgGgzIgBgUQAAguAZglQgQgggCgnQggANglAAQhCAAgwgpIgNgLQg0g1AAhKQgBhLA3g3QA3g3BTgOQAXgDAUACQAbgQAggFQANgtAkgkQA5g4BQAAQBRAAA4A4QAQAQAMASQA5grBMAAQBcAABCBCQA/A/ACBYQBSAPA9A+QBHBHALBfQBAAPAyAxQBHBIAABjQAAAggHAeQAIAXAAAbQAAAXgGAVQAjAHAaAaQAkAkAAAxQgBAegNAZQAMAGAKAKQAXAYAAAiIAAAMQAOAFALALQAUAVAAAcQAAAdgUAUQgUAUgcAAQgdAAgVgUg");
	this.shape_162.setTransform(287.1,110.175);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#87C821").s().p("AsQCjQArgzA6gvQhZgEhBgYQhMgciHgtQCHgiBMgdQAugRA6gGQAEAjAaAaQAgAgAtAAQAsAAAgggQAKgKAHgLQANACAPAAQBCAAAvgvQALgLAJgMQAhAOAnAAQBPAAA3g4QAygyAFhFIABgBQAQAfAaAaQBDBDBeAAQBfAABDhDQA/hAADhZQAUgMARgRIAGgFQAFAyAmAlQAtAtA/AAQBAAAAsgtQAjgiAIgtIAAAAIAEgFQA7AoBMAAQAUAAATgCIgBAOQAAA0AlAlQAmAmA0AAQAeAAAYgMQANAFAMACQgFAXAAAZQAAATADARI3NEYIApCuQiPBMh8AVQiMAYj0AxQCuiqBahug");
	this.shape_163.setTransform(195.975,159.8625);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFE5A8").s().p("AirB1IAAgYIAAkjIFXg9IAAFgIAAAYIiiCPg");
	this.shape_164.setTransform(235.95,298.7875);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E5CE97").s().p("ALDYpIAA1pIEKAAIAAVpgAvMYpIAA1pIEKAAIAAVpgApuUSIAAy7IG4AAIAAAYIC2CQIChiQIAAgYIGqAAIAAS7gADZHnQgUAUAAAcQAAAdAUAUQAUAUAcAAQAdAAAUgUQAUgUAAgdQAAgcgUgUQgUgUgdAAQgcAAgUAUgAkuHnQgUAUAAAcQAAAdAUAUQAUAUAdAAQAcAAAUgUQAUgUAAgdQAAgcgUgUQgUgUgcAAQgdAAgUAUgAp1ldIi0sEIgoitIXNkaQAKBAAwAwQA+A+BWAAQAnAAAigNIkXQqInbBUIlXA+gAAqwSQAhALAWAwQANAwAmAmQA7A6BTAAQBUAAA7g6QA6g7ABhTQgBhUg6g7Qg7g7hUABQhTgBg7A7QglAlgNAuQgUgfgggMQgggNgqA7QgOgxgmglQg6g7hUABQhUgBg7A7Qg6A7AABUQAABTA6A7QA7A6BUAAQBUAAA6g6QAmgnAOgwQAfg8AdAAQAFAAAFACg");
	this.shape_165.setTransform(237.1,299.35);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#075E06","#FDE500"],[0,1],190,189.9,-190,-190.1).s().p("EgfnAjzQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAgEAMTAjnIEKAAIAA1pIkKAAgEgN8AjnIEKAAIAA1pIkKAAgAoefQIS5AAIAAy6ImqAAIAAlhIHbhVIEXwoQAUgIASgLQAEAgAZAZQAfAfArAAQATAAAQgGQAGAKAJAJQAUAUAbADQABAaASASQAVAVAdAAQAcAAAUgVQAUgTAAgdQAAgdgUgUQgLgLgOgFIAAgNQAAghgXgZQgKgJgMgGQANgZABgeQAAgxgkgkQgagagjgHQAGgVAAgXQAAgbgIgYQAHgdAAggQAAhlhHhHQgygyhAgPQgLhfhHhGQg9g+hSgPQgChYg/g/QhChChdAAQhMAAg5ArQgMgSgQgQQg4g4hRgBQhQABg5A4QgkAkgNAsQggAGgbAQQgJgOgMgMQglgmg2AAQg2AAgmAmQgVAVgKAaIgKgLQg4g5hQAAQhQAAg4A5QgKAJgIALIgBgBQg1g1hLAAQhLAAg1A1Qg1A1AABLQAAAvAVAnQgIATAAAXQAAAhARAaQgtANglAkQg3A3AABPQAAAoAPAiQgVALgRASQgvAuAABDIAAADQgUAIgRAQQggAhABAsIAAAOQg5AHgvARQhMAdiGAiQCGAtBMAcQBCAZBZADQg6AwgrAzQhaBuiuCqQD0gxCLgYQB9gVCOhNIC0MDIG/CSIAAEkIm4AAg");
	this.shape_166.setTransform(229.1,229.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#21065E","#FDE500"],[0,1],-0.1,-268.8,-0.1,268.6).s().p("EgfnAjzQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAg");
	this.shape_167.setTransform(229.1,229.1);
	this.shape_167._off = true;

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#21065E","#008DF8"],[0,1],-0.1,-268.8,-0.1,268.6).s().p("EgfnAjzQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAg");
	this.shape_168.setTransform(229.1,229.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#A98CE9","#14881F"],[0,1],-0.1,-268.8,-0.1,268.6).s().p("EgfnAjzQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAg");
	this.shape_169.setTransform(229.1,229.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#F16000","#FDE500"],[0,1],-0.1,-268.8,-0.1,268.6).s().p("EgfnAjzQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAg");
	this.shape_170.setTransform(229.1,229.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#000000","#E20101"],[0,1],-0.1,-268.8,-0.1,268.6).s().p("EgfnAjzQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAg");
	this.shape_171.setTransform(229.1,229.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#EEEEEE","#E9797C"],[0,1],-0.1,-268.8,-0.1,268.6).s().p("EgfnAjzQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAg");
	this.shape_172.setTransform(229.1,229.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#EEEEEE","#B2E979"],[0,1],-229.1,0,229.1,0).s().p("EgfnAjzQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAg");
	this.shape_173.setTransform(229.1,229.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#EEEEEE","#FFC800"],[0,1],162,162,-162,-162).s().p("EgfnAjzQhvAAhOhOQhOhOAAhvMAAAg/QQAAhuBOhOIAAgBQBOhNBvAAMA/PAAAQBvAABOBNQBOBPAABuMAAAA/QQAABvhOBOQhOBOhvAAg");
	this.shape_174.setTransform(229.1,229.1);

	var maskedShapeInstanceList = [this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]}).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147}]},1).to({state:[{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_167).wait(11).to({_off:false},0).wait(3).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,458.2,458.3);


(lib.card_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {president:0,activist:1,joe:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(lib.player);
	}
	this.frame_1 = function() {
		this.gotoAndStop(lib.player);
	}
	this.frame_2 = function() {
		this.gotoAndStop(lib.player);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Ebene_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8FFAE").s().p("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");
	this.shape.setTransform(229.1,229.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004D87").s().p("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");
	this.shape_1.setTransform(229.25,229.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#322727").s().p("AnzagQhigNhhgjQipg+ijiEQkRjcifkKQifkNAAlDQAAhbALhXIACgRQAdjXBhjDQASgkAUgjIAZgqQBViKCOiXQAngpArgqQB1hzCVh5IA2gsIAPgMINtq3QCKBDBzA0QBzAyBdAiQBAAYA2AQIATAFQAvAMAuAKQCXAeCVAAQCWAACfg1IAoBHIkrDeIgXAQIh5BbIigB2IjKCWQBPAABQANQBjARBlAlQA9AWA+AeIARAIQAlASAhAUQC4BsBlCtIALAUQApBLAaBNQAtCEAACKIAAAZQgBAjgDAkQgbEki9EXIggAtQg/BThNBNQioCpjoCKQgoAYgqAXQgyAcg1AaIguAXQhIAihFAfIhCAcIgGACQkjB5kJA3Ig9AMQg5AKg4ADIgtABQg1AAg1gGgAici9Ig2AiQgfAUgcAVIAABnIAACkIAABnQAACogaA6QgWA5hQBDQgwAjgfAbIl9E+QCjCqCnBjIAxAcIAYANQAxAWA0ATQBWAeBeATQBcARBjAHIAAmtIAAjAIAAinIAAjDIAArJQhfAxhPAwgAGBMnQhhAahjAwQglASglAVIAAHmQHahmGWkzIARgSIAqgwIAmgvIg1gVQhqgphhgWQhxgahjAAQh2AAh5AhgAs5spQhiBwhFBrQg2BVgkBRQhqDmAAEsQAAC8ApCZQAMAwARAsQANAjAOAiQA8CMBjCHIANATQBNhHArg5QAagkAOgfQAIgWAHggQAEgYADgeQAJhLAAhxIAA0tQg0A1gtA0gABzMuQEXiXDzAAQDvAAEJCJQAthcAbhYQAchYAJhVQAGgvAAguIAAgbQhsA3hUAiQg2AWgsAOIgcAIQh8AfiOAAQiJAAiJgoQiNgoiOhUgABzlGIAAINQCbBqCAAsQCAAsCbAAQCOAAB3gjQBzgjC6hmQg6jpiSiOQg8g7hDgsQhWg4hhggQgugPgwgJIgagFQhQgOhXAAQiaAAitA+gAkN0BIAAO1IAABeIA6grIPMrfQnih3oAi2g");
	this.shape_2.setTransform(225.225,232.9945);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#282732").s().p("EAdvAiiIAFgIQAQgaAYgWQA5g5BIgTQALgDAKgCQAMgCAMgBQgPAXgMAsIgGASQgGAagEAdgEASaAiiQgGgngKgiQgGgagIgSIgFgKIgDgGIgBgFIgCgBQAMABAMADQAZAFAXAKIAEACQAOAGANAIIADACIALAGIABABIACABIAEADIACABIAGAFIADABIAPANIAPAPQAbAaASAegEANOAiiIAFgIQARgaAWgWQA5g5BKgTQAJgDALgCQAMgCAMgBQgPAXgMAsQgEAIgCAKQgGAagEAdgEACPAiiQgGgngKgiQgGgagIgSIgFgKIgDgGIgBgFIgCgBQAMABAMADQAZAFAXAKIAEACQAOAGANAIIADACIALAGIABABIACABIAEADIACABIAGAFIADABIAPANIAPAPQAbAaASAegEgC8AiiIAFgIQARgaAWgWQA5g5BKgTQAJgDALgCQALgCAMgBQgPAXgMAsQgDAIgCAKQgGAagEAdgEgPAAiiQgGgngKgjQgGgagJgSIgEgKIgEgGIgBgFIgCgBQANABAMADQAYAFAYAKIADACQAOAGANAIIAEACIAKAGIABABIACABIAFADIABABIAHAFIACABIAQANIAPAPQAbAaASAfgEgUNAiiIAFgJQARgaAXgWQA5g5BJgTQAKgDALgCQAMgCAMgBQgPAXgNAsQgDAIgCAKQgGAagFAegEgf7AiiQgGgngKgjQgGgagIgSIgFgKIgDgGIgBgFIgCgBQAMABAMADQAYAFAYAKIAEACQAOAGANAIIADACIALAGIABABIACABIAEADIACABIAGAFIADABIAPANIAQAPQAaAaATAfgEgihAiiIgBAAIAAgBIAAiCIAKgCQAJgDALgCQAMgCAMgBQgPAXgMAsQgEAIgCAKQgGAagEAegEAidAgtIgFgKIgDgGIgCgFIgBgBIARADIAAAiIgGgPgAY4dBQhKgOg7gzIgRgQQhHhHgMhgIgBgKQAWATA3APIASAFQAyAMA/AGQAGBNARA9IAFASQAHAVAIAQIAGALIgXgDgAJJdBQhLgOg7gzIgQgQQhIhHgMhgIgBgKQAXATA3APQAHADALACQAxAMBAAGQAFBNASA9IAEASQAIAVAHAQIAGALIgWgDgAoCdBQhLgOg7gzIgRgQQgogogVgwQBhAkBiAMQAGAfAIAbIAEASQAIAVAHAQIAGALIgWgDgA5pdBQhLgOg7gzIgRgQQhIhHgLhgIgBgKQAXATA2APQAIADAKACQAyAMBAAGQAFBNARA9IAFASQAHAVAIAQIAFALIgVgDgAafc5IAAAAIABgDQAJgVAJgfIAFgQIAEgSIAAgCIACgGIAAgCIAAgFIABAAIAAgDIACgNIABgDIAEgcIABgFIADglQBRgFBAgSIASgFQAVgHAPgHIgCAOQgOBJgyA7IgQAQQhDBDhYAOIgJACIAFgKgAKvc5IAAAAIACgDQAIgVAKgfIAEgQIAEgSIAAgCIACgGIAAgCIABgFIAAAAIAAgDIADgNIAAgDIAFgcIAAgFIADglQBSgFA/gSIASgFQAWgHAPgHIgCAOQgPBJgyA7IgQAQQhCBDhZAOIgJACIAFgKgAmcc5IAAAAIACgDQAIgVAKgfIAEgQIAEgSIAAgCIADgGIAAgCIAAgFIABAAIAAgDIAAAAQA4gDA5gLIA9gMQgNAXgSAVIgQAQQhDBDhXAOIgKACIAFgKgA4Ec5IAAAAIACgDQAJgVAJgfIAFgQIADgSIAAgCIADgGIAAgCIABgFIAAAAIAAgDIADgNIAAgDIAEgcIAAgFIAEglQBSgFA/gSIASgFQAVgHAPgHIgBAOQgPBJgyA7IgQAQQhDBDhYAOIgJACIAEgKgAVOYDIAAgCIAAgDIABgCIAAgCIAAgCQABgKADgKQAGgdALgZIAAgBIAEgJIADgFIAFgKIAKgRQARgaAXgWQA5g5BJgTQAKgDALgCQAMgCAMgBQgPAXgNAsIgFASQgNA1gFBEQhIAGg7AQQgaAHgSAIIgKAFIgGADIgFABQAAABAAAAQAAAAgBABQAAAAAAABQgBAAgBAAIgJAHIAAgDgAFeYEIAGgCIgGAEIAAgCgA9UYDIABgCIAAgDIAAgCIAAgCIABgCQABgKACgKQAFgdAMgZIAAgBIAEgJIADgFIAFgKIALgRQAQgaAXgWQA5g5BJgTQAKgDALgCQAMgCALgBQgPAXgMAsQgDAIgCAKQgMA1gGBEQhJAGg6AQQgaAHgSAIIgLAFIgFADIgFABQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAIgKAHIAAgDgAeQX4IgCgCQgVgJgfgJIgQgFIgSgDIgDAAIgFgDIgDAAIgEAAIAAgBIgDAAIgNgCIgDgBIgcgEIgGAAIgrgEQgGhNgRg9QgGgagJgSIgEgKIgEgGIgBgFIgCgBQAMABANADQAYAFAYAKIADACQAOAGANAIIAEACIAKAGIABABIACABIAFADIABABIAHAFIACABIAQANIAPAPQAcAcAUAhIACAEIABABQAKAUAJAVIAGAXIACAHIABAHIAEAUgAOhX4IgDgCQgUgJgggJIgPgFIgSgDIgDAAIgFgDIgDAAIgFAAIAAgBIgCAAIgOgCIgCgBIgdgEIgFAAIgsgEQgEhAgNg1QAqgWAogYIAEACIABABIABABIAFADIACABIAGAFIADABIAPANIAPAPQAdAcATAhIADAEIAAABQALAUAIAVIAHAXIACAHIABAHIAEAUgA0SX4IgCgCQgVgJgfgJIgQgFIgSgDIgCAAIgGgDIgCAAIgGAAIAAgBIgCAAIgNgCIgDgBIgdgEIgEAAIgsgEQgGhNgRg9QgHgagHgSIgGgKIgCgGIgCgFIgCgBQAMABAMADQAZAFAXAKIAFACQANAGAOAIIADACIAKAGIACABIABABIAEADIACABIAGAFIADABIAPANIAQAPQAdAcASAhIADAEIABABQALAUAIAVIAGAXIACAHIACAHIADAUgAIzWlIgFApQhIAGg6AQIgGACQBGgfBHgigAmBVhIgHgeQgHgagIgSIgFgKIgDgGIgBgFIgCgBQAMABAMADQAYAFAYAKIAEACQAOAGANAIIAEACIAKAGIABABIABABIAFADIACABIAGAFIADABIAPANIAPAPQAdAcATAhIABABQhfgThWgegAovUPIAZgHQAKgDAKgCQAMgCAMgBQgLAQgJAbIgxgcgEgiEAQHQgPgDgPgEIAAjCIAEAAQAFBNASA+IAEASQAIAVAHAPIAGALIgWgDgEAgyAQGQhLgOg6gzIgRgPQhHhIgMhfIgBgKQAXASA2AQIASAFQAyAMBAAFQAFBNARA+IAFASQAHAVAHAPIAHALIgXgDgAB+QAIAAgBIABgCQAKgVAIgfIAFgQIAEgSIAAgDIADgFIAAgDIAAgCQBjgxBigaQgSAvgjAoIgQARQhDBChXAPIgKABIAFgJgEggeAQAIAAgBIABgCQAKgVAIgfIAFgQIAEgSIAAgDIADgFIAAgDIAAgFIABAAIAAgCIACgNIAAgDIAFgdIAAgFIADgkQBSg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IgEgBIgcgEIgFAAIgrgEQgHhNgRg9QgGgagIgSIgFgKIgDgGIgCgFIgCgBQANABAMADQAYAFAYAKIAEACQANAGAOAIIADACIAKAGIACABIACABIAEADIABABIAHAFIACABIAQANIAQAPQAcAcATAhIACAEIABABQALAUAIAVIAGAXIACAHIACAHIAEAUgAN+6NIgDgCQgVgJgfgJIgQgFIgSgDIgDAAIgFgDIgCAAIgFAAIAAgBIgDAAIgNgCIgDgBIgcgEIgGAAIgrgEQgGhNgRg9QgGgagJgSIgEgKIgEgGIgBgFIgCgBQAMABANADQAYAFAXAKIAEACQAOAGANAIIAEACIAKAGIABABIACABIAFADIABABIAHAFIACABIAQANIAPAPQAcAcAUAhIACAEIABABQAKAUAIAVIAHAXIACAHIABAHIAEAUgAjS6NIgCgCQgWgJgegJIgRgFIgSgDIgCAAIgGgDIgCAAIgFAAIAAgBIgDAAIgMgCIgEgBIgcgEIgFAAIgrgEQgHhNgRg9QgGgagIgSIgFgKIgDgGIgCgFIgCgBQANABAMADQAYAFAYAKIAEACQANAGAOAIIADACIAKAGIACABIACABIAEADIABABIAHAFIACABIAQANIAQAPQAcAcATAhIACAEIABABQALAUAIAVIAGAXIACAHIACAHIAEAUgEAgZgf4QhLgOg6gzIgRgPQgpgpgVgwIC9AAQAGA6ANAxIAGASQAGAVAIAPIAGALIgWgDgEAh/gf/IAAgBIABgCQAJgVAJgfIAGgQIADgSIAAgDIACgFIAAgDIABgFIAAAAIAAgCIADgNIABgDIABgKIAACGQgPAEgRADIgJABIAFgJgEgiigf9IAAgYIAGAPIAHALIgNgCgEghFggGIAAAAIABgDQAJgVAJgfIAFgQIAEgSIAAgCIACgGIAAgCIAAgFIABAAIAAgDIADgNIAAgDIAEgcIAAgEICzAAQgQAjgbAfIgPAQQhDBDhYAOIgKACIAGgKgEAPbggGQhLgOg6gzIgRgPQgigjgVgoIC4AAQAGAyAMArIAFASQAHAVAIAPIAFALIgWgDgEgAUggGQhMgOg6gzIgRgPQgigjgVgoIC4AAQAGAyAMArIAFASQAHAVAIAPIAEALIgUgDgEARBggNIAAgBIACgCQAJgVAJgfIAFgQIADgSIAAgDIADgFIAAgDIABgFIAAAAIAAgCIACgNIABgDIAEgZICwAAQgQAfgXAbIgQARQhDBChYAPIgJABIAEgJgEABQggNIAAgBIACgCQAJgVAJgfIAFgQIADgSIAAgDIADgFIAAgDIABgFIAAAAIAAgCIACgNIABgDIADgZICxAAQgQAfgXAbIgQARQhDBChYAPIgJABIAEgJgEgRhggIQhLgOg6gzIgRgPQgigigUgnIC3AAQAGAxALAqIAGASQAGAVAIAPIAGALIgWgDgEgP7ggPIAAgBIABgCQAJgVAJgfIAGgQIADgSIAAgDIACgFIAAgDIABgFIAAAAIAAgCIADgNIABgDIADgXICvAAQgPAegXAaIgPARQhDBChZAPIgJABIAFgJg");
	this.shape_3.setTransform(228.4,228.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9999").s().p("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CIAAAEIAJgHQABgBABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIAFgBIAGgDIAKgFQASgIAagGQA6gRBJgGQAFhEANg0QACgLADgHQANgtAPgXQgMABgMADgAIe+EQgMABgJADQhKATg5A5QgXAXgQAZIgKARIgGAKIgCAGIgFAJIAAAAQgLAZgGAdQgCAKgBALIAAABIAAACIgBADIAAACIAAACIAAAEIAJgHQABgBAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAGgBIAFgDIAKgFQATgIAZgGQA7gRBJgGQAFhEANg0QABgLADgHQANgtAPgXQgMABgLADgAoy+EQgLABgKADQhJATg5A5QgXAXgRAZIgKARIgFAKIgDAGIgEAJIAAAAQgLAZgGAdQgDAKgBALIAAABIAAACIgBADIAAACIAAACIAAAEIAJgHQABgBABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIAFgBIAGgDIAKgFQASgIAagGQA6gRBJgGQAFhEANg0QACgLADgHQANgtAPgXQgMABgMADgA46+EIACAFIACAFIAGALQAHASAHAaQARA9AGBMIAsAFIAEAAIAdAEIADAAIANADIACAAIAAABIAGAAIACAAIAGACIACAAIASAEIAQAFQAfAJAVAJIADABIAAAAIgEgUIgBgGIgCgIIgHgWQgHgVgLgUIgBgCIgCgEQgTgggdgcIgQgPIgPgNIgDgCIgGgFIgCgBIgEgDIgCgBIgBgBIgKgGIgDgCQgOgHgOgGIgEgCQgXgKgZgFIgYgEIACABgAZo+FIABAEIADAGIAFALQAJARAGAbQARA8AGBNIArAEIAGABIAcADIADABIANACIADAAIAAABIAEABIADAAIAFACIADAAIASADIAQAGQAfAIAVAKIACABIABAAIgDgUIgCgHIgCgHIgGgWQgJgWgKgUIgBgBIgDgEQgSgggdgdIgQgPIgPgMIgDgCIgGgFIgBgBIgFgDIgBgBIgCgBIgKgGIgEgCQgNgIgOgGIgDgBQgYgLgZgFQgLgCgNgCIACACgAJ/+FIABAEIADAGIAFALQAIARAGAbQASA8AGBNIArAEIAFABIAcADIAEABIAMACIADAAIAAABIAFABIACAAIAGACIACAAIASADIAQAGQAfAIAWAKIACABIAAAAIgDgUIgBgHIgDgHIg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");
	this.shape_4.setTransform(229.25,229.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#282732").s().p("Ay9YuQAvi5BOhVQB+iIDOAAQBVAABrAhQA3ASAsAMQAeAIAYAFIAhAGQAYADATAAQAbAAAZgDQBqgOBKhIQBShVAGiHIABgYQAAgugIguQgQhmg3hlQgRgggVgfIgbgoQjDkSkhABQgzAAhOASIgpg+QBshEBmgZQA3gNA0gCIAJAAQBRABBGAVIAEACQAiALAqAUQApAUAwAcQgGg7gLgxQgLg0gQgoQgKgZgMgUQgMgZgOgVQg2hShPgyQgTgMgUgJQgqgWgpgKQgngKgmAAQgTAAgUAEQhGAKhIAxIg0g7QBohYBZgiQBVglBrAAQCMAACuBkQAGjDAph6IAIgTQAMgfARgfIACgEQAyhbBfhhQAvgzBFg6IAJgHQAggaAkgbQBghICAhRQjMA/iWAOQggADgeABIgQABIgIAAQgjAAgkgDQiagMi0g/QjdhRh5gBQicABhYBNQgtAigXAkQgHAKgFALQgMAcAAAdQAAAaAOAPQAPAOATAAQASAAAogSIABAAQAlgPAdAAQAYAAAVAHQAgALAaAbQAsAsAABCQAABKgvA0IgIAGQguAphFAAIgHAAIgKAAQhZgHhDhKQhEhOgFh9IAAgWIABgiQADgqAMgoQAniFCBh0QBehYB1grQAogOAqgJIAbgFQA/gLBDAAQBBAABlAOIAjAFIBXAPQB5AWCbAkQD6A5CkANQAwAEAoAAIAZAAQAogBAlgDQBNgHBBgSQAZgHAXgJQB6goCFhoIA/A/QjtEDhVDEIgDAGQgoBYgVBfIgGAfIgIAtQgLBMAABPQAABfAGDXIACBbIAAAGIABAdQACCNAACVIAAAFIAAAcIgCBcQgOGhhxDbQilFNl9D2QiEBZh3A0IgOAGQhFAchBAQQhQAUhJAAQhDAAgwgLIgcgIQgsgOhKgaIgUgIIAAAAQiYg+hgAAQhRAAgwAlQgkAWgeBNgAH6xRQhIBFg4BPIgaAmQgsBEggBMIgSAsQgUAxgQA7QgwC6gBEVIAII8IABAvIABBfIABBlQABBqgKBYQgGA9gLA1IgFAbQgRBJgZA6Qg0B6isCIQDJhVBZhGQB9hgBGibQBLibgBjwIgJojIgChiIgBgvIgBhcIgBgxQAAl5CBkcQBVjIDwjoQkCB+h6B1g");
	this.shape_5.setTransform(222.5,233.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9999").s().p("EgjvAhdIgBgIIAAgEIACAMgEAjxAKRIABAAIgBAcgEgiyghcIgDADIAAABIADgEg");
	this.shape_6.setTransform(229.3,223.1875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AC994D").s().p("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");
	this.shape_7.setTransform(229.1,229.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#993333").s().p("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");
	this.shape_8.setTransform(229.15,229.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,458.5,458.5);


(lib.buff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,oil:1,health:2,wissen:3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(lib.buff);
	}
	this.frame_1 = function() {
		this.gotoAndStop(lib.buff);
	}
	this.frame_2 = function() {
		this.gotoAndStop(lib.buff);
	}
	this.frame_3 = function() {
		this.gotoAndStop(lib.buff);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Ebene_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhYCSQglglAAg0QAAg0AlgkQAlgkA2hzQAxBzAkAkQAmAkgBA0QABA0gmAlQgkAlg0AAQgzAAglglgAgGAnQgIAFgGALQgHAKAAAKQABALAGADQAGAEAJgFQAIgFAFgLQAHgKAAgKQAAgKgHgEIgFgCQgDAAgGADgAgygjQgQAKgMATQgKASgBATQABATAMAGQALAHARgJQAQgJALgUQALgTAAgSQgBgSgLgHQgFgDgGAAQgHAAgKAFg");
	this.shape.setTransform(0.6,-0.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhCC1IAAh3IhyAAIAAh7IByAAIAAh3IB6AAIAAB3IB9AAIAAB7Ih9AAIAAB3g");
	this.shape_1.setTransform(-0.225,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjICKIAAggIGQAAIAAAggAgDBUIAAi9QBehBBfBBIAAC9QhVg9hoA9gAjDBUIAAi9QBfhBBeBBIAAC9QhUg9hpA9g");
	this.shape_2.setTransform(1.1,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Ebene_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003300").s().p("ACcESIAAgBIkjAAIAAABIhpAAQgOAAgJgKQgKgJAAgOIAAnhQAAgOAKgJQAJgKAOAAIHhAAQAOAAAJAKQAKAJAAAOIAAHhQAAAOgKAJQgJAKgOAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006643").s().p("ACcESIAAgBIkjAAIAAABIhpAAQgOAAgJgKQgKgJAAgOIAAnhQAAgOAKgJQAJgKAOAAIHhAAQAOAAAJAKQAKAJAAAOIAAHhQAAAOgKAJQgJAKgOAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-27.3,54.7,54.7);


(lib.zeile = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Ebene_1
	this.content_text = new cjs.Text("blablalblablabl blbla bllbla bla bl alb blb", "40px 'OCRAEXT'", "#FFFFFF");
	this.content_text.name = "content_text";
	this.content_text.textAlign = "center";
	this.content_text.lineHeight = 43;
	this.content_text.lineWidth = 403;
	this.content_text.parent = this;
	this.content_text.setTransform(424.25,5.85);

	this.content_pic = new lib.card_content();
	this.content_pic.name = "content_pic";
	this.content_pic.setTransform(99.8,99.8,0.4356,0.4356,0,0,0,229.1,229.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.content_pic},{t:this.content_text}]}).wait(1));

	// Ebene_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36803A").s().p("Eg4dAPlIAA/JMBw7AAAIAAfJg");
	this.shape.setTransform(315.775,98.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Ebene_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#255B28").s().p("Eg4dAShMAAAglBMBw7AAAMAAAAlBg");
	this.shape_1.setTransform(315.775,98.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.zeile, new cjs.Rectangle(-45.6,-20,722.8000000000001,237), null);


(lib.player_president = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,zoom:1,"hover":6,loop:22};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(1));

	// Ebene_5
	this.button_next = new lib.button_check();
	this.button_next.name = "button_next";
	this.button_next.setTransform(357.9,713.1,1,1,180,0,0,49.6,49.6);
	this.button_next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.button_next).wait(1).to({_off:false},0).wait(40));

	// Ebene_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA/BoQgGgGAAgJIgFiLQgBgUgUAAIgSAAQgJAAgJAGIg0AiIAAB3QAAAJgFAFQgGAGgHgBQgIABgGgGQgFgFAAgJIAAiyQAAgHAFgGQAGgFAIgBQAHABAGAFQAFAGAAAHIAAANIAjgVQARgKAVgBIASAAQAWABARAPQAQAQABAXIAFCOQAAAJgFAFQgGAGgIgBQgHAAgGgEg");
	this.shape.setTransform(399.5521,398.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_1.setTransform(371.725,398.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhLBsQgIABgGgGQgFgFAAgJIAAgQQAAgHAKgLICCh9IhwAAQgIABgFgGQgGgGAAgIQAAgHAGgGQAFgFAIgBICOAAQAIABAGAFQAFAGAAAHIAAAQQAAAJgGAGIiFCBIB4AAQAIAAAFAGQAGAFAAAHQAAAJgGAFQgFAGgIgBg");
	this.shape_2.setTransform(343.975,398.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA/BoQgGgGAAgJIgFiLQgBgUgUAAIgSAAQgJAAgJAGIg0AiIAAB3QAAAJgFAFQgGAGgHgBQgIABgGgGQgFgFAAgJIAAiyQAAgHAFgGQAGgFAIgBQAHABAGAFQAFAGAAAHIAAANIAjgVQARgKAVgBIASAAQAWABARAPQAQAQABAXIAFCOQAAAJgFAFQgGAGgIgBQgHAAgGgEg");
	this.shape_3.setTransform(316.1521,398.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag4CdQgIAAgGgFQgFgGAAgIQAAgHAFgGQAGgFAIAAIAmAAIAAiMIgmAAQgIAAgFgGQgGgFAAgIQAAgIAGgGQAFgFAIAAIA4AAQAIAAAGAFQAFAGAAAIIAACfIAmAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgHAAgAgThmQgIAAgFgGQgGgGAAgHIABgRQAAgHAFgGQAGgFAIAAIASAAQAIAAAGAFQAFAGAAAHIAAARQAAAIgFAFQgGAGgIAAg");
	this.shape_4.setTransform(288.325,393.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKBsQgNAAgGgNIhBiTIAAglQAAgHAFgGQAGgFAIAAQAIAAAFAFQAGAGAAAHIAAAdIA4CBIA5iBIAAgdQAAgHAGgGQAGgFAIAAQAHAAAGAFQAFAGAAAHIAAAkIhBCUQgGANgKAAg");
	this.shape_5.setTransform(260.525,398.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVBsQgaAAgYgVQgXgWAAgZIAAhPQAAgZAXgVQAXgWAbAAIArAAQAZgBAYAWQAYAVAAAaIAABPQAAAZgYAWQgYAVgZAAgAgkhAIgNALQgHAGAAAKIAABLQAAAKAHAGIAPANQAEAEAJAAIArAAQAJAAAIgHIAMgLQAHgFAAgKIAAhLQAAgLgHgGIgOgKQgGgGgJAAIgmAAQgNAAgHAGg");
	this.shape_6.setTransform(232.725,398.4744);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhYBnQgGgFAAgJIAAiyQAAgHAGgGQAFgFAIgBQAHABAHAFQAEAGAAAHIAAAYIAggaQASgQASAAIAcAAQAXAAAQAQQARARAAAYIAAAKQAAAHgFAGQgGAGgIAAQgHAAgGgGQgFgFgBgIIAAgKQAAgJgFgFQgFgGgIAAIgZAAQgIAAgJAJIg2AvIAABnQABAJgGAFQgGAGgHgBQgIABgFgGg");
	this.shape_7.setTransform(204.95,398.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhZCQQgFgGAAgIIAAkWICFAAQAXAAARARQAQAQAAAYIAABHQAAAWgQARQgRAQgXAAIhfAAIAABfQAAAIgFAGQgGAFgIAAQgIAAgGgFgAg4gCIBfAAQAHAAAGgFQAFgGAAgHIAAhHQAAgIgFgFQgGgGgHAAIhfAAg");
	this.shape_8.setTransform(177.175,394.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA/BoQgGgGAAgJIgFiLQgBgUgUAAIgSAAQgJAAgJAGIg0AiIAAB3QAAAJgFAFQgGAGgHgBQgIABgGgGQgFgFAAgJIAAiyQAAgHAFgGQAGgFAIgBQAHABAGAFQAFAGAAAHIAAANIAjgVQARgKAVgBIASAAQAWABARAPQAQAQABAXIAFCOQAAAJgFAFQgGAGgIgBQgHAAgGgEg");
	this.shape_9.setTransform(121.5521,398.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_10.setTransform(93.725,398.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AABCNQgXAAgRgRQgRgQAAgXIAAh6IgTAAQgIAAgFgGQgGgFAAgIQAAgHAGgGQAFgGAIABIATAAIAAgvQABgIAFgGQAFgFAJAAQAHAAAGAFQAGAHAAAHIAAAvIBKAAQAIgBAGAGQAFAGAAAHQAAAIgFAFQgGAGgIAAIhLAAIAAB6QAAAHAGAGQAFAFAIABIAkAAQAPAAAFgRQAFgRAOAAQAIAAAGAHQAFAEAAAJQAAARgQARQgQARgZAAg");
	this.shape_11.setTransform(65.9,395.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AA/BoQgGgGAAgJIgFiLQgBgUgUAAIgSAAQgJAAgJAGIg0AiIAAB3QAAAJgFAFQgGAGgHgBQgIABgGgGQgFgFAAgJIAAiyQAAgHAFgGQAGgFAIgBQAHABAGAFQAFAGAAAHIAAANIAjgVQARgKAVgBIASAAQAWABARAPQAQAQABAXIAFCOQAAAJgFAFQgGAGgIgBQgHAAgGgEg");
	this.shape_12.setTransform(38.1521,398.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag4CdQgIAAgGgFQgFgGAAgIQAAgHAFgGQAGgFAIAAIAmAAIAAiMIgmAAQgIAAgFgGQgGgFAAgIQAAgIAGgGQAFgFAIAAIA4AAQAIAAAGAFQAFAGAAAIIAACfIAmAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgHAAgAgThmQgIAAgFgGQgGgGAAgHIABgRQAAgHAFgGQAGgFAIAAIASAAQAIAAAGAFQAFAGAAAHIAAARQAAAIgFAFQgGAGgIAAg");
	this.shape_13.setTransform(10.325,393.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_14.setTransform(-17.475,398.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhYBnQgGgFAAgJIAAiyQAAgHAGgGQAFgFAIgBQAHABAHAFQAEAGAAAHIAAAYIAggaQASgQASAAIAbAAQAYAAAQAQQARARAAAYIAAAKQAAAHgFAGQgGAGgIAAQgHAAgGgGQgFgFgBgIIAAgKQAAgJgFgFQgFgGgJAAIgYAAQgIAAgJAJIg2AvIAABnQABAJgGAFQgGAGgHgBQgIABgFgGg");
	this.shape_15.setTransform(-45.25,398.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_16.setTransform(-73.075,398.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSCHIhMjDIAAhFQAAgIAFgGQAGgFAIAAQAHAAAGAFQAFAGAAAIIAAA+IA5CRIA5iRIAAg+QAAgIAGgGQAFgFAIAAQAIAAAGAFQAFAGAAAIIAABFIhNDDQgFAOgNAAQgMAAgGgOg");
	this.shape_17.setTransform(-100.775,394.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhZBnQgFgFAAgJIAAiyQAAgHAFgGQAGgFAIgBQAIABAFAFQAGAGAAAHIAAAYIAegaQAUgQARAAIAbAAQAYAAARAQQAQARAAAYIAAAKQAAAHgGAGQgFAGgIAAQgHAAgGgGQgGgFABgIIAAgKQAAgJgGgFQgFgGgJAAIgYAAQgIAAgIAJIg2AvIAABnQgBAJgFAFQgGAGgHgBQgIABgGgGg");
	this.shape_18.setTransform(-156.45,398.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_19.setTransform(-184.275,398.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AA/CQQgFgGAAgIIAAgIQgcAbgYAAIgfAAQgTAAgUgQIgQgOQgEgFgGgMQgEgMAAgLIAAhMQgBgMAGgMQAFgMAIgGIAPgOQARgOAWAAIAbAAQAVAAATAQIANALIAAhZQAAgIAFgGQAGgFAHAAQAIAAAGAFQAFAGABAIIAAEDQgBAIgFAGQgGAFgHAAQgJAAgFgFgAgmgXIgLALQgHAFAAAIIAABQQAAAIAIAGIAMALQAGAFAHAAIAdAAQAGAAAJgHIAegZQAHgGAAgKIAAgpQAAgNgIgHIgfgZQgGgGgKAAIgZAAQgIAAgIAGg");
	this.shape_20.setTransform(-212.15,394.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAACNQgWAAgRgQQgRgRAAgYIAAh5IgTAAQgIAAgGgGQgFgFAAgIQAAgHAFgGQAGgGAIABIAUAAIAAgvQAAgIAFgFQAGgGAIAAQAHAAAGAGQAFAFABAIIAAAvIBKAAQAIgBAGAGQAFAGAAAHQAAAIgFAFQgGAGgIAAIhLAAIAAB5QAAAIAGAGQAFAFAHABIAlAAQAPgBAFgQQAFgQAOAAQAJgBAFAHQAFAEAAAJQAAARgQARQgQARgZAAg");
	this.shape_21.setTransform(385.6,345.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AA/BoQgGgGAAgJIgFiLQgBgUgUAAIgSAAQgJAAgJAGIg0AiIAAB3QAAAJgFAFQgGAGgHgBQgIABgGgGQgFgFAAgJIAAiyQAAgHAFgGQAGgFAIgBQAHABAGAFQAFAGAAAHIAAANIAjgVQARgLAVAAIASAAQAWABARAQQAQAPABAXIAFCOQAAAJgFAFQgGAGgIgBQgHAAgGgEg");
	this.shape_22.setTransform(357.8521,348.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_23.setTransform(330.025,348.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AA/CQQgFgGAAgIIAAgIQgcAbgYAAIgfAAQgTAAgTgQIgQgOQgGgFgEgMQgGgMAAgLIAAhMQABgMAFgMQAGgMAGgGIAQgOQARgOAWAAIAaAAQAXAAASAQIANALIAAhZQAAgIAFgGQAGgFAHAAQAIAAAGAFQAGAGgBAIIAAEDQABAIgGAGQgFAFgJAAQgHAAgGgFgAgmgXIgMALQgFAFgBAIIAABQQABAIAGAGIANALQAGAFAGAAIAeAAQAGAAAIgHIAegZQAIgGAAgKIAAgpQAAgNgIgHIgfgZQgGgGgKAAIgaAAQgHAAgIAGg");
	this.shape_24.setTransform(302.15,344.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag4CdQgIAAgGgFQgFgGAAgIQAAgHAFgGQAGgFAIAAIAmAAIAAiMIgmAAQgIAAgFgGQgGgFAAgIQAAgIAGgGQAFgFAIAAIA4AAQAIAAAGAFQAFAGAAAIIAACfIAmAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgHAAgAgThmQgIAAgFgGQgGgGAAgHIABgRQAAgHAFgGQAGgFAIAAIASAAQAIAAAGAFQAFAGAAAHIAAARQAAAIgFAFQgGAGgIAAg");
	this.shape_25.setTransform(274.425,343.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgpBsQgTAAgSgMQgRgMAAgLQAAgHAGgGQAFgGAKAAQAGAAAJAIQAIAJAQAAIBFAAQAIAAAFgHQAGgGAAgJQAAgMgMgGIhlgtQgOgGgIgMQgIgNAAgNQAAgUAOgPQAOgOAVAAIBWAAQATAAAQAMQAQAMAAALQAAAIgGAFQgGAFgHAAQgJAAgHgIQgIgIgIAAIhUAAQgNAAAAALQAAAHAIAEIBkAsQAPAGAKAPQAJAPAAASQAAAZgRAQQgQARgWAAg");
	this.shape_26.setTransform(246.65,348.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_27.setTransform(218.825,348.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhZBnQgFgFAAgJIAAiyQAAgHAFgGQAGgFAIgBQAIABAFAFQAGAGAAAHIAAAYIAegaQAUgQARAAIAcAAQAXAAAQARQARAQAAAXIAAALQAAAHgGAGQgFAGgIAAQgHAAgGgGQgGgFABgIIAAgLQAAgHgGgGQgGgGgHAAIgZAAQgIAAgIAJIg2AuIAABoQgBAJgFAFQgGAGgHgBQgIABgGgGg");
	this.shape_28.setTransform(191.05,348.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhZCQQgFgGAAgIIAAkWICFAAQAXAAARARQAQAQAAAYIAABHQAAAWgQARQgRAQgXAAIhfAAIAABfQAAAIgFAGQgGAFgIAAQgIAAgGgFgAg4gCIBfAAQAHAAAGgFQAFgGAAgHIAAhHQAAgIgFgFQgGgGgHAAIhfAAg");
	this.shape_29.setTransform(163.275,344.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgSAjQgIAAgFgGQgGgFAAgIIAAgfQAAgIAGgGQAFgFAIAAIAlAAQAIAAAGAFQAFAGAAAIIAAAfQAAAIgFAFQgGAGgIAAg");
	this.shape_30.setTransform(107.575,351.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhYBnQgGgFAAgJIAAiyQAAgHAGgGQAFgFAIgBQAHABAHAFQAEAGAAAHIAAAYIAggaQASgQASAAIAbAAQAYAAAQARQARAQAAAXIAAALQAAAHgFAGQgGAGgIAAQgHAAgGgGQgFgFgBgIIAAgLQAAgHgFgGQgFgGgJAAIgYAAQgIAAgJAJIg2AuIAABoQABAJgGAFQgGAGgHgBQgIABgFgGg");
	this.shape_31.setTransform(79.85,348.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AA/CQQgGgGABgIIAAjhIgnA1IAAALQAAAIgFAFQgGAGgIAAQgGAAgGgGQgFgFgBgIIAAgKIgmg3IAADiQgBAIgFAGQgGAFgHAAQgJAAgFgFQgGgGABgIIAAkWIAwAAIAuBDIAwhDIAwAAIAAEWQgBAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape_32.setTransform(52,344.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgSAjQgIAAgFgGQgGgFAAgIIAAgfQAAgIAGgGQAFgFAIAAIAlAAQAIAAAGAFQAFAGAAAIIAAAfQAAAIgFAFQgGAGgIAAg");
	this.shape_33.setTransform(-3.625,351.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhZBnQgFgFAAgJIAAiyQAAgHAFgGQAGgFAIgBQAIABAFAFQAGAGAAAHIAAAYIAegaQAUgQARAAIAbAAQAYAAARARQAQAQAAAXIAAALQAAAHgGAGQgFAGgIAAQgHAAgGgGQgGgFABgIIAAgLQAAgHgGgGQgFgGgJAAIgYAAQgIAAgIAJIg2AuIAABoQgBAJgFAFQgGAGgHgBQgIABgGgGg");
	this.shape_34.setTransform(-31.35,348.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AA/CQQgFgGgBgIIAAjhIgmA1IAAALQAAAIgGAFQgFAGgHAAQgIAAgFgGQgGgFABgIIAAgKIgog3IAADiQABAIgGAGQgFAFgJAAQgHAAgGgFQgFgGgBgIIAAkWIAyAAIAtBDIAvhDIAwAAIAAEWQABAIgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_35.setTransform(-59.2,344.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhYBnQgGgFAAgJIAAiyQAAgHAGgGQAFgFAIgBQAHABAHAFQAEAGAAAHIAAAYIAggaQATgQARAAIAcAAQAXAAAQARQARAQAAAXIAAALQAAAHgGAGQgFAGgIAAQgIAAgFgGQgFgFAAgIIAAgLQgBgHgFgGQgGgGgHAAIgZAAQgIAAgJAJIg2AuIAABoQAAAJgFAFQgFAGgIgBQgIABgFgGg");
	this.shape_36.setTransform(-114.75,348.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhYBnQgGgFAAgJIAAiyQAAgHAGgGQAFgFAIgBQAHABAHAFQAEAGAAAHIAAAYIAggaQASgQASAAIAcAAQAXAAAQARQARAQAAAXIAAALQAAAHgFAGQgGAGgIAAQgHAAgGgGQgFgFgBgIIAAgLQAAgHgFgGQgGgGgHAAIgZAAQgIAAgJAJIg2AuIAABoQABAJgGAFQgGAGgHgBQgIABgFgGg");
	this.shape_37.setTransform(-142.55,348.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_38.setTransform(-170.375,348.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AA/CQQgFgGAAgIIAAhvIhyAAIAABvQAAAIgGAGQgFAFgIAAQgIAAgGgFQgFgGAAgIIAAkDQAAgIAFgGQAGgFAIAAQAHAAAGAFQAGAGAAAIIAABvIByAAIAAhvQAAgIAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAIIAAEDQAAAIgFAGQgGAFgIAAQgIAAgFgFg");
	this.shape_39.setTransform(-198.225,344.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).wait(25));

	// Ebene_3
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.498)").s().p("Eg4YAKBIAA0BMBwxAAAIAAUBg");
	this.shape_40.setTransform(96.2,369.975);
	this.shape_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(16).to({_off:false},0).wait(25));

	// Ebene_1
	this.instance = new lib.pic_president();
	this.instance.setTransform(105.8,104,1,1,0.4992,0,0,105.9,103.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:105,regY:103,rotation:0.4756,y:103.9},0).wait(1).to({regX:105.8,regY:104,scaleX:1.1554,scaleY:1.1554,rotation:0.3042,x:106.75,y:105.1},0).wait(1).to({scaleX:1.298,scaleY:1.298,rotation:0.1321,x:106.85,y:105.25},0).wait(1).to({scaleX:1.4287,scaleY:1.4287,rotation:-0.0401,x:106.95,y:105.35},0).wait(1).to({scaleX:1.5485,scaleY:1.5485,rotation:-0.2123,x:107.1,y:105.45},0).wait(1).to({scaleX:1.6584,scaleY:1.6584,rotation:-0.3844,x:107.2,y:105.5},0).wait(1).to({scaleX:1.759,scaleY:1.759,rotation:-0.5566,x:107.3,y:105.65},0).wait(1).to({scaleX:1.8512,scaleY:1.8512,rotation:-0.7288,x:107.35,y:105.7},0).wait(1).to({scaleX:1.8648,scaleY:1.8648,rotation:-0.9009,x:107.4},0).wait(1).to({scaleX:1.8649,scaleY:1.8649,rotation:-1.0731},0).wait(1).to({rotation:-1.2453,x:107.35},0).wait(1).to({rotation:-1.4175,x:107.4},0).wait(1).to({rotation:-1.5896},0).wait(1).to({scaleX:1.8648,scaleY:1.8648,rotation:-1.7618,y:105.75},0).wait(1).to({scaleX:1.8649,scaleY:1.8649,rotation:-1.934,x:107.45},0).wait(1).to({rotation:-2.1061,x:107.4,y:105.7},0).wait(1).to({rotation:-2.2783},0).wait(1).to({rotation:-2.4505,y:105.65},0).wait(1).to({scaleX:1.8648,scaleY:1.8648,rotation:-2.6226,y:105.7},0).wait(1).to({rotation:-2.7948},0).wait(1).to({scaleX:1.8649,scaleY:1.8649,rotation:-2.967,x:107.45},0).wait(1).to({rotation:-3.1392,x:107.4},0).wait(1).to({rotation:-3.3113,x:107.45,y:105.65},0).wait(1).to({rotation:-3.4835,x:107.5},0).wait(1).to({rotation:-3.6557,x:107.45},0).wait(1).to({rotation:-3.8278},0).wait(1).to({rotation:-4},0).wait(1).to({rotation:-0.1761,x:107.35,y:105.75},0).wait(1).to({rotation:2.9241,x:107.25,y:105.85},0).wait(1).to({scaleX:1.8648,scaleY:1.8648,rotation:4.3843,x:107.2,y:105.9},0).wait(1).to({scaleX:1.8649,scaleY:1.8649,rotation:5.167,y:105.85},0).wait(1).to({rotation:5.6181,x:107.15,y:105.9},0).wait(1).to({rotation:5.8737},0).wait(1).to({rotation:6},0).wait(1).to({rotation:5.8563,y:105.95},0).wait(1).to({rotation:5.5513},0).wait(1).to({rotation:5.0363,x:107.25,y:105.9},0).wait(1).to({rotation:4.2271,x:107.2,y:105.85},0).wait(1).to({rotation:2.941,x:107.25},0).wait(1).to({rotation:0.367,x:107.35,y:105.75},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.7,-94.5,721.8,857.2);


(lib.player_joe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,"zoom":1,"hover":6,"loop":22};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_99 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99).call(this.frame_99).wait(1));

	// Ebene_5
	this.button_next = new lib.button_back();
	this.button_next.name = "button_next";
	this.button_next.setTransform(517.2,426.3,1,1,180,0,0,49.6,49.6);

	this.button_next_1 = new lib.button_check();
	this.button_next_1.name = "button_next_1";
	this.button_next_1.setTransform(213.7,426.3,1,1,180,0,0,49.6,49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.button_next}]},1).to({state:[{t:this.button_next_1}]},4).wait(95));

	// Ebene_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhYBnQgGgFAAgJIAAiyQAAgHAGgGQAFgFAIAAQAHAAAHAFQAEAGAAAHIAAAYIAggaQASgQASAAIAbAAQAYAAARARQAQAQAAAXIAAAKQAAAJgFAFQgGAGgIAAQgHAAgGgFQgFgGgBgIIAAgLQABgHgGgGQgFgFgJgBIgYAAQgIAAgJAJIg2AuIAABoQABAJgGAFQgGAFgHAAQgIAAgFgFg");
	this.shape.setTransform(163.2,253.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_1.setTransform(135.375,253.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA/CPQgGgFAAgIIgFiMQAAgIgFgGQgGgGgIABIgVAAQgHgBgIAGIg1AiIAAB4QAAAIgGAFQgFAGgIAAQgIAAgGgGQgFgFAAgIIAAkDQAAgJAFgFQAGgFAIAAQAIAAAFAFQAGAGAAAIIAABfIAegUQAVgMAPAAIAXAAQAXAAARAQQAQARABAXIAFCMQAAAIgGAFQgFAGgIAAQgIAAgFgGg");
	this.shape_2.setTransform(107.5519,249.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEBsQgVAAgPgNIglgfQgRgPAAgZIAAgwQgBgYAUgSIAhgcQAQgNATAAIBTAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAIhQAAQgHAAgHAGIgfAaQgHAGAAALIAAAtQAAAHAGAGIAhAcQAGAGALAAIBMAAQAHAAAGAFQAGAGAAAHQAAAIgGAGQgFAFgIAAg");
	this.shape_3.setTransform(79.8727,253.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA/BnQgGgFAAgJIAAgOIggAVQgUAMgSAAIgSAAQgXABgQgRQgRgQgBgXIgGiOQAAgHAGgFQAFgGAIAAQAIAAAFAGQAGAFAAAHIAFCLQABAVAWAAIAXAAIA+gpIAAh3QAAgHAGgGQAFgFAIAAQAIAAAGAFQAFAGAAAHIAACyQAAAJgFAFQgGAFgIAAQgHAAgGgFg");
	this.shape_4.setTransform(52.0981,253.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA/BnQgFgGgBgIIgfATIg/AAQgYAAgRgQQgRgRAAgYIAAgWQABgXAQgQQARgRAYAAIBJAAQAGAAAMADIgBgbQAAgIgGgFQgFgGgIAAIhHAAQgHAAgGgFQgGgGAAgIQAAgHAGgGQAFgFAIAAIBHAAQAYAAAPAQQARAQABAYIAECMQABAIgGAGQgGAFgHAAQgIAAgGgFgAgzAQQgFAGAAAIIAAAVQAAAHAFAGQAGAGAIAAIA0AAIApgYIgBgQQgBgIgFgGQgFgFgIAAIhJAAQgIAAgGAFg");
	this.shape_5.setTransform(24.15,253.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhYBnQgGgFAAgJIAAiyQAAgHAGgGQAFgFAIAAQAHAAAHAFQAEAGAAAHIAAAYIAggaQATgQARAAIAcAAQAXAAAQARQARAQAAAXIAAAKQAAAJgGAFQgFAGgIAAQgIAAgFgFQgFgGAAgIIAAgLQgBgHgFgGQgGgFgHgBIgZAAQgIAAgJAJIg2AuIAABoQAAAJgFAFQgFAFgIAAQgIAAgFgFg");
	this.shape_6.setTransform(-3.6,253.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFCVQgYAAgcgaIAAAHQAAAIgFAGQgGAFgHAAQgIAAgGgFQgFgGAAgIIAAkDQAAgIAFgGQAGgFAIAAQAHAAAGAFQAFAGAAAIIAABYIARgNQAQgNARAAIAhAAQATAAAPANIASAQQAHAGAFAMQAFAMAAALIAABMQAAALgEALQgFAMgGAFIgQAQQgGAGgMAFQgMAEgIAAgAgQgYIgiAbQgHAGAAAMIAAArQAAAJAIAGIAeAaQAHAGAHAAIAeAAQAGAAAFgEIAPgNQAGgFAAgIIAAhQQAAgIgGgFIgOgMQgGgFgIAAIgZAAQgJAAgFAFg");
	this.shape_7.setTransform(-31.275,249.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhYBnQgGgFAAgJIAAiyQAAgHAGgGQAFgFAIAAQAHAAAHAFQAEAGAAAHIAAAYIAggaQASgQASAAIAbAAQAYAAAQARQARAQAAAXIAAAKQAAAJgFAFQgGAGgIAAQgHAAgGgFQgFgGgBgIIAAgLQAAgHgFgGQgFgFgJgBIgYAAQgIAAgJAJIg2AuIAABoQABAJgGAFQgGAFgHAAQgIAAgFgFg");
	this.shape_8.setTransform(-59.2,253.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_9.setTransform(-87.025,253.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKBsQgNAAgGgNIhBiTIAAglQAAgHAFgGQAGgFAIAAQAIAAAFAFQAGAGAAAHIAAAdIA4CBIA5iBIAAgdQAAgHAGgGQAGgFAIAAQAHAAAGAFQAFAGAAAHIAAAkIhBCUQgGANgKAAg");
	this.shape_10.setTransform(-114.825,253.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag4CVQgHAAgGgFQgGgGABgIQgBgIAGgFQAGgGAHAAIAmAAIAAjeIgmAAQgIAAgGgFQgFgGAAgHQAAgIAFgGQAGgFAIAAIA4AAQAIAAAGAFQAFAGAAAIIAADwIAmAAQAIAAAGAGQAFAFAAAIQAAAIgFAGQgGAFgIAAg");
	this.shape_11.setTransform(-142.6,249.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AA/BnQgFgGgBgIIggATIg/AAQgXAAgRgQQgRgRAAgYIAAgWQABgXARgQQAQgRAXAAIBKAAQAGAAAMADIgBgbQAAgIgGgFQgFgGgIAAIhHAAQgIAAgFgFQgGgGAAgIQAAgHAGgGQAFgFAIAAIBHAAQAYAAAQAQQAQAQABAYIAECMQABAIgGAGQgGAFgHAAQgIAAgGgFgAgyAQQgGAGAAAIIAAAVQAAAHAGAGQAFAGAHAAIA1AAIApgYIgBgQQgBgIgFgGQgFgFgIAAIhKAAQgHAAgFAFg");
	this.shape_12.setTransform(-170.45,253.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABDBnQgGgFAAgJIgFiSQAAgMgHgBQgEABgEADIgWATIAACIQAAAJgGAEQgFAGgIAAQgHAAgFgGQgGgFAAgIIAAiVQAAgKgIAAQgEAAgEAEIgbAWIAACFQAAAJgFAFQgGAFgHAAQgIAAgGgFQgFgFAAgJIAAiyQAAgHAFgFQAGgGAHAAQAPAAAEAOQAQgPATABQAXAAANASQASgSAVAAQASAAANAMQANAMABAUIAFCYQAAAJgGAFQgFAFgIAAQgIAAgFgFg");
	this.shape_13.setTransform(-198.225,253.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhZBnQgFgFAAgJIAAiyQAAgHAFgGQAGgFAIAAQAIAAAFAFQAGAGgBAHIAAAYIAfgaQAUgQARAAIAcAAQAXAAAQARQARAQAAAXIAAAKQAAAJgGAFQgFAGgIAAQgIAAgFgFQgGgGABgIIAAgLQgBgHgFgGQgGgFgHgBIgZAAQgIAAgJAJIg2AuIAABoQAAAJgFAFQgGAFgHAAQgIAAgGgFg");
	this.shape_14.setTransform(-226,253.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgVBsQgaAAgYgVQgXgWAAgZIAAhPQAAgZAXgVQAXgWAbAAIArAAQAZgBAYAWQAYAVAAAaIAABPQAAAZgYAWQgYAVgZAAgAgkhAIgNALQgHAGAAAKIAABLQAAAKAHAGIAPANQAEAEAJAAIArAAQAJAAAIgHIAMgLQAHgFAAgKIAAhLQAAgLgHgGIgOgKQgGgGgJAAIgmAAQgNAAgHAGg");
	this.shape_15.setTransform(-253.825,253.8244);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAtCVIhmjnIAADUQAAAIgEAGQgHAFgHAAQgIAAgFgFQgGgGAAgIIAAkWIAyAAIBlDmIAAjTQAAgIAGgFQAFgGAIAAQAIAAAGAFQAFAGAAAIIAAEWg");
	this.shape_16.setTransform(-281.6,249.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhYBnQgGgGAAgHIAAiyQAAgIAGgGQAFgFAIAAQAHAAAHAFQAEAFAAAJIAAAXIAggaQASgQASAAIAcAAQAXAAAQARQARAQAAAXIAAAKQAAAJgFAFQgGAGgIAAQgHAAgGgFQgFgGgBgIIAAgLQAAgHgFgGQgGgFgHgBIgZAAQgIAAgJAJIg2AuIAABpQABAHgGAGQgFAFgIAAQgIAAgFgFg");
	this.shape_17.setTransform(93.7,204.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_18.setTransform(65.875,204.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AA/CQQgFgGAAgIIAAgIQgcAbgYAAIgfAAQgTAAgTgQIgQgOQgGgFgEgMQgGgMAAgLIAAhMQABgMAFgMQAGgMAGgGIAQgOQARgOAWAAIAaAAQAXAAASAQIANALIAAhZQAAgIAFgGQAGgFAHAAQAIAAAGAFQAGAGgBAIIAAEDQABAIgGAGQgFAFgJAAQgHAAgGgFgAgmgXIgMALQgFAFgBAIIAABQQABAIAGAGIANALQAGAFAGAAIAeAAQAGAAAIgHIAegZQAIgGAAgKIAAgpQAAgNgIgHIgfgZQgGgGgKAAIgaAAQgHAAgIAGg");
	this.shape_19.setTransform(38,200.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgVBsQgaAAgYgVQgXgWAAgZIAAhPQAAgZAXgVQAXgWAbAAIArAAQAZgBAYAWQAYAVAAAaIAABPQAAAZgYAWQgYAVgZAAgAgkhAIgNALQgHAGAAAKIAABLQAAAKAHAGIAPANQAEAEAJAAIArAAQAJAAAIgHIAMgLQAHgFAAgKIAAhLQAAgLgHgGIgOgKQgGgGgJAAIgmAAQgNAAgHAGg");
	this.shape_20.setTransform(-17.525,204.2244);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AABCNQgXAAgRgQQgRgRAAgYIAAh5IgTAAQgIAAgFgGQgGgFAAgIQAAgIAGgFQAFgGAIAAIATAAIAAguQABgIAFgFQAFgGAIAAQAIAAAGAGQAGAFAAAIIAAAuIBKAAQAIAAAFAGQAGAFAAAIQAAAIgGAFQgFAGgIAAIhLAAIAAB5QAAAIAGAGQAFAFAIAAIAkAAQAPAAAFgQQAFgQAOAAQAIAAAGAFQAFAGAAAIQAAARgQARQgQARgZAAg");
	this.shape_21.setTransform(-45.35,201);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AABCNQgXAAgRgQQgRgRAAgYIAAh5IgTAAQgIAAgFgGQgGgFAAgIQAAgIAGgFQAFgGAIAAIATAAIAAguQABgIAFgFQAFgGAJAAQAHAAAGAGQAGAFAAAIIAAAuIBKAAQAIAAAGAGQAFAFAAAIQAAAIgFAFQgGAGgIAAIhLAAIAAB5QAAAIAGAGQAFAFAIAAIAkAAQAPAAAFgQQAFgQAOAAQAIAAAGAFQAFAGAAAIQAAARgQARQgQARgZAAg");
	this.shape_22.setTransform(-73.15,201);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaCNQgMgHgGgMIgqhUQgIgRAAgUQAAgUAIgRIAqhVQAOgbAeAAQAfAAAOAbIAqBVQAIARAAAUQAAATgIASIgqBUQgNAbggAAQgOAAgMgIgAgMhmIgnBQQgFAMAAAKQAAAMAFAMIApBQQADAIAHAAQAHAAAEgIIAohQQAGgMAAgMQAAgLgGgLIgnhQQgEgJgIAAQgHAAgFAJg");
	this.shape_23.setTransform(-100.925,200.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhYBnQgGgGAAgHIAAiyQAAgIAGgGQAFgFAIAAQAHAAAHAFQAEAFAAAJIAAAXIAggaQASgQASAAIAcAAQAXAAAQARQARAQAAAXIAAAKQAAAJgFAFQgGAGgIAAQgHAAgGgFQgFgGgBgIIAAgLQAAgHgFgGQgGgFgHgBIgZAAQgIAAgJAJIg2AuIAABpQABAHgGAGQgGAFgHAAQgIAAgFgFg");
	this.shape_24.setTransform(-156.5,204.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_25.setTransform(-184.325,204.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AA/CQQgFgGAAgIIAAgIQgcAbgYAAIgfAAQgTAAgTgQIgQgOQgGgFgEgMQgGgMAAgLIAAhMQABgMAFgMQAGgMAGgGIAQgOQARgOAWAAIAaAAQAXAAASAQIANALIAAhZQAAgIAFgGQAGgFAHAAQAIAAAGAFQAGAGgBAIIAAEDQABAIgGAGQgFAFgJAAQgHAAgGgFgAgmgXIgMALQgFAFgBAIIAABQQABAIAGAGIANALQAGAFAGAAIAeAAQAGAAAIgHIAegZQAIgGAAgKIAAgpQAAgNgIgHIgfgZQgGgGgKAAIgaAAQgHAAgIAGg");
	this.shape_26.setTransform(-212.2,200.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_27.setTransform(190.975,154.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgVBsQgaAAgYgVQgXgWAAgZIAAhPQAAgZAXgVQAXgWAbAAIArAAQAZgBAYAWQAYAVAAAaIAABPQAAAZgYAWQgYAVgZAAgAgkhAIgNALQgHAGAAAKIAABLQAAAKAHAGIAPANQAEAEAJAAIArAAQAJAAAIgHIAMgLQAHgFAAgKIAAhLQAAgLgHgGIgOgKQgGgGgJAAIgmAAQgNAAgHAGg");
	this.shape_28.setTransform(163.175,154.6244);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgSCVQgXAAgRgRQgRgQAAgYIAAg8QAAgHAGgGQAFgFAIAAQAHAAAHAFQAEAGAAAHIAAA9QAAAHAHAGQAFAFAIAAIAlAAQAIAAAGgFQAGgGAAgIIAAjdQgBgIAGgGQAFgFAIAAQAIAAAFAGQAGAGAAAIIAADcQAAAYgRARQgRAQgXAAg");
	this.shape_29.setTransform(135.35,150.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_30.setTransform(79.775,154.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag5CVQgHAAgGgFQgFgGgBgIQABgIAFgFQAGgGAHAAIBRAAQAHAAAHgFIANgMQAGgEAAgIIAAg6QgaAbgaAAIgcAAQgWAAgRgPIgPgNQgHgGgFgLQgFgLAAgKIAAg/QAAgNAFgMQAFgLAHgHIAQgNQAQgOAWAAIAbAAQAWAAATAPIAMALIAAgHQAAgIAGgFQAFgGAHAAQAIAAAHAGQAFAFAAAIIAADTQAAAYgUARIgPANQgFAFgLAEQgKAEgKAAgAgmhoIgMAJQgGAHAAAJIAAA/QAAAIAHAGIANALQAGAEAGAAIAdAAQAHAAAIgGIAegZQAIgGgBgJIAAgcQABgLgJgGIgegbQgHgFgJgBIgZAAQgIAAgIAHg");
	this.shape_31.setTransform(51.95,158.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AA/BnQgFgGgBgIIgfATIg/AAQgYAAgRgQQgRgRAAgYIAAgWQABgXAQgQQARgRAYAAIBJAAQAGAAAMADIgBgbQAAgIgGgFQgFgGgIAAIhHAAQgHAAgGgFQgGgGAAgIQAAgHAGgGQAFgFAIAAIBHAAQAYAAAPAQQARAQABAYIAECMQABAIgGAGQgGAFgHAAQgIAAgGgFgAgzAQQgFAGAAAIIAAAVQAAAHAFAGQAGAGAIAAIA0AAIApgYIgBgQQgBgIgFgGQgFgFgIAAIhJAAQgIAAgGAFg");
	this.shape_32.setTransform(24.15,154.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhYBnQgGgGAAgHIAAiyQAAgIAGgGQAFgGAIABQAHgBAHAGQAEAFAAAJIAAAXIAggaQATgQARAAIAcAAQAXAAAQARQARAQAAAXIAAAKQAAAJgGAFQgFAGgIAAQgIAAgFgFQgFgGAAgIIAAgLQgBgHgFgGQgGgFgHgBIgZAAQgIABgJAIIg2AuIAABpQAAAHgFAGQgFAFgIABQgIgBgFgFg");
	this.shape_33.setTransform(-3.6,154.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_34.setTransform(-31.425,154.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgKBsQgNAAgGgNIhBiTIAAglQAAgHAFgGQAGgFAIAAQAIAAAFAFQAGAGAAAHIAAAdIA4CBIA5iBIAAgdQAAgHAGgGQAGgFAIAAQAHAAAGAFQAFAGAAAHIAAAkIhBCUQgGANgKAAg");
	this.shape_35.setTransform(-59.225,154.675);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AA6CIIgOg0IhWAAIgRA3QAAAEgFADQgFADgGAAQgIAAgFgFQgGgGAAgIIABgHIBMkBQAFgOANAAQAPAAADAMIBLEFIABAFQAAAIgFAGQgGAFgHAAQgOAAgFgNgAgfAuIA/AAIgfhrg");
	this.shape_36.setTransform(-87,150.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhZBnQgFgGAAgHIAAiyQAAgIAFgGQAGgGAIABQAIgBAFAGQAFAFABAJIAAAXIAegaQAUgQARAAIAbAAQAYAAARARQAQAQAAAXIAAAKQAAAJgGAFQgFAGgIAAQgIAAgFgFQgGgGAAgIIAAgLQABgHgGgGQgFgFgJgBIgYAAQgIABgIAIIg2AuIAABpQAAAHgGAGQgFAFgIABQgIgBgGgFg");
	this.shape_37.setTransform(-142.6,154.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_38.setTransform(-170.425,154.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AABCNQgXAAgRgQQgRgRAAgYIAAh5IgTAAQgIAAgFgFQgGgGAAgIQAAgIAGgFQAFgGAIAAIATAAIAAguQABgIAFgFQAFgGAJAAQAHAAAGAGQAGAFAAAIIAAAuIBKAAQAIAAAGAGQAFAFAAAIQAAAIgFAGQgGAFgIAAIhLAAIAAB5QAAAIAGAGQAFAFAIAAIAkAAQAPAAAFgQQAFgQAOAAQAIAAAGAFQAFAGAAAIQAAARgQARQgQARgZAAg");
	this.shape_39.setTransform(-198.25,151.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgpBsQgTAAgRgMQgSgMABgLQgBgHAGgGQAFgGAJAAQAIAAAIAIQAIAJAPAAIBFAAQAJAAAGgHQAFgGAAgJQAAgMgMgGIhkgtQgPgGgIgMQgIgNAAgNQAAgUAOgPQAOgOAVAAIBVAAQAVAAAPAMQAPAMAAALQAAAIgFAFQgGAFgHAAQgJAAgIgIQgHgIgIAAIhUAAQgNAAAAALQAAAHAIAEIBkAsQAPAGAKAPQAKAPgBASQAAAZgQAQQgSARgWAAg");
	this.shape_40.setTransform(-226,154.675);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhYCUQgGgGAAgIIAAkMQAAgHAGgGQAFgGAIAAQAIAAAGAGQAFAGAAAHIAAAMQAcgeAaAAIAIAAQAUAAARAPIAgAbQAUASAAAbIAAA7QAAAbgWATIgfAbQgPAOgXAAIgIAAQgWAAgPgQIgPgOIAABTQAAAIgFAGQgGAGgIAAQgHAAgGgGgAgVhoIgcAcQgHAIAAAJIAAAwQAAAJAIAHIAbAbQALAKAHAAIAJAAQAHAAAIgHIAdgZQAIgGAAgJIAAg9QAAgJgJgHIgggbQgFgFgGAAIgKAAQgGAAgLAKg");
	this.shape_41.setTransform(-253.8,158.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag4CdQgIAAgGgFQgFgGAAgIQAAgHAFgGQAGgFAIAAIAmAAIAAiMIgmAAQgIAAgFgGQgGgFAAgIQAAgIAGgGQAFgFAIAAIA4AAQAIAAAGAFQAFAGAAAIIAACfIAmAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgHAAgAgThmQgIAAgFgGQgGgGAAgHIABgRQAAgHAFgGQAGgFAIAAIASAAQAIAAAGAFQAFAGAAAHIAAARQAAAIgFAFQgGAGgIAAg");
	this.shape_42.setTransform(-281.625,149.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AA/CQQgFgGAAgIIAAhvIhyAAIAABvQAAAIgGAGQgFAFgIAAQgIAAgGgFQgFgGAAgIIAAkDQAAgIAFgGQAGgFAIAAQAHAAAGAFQAGAGAAAIIAABvIByAAIAAhvQAAgIAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAIIAAEDQAAAIgFAGQgGAFgIAAQgIAAgFgFg");
	this.shape_43.setTransform(-309.475,150.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},16).wait(84));

	// Ebene_3
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.498)").s().p("Eg4YANFIAA6JMBwxAAAIAAaJg");
	this.shape_44.setTransform(-59.65,199.975);
	this.shape_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(16).to({_off:false},0).wait(84));

	// Ebene_7
	this.instance = new lib.puste_ani();
	this.instance.setTransform(-137.25,-131.1,0.2258,0.2258);
	this.instance.alpha = 0.0508;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).wait(1).to({scaleX:0.2329,scaleY:0.2327,x:-140.8729,y:-131.3302,alpha:0.0883},0).wait(1).to({scaleX:0.24,scaleY:0.2395,x:-144.4958,y:-131.5604,alpha:0.1267},0).wait(1).to({scaleX:0.247,scaleY:0.2464,x:-148.1187,y:-131.7906,alpha:0.165},0).wait(1).to({scaleX:0.2541,scaleY:0.2532,x:-151.7417,y:-132.0208,alpha:0.2033},0).wait(1).to({scaleX:0.2612,scaleY:0.2601,x:-155.3646,y:-132.251,alpha:0.2417},0).wait(1).to({scaleX:0.2683,scaleY:0.2669,x:-158.9875,y:-132.4812,alpha:0.28},0).wait(1).to({scaleX:0.2754,scaleY:0.2738,x:-162.6104,y:-132.7115,alpha:0.3183},0).wait(1).to({scaleX:0.2825,scaleY:0.2807,x:-166.2333,y:-132.9417,alpha:0.3567},0).wait(1).to({scaleX:0.2895,scaleY:0.2875,x:-169.8562,y:-133.1719,alpha:0.395},0).wait(1).to({scaleX:0.2966,scaleY:0.2944,x:-173.4792,y:-133.4021,alpha:0.4333},0).wait(1).to({scaleX:0.3037,scaleY:0.3012,x:-177.1021,y:-133.6323,alpha:0.4717},0).wait(1).to({scaleX:0.3108,scaleY:0.3081,x:-180.725,y:-133.8625,alpha:0.51},0).wait(1).to({scaleX:0.3179,scaleY:0.3149,x:-184.3479,y:-134.0927,alpha:0.5483},0).wait(1).to({scaleX:0.325,scaleY:0.3218,x:-187.9708,y:-134.3229,alpha:0.5867},0).wait(1).to({scaleX:0.332,scaleY:0.3287,x:-191.5937,y:-134.5531,alpha:0.625},0).wait(1).to({scaleX:0.3391,scaleY:0.3355,x:-195.2167,y:-134.7833,alpha:0.6633},0).wait(1).to({scaleX:0.3462,scaleY:0.3424,x:-198.8396,y:-135.0135,alpha:0.7017},0).wait(1).to({scaleX:0.3533,scaleY:0.3492,x:-202.4625,y:-135.2437,alpha:0.74},0).wait(1).to({scaleX:0.3604,scaleY:0.3561,x:-206.0854,y:-135.474,alpha:0.7783},0).wait(1).to({scaleX:0.3675,scaleY:0.3629,x:-209.7083,y:-135.7042,alpha:0.8167},0).wait(1).to({scaleX:0.3745,scaleY:0.3698,x:-213.3312,y:-135.9344,alpha:0.855},0).wait(1).to({scaleX:0.3816,scaleY:0.3767,x:-216.9542,y:-136.1646,alpha:0.8933},0).wait(1).to({scaleX:0.3887,scaleY:0.3835,x:-220.5771,y:-136.3948,alpha:0.9317},0).wait(1).to({scaleX:0.3958,scaleY:0.3904,x:-224.2,y:-136.625,alpha:0.97},0).wait(1).to({scaleX:0.4029,scaleY:0.3972,x:-227.8229,y:-136.8552,alpha:0.9321},0).wait(1).to({scaleX:0.41,scaleY:0.4041,x:-231.4458,y:-137.0854,alpha:0.8942},0).wait(1).to({scaleX:0.417,scaleY:0.4109,x:-235.0687,y:-137.3156,alpha:0.8562},0).wait(1).to({scaleX:0.4241,scaleY:0.4178,x:-238.6917,y:-137.5458,alpha:0.8183},0).wait(1).to({scaleX:0.4312,scaleY:0.4247,x:-242.3146,y:-137.776,alpha:0.7804},0).wait(1).to({scaleX:0.4383,scaleY:0.4315,x:-245.9375,y:-138.0062,alpha:0.7425},0).wait(1).to({scaleX:0.4454,scaleY:0.4384,x:-249.5604,y:-138.2365,alpha:0.7046},0).wait(1).to({scaleX:0.4525,scaleY:0.4452,x:-253.1833,y:-138.4667,alpha:0.6667},0).wait(1).to({scaleX:0.4595,scaleY:0.4521,x:-256.8062,y:-138.6969,alpha:0.6288},0).wait(1).to({scaleX:0.4666,scaleY:0.4589,x:-260.4292,y:-138.9271,alpha:0.5908},0).wait(1).to({scaleX:0.4737,scaleY:0.4658,x:-264.0521,y:-139.1573,alpha:0.5529},0).wait(1).to({scaleX:0.4808,scaleY:0.4726,x:-267.675,y:-139.3875,alpha:0.515},0).wait(1).to({scaleX:0.4879,scaleY:0.4795,x:-271.2979,y:-139.6177,alpha:0.4771},0).wait(1).to({scaleX:0.495,scaleY:0.4864,x:-274.9208,y:-139.8479,alpha:0.4392},0).wait(1).to({scaleX:0.502,scaleY:0.4932,x:-278.5437,y:-140.0781,alpha:0.4013},0).wait(1).to({scaleX:0.5091,scaleY:0.5001,x:-282.1667,y:-140.3083,alpha:0.3633},0).wait(1).to({scaleX:0.5162,scaleY:0.5069,x:-285.7896,y:-140.5385,alpha:0.3254},0).wait(1).to({scaleX:0.5233,scaleY:0.5138,x:-289.4125,y:-140.7687,alpha:0.2875},0).wait(1).to({scaleX:0.5304,scaleY:0.5206,x:-293.0354,y:-140.999,alpha:0.2496},0).wait(1).to({scaleX:0.5374,scaleY:0.5275,x:-296.6583,y:-141.2292,alpha:0.2117},0).wait(1).to({scaleX:0.5445,scaleY:0.5344,x:-300.2812,y:-141.4594,alpha:0.1737},0).wait(1).to({scaleX:0.5516,scaleY:0.5412,x:-303.9042,y:-141.6896,alpha:0.1358},0).wait(1).to({scaleX:0.5587,scaleY:0.5481,x:-307.5271,y:-141.9198,alpha:0.0979},0).wait(1).to({scaleX:0.5658,scaleY:0.5549,x:-311.15,y:-142.15,alpha:0.06},0).wait(2));

	// Ebene_1
	this.instance_1 = new lib.pic_joe();
	this.instance_1.setTransform(105.8,104,1,1,0.4992,0,0,105.9,103.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:101.7,regY:101.6,rotation:0.4756,x:105.75,y:103.95},0).wait(1).to({regX:102,regY:101.1,scaleX:1.1544,scaleY:1.1544,rotation:0.4761,x:80.15,y:86.65},0).wait(1).to({scaleX:1.3036,scaleY:1.3036,rotation:0.4758,x:55.35,y:69.8},0).wait(1).to({scaleX:1.4478,scaleY:1.4478,rotation:0.4754,x:31.85,y:52.95},0).wait(1).to({scaleX:1.5871,scaleY:1.5871,rotation:0.4751,x:9.5,y:36.15},0).wait(1).to({scaleX:1.7217,scaleY:1.7217,rotation:0.4748,x:-11.8,y:19.3},0).wait(1).to({scaleX:1.7214,scaleY:1.7852,rotation:0.4744,x:-32.1,y:2.5},0).wait(1).to({scaleX:1.6011,rotation:0.4741,x:-51.35,y:-14.25},0).wait(1).to({scaleX:1.4848,rotation:0.4738,x:-53.75,y:-31.05},0).wait(1).to({scaleX:1.5098,rotation:0.4734,y:-47.8},0).wait(1).to({scaleX:1.5345,rotation:0.4731,y:-64.55},0).wait(1).to({scaleX:1.5583,rotation:0.4728,y:-81.3},0).wait(1).to({scaleX:1.5814,rotation:0.4724,y:-98.05},0).wait(1).to({scaleX:1.6036,rotation:0.4721,y:-114.85},0).wait(1).to({scaleX:1.6251,rotation:0.4718,y:-131.6},0).wait(1).to({scaleX:1.6459,rotation:0.4715,y:-148.35},0).wait(1).to({scaleX:1.6659,rotation:0.4711},0).wait(1).to({scaleX:1.6853,rotation:0.4708,x:-53.7},0).wait(1).to({scaleX:1.704,rotation:0.4705,y:-148.3},0).wait(1).to({scaleX:1.7221,rotation:0.4701,y:-148.35},0).wait(1).to({scaleX:1.7396,rotation:0.4698,x:-53.75},0).wait(1).to({scaleX:1.7564,rotation:0.4695,x:-53.7},0).wait(1).to({scaleX:1.7727,rotation:-0.0151,y:-148.3},0).wait(1).to({scaleX:1.7885,rotation:-0.4997,x:-53.75,y:-148.35},0).wait(1).to({scaleX:1.8037,rotation:-0.9843,x:-53.7},0).wait(1).to({scaleX:1.8185,rotation:-1.4689},0).wait(1).to({scaleX:1.8254,rotation:-1.9535},0).wait(1).to({scaleX:1.8217,rotation:-2.4381},0).wait(1).to({scaleX:1.8182,rotation:-2.9227,x:-53.75},0).wait(1).to({scaleX:1.8148,rotation:-3.4073,x:-53.7},0).wait(1).to({scaleX:1.8115,rotation:-3.8919,x:-53.75,y:-148.4},0).wait(1).to({scaleX:1.8083,rotation:-4.3765,x:-53.8,y:-148.35},0).wait(1).to({scaleX:1.8052,rotation:-4.861,x:-53.75},0).wait(1).to({scaleX:1.8021,rotation:-5.3456,x:-53.8,y:-148.4},0).wait(1).to({scaleX:1.7993,rotation:-5.8302},0).wait(1).to({scaleX:1.7964,rotation:-6.3148,y:-148.35},0).wait(1).to({scaleX:1.7937,rotation:-6.7994,x:-53.85,y:-148.4},0).wait(1).to({scaleX:1.791,rotation:-5.9526,x:-53.8},0).wait(1).to({scaleX:1.7884,rotation:-5.1058,x:-53.75},0).wait(1).to({scaleX:1.7858,rotation:-4.259,y:-148.35},0).wait(1).to({scaleX:1.7834,rotation:-3.4123,x:-53.7,y:-148.4},0).wait(1).to({scaleX:1.781,rotation:-2.5655,x:-53.75,y:-148.35},0).wait(1).to({scaleX:1.7786,rotation:-1.7187,x:-53.7},0).wait(1).to({scaleX:1.7763,scaleY:1.7851,rotation:-0.8719},0).wait(1).to({scaleX:1.7741,scaleY:1.7852,rotation:-0.0251},0).wait(1).to({scaleX:1.7719,rotation:0.8217,y:-148.3},0).wait(1).to({scaleX:1.7698,rotation:1.6685,x:-53.65},0).wait(1).to({scaleX:1.7677,rotation:2.5153,x:-53.6},0).wait(1).to({scaleX:1.7657,rotation:3.3621,x:-53.65,y:-148.35},0).wait(1).to({scaleX:1.7637,rotation:3.3032,y:-148.3},0).wait(1).to({scaleX:1.7618,rotation:3.2443},0).wait(1).to({scaleX:1.7598,rotation:3.1854,x:-53.7},0).wait(1).to({scaleX:1.7579,rotation:3.1265,x:-53.65},0).wait(1).to({scaleX:1.7561,rotation:3.0676},0).wait(1).to({scaleX:1.7543,rotation:3.0087,x:-53.6,y:-148.25},0).wait(1).to({scaleX:1.7524,rotation:2.9498,x:-53.65,y:-148.3},0).wait(1).to({scaleX:1.7507,rotation:2.8909},0).wait(1).to({scaleX:1.7489,rotation:2.832},0).wait(1).to({scaleX:1.7472,rotation:2.7732,x:-53.7,y:-148.35},0).wait(1).to({scaleX:1.7454,scaleY:1.7851,rotation:2.7143,x:-53.65,y:-148.25},0).wait(1).to({scaleX:1.7438,rotation:2.6554,y:-148.3},0).wait(1).to({scaleX:1.7421,scaleY:1.7852,rotation:2.5965},0).wait(1).to({scaleX:1.7405,rotation:2.5376},0).wait(1).to({scaleX:1.7388,rotation:2.4787,y:-148.35},0).wait(1).to({scaleX:1.7372,rotation:2.4198,y:-148.3},0).wait(1).to({scaleX:1.7356,rotation:2.3609,y:-148.25},0).wait(1).to({scaleX:1.734,rotation:2.302,x:-53.7,y:-148.3},0).wait(1).to({scaleX:1.7324,rotation:2.2431,x:-53.65},0).wait(1).to({scaleX:1.7308,rotation:2.1842,x:-53.7},0).wait(1).to({scaleX:1.7293,rotation:2.1254},0).wait(1).to({scaleX:1.7277,rotation:2.0665,x:-53.65,y:-148.35},0).wait(1).to({scaleX:1.7261,rotation:2.0076},0).wait(1).to({scaleX:1.7246,rotation:1.9487,x:-53.7,y:-148.3},0).wait(1).to({scaleX:1.723,rotation:1.8898},0).wait(1).to({scaleX:1.7215,scaleY:1.7851,rotation:1.8309,x:-53.65},0).wait(1).to({scaleX:1.72,scaleY:1.7852,rotation:1.772,x:-53.7,y:-148.35},0).wait(1).to({scaleX:1.7184,rotation:1.7131,y:-148.3},0).wait(1).to({scaleX:1.7169,rotation:1.6542,x:-53.65},0).wait(1).to({scaleX:1.7154,rotation:1.5953,y:-148.35},0).wait(1).to({scaleX:1.7139,rotation:1.5364,x:-53.7,y:-148.3},0).wait(1).to({scaleX:1.7124,rotation:1.4776,y:-148.35},0).wait(1).to({scaleX:1.7109,rotation:1.4187,x:-53.65},0).wait(1).to({scaleX:1.7094,rotation:1.3598,x:-53.7,y:-148.3},0).wait(1).to({scaleX:1.7078,rotation:1.3009},0).wait(1).to({scaleX:1.7063,rotation:1.242,y:-148.35},0).wait(1).to({scaleX:1.7048,rotation:1.1831,y:-148.3},0).wait(1).to({scaleX:1.7033,rotation:1.1242},0).wait(1).to({scaleX:1.7018,rotation:1.0653},0).wait(1).to({scaleX:1.7003,rotation:1.0064},0).wait(1).to({scaleX:1.6988,rotation:0.9475,y:-148.35},0).wait(1).to({scaleX:1.6972,scaleY:1.7851,rotation:0.8887,y:-148.3},0).wait(1).to({scaleX:1.6957,scaleY:1.7852,rotation:0.8298,y:-148.35},0).wait(1).to({scaleX:1.6942,rotation:0.7709},0).wait(1).to({scaleX:1.6928,rotation:0.712},0).wait(1).to({scaleX:1.6912,rotation:0.6531},0).wait(1).to({scaleX:1.6897,rotation:0.5942},0).wait(1).to({scaleX:1.6882,rotation:0.5353},0).wait(1).to({rotation:0.4764},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-420.5,-346.7,987.3,822.5999999999999);


(lib.player_activist = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,"zoom":1,"hover":6,"loop":22};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(1));

	// Ebene_5
	this.button_next = new lib.button_check();
	this.button_next.name = "button_next";
	this.button_next.setTransform(517.2,426.3,1,1,180,0,0,49.6,49.6);
	this.button_next._off = true;

	this.timeline.addTween(cjs.Tween.get(this.button_next).wait(1).to({_off:false},0).wait(40));

	// Ebene_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkCGHIMFiaIAPA4IrmENgApAA0IAcjhIPkC8IgJBLgAinmYIBZiaIKPG3IgdAzg");
	this.shape.setTransform(-12.95,-162.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AoGEzIAPg4IMJCKIguCrgAm5BAIPfjhIAgDhIvzBKgApFhsIKInDIBYCZIrDFcg");
	this.shape_1.setTransform(544.4,-148.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},25).to({state:[]},3).to({state:[{t:this.shape_1}]},9).to({state:[]},3).wait(1));

	// Ebene_6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_2.setTransform(524.325,295.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhYBnQgGgFAAgJIAAiyQAAgHAGgGQAFgGAIAAQAHAAAHAGQAEAGAAAHIAAAYIAggaQASgQASAAIAbAAQAYAAAQAQQARARAAAYIAAAKQAAAHgFAGQgGAGgIAAQgHAAgGgGQgFgFgBgIIAAgKQAAgJgFgFQgFgGgJABIgYAAQgIgBgJAJIg2AvIAABnQABAJgGAFQgGAGgHgBQgIABgFgGg");
	this.shape_3.setTransform(496.55,295.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA/BnQgGgFAAgJIAAgOIggAVQgUAMgSAAIgSAAQgXAAgQgPQgRgRgBgXIgGiOQAAgHAGgGQAFgFAIAAQAIAAAFAFQAGAGAAAHIAFCLQABAVAWgBIAXAAIA+goIAAh3QAAgHAGgGQAFgGAIAAQAIAAAGAGQAFAGAAAHIAACyQAAAJgFAFQgGAGgIgBQgHABgGgGg");
	this.shape_4.setTransform(468.8481,295.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAACNQgWAAgRgRQgRgQAAgXIAAh6IgTAAQgIAAgGgGQgFgFAAgIQAAgIAFgFQAGgFAIAAIATAAIAAgvQAAgIAHgGQAFgFAHAAQAIAAAGAFQAGAHgBAHIAAAvIBMAAQAHAAAFAFQAGAFAAAIQAAAIgGAFQgFAGgHAAIhMAAIAAB6QAAAHAGAFQAGAHAGAAIAlAAQAPAAAFgRQAFgRAOAAQAIAAAGAHQAFAEAAAJQAAARgQARQgQARgZAAg");
	this.shape_5.setTransform(440.9,292.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA/BnQgGgFAAgJIAAgOIggAVQgUAMgSAAIgSAAQgXAAgQgPQgRgRgBgXIgGiOQAAgHAGgGQAFgFAIAAQAIAAAFAFQAGAGAAAHIAFCLQABAVAWgBIAXAAIA+goIAAh3QAAgHAGgGQAFgGAIAAQAIAAAGAGQAFAGAAAHIAACyQAAAJgFAFQgGAGgIgBQgHABgGgGg");
	this.shape_6.setTransform(413.2481,295.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhZCQQgFgGAAgIIAAkWICqAAQAIAAAFAFQAGAGAAAIQAAAHgGAGQgFAGgIAAIiEAAIAAA7IBeAAQAJAAAFAGQAGAFAAAIQAAAIgGAGQgFAFgJAAIheAAIAACPQAAAIgGAGQgFAFgIAAQgIAAgGgFg");
	this.shape_7.setTransform(385.35,291.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgVBsQgaAAgYgVQgXgWAAgZIAAhPQAAgZAXgVQAXgWAbAAIArAAQAZgBAYAWQAYAVAAAaIAABPQAAAZgYAWQgYAVgZAAgAgkhAIgNALQgHAGAAAKIAABLQAAAKAHAGIAPANQAEAEAJAAIArAAQAJAAAIgHIAMgLQAHgFAAgKIAAhLQAAgLgHgGIgOgKQgGgGgJAAIgmAAQgNAAgHAGg");
	this.shape_8.setTransform(357.525,295.5244);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAsCVIhljnIAADUQABAIgGAGQgFAFgIAAQgIAAgGgFQgFgGAAgIIAAkWIAyAAIBlDmIAAjTQAAgIAFgFQAHgGAHAAQAIAAAFAFQAGAGAAAIIAAEWg");
	this.shape_9.setTransform(329.75,291.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhYBnQgGgFAAgJIAAiyQAAgHAGgGQAFgGAIAAQAHAAAHAGQAEAGAAAHIAAAYIAggaQASgQASAAIAcAAQAXAAAQAQQARARAAAYIAAAKQAAAHgFAGQgGAGgIAAQgHAAgGgGQgFgFgBgIIAAgKQAAgJgFgFQgGgGgHABIgZAAQgIgBgJAJIg2AvIAABnQABAJgGAFQgGAGgHgBQgIABgFgGg");
	this.shape_10.setTransform(274.15,295.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVBsQgaAAgYgVQgXgWAAgZIAAhPQAAgZAXgVQAXgWAbAAIArAAQAZgBAYAWQAYAVAAAaIAABPQAAAZgYAWQgYAVgZAAgAgkhAIgNALQgHAGAAAKIAABLQAAAKAHAGIAPANQAEAEAJAAIArAAQAJAAAIgHIAMgLQAHgFAAgKIAAhLQAAgLgHgGIgOgKQgGgGgJAAIgmAAQgNAAgHAGg");
	this.shape_11.setTransform(246.325,295.5244);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgpCQQgFgGAAgIIAAifIgUAAQgIAAgFgFQgGgGAAgIQAAgHAGgGQAFgFAIAAIAUAAIAAgPQAAgdAUgTQAUgTAcAAIAtAAQAIAAAFAFQAGAGAAAIQAAAIgGAFQgGAGgHAAIgtAAQgNAAgJAIQgIAIAAANIAAAPIAlAAQAIgBAFAGQAGAGAAAHQAAAIgGAGQgFAFgIAAIglAAIAACfQAAAIgGAGQgFAFgIAAQgIAAgGgFg");
	this.shape_12.setTransform(218.575,291.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhLCVQgJAAgFgGQgGgFAAgIQAAgIAGgGQAFgEAJAAIAoAAIAag9IgJAAQgNAAgGgNIg4iDIAAgkQgBgIAGgFQAFgFAIAAQAIAAAFAFQAGAFAAAIIAAAcIAyByIAMAAIAzhyIAAgcQAAgIAGgGQAFgFAJAAQAHAAAGAFQAGAGAAAIIAAAkIhmDmQgFAMgNAAg");
	this.shape_13.setTransform(162.95,299.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AA/BnQgFgGgBgIIggATIg/AAQgXAAgRgQQgQgRAAgYIAAgWQAAgXARgQQAQgRAXAAIBKAAQAGAAAMADIgBgbQAAgIgGgFQgFgGgIAAIhHAAQgIAAgFgFQgGgGAAgIQAAgHAGgGQAFgFAIAAIBHAAQAYAAAQAQQAQAQABAYIAECMQABAIgGAGQgGAFgHAAQgIAAgGgFgAgyAQQgGAGAAAIIAAAVQAAAHAGAGQAFAGAHAAIA1AAIApgYIgBgQQgBgIgFgGQgFgFgIAAIhKAAQgHAAgFAFg");
	this.shape_14.setTransform(135.1,295.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AA/CQQgFgGAAgIIAAgIQgcAbgYAAIgfAAQgUAAgTgQIgQgOQgFgFgFgMQgEgMAAgLIAAhMQgBgMAGgMQAFgMAIgGIAPgOQAQgOAXAAIAbAAQAVAAATAQIANALIAAhZQAAgIAFgGQAGgFAHAAQAIAAAGAFQAFAGABAIIAAEDQgBAIgFAGQgGAFgHAAQgJAAgFgFgAglgXIgMALQgHAFABAIIAABQQgBAIAIAGIAMALQAGAFAGAAIAeAAQAGAAAIgHIAfgZQAHgGAAgKIAAgpQAAgNgIgHIgfgZQgGgGgKAAIgZAAQgJAAgGAGg");
	this.shape_15.setTransform(107.25,291.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_16.setTransform(79.525,295.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_17.setTransform(51.725,295.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhYBnQgGgFAAgJIAAiyQAAgHAGgGQAFgGAIAAQAHAAAHAGQAEAGAAAHIAAAYIAggaQASgQASAAIAcAAQAXAAAQAQQARARAAAYIAAAKQAAAHgFAGQgGAGgIAAQgHAAgGgGQgFgFgBgIIAAgKQAAgJgFgFQgGgGgHABIgZAAQgIgBgJAJIg2AvIAABnQABAJgGAFQgFAGgIgBQgIABgFgGg");
	this.shape_18.setTransform(23.95,295.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhYCQQgGgGAAgIIAAkWICqAAQAHAAAHAFQAFAGAAAIQAAAHgFAGQgGAGgIAAIiFAAIAAA7IBgAAQAIAAAFAGQAFAFAAAIQAAAIgFAGQgFAFgIAAIhgAAIAACPQAAAIgEAGQgHAFgHAAQgIAAgFgFg");
	this.shape_19.setTransform(-3.85,291.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_20.setTransform(538.225,245.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhYCUQgGgGAAgIIAAkMQAAgHAFgGQAGgGAJAAQAHAAAFAGQAGAGAAAHIAAAMQAbgeAcAAIAHAAQAUAAARAPIAfAbQAVASAAAbIAAA7QAAAbgWATIgfAbQgQAOgWAAIgIAAQgWAAgPgQIgPgOIAABTQAAAIgFAGQgGAGgHAAQgJAAgFgGgAgUhoIgcAcQgIAIAAAJIAAAwQAAAJAJAHIAbAbQAKAKAIAAIAIAAQAHAAAIgHIAegZQAGgGABgJIAAg9QgBgJgHgHIghgbQgEgFgHAAIgKAAQgGAAgKAKg");
	this.shape_21.setTransform(510.45,249.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhYCUQgGgGAAgIIAAkMQAAgHAFgGQAGgGAJAAQAHAAAFAGQAGAGAAAHIAAAMQAbgeAbAAIAIAAQAUAAARAPIAgAbQAUASAAAbIAAA7QAAAbgWATIgfAbQgQAOgWAAIgIAAQgWAAgPgQIgPgOIAABTQAAAIgFAGQgGAGgHAAQgJAAgFgGgAgUhoIgcAcQgIAIAAAJIAAAwQAAAJAJAHIAbAbQAKAKAIAAIAIAAQAHAAAIgHIAegZQAGgGABgJIAAg9QgBgJgHgHIghgbQgEgFgHAAIgKAAQgGAAgKAKg");
	this.shape_22.setTransform(482.65,249.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AA/BnQgGgFAAgJIAAgOIggAVQgUAMgSAAIgSAAQgXAAgQgPQgRgRgBgXIgGiOQAAgHAGgFQAFgGAIAAQAIAAAFAGQAGAFAAAHIAFCLQABAVAWgBIAXAAIA+goIAAh3QAAgHAGgGQAFgFAIgBQAIABAGAFQAFAGAAAHIAACyQAAAJgFAFQgGAGgIgBQgHABgGgGg");
	this.shape_23.setTransform(454.9481,245.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhYBnQgGgFAAgJIAAiyQAAgHAGgGQAFgFAIgBQAHABAHAFQAEAGAAAHIAAAYIAggaQATgQARAAIAcAAQAXAAAQAQQARARAAAYIAAAKQAAAHgGAGQgFAGgIAAQgIAAgFgGQgFgFAAgIIAAgKQgBgJgFgFQgGgGgHAAIgZAAQgIAAgJAJIg2AvIAABnQAAAJgFAFQgFAGgIgBQgIABgFgGg");
	this.shape_24.setTransform(427.05,245.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgmCVQgXAAgRgQQgRgRAAgXIAAhoQAAgcAPgTIA4hHQAGgIALgGQAJgFAMAAIA/AAQAIAAAGAFQAFAGAAAIQAAAIgGAGQgGAFgHAAIg8AAQgJAAgGAIIg0BEQgGAIgBAPIAABnQABAIAFAGQAGAGAHAAIBMAAQAHAAAGgGQAGgGAAgHIAAgpIgnAAQgJAAgFgGQgEgFAAgIQAAgIAEgFQAFgGAJAAIBMAAIAABPQAAAXgQARQgQAQgYAAg");
	this.shape_25.setTransform(399.25,241.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhYBnQgGgFAAgJIAAiyQAAgHAGgGQAFgFAIgBQAHABAHAFQAEAGAAAHIAAAYIAggaQASgQASAAIAbAAQAYAAARAQQAQARAAAYIAAAKQAAAHgFAGQgGAGgIAAQgHAAgGgGQgFgFgBgIIAAgKQABgJgGgFQgFgGgJAAIgYAAQgIAAgJAJIg2AvIAABnQABAJgGAFQgGAGgHgBQgIABgFgGg");
	this.shape_26.setTransform(343.65,245.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_27.setTransform(315.825,245.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AA/CQQgFgGAAgIIAAgIQgcAbgYAAIgfAAQgUAAgSgQIgRgOQgEgFgFgMQgGgMAAgLIAAhMQAAgMAGgMQAGgMAGgGIAQgOQAQgOAXAAIAaAAQAXAAASAQIANALIAAhZQAAgIAFgGQAFgFAIAAQAIAAAGAFQAGAGAAAIIAAEDQAAAIgGAGQgFAFgJAAQgHAAgGgFgAglgXIgNALQgFAFAAAIIAABQQAAAIAGAGIANALQAGAFAGAAIAeAAQAGAAAIgHIAfgZQAHgGAAgKIAAgpQAAgNgIgHIgfgZQgGgGgKAAIgaAAQgHAAgHAGg");
	this.shape_28.setTransform(287.95,241.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AA/BoQgGgGAAgJIgFiLQgBgUgUAAIgSAAQgJAAgJAGIg0AiIAAB3QAAAJgFAFQgGAGgHgBQgIABgGgGQgFgFAAgJIAAiyQAAgHAFgGQAGgFAIgBQAHABAGAFQAFAGAAAHIAAANIAjgVQARgKAVgBIASAAQAWABARAPQAQAQABAXIAFCOQAAAJgFAFQgGAGgIgBQgHAAgGgEg");
	this.shape_29.setTransform(232.4521,245.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag4CdQgIAAgGgFQgFgGAAgIQAAgHAFgGQAGgFAIAAIAmAAIAAiMIgmAAQgIAAgFgGQgGgFAAgIQAAgIAGgGQAFgFAIAAIA4AAQAIAAAGAFQAFAGAAAIIAACfIAmAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgHAAgAgThmQgIAAgFgGQgGgGAAgHIABgRQAAgHAFgGQAGgFAIAAIASAAQAIAAAGAFQAFAGAAAHIAAARQAAAIgFAFQgGAGgIAAg");
	this.shape_30.setTransform(204.625,241.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAACNQgWAAgRgRQgRgQAAgXIAAh6IgTAAQgIAAgGgGQgFgFAAgIQAAgIAFgFQAGgGAIABIAUAAIAAgvQAAgIAFgGQAGgFAIAAQAHAAAGAFQAFAHABAHIAAAvIBKAAQAIgBAGAGQAFAFAAAIQAAAIgFAFQgGAGgIAAIhLAAIAAB6QAAAHAGAFQAFAGAHABIAlAAQAPAAAFgRQAFgRAOABQAJgBAFAHQAFAEAAAJQAAARgQARQgQARgZAAg");
	this.shape_31.setTransform(176.8,242.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgpBsQgUAAgQgMQgRgMgBgLQABgHAFgGQAGgGAIAAQAIAAAIAIQAIAJAQAAIBEAAQAJAAAGgHQAFgGAAgJQAAgMgNgGIhjgtQgPgGgIgMQgIgNAAgNQAAgUAOgPQAOgOAVAAIBWAAQATAAAQAMQAPAMAAALQABAIgGAFQgGAFgHAAQgJAAgIgIQgHgIgIAAIhUAAQgNAAAAALQAAAHAJAEIBjAsQAPAGAKAPQAKAPAAASQAAAZgRAQQgRARgXAAg");
	this.shape_32.setTransform(149.05,245.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag4CdQgIAAgGgFQgFgGAAgIQAAgHAFgGQAGgFAIAAIAmAAIAAiMIgmAAQgIAAgFgGQgGgFAAgIQAAgIAGgGQAFgFAIAAIA4AAQAIAAAGAFQAFAGAAAIIAACfIAmAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgHAAgAgThmQgIAAgFgGQgGgGAAgHIABgRQAAgHAFgGQAGgFAIAAIASAAQAIAAAGAFQAFAGAAAHIAAARQAAAIgFAFQgGAGgIAAg");
	this.shape_33.setTransform(121.225,241.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgKBsQgNAAgGgNIhBiTIAAglQAAgHAFgGQAGgFAIAAQAIAAAFAFQAGAGAAAHIAAAdIA4CBIA5iBIAAgdQAAgHAGgGQAGgFAIAAQAHAAAGAFQAFAGAAAHIAAAkIhBCUQgGANgKAAg");
	this.shape_34.setTransform(93.425,245.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag4CdQgIAAgGgFQgFgGAAgIQAAgHAFgGQAGgFAIAAIAmAAIAAiMIgmAAQgIAAgFgGQgGgFAAgIQAAgIAGgGQAFgFAIAAIA4AAQAIAAAGAFQAFAGAAAIIAACfIAmAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgHAAgAgThmQgIAAgFgGQgGgGAAgHIABgRQAAgHAFgGQAGgFAIAAIASAAQAIAAAGAFQAFAGAAAHIAAARQAAAIgFAFQgGAGgIAAg");
	this.shape_35.setTransform(65.625,241.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AABCNQgXAAgRgRQgRgQAAgXIAAh6IgTAAQgIAAgFgGQgGgFAAgIQAAgIAGgFQAFgGAIABIATAAIAAgvQAAgIAHgGQAFgFAHAAQAIAAAGAFQAGAHgBAHIAAAvIBMAAQAHgBAFAGQAGAFAAAIQAAAIgGAFQgFAGgHAAIhMAAIAAB6QAAAHAGAFQAFAGAIABIAkAAQAPAAAFgRQAFgRAOABQAJgBAFAHQAFAEAAAJQAAARgQARQgQARgZAAg");
	this.shape_36.setTransform(37.8,242.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AA/CQIhkhXIgUAQIAAA5QAAAIgFAGQgGAFgHAAQgIAAgGgFQgFgGAAgIIAAkDQAAgIAFgGQAGgFAIAAQAHAAAGAFQAFAGAAAIIAACZIBlhVQAHgFAHAAQAIAAAGAFQAFAGAAAIQAAAIgGAFIhOBCIBhBWQAFAEAAAIQAAAHgFAGQgFAGgIAAQgIAAgGgFg");
	this.shape_37.setTransform(10.075,241.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AA7CIIgQg0IhVAAIgQA3QgBAEgFADQgFADgGAAQgIAAgGgFQgFgGAAgIIABgHIBMkBQAEgOAOAAQAPAAADAMIBLEFIABAFQAAAIgGAGQgFAFgGAAQgPAAgEgNgAgeAuIA/AAIgghrg");
	this.shape_38.setTransform(-17.75,241.875);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag4CVQgHAAgGgFQgGgGABgIQgBgIAGgFQAGgGAHAAIAmAAIAAjeIgmAAQgIAAgGgFQgFgGAAgHQAAgIAFgGQAGgFAIAAIA4AAQAIAAAGAFQAFAGAAAIIAADwIAmAAQAIAAAGAGQAFAFAAAIQAAAIgFAGQgGAFgIAAg");
	this.shape_39.setTransform(538.25,192.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AA/BnQgFgGgBgIIggATIg/AAQgXAAgRgQQgQgRAAgYIAAgWQAAgXARgQQAQgRAXAAIBKAAQAGAAAMADIgBgbQAAgIgGgFQgFgGgIAAIhHAAQgIAAgFgFQgGgGAAgIQAAgHAGgGQAFgFAIAAIBHAAQAYAAAQAQQAQAQABAYIAECMQAAAIgFAGQgGAFgHAAQgIAAgGgFgAgyAQQgGAGAAAIIAAAVQAAAHAGAGQAFAGAHAAIA1AAIApgYIgBgQQgBgIgFgGQgFgFgIAAIhKAAQgHAAgFAFg");
	this.shape_40.setTransform(510.4,196.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AABCNQgXAAgRgQQgRgRAAgYIAAh5IgTAAQgIAAgFgGQgGgFAAgIQAAgHAGgGQAFgGAIABIATAAIAAgvQABgIAFgFQAFgGAJAAQAHAAAGAGQAGAFAAAIIAAAvIBKAAQAIgBAGAGQAFAGAAAHQAAAIgFAFQgGAGgIAAIhLAAIAAB5QAAAIAGAGQAFAFAIABIAkAAQAPgBAFgQQAFgQAOAAQAIgBAGAHQAFAEAAAJQAAARgQARQgQARgZAAg");
	this.shape_41.setTransform(482.6,193.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AA/CPQgGgFAAgIIgFiMQAAgIgFgGQgGgGgIABIgVAAQgHgBgIAGIg1AiIAAB4QAAAIgGAFQgFAGgIAAQgIAAgGgGQgFgFAAgIIAAkDQAAgIAFgGQAGgFAIAAQAIAAAFAFQAGAGAAAIIAABfIAegUQAVgMAPAAIAXAAQAXAAARAQQAQARABAXIAFCMQAAAIgGAFQgFAGgIAAQgIAAgFgGg");
	this.shape_42.setTransform(454.8019,192.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgEBsQgVAAgPgNIglgfQgRgPAAgZIAAgwQgBgYAUgSIAhgcQAQgNATAAIBTAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAIhQAAQgHAAgHAGIgfAaQgHAGAAALIAAAtQAAAHAGAGIAhAcQAGAGALAAIBMAAQAHAAAGAFQAGAGAAAHQAAAIgGAGQgFAFgIAAg");
	this.shape_43.setTransform(427.1227,196.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AA/BnQgGgGAAgIIgfATIg/AAQgYAAgRgQQgQgRgBgYIAAgWQAAgXARgQQARgRAYAAIBJAAQAGAAALADIAAgbQAAgIgGgFQgFgGgIAAIhHAAQgHAAgGgFQgGgGAAgIQAAgHAGgGQAFgFAIAAIBHAAQAYAAAPAQQARAQABAYIAFCMQAAAIgGAGQgFAFgIAAQgIAAgGgFgAgzAQQgFAGAAAIIAAAVQAAAHAFAGQAGAGAIAAIA0AAIApgYIgBgQQgBgIgFgGQgFgFgIAAIhJAAQgIAAgGAFg");
	this.shape_44.setTransform(399.2,196.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AA/CQQgGgGABgIIAAjhIgnA1IAAALQAAAIgFAFQgGAGgIAAQgGAAgGgGQgFgFgBgIIAAgKIgmg3IAADiQgBAIgFAGQgGAFgHAAQgJAAgFgFQgGgGABgIIAAkWIAxAAIAtBDIAvhDIAxAAIAAEWQgBAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape_45.setTransform(371.4,192.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AA/BoQgGgGAAgJIgFiLQgBgUgUAAIgSAAQgJAAgJAGIg0AiIAAB3QAAAJgFAFQgGAGgHgBQgIABgGgGQgFgFAAgJIAAiyQAAgHAFgGQAGgFAIgBQAHABAGAFQAFAGAAAHIAAANIAjgVQARgKAVgBIASAAQAWABARAQQAQAPABAXIAFCOQAAAJgFAFQgGAGgIgBQgHAAgGgEg");
	this.shape_46.setTransform(315.8521,196.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_47.setTransform(288.025,196.375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AA/CPQgGgFAAgIIgFiMQAAgIgFgGQgGgGgIABIgVAAQgHgBgIAGIg1AiIAAB4QAAAIgGAFQgFAGgIAAQgIAAgGgGQgFgFAAgIIAAkDQAAgIAFgGQAGgFAIAAQAIAAAFAFQAGAGAAAIIAABfIAegUQAVgMAPAAIAXAAQAXAAARAQQAQARABAXIAFCMQAAAIgGAFQgFAGgIAAQgIAAgFgGg");
	this.shape_48.setTransform(260.2019,192.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgEBsQgVAAgPgNIglgfQgRgPAAgZIAAgwQgBgYAUgSIAhgcQAQgNATAAIBTAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAIhQAAQgHAAgHAGIgfAaQgHAGAAALIAAAtQAAAHAGAGIAhAcQAGAGALAAIBMAAQAHAAAGAFQAGAGAAAHQAAAIgGAGQgFAFgIAAg");
	this.shape_49.setTransform(232.5227,196.375);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AABCNQgXAAgRgQQgRgRAAgYIAAh5IgTAAQgIAAgFgGQgGgFAAgIQAAgHAGgGQAFgGAIABIAUAAIAAgvQAAgIAFgFQAGgGAIAAQAHAAAGAGQAFAFABAIIAAAvIBKAAQAIgBAGAGQAFAGAAAHQAAAIgFAFQgGAGgIAAIhLAAIAAB5QAAAIAGAGQAFAFAIABIAkAAQAPgBAFgQQAFgQAOAAQAIgBAGAHQAFAEAAAJQAAARgQARQgQARgZAAg");
	this.shape_50.setTransform(204.6,193.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgWBsQgKAAgLgEQgLgEgFgFIgRgOQgIgHgFgLQgFgLAAgKIAAhVQAAgHAGgNQAFgNAJgHIAQgMQAPgMATAAIA0AAQAUAAASAQIAOAOQAPANAAAbIAAAtQAAAIgFAFQgGAGgIAAIiEAAIAAALQAAAKAIAGIALAKQAJAHAIAAIBgAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAgAglg/IgLAJQgIAGAAAJIAAAdIByAAIAAgbQAAgKgHgGIgLgJQgIgHgHAAIguAAQgJAAgHAGg");
	this.shape_51.setTransform(176.825,196.375);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhYBnQgGgFAAgJIAAiyQAAgHAGgGQAFgFAIgBQAHABAHAFQAEAGAAAHIAAAYIAggaQASgQASAAIAcAAQAXAAAQAQQARARAAAXIAAALQAAAHgFAGQgGAGgIAAQgHAAgGgGQgFgFAAgIIAAgLQgBgHgFgGQgGgGgHAAIgZAAQgIAAgJAJIg2AuIAABoQABAJgGAFQgGAGgHgBQgIABgFgGg");
	this.shape_52.setTransform(149.05,196.35);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgmCVQgXAAgRgQQgRgRAAgXIAAhoQAAgcAPgTIA4hHQAGgIALgGQAJgFAMAAIA/AAQAIAAAGAFQAFAGAAAIQAAAIgGAGQgGAFgHAAIg8AAQgJAAgGAIIg0BEQgHAIAAAPIAABnQAAAIAGAGQAFAGAIAAIBMAAQAHAAAGgGQAGgGAAgHIAAgpIgnAAQgIAAgGgGQgEgFAAgIQAAgIAEgFQAGgGAIAAIBMAAIAABPQAAAXgQARQgQAQgYAAg");
	this.shape_53.setTransform(121.25,192.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgpBsQgUAAgRgMQgRgMAAgLQAAgHAGgGQAGgGAJAAQAGAAAJAIQAIAJAQAAIBFAAQAIAAAFgHQAGgGAAgJQAAgMgNgGIhkgtQgOgGgIgMQgIgNAAgNQAAgUAOgPQAOgOAVAAIBWAAQATAAAQAMQAPAMABALQAAAIgGAFQgGAFgHAAQgJAAgHgIQgIgIgIAAIhUAAQgNAAAAALQAAAHAJAEIBjAsQAPAGAKAPQAKAPgBASQAAAZgRAQQgRARgVAAg");
	this.shape_54.setTransform(65.65,196.375);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgpBsQgTAAgSgMQgRgMAAgLQAAgHAGgGQAFgGAKAAQAGAAAJAIQAIAJAQAAIBFAAQAIAAAFgHQAGgGAAgJQAAgMgMgGIhlgtQgOgGgIgMQgIgNAAgNQAAgUAOgPQAOgOAVAAIBVAAQAUAAAQAMQAQAMAAALQAAAIgGAFQgGAFgHAAQgJAAgHgIQgIgIgIAAIhUAAQgNAAAAALQAAAHAIAEIBkAsQAPAGAKAPQAJAPAAASQAAAZgRAQQgQARgWAAg");
	this.shape_55.setTransform(37.85,196.375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag4CdQgIAAgGgFQgFgGAAgIQAAgHAFgGQAGgFAIAAIAmAAIAAiMIgmAAQgIAAgFgGQgGgFAAgIQAAgIAGgGQAFgFAIAAIA4AAQAIAAAGAFQAFAGAAAIIAACfIAmAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgHAAgAgThmQgIAAgFgGQgGgGAAgHIABgRQAAgHAFgGQAGgFAIAAIASAAQAIAAAGAFQAFAGAAAHIAAARQAAAIgFAFQgGAGgIAAg");
	this.shape_56.setTransform(10.025,191.425);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AA/CQQgFgGgBgIIAAjhIgmA1IAAALQAAAIgGAFQgFAGgHAAQgIAAgFgGQgGgFABgIIAAgKIgog3IAADiQABAIgGAGQgFAFgJAAQgHAAgGgFQgFgGgBgIIAAkWIAyAAIAtBDIAvhDIAwAAIAAEWQABAIgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_57.setTransform(-17.8,192.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},16).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},22).wait(3));

	// Ebene_3
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.498)").s().p("Eg4YANFIAA6JMBwxAAAIAAaJg");
	this.shape_58.setTransform(262.7,238.725);
	this.shape_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(16).to({_off:false},0).wait(25));

	// Ebene_1
	this.instance = new lib.pic_activist();
	this.instance.setTransform(105.8,104,1,1,0.4992,0,0,105.9,103.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:104.4,regY:103,rotation:0.4756,x:105.75,y:103.9},0).wait(1).to({regX:101.1,regY:102.3,scaleX:1.1554,scaleY:1.1554,rotation:0.3042,x:116.55,y:103.1},0).wait(1).to({scaleX:1.298,scaleY:1.298,rotation:0.1321,x:138.6,y:86.85},0).wait(1).to({scaleX:1.4287,scaleY:1.4287,rotation:-0.0401,x:158.05,y:70.55},0).wait(1).to({scaleX:1.5485,scaleY:1.5485,rotation:-0.2123,x:175.1,y:54.25},0).wait(1).to({scaleX:1.6584,scaleY:1.6584,rotation:-0.3844,x:190.05,y:38.05},0).wait(1).to({scaleX:1.759,scaleY:1.759,rotation:-0.5566,x:203.15,y:21.75},0).wait(1).to({scaleX:1.8512,scaleY:1.8512,rotation:-0.7288,x:214.75,y:5.5},0).wait(1).to({scaleX:1.8648,scaleY:1.8648,rotation:-0.9009,x:225.2,y:-10.65},0).wait(1).to({scaleX:1.8649,scaleY:1.8649,rotation:-1.0731,x:234.5,y:-26.85},0).wait(1).to({rotation:-1.2453,x:242.9,y:-43},0).wait(1).to({rotation:-1.4175,x:250.45,y:-59.2},0).wait(1).to({rotation:-1.5896,x:257.4,y:-75.4},0).wait(1).to({scaleX:1.8648,scaleY:1.8648,rotation:-1.7618,x:262.65,y:-91.55},0).wait(1).to({scaleX:1.8649,scaleY:1.8649,rotation:-1.934,x:263.6,y:-107.7},0).wait(1).to({rotation:-2.1061,x:264.45,y:-123.9},0).wait(1).to({rotation:-2.2783,x:265.35,y:-140.1},0).wait(1).to({rotation:-2.4505,x:266.2,y:-126.7},0).wait(1).to({scaleX:1.8648,scaleY:1.8648,rotation:-2.6226,x:267.05,y:-113.45},0).wait(1).to({rotation:-2.7948,x:267.85,y:-100.05},0).wait(1).to({scaleX:1.8649,scaleY:1.8649,rotation:-2.967,x:268.7,y:-86.7},0).wait(1).to({rotation:-3.1392,x:269.55,y:-73.35},0).wait(1).to({rotation:-3.3113,x:270.35,y:-74.95},0).wait(1).to({rotation:-3.4835,x:270.1,y:-76.5},0).wait(1).to({rotation:-3.6557,x:268.6,y:-78},0).wait(1).to({rotation:-3.8278,x:267.1,y:-79.55},0).wait(1).to({rotation:-4,x:265.55,y:-81.1},0).wait(1).to({rotation:-0.1761,x:264,y:-82.8},0).wait(1).to({rotation:2.9241,x:262.2,y:-84.35},0).wait(1).to({scaleX:1.8648,scaleY:1.8648,rotation:4.3843,x:260.3,y:-85.7},0).wait(1).to({scaleX:1.8649,scaleY:1.8649,rotation:5.167,x:258.1,y:-87},0).wait(1).to({rotation:5.6181,x:257.4,y:-88.3},0).wait(1).to({rotation:5.8737,x:258.4,y:-89.55},0).wait(1).to({rotation:6,x:259.5,y:-90.75},0).wait(1).to({rotation:5.8563,x:260.75,y:-85.4},0).wait(1).to({rotation:5.5513,x:262.2,y:-80},0).wait(1).to({rotation:5.0363,x:263.75,y:-74.65},0).wait(1).to({rotation:4.2271,x:262.5,y:-69.2},0).wait(1).to({rotation:2.941,x:260.5,y:-63.75},0).wait(1).to({rotation:0.367,x:258.25,y:-58.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.2,-334.2,721.8000000000001,810.0999999999999);


(lib.wolken_ani = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wolken_tween();
	this.instance.setTransform(0,-1.8,0.9403,0.8886);
	this.instance.alpha = 0.9609;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.952,scaleY:0.8911,y:-5.5285,alpha:0.9428},0).wait(1).to({scaleX:0.9637,scaleY:0.8936,y:-9.257,alpha:0.9214},0).wait(1).to({scaleX:0.9753,scaleY:0.896,y:-12.9855,alpha:0.9},0).wait(1).to({scaleX:0.987,scaleY:0.8985,y:-16.714,alpha:0.8785},0).wait(1).to({scaleX:0.9987,scaleY:0.901,y:-20.4426,alpha:0.8571},0).wait(1).to({scaleX:1.0104,scaleY:0.9035,y:-24.1711,alpha:0.8357},0).wait(1).to({scaleX:1.022,scaleY:0.9059,y:-27.8996,alpha:0.8143},0).wait(1).to({scaleX:1.0337,scaleY:0.9084,y:-31.6281,alpha:0.7928},0).wait(1).to({scaleX:1.0454,scaleY:0.9109,y:-35.3566,alpha:0.7714},0).wait(1).to({scaleX:1.057,scaleY:0.9134,y:-39.0851,alpha:0.75},0).wait(1).to({scaleX:1.0687,scaleY:0.9158,y:-42.8136,alpha:0.7285},0).wait(1).to({scaleX:1.0804,scaleY:0.9183,y:-46.5421,alpha:0.7071},0).wait(1).to({scaleX:1.0921,scaleY:0.9208,y:-50.2706,alpha:0.6857},0).wait(1).to({scaleX:1.1037,scaleY:0.9233,y:-53.9992,alpha:0.6643},0).wait(1).to({scaleX:1.1154,scaleY:0.9257,y:-57.7277,alpha:0.6428},0).wait(1).to({scaleX:1.1271,scaleY:0.9282,y:-61.4562,alpha:0.6214},0).wait(1).to({scaleX:1.1388,scaleY:0.9307,y:-65.1847,alpha:0.6},0).wait(1).to({scaleX:1.1504,scaleY:0.9332,y:-68.9132,alpha:0.5786},0).wait(1).to({scaleX:1.1621,scaleY:0.9356,y:-72.6417,alpha:0.5571},0).wait(1).to({scaleX:1.1738,scaleY:0.9381,y:-76.3702,alpha:0.5357},0).wait(1).to({scaleX:1.1854,scaleY:0.9406,y:-80.0987,alpha:0.5143},0).wait(1).to({scaleX:1.1971,scaleY:0.9431,y:-83.8272,alpha:0.4928},0).wait(1).to({scaleX:1.2088,scaleY:0.9455,y:-87.5558,alpha:0.4714},0).wait(1).to({scaleX:1.2205,scaleY:0.948,y:-91.2843,alpha:0.45},0).wait(1).to({scaleX:1.2321,scaleY:0.9505,y:-95.0128,alpha:0.4286},0).wait(1).to({scaleX:1.2438,scaleY:0.953,y:-98.7413,alpha:0.4071},0).wait(1).to({scaleX:1.2555,scaleY:0.9554,y:-102.4698,alpha:0.3857},0).wait(1).to({scaleX:1.2671,scaleY:0.9579,y:-106.1983,alpha:0.3643},0).wait(1).to({scaleX:1.2788,scaleY:0.9604,y:-109.9268,alpha:0.3428},0).wait(1).to({scaleX:1.2905,scaleY:0.9629,y:-113.6553,alpha:0.3214},0).wait(1).to({scaleX:1.3022,scaleY:0.9653,y:-117.3838,alpha:0.3},0).wait(1).to({scaleX:1.3138,scaleY:0.9678,y:-121.1124,alpha:0.2786},0).wait(1).to({scaleX:1.3255,scaleY:0.9703,y:-124.8409,alpha:0.2571},0).wait(1).to({scaleX:1.3372,scaleY:0.9728,y:-128.5694,alpha:0.2357},0).wait(1).to({scaleX:1.3489,scaleY:0.9752,y:-132.2979,alpha:0.2143},0).wait(1).to({scaleX:1.3605,scaleY:0.9777,y:-136.0264,alpha:0.1929},0).wait(1).to({scaleX:1.3722,scaleY:0.9802,y:-139.7549,alpha:0.1714},0).wait(1).to({scaleX:1.3839,scaleY:0.9827,y:-143.4834,alpha:0.15},0).wait(1).to({scaleX:1.3955,scaleY:0.9851,y:-147.2119,alpha:0.1286},0).wait(1).to({scaleX:1.4072,scaleY:0.9876,y:-150.9404,alpha:0.1071},0).wait(1).to({scaleX:1.4189,scaleY:0.9901,y:-154.669,alpha:0.0857},0).wait(1).to({scaleX:1.4306,scaleY:0.9926,y:-158.3975,alpha:0.0643},0).wait(1).to({scaleX:1.4422,scaleY:0.995,y:-162.126,alpha:0.0429},0).wait(1).to({scaleX:1.4539,scaleY:0.9975,y:-165.8545,alpha:0.0214},0).wait(1).to({scaleX:1.4656,scaleY:1,y:-169.583,alpha:0},0).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.4,-234.9,578.9,291.3);


(lib.wind_kopf3_ani = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wind_kopf3_tween();
	this.instance.setTransform(-3.3,8,1,1,0,0,0,-3.3,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:-7.6383,x:-1.086,y:-0.3681},0).wait(1).to({rotation:-15.2766,x:-2.2113,y:-0.5886},0).wait(1).to({rotation:-22.9149,x:-3.3559,y:-0.6575},0).wait(1).to({rotation:-30.5532,x:-4.4995,y:-0.5737},0).wait(1).to({rotation:-38.1915,x:-5.6218,y:-0.3387},0).wait(1).to({rotation:-45.8298,x:-6.7029,y:0.0435},0).wait(1).to({rotation:-53.4681,x:-7.7236,y:0.566},0).wait(1).to({rotation:-61.1064,x:-8.6659,y:1.2195},0).wait(1).to({rotation:-68.7447,x:-9.5129,y:1.9924},0).wait(1).to({rotation:-76.383,x:-10.2496,y:2.8711},0).wait(1).to({rotation:-84.0213,x:-10.863,y:3.8399},0).wait(1).to({rotation:-91.6596,x:-11.3422,y:4.8816},0).wait(1).to({rotation:-99.2979,x:-11.6787,y:5.9778},0).wait(1).to({rotation:-106.9362,x:-11.8665,y:7.109},0).wait(1).to({rotation:-114.5745,x:-11.9023,y:8.2551},0).wait(1).to({rotation:-122.2128,x:-11.7854,y:9.3958},0).wait(1).to({rotation:-129.8511,x:-11.5179,y:10.5109},0).wait(1).to({rotation:-137.4894,x:-11.1046,y:11.5805},0).wait(1).to({rotation:-145.1277,x:-10.5528,y:12.5856},0).wait(1).to({rotation:-152.766,x:-9.8723,y:13.5085},0).wait(1).to({rotation:-160.4043,x:-9.0752,y:14.3328},0).wait(1).to({rotation:-168.0426,x:-8.1755,y:15.0438},0).wait(1).to({rotation:-175.6809,x:-7.1894,y:15.6289},0).wait(1).to({rotation:-183.3191,x:-6.1342,y:16.0777},0).wait(1).to({rotation:-190.9574,x:-5.0287,y:16.3823},0).wait(1).to({rotation:-198.5957,x:-3.8925,y:16.5373},0).wait(1).to({rotation:-206.234,x:-2.7459,y:16.5398},0).wait(1).to({rotation:-213.8723,x:-1.609,y:16.39},0).wait(1).to({rotation:-221.5106,x:-0.5022,y:16.0903},0).wait(1).to({rotation:-229.1489,x:0.555,y:15.6462},0).wait(1).to({rotation:-236.7872,x:1.5437,y:15.0655},0).wait(1).to({rotation:-244.4255,x:2.4465,y:14.3586},0).wait(1).to({rotation:-252.0638,x:3.2474,y:13.5379},0).wait(1).to({rotation:-259.7021,x:3.932,y:12.618},0).wait(1).to({rotation:-267.3404,x:4.4883,y:11.6153},0).wait(1).to({rotation:-274.9787,x:4.9064,y:10.5476},0).wait(1).to({rotation:-282.617,x:5.1789,y:9.4338},0).wait(1).to({rotation:-290.2553,x:5.3008,y:8.2936},0).wait(1).to({rotation:-297.8936,x:5.2702,y:7.1473},0).wait(1).to({rotation:-305.5319,x:5.0875,y:6.0153},0).wait(1).to({rotation:-313.1702,x:4.7559,y:4.9176},0).wait(1).to({rotation:-320.8085,x:4.2813,y:3.8738},0).wait(1).to({rotation:-328.4468,x:3.6723,y:2.9022},0).wait(1).to({rotation:-336.0851,x:2.9395,y:2.0203},0).wait(1).to({rotation:-343.7234,x:2.0959,y:1.2435},0).wait(1).to({rotation:-351.3617,x:1.1566,y:0.5858},0).wait(1).to({rotation:-359,x:0.1382,y:0.0588},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.1,-83,181.8,181.9);


(lib.wind_kopf2_ani = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wind_kopf2_tween();
	this.instance.setTransform(-15.35,12.3,1,1,0,0,0,-9.8,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:-7.8043,x:-6.6257,y:3.8296},0).wait(1).to({rotation:-15.6087,x:-7.864,y:2.7171},0).wait(1).to({rotation:-23.413,x:-9.2418,y:1.783},0).wait(1).to({rotation:-31.2174,x:-10.7338,y:1.0446},0).wait(1).to({rotation:-39.0217,x:-12.3122,y:0.5157},0).wait(1).to({rotation:-46.8261,x:-13.9478,y:0.206},0).wait(1).to({rotation:-54.6304,x:-15.6103,y:0.1213},0).wait(1).to({rotation:-62.4348,x:-17.2688,y:0.2631},0).wait(1).to({rotation:-70.2391,x:-18.8928,y:0.6289},0).wait(1).to({rotation:-78.0435,x:-20.4521,y:1.2117},0).wait(1).to({rotation:-85.8478,x:-21.9178,y:2.0009},0).wait(1).to({rotation:-93.6522,x:-23.2627,y:2.9818},0).wait(1).to({rotation:-101.4565,x:-24.462,y:4.1363},0).wait(1).to({rotation:-109.2609,x:-25.4934,y:5.4429},0).wait(1).to({rotation:-117.0652,x:-26.3378,y:6.8775},0).wait(1).to({rotation:-124.8696,x:-26.9796,y:8.4134},0).wait(1).to({rotation:-132.6739,x:-27.4069,y:10.0223},0).wait(1).to({rotation:-140.4783,x:-27.6118,y:11.6743},0).wait(1).to({rotation:-148.2826,x:-27.5905,y:13.3388},0).wait(1).to({rotation:-156.087,x:-27.3433,y:14.985},0).wait(1).to({rotation:-163.8913,x:-26.8748,y:16.5824},0).wait(1).to({rotation:-171.6957,x:-26.1938,y:18.1013},0).wait(1).to({rotation:-179.5,x:-25.3129,y:19.5138},0).wait(1).to({rotation:-187.3043,x:-24.2483,y:20.7935},0).wait(1).to({rotation:-195.1087,x:-23.0198,y:21.9168},0).wait(1).to({rotation:-202.913,x:-21.6501,y:22.8629},0).wait(1).to({rotation:-210.7174,x:-20.1647,y:23.6142},0).wait(1).to({rotation:-218.5217,x:-18.591,y:24.1569},0).wait(1).to({rotation:-226.3261,x:-16.9582,y:24.4808},0).wait(1).to({rotation:-234.1304,x:-15.2965,y:24.5801},0).wait(1).to({rotation:-241.9348,x:-13.6367,y:24.4527},0).wait(1).to({rotation:-249.7391,x:-12.0096,y:24.1012},0).wait(1).to({rotation:-257.5435,x:-10.4453,y:23.5319},0).wait(1).to({rotation:-265.3478,x:-8.9728,y:22.7556},0).wait(1).to({rotation:-273.1522,x:-7.6193,y:21.7864},0).wait(1).to({rotation:-280.9565,x:-6.41,y:20.6425},0).wait(1).to({rotation:-288.7609,x:-5.3673,y:19.3449},0).wait(1).to({rotation:-296.5652,x:-4.5103,y:17.9178},0).wait(1).to({rotation:-304.3696,x:-3.8551,y:16.3875},0).wait(1).to({rotation:-312.1739,x:-3.4138,y:14.7824},0).wait(1).to({rotation:-319.9783,x:-3.1945,y:13.1323},0).wait(1).to({rotation:-327.7826,x:-3.2014,y:11.4676},0).wait(1).to({rotation:-335.587,x:-3.4342,y:9.8193},0).wait(1).to({rotation:-343.3913,x:-3.8887,y:8.2179},0).wait(1).to({rotation:-351.1957,x:-4.5564,y:6.6931},0).wait(1).to({rotation:-359,x:-5.425,y:5.273},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.2,-152.2,329.6,329.2);


(lib.wind_kopf1_ani = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.wind_kopf1_tween();
	this.instance.setTransform(-2,0.9,1,1,0,0,0,238,207.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:278,regY:256,rotation:-8.3488,x:44.55,y:42.75},0).wait(1).to({rotation:-16.6977,x:50.2,y:35.5},0).wait(1).to({rotation:-25.0465,x:54.65,y:27.6},0).wait(1).to({rotation:-33.3953,x:57.9,y:19.1},0).wait(1).to({rotation:-41.7442,x:59.9,y:10.1},0).wait(1).to({rotation:-50.093,x:60.55,y:1.05},0).wait(1).to({rotation:-58.4419,x:59.95,y:-8.05},0).wait(1).to({rotation:-66.7907,x:58,y:-16.9},0).wait(1).to({rotation:-75.1395,x:54.8,y:-25.45},0).wait(1).to({rotation:-83.4884,x:50.4,y:-33.4},0).wait(1).to({rotation:-91.8372,x:44.8,y:-40.65},0).wait(1).to({rotation:-100.186,x:38.3,y:-46.95},0).wait(1).to({rotation:-108.5349,x:30.9,y:-52.35},0).wait(1).to({rotation:-116.8837,x:22.85,y:-56.55},0).wait(1).to({rotation:-125.2326,x:14.2,y:-59.55},0).wait(1).to({rotation:-133.5814,x:5.25,y:-61.3},0).wait(1).to({rotation:-141.9302,x:-3.85,y:-61.65},0).wait(1).to({rotation:-150.2791,x:-12.95,y:-60.7},0).wait(1).to({rotation:-158.6279,x:-21.75,y:-58.5},0).wait(1).to({rotation:-166.9767,x:-30.15,y:-55},0).wait(1).to({rotation:-175.3256,x:-38,y:-50.3},0).wait(1).to({rotation:-183.6744,x:-45.05,y:-44.55},0).wait(1).to({rotation:-192.0233,x:-51.15,y:-37.85},0).wait(1).to({rotation:-200.3721,x:-56.25,y:-30.3},0).wait(1).to({rotation:-208.7209,x:-60.2,y:-22.05},0).wait(1).to({rotation:-217.0698,x:-62.9,y:-13.4},0).wait(1).to({rotation:-225.4186,x:-64.4,y:-4.35},0).wait(1).to({rotation:-233.7674,x:-64.45,y:4.8},0).wait(1).to({rotation:-242.1163,x:-63.25,y:13.8},0).wait(1).to({rotation:-250.4651,x:-60.7,y:22.55},0).wait(1).to({rotation:-258.814,x:-57,y:30.85},0).wait(1).to({rotation:-267.1628,x:-52.05,y:38.5},0).wait(1).to({rotation:-275.5116,x:-46.05,y:45.35},0).wait(1).to({rotation:-283.8605,x:-39.15,y:51.25},0).wait(1).to({rotation:-292.2093,x:-31.4,y:56.1},0).wait(1).to({rotation:-300.5581,x:-23.1,y:59.85},0).wait(1).to({rotation:-308.907,x:-14.3,y:62.3},0).wait(1).to({rotation:-317.2558,x:-5.25,y:63.4},0).wait(1).to({rotation:-325.6047,x:3.9,y:63.25},0).wait(1).to({rotation:-333.9535,x:12.85,y:61.7},0).wait(1).to({rotation:-342.3023,x:21.55,y:58.9},0).wait(1).to({rotation:-350.6512,x:29.65,y:54.85},0).wait(1).to({rotation:-359,x:37.2,y:49.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-441.8,-439,879.6,879);


(lib.oelfleck_ani = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.oelfleck_tween();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.008,scaleY:1.0045,alpha:0.9851},0).wait(1).to({scaleX:1.0159,scaleY:1.0091,alpha:0.9701},0).wait(1).to({scaleX:1.0239,scaleY:1.0136,alpha:0.9552},0).wait(1).to({scaleX:1.0319,scaleY:1.0181,alpha:0.9403},0).wait(1).to({scaleX:1.0398,scaleY:1.0227,alpha:0.9254},0).wait(1).to({scaleX:1.0478,scaleY:1.0272,alpha:0.9104},0).wait(1).to({scaleX:1.0558,scaleY:1.0317,alpha:0.8955},0).wait(1).to({scaleX:1.0637,scaleY:1.0363,alpha:0.8806},0).wait(1).to({scaleX:1.0717,scaleY:1.0408,alpha:0.8657},0).wait(1).to({scaleX:1.0797,scaleY:1.0453,alpha:0.8507},0).wait(1).to({scaleX:1.0876,scaleY:1.0499,alpha:0.8358},0).wait(1).to({scaleX:1.0956,scaleY:1.0544,alpha:0.8209},0).wait(1).to({scaleX:1.1035,scaleY:1.0589,alpha:0.806},0).wait(1).to({scaleX:1.1115,scaleY:1.0635,alpha:0.791},0).wait(1).to({scaleX:1.1195,scaleY:1.068,alpha:0.7761},0).wait(1).to({scaleX:1.1274,scaleY:1.0725,alpha:0.7612},0).wait(1).to({scaleX:1.1354,scaleY:1.0771,alpha:0.7463},0).wait(1).to({scaleX:1.1434,scaleY:1.0816,alpha:0.7313},0).wait(1).to({scaleX:1.1513,scaleY:1.0861,alpha:0.7164},0).wait(1).to({scaleX:1.1593,scaleY:1.0907,alpha:0.7015},0).wait(1).to({scaleX:1.1673,scaleY:1.0952,alpha:0.6866},0).wait(1).to({scaleX:1.1752,scaleY:1.0997,alpha:0.6716},0).wait(1).to({scaleX:1.1832,scaleY:1.1043,alpha:0.6567},0).wait(1).to({scaleX:1.1912,scaleY:1.1088,alpha:0.6418},0).wait(1).to({scaleX:1.1991,scaleY:1.1133,alpha:0.6269},0).wait(1).to({scaleX:1.2071,scaleY:1.1179,alpha:0.6119},0).wait(1).to({scaleX:1.2151,scaleY:1.1224,alpha:0.597},0).wait(1).to({scaleX:1.223,scaleY:1.1269,alpha:0.5821},0).wait(1).to({scaleX:1.231,scaleY:1.1315,alpha:0.5672},0).wait(1).to({scaleX:1.239,scaleY:1.136,alpha:0.5522},0).wait(1).to({scaleX:1.2469,scaleY:1.1406,alpha:0.5373},0).wait(1).to({scaleX:1.2549,scaleY:1.1451,alpha:0.5224},0).wait(1).to({scaleX:1.2628,scaleY:1.1496,alpha:0.5075},0).wait(1).to({scaleX:1.2708,scaleY:1.1542,alpha:0.4925},0).wait(1).to({scaleX:1.2788,scaleY:1.1587,alpha:0.4776},0).wait(1).to({scaleX:1.2867,scaleY:1.1632,alpha:0.4627},0).wait(1).to({scaleX:1.2947,scaleY:1.1678,alpha:0.4478},0).wait(1).to({scaleX:1.3027,scaleY:1.1723,alpha:0.4328},0).wait(1).to({scaleX:1.3106,scaleY:1.1768,alpha:0.4179},0).wait(1).to({scaleX:1.3186,scaleY:1.1814,alpha:0.403},0).wait(1).to({scaleX:1.3266,scaleY:1.1859,alpha:0.3881},0).wait(1).to({scaleX:1.3345,scaleY:1.1904,alpha:0.3731},0).wait(1).to({scaleX:1.3425,scaleY:1.195,alpha:0.3582},0).wait(1).to({scaleX:1.3505,scaleY:1.1995,alpha:0.3433},0).wait(1).to({scaleX:1.3584,scaleY:1.204,alpha:0.3284},0).wait(1).to({scaleX:1.3664,scaleY:1.2086,alpha:0.3134},0).wait(1).to({scaleX:1.3744,scaleY:1.2131,alpha:0.2985},0).wait(1).to({scaleX:1.3823,scaleY:1.2176,alpha:0.2836},0).wait(1).to({scaleX:1.3903,scaleY:1.2222,alpha:0.2687},0).wait(1).to({scaleX:1.3983,scaleY:1.2267,alpha:0.2537},0).wait(1).to({scaleX:1.4062,scaleY:1.2312,alpha:0.2388},0).wait(1).to({scaleX:1.4142,scaleY:1.2358,alpha:0.2239},0).wait(1).to({scaleX:1.4221,scaleY:1.2403,alpha:0.209},0).wait(1).to({scaleX:1.4301,scaleY:1.2448,alpha:0.194},0).wait(1).to({scaleX:1.4381,scaleY:1.2494,alpha:0.1791},0).wait(1).to({scaleX:1.446,scaleY:1.2539,alpha:0.1642},0).wait(1).to({scaleX:1.454,scaleY:1.2584,alpha:0.1493},0).wait(1).to({scaleX:1.462,scaleY:1.263,alpha:0.1343},0).wait(1).to({scaleX:1.4699,scaleY:1.2675,alpha:0.1194},0).wait(1).to({scaleX:1.4779,scaleY:1.272,alpha:0.1045},0).wait(1).to({scaleX:1.4859,scaleY:1.2766,alpha:0.0896},0).wait(1).to({scaleX:1.4938,scaleY:1.2811,alpha:0.0746},0).wait(1).to({scaleX:1.5018,scaleY:1.2856,alpha:0.0597},0).wait(1).to({scaleX:1.5098,scaleY:1.2902,alpha:0.0448},0).wait(1).to({scaleX:1.5177,scaleY:1.2947,alpha:0.0299},0).wait(1).to({scaleX:1.5257,scaleY:1.2992,alpha:0.0149},0).wait(1).to({scaleX:1.5337,scaleY:1.3038,alpha:0},0).wait(1));

	// Ebene_2
	this.instance_1 = new lib.oelfleck_tween();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(68));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.4,-34.5,319,69.1);


(lib.light_tween = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFuewIoDuZMgPggvGIT0AAMAPgAvGIAXOZg");
	mask.setTransform(-0.025,-0.025);

	// Ebene_3
	this.instance = new lib.light_linie();
	this.instance.setTransform(-43.6,-210.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-41.2045,y:-192.1977},0).wait(1).to({x:-38.8091,y:-173.6954},0).wait(1).to({x:-36.4136,y:-155.1932},0).wait(1).to({x:-34.0182,y:-136.6909},0).wait(1).to({x:-31.6227,y:-118.1886},0).wait(1).to({x:-29.2273,y:-99.6864},0).wait(1).to({x:-26.8318,y:-81.1841},0).wait(1).to({x:-24.4364,y:-62.6818},0).wait(1).to({x:-22.0409,y:-44.1795},0).wait(1).to({x:-19.6455,y:-25.6773},0).wait(1).to({x:-17.25,y:-7.175},0).wait(1).to({x:-14.8545,y:11.3273},0).wait(1).to({x:-12.4591,y:29.8295},0).wait(1).to({x:-10.0636,y:48.3318},0).wait(1).to({x:-7.6682,y:66.8341},0).wait(1).to({x:-5.2727,y:85.3364},0).wait(1).to({x:-2.8773,y:103.8386},0).wait(1).to({x:-0.4818,y:122.3409},0).wait(1).to({x:1.9136,y:140.8432},0).wait(1).to({x:4.3091,y:159.3455},0).wait(1).to({x:6.7045,y:177.8477},0).wait(1).to({x:9.1,y:196.35},0).to({_off:true},1).wait(14));

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.498)").s().p("AFuewIoDuZMgPggvGIT0AAMAPgAvGIAXOZg");
	this.shape.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(37));

	// Ebene_6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_23 = new cjs.Graphics().p("AkFWJImMr5IQi+yIEBhmMgBxAsRg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(23).to({graphics:mask_1_graphics_23,x:59.675,y:55.1}).wait(14));

	// Ebene_7
	this.instance_1 = new lib.light_linie();
	this.instance_1.setTransform(73.85,201.75);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).wait(1).to({x:75.8462,y:179.95},0).wait(1).to({x:77.8423,y:158.15},0).wait(1).to({x:79.8385,y:136.35},0).wait(1).to({x:81.8346,y:114.55},0).wait(1).to({x:83.8308,y:92.75},0).wait(1).to({x:85.8269,y:70.95},0).wait(1).to({x:87.8231,y:49.15},0).wait(1).to({x:89.8192,y:27.35},0).wait(1).to({x:91.8154,y:5.55},0).wait(1).to({x:93.8115,y:-16.25},0).wait(1).to({x:95.8077,y:-38.05},0).wait(1).to({x:97.8038,y:-59.85},0).wait(1).to({x:99.8,y:-81.65},0).wait(1));

	// Ebene_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,0,0.498)").s().p("AkFWJImMr5IQi+yIEBhmMgBxAsRg");
	this.shape_1.setTransform(59.675,55.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.2,-196.8,239.7,393.6);


(lib.hold_circle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

	// Ebene_3
	this.instance = new lib.hold_bubble();
	this.instance.setTransform(0.75,1,2.9981,2.9981,0,0,0,0.1,0.1);
	this.instance.compositeOperation = "difference";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({_off:true},52).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-334,-334,649.3,670.8);


(lib.fly_circle = function(mode,startPosition,loop,reversed) {
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
	this.fly_ani = new lib.fly();
	this.fly_ani.name = "fly_ani";
	this.fly_ani.setTransform(56.95,-250.1,1,1,0,0,0,26.2,55.4);

	this.timeline.addTween(cjs.Tween.get(this.fly_ani).wait(1).to({regX:25.6,regY:81.5,x:6.85,y:-170.15},0).wait(1).to({x:-19.4,y:-140.4},0).wait(1).to({x:-39.25,y:-117.3},0).wait(1).to({x:-55.6,y:-97.8},0).wait(1).to({x:-69.65,y:-80.6},0).wait(1).to({x:-82.1,y:-65.1},0).wait(1).to({x:-93.3,y:-50.8},0).wait(1).to({x:-103.45,y:-37.6},0).wait(1).to({x:-112.8,y:-25.15},0).wait(1).to({x:-121.45,y:-13.45},0).wait(1).to({x:-129.5,y:-2.3},0).wait(1).to({x:-137,y:8.3},0).wait(1).to({x:-144.05,y:18.45},0).wait(1).to({x:-150.7,y:28.2},0).wait(1).to({x:-156.95,y:37.6},0).wait(1).to({x:-162.85,y:46.7},0).wait(1).to({x:-168.45,y:55.45},0).wait(1).to({x:-173.8,y:63.95},0).wait(1).to({x:-178.8,y:72.2},0).wait(1).to({x:-183.6,y:80.25},0).wait(1).to({x:-188.15,y:88},0).wait(1).to({x:-192.5,y:95.6},0).wait(1).to({x:-196.65,y:103.05},0).wait(1).to({x:-200.6,y:110.3},0).wait(1).to({x:-204.35,y:117.4},0).wait(1).to({x:-207.9,y:124.35},0).wait(1).to({x:-211.3,y:131.15},0).wait(1).to({x:-214.55,y:137.85},0).wait(1).to({x:-217.65,y:144.4},0).wait(1).to({x:-220.55,y:150.8},0).wait(1).to({x:-223.35,y:157.1},0).wait(1).to({x:-226,y:163.3},0).wait(1).to({x:-228.55,y:169.4},0).wait(1).to({x:-230.9,y:175.35},0).wait(1).to({x:-233.2,y:181.25},0).wait(1).to({x:-235.35,y:187.05},0).wait(1).to({x:-237.35,y:192.75},0).wait(1).to({x:-239.25,y:198.4},0).wait(1).to({x:-241.05,y:203.95},0).wait(1).to({x:-242.7,y:209.4},0).wait(1).to({x:-244.3,y:214.8},0).wait(1).to({x:-245.75,y:220.1},0).wait(1).to({x:-247.1,y:225.35},0).wait(1).to({x:-248.35,y:230.55},0).wait(1).to({x:-249.5,y:235.65},0).wait(1).to({x:-250.55,y:240.7},0).wait(1).to({x:-251.5,y:245.7},0).wait(1).to({x:-252.4,y:250.6},0).wait(1).to({x:-253.15,y:255.5},0).wait(1).to({x:-253.8,y:260.3},0).wait(1).to({x:-254.35,y:265.1},0).wait(1).to({x:-254.85,y:269.8},0).wait(1).to({x:-255.2,y:274.45},0).wait(1).to({x:-255.5,y:279.05},0).wait(1).to({x:-255.65,y:283.65},0).wait(1).to({x:-255.75,y:288.15},0).wait(1).to({y:292.6},0).wait(1).to({x:-255.65,y:297.05},0).wait(1).to({x:-255.5,y:301.45},0).wait(1).to({x:-255.2,y:305.8},0).wait(1).to({x:-254.85,y:310.1},0).wait(1).to({x:-254.35,y:314.35},0).wait(1).to({x:-253.8,y:318.6},0).wait(1).to({x:-253.15,y:322.75},0).wait(1).to({x:-252.4,y:326.9},0).wait(1).to({x:-251.5,y:331.05},0).wait(1).to({x:-250.55,y:335.1},0).wait(1).to({x:-249.5,y:339.15},0).wait(1).to({x:-248.35,y:343.2},0).wait(1).to({x:-247.1,y:347.15},0).wait(1).to({x:-245.75,y:351.15},0).wait(1).to({x:-244.3,y:355.05},0).wait(1).to({x:-242.75,y:358.95},0).wait(1).to({x:-241.05,y:362.8},0).wait(1).to({x:-239.25,y:366.65},0).wait(1).to({x:-237.35,y:370.45},0).wait(1).to({x:-235.35,y:374.25},0).wait(1).to({x:-233.2,y:378},0).wait(1).to({x:-230.9,y:381.75},0).wait(1).to({x:-228.55,y:385.45},0).wait(1).to({x:-226,y:389.1},0).wait(1).to({x:-223.35,y:392.8},0).wait(1).to({x:-220.55,y:396.45},0).wait(1).to({x:-217.65,y:400.05},0).wait(1).to({x:-214.55,y:403.65},0).wait(1).to({x:-211.3,y:407.25},0).wait(1).to({x:-207.9,y:410.8},0).wait(1).to({x:-204.35,y:414.35},0).wait(1).to({x:-200.6,y:417.85},0).wait(1).to({x:-196.65,y:421.35},0).wait(1).to({x:-192.5,y:424.85},0).wait(1).to({x:-188.2,y:428.35},0).wait(1).to({x:-183.6,y:431.85},0).wait(1).to({x:-178.85,y:435.3},0).wait(1).to({x:-173.8,y:438.75},0).wait(1).to({x:-168.45,y:442.2},0).wait(1).to({x:-162.85,y:445.6},0).wait(1).to({x:-156.95,y:449.05},0).wait(1).to({x:-150.7,y:452.5},0).wait(1).to({x:-144.05,y:455.9},0).wait(1).to({x:-137,y:459.35},0).wait(1).to({x:-129.5,y:462.8},0).wait(1).to({x:-121.45,y:466.25},0).wait(1).to({x:-112.8,y:469.75},0).wait(1).to({x:-103.45,y:473.25},0).wait(1).to({x:-93.3,y:476.8},0).wait(1).to({x:-82.1,y:480.4},0).wait(1).to({x:-69.65,y:484.05},0).wait(1).to({x:-55.6,y:487.85},0).wait(1).to({x:-39.25,y:491.75},0).wait(1).to({x:-19.4,y:495.95},0).wait(1).to({x:6.85,y:500.65},0).wait(1).to({x:56.35,y:507.35},0).wait(1).to({x:100.6,y:403.95},0).wait(1).to({x:123.95,y:348},0).wait(1).to({x:141.5,y:305.25},0).wait(1).to({x:155.9,y:269.5},0).wait(1).to({x:168.25,y:238.35},0).wait(1).to({x:179.15,y:210.5},0).wait(1).to({x:188.95,y:185.2},0).wait(1).to({x:197.8,y:161.9},0).wait(1).to({x:205.9,y:140.25},0).wait(1).to({x:213.35,y:120},0).wait(1).to({x:220.3,y:101},0).wait(1).to({x:226.75,y:83},0).wait(1).to({x:232.8,y:65.95},0).wait(1).to({x:238.4,y:49.7},0).wait(1).to({x:243.7,y:34.2},0).wait(1).to({x:248.7,y:19.35},0).wait(1).to({x:253.4,y:5.15},0).wait(1).to({x:257.85,y:-8.5},0).wait(1).to({x:262,y:-21.65},0).wait(1).to({x:265.95,y:-34.3},0).wait(1).to({x:269.7,y:-46.5},0).wait(1).to({x:273.2,y:-58.3},0).wait(1).to({x:276.55,y:-69.7},0).wait(1).to({x:279.7,y:-80.7},0).wait(1).to({x:282.7,y:-91.35},0).wait(1).to({x:285.5,y:-101.65},0).wait(1).to({x:288.15,y:-111.7},0).wait(1).to({x:290.65,y:-121.4},0).wait(1).to({x:293,y:-130.8},0).wait(1).to({x:295.2,y:-139.95},0).wait(1).to({x:297.25,y:-148.8},0).wait(1).to({x:299.2,y:-157.4},0).wait(1).to({x:301,y:-165.8},0).wait(1).to({x:302.65,y:-173.9},0).wait(1).to({x:304.2,y:-181.8},0).wait(1).to({x:305.65,y:-189.5},0).wait(1).to({x:306.95,y:-196.95},0).wait(1).to({x:308.15,y:-204.2},0).wait(1).to({x:309.2,y:-211.25},0).wait(1).to({x:310.2,y:-218.1},0).wait(1).to({x:311.05,y:-224.75},0).wait(1).to({x:311.8,y:-231.2},0).wait(1).to({x:312.45,y:-237.45},0).wait(1).to({x:312.95,y:-243.55},0).wait(1).to({x:313.4,y:-249.45},0).wait(1).to({x:313.7,y:-255.2},0).wait(1).to({x:313.9,y:-260.75},0).wait(1).to({x:314,y:-266.15},0).wait(1).to({y:-271.4},0).wait(1).to({x:313.9,y:-276.45},0).wait(1).to({x:313.7,y:-281.35},0).wait(1).to({x:313.4,y:-286.05},0).wait(1).to({x:312.95,y:-290.65},0).wait(1).to({x:312.45,y:-295.05},0).wait(1).to({x:311.8,y:-299.3},0).wait(1).to({x:311.05,y:-303.35},0).wait(1).to({x:310.2,y:-307.3},0).wait(1).to({x:309.2,y:-311.05},0).wait(1).to({x:308.15,y:-314.65},0).wait(1).to({x:306.95,y:-318.1},0).wait(1).to({x:305.65,y:-321.4},0).wait(1).to({x:304.2,y:-324.5},0).wait(1).to({x:302.65,y:-327.5},0).wait(1).to({x:301,y:-330.25},0).wait(1).to({x:299.2,y:-332.9},0).wait(1).to({x:297.25,y:-335.35},0).wait(1).to({x:295.2,y:-337.65},0).wait(1).to({x:293,y:-339.75},0).wait(1).to({x:290.65,y:-341.7},0).wait(1).to({x:288.15,y:-343.45},0).wait(1).to({x:285.5,y:-345},0).wait(1).to({x:282.7,y:-346.4},0).wait(1).to({x:279.7,y:-347.55},0).wait(1).to({x:276.55,y:-348.55},0).wait(1).to({x:273.2,y:-349.3},0).wait(1).to({x:269.7,y:-349.85},0).wait(1).to({x:265.95,y:-350.15},0).wait(1).to({x:262,y:-350.25},0).wait(1).to({x:257.85,y:-350.05},0).wait(1).to({x:253.4,y:-349.6},0).wait(1).to({x:248.7,y:-348.85},0).wait(1).to({x:243.7,y:-347.8},0).wait(1).to({x:238.4,y:-346.45},0).wait(1).to({x:232.8,y:-344.7},0).wait(1).to({x:226.75,y:-342.6},0).wait(1).to({x:220.3,y:-340.05},0).wait(1).to({x:213.4,y:-337},0).wait(1).to({x:205.9,y:-333.45},0).wait(1).to({x:197.8,y:-329.25},0).wait(1).to({x:188.95,y:-324.3},0).wait(1).to({x:179.15,y:-318.5},0).wait(1).to({x:168.25,y:-311.65},0).wait(1).to({x:155.9,y:-303.35},0).wait(1).to({x:141.5,y:-293.15},0).wait(1).to({x:123.95,y:-280.05},0).wait(1).to({x:100.6,y:-261.6},0).wait(1).to({x:56.35,y:-224},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-511.1,728.7,1020.7);


(lib.biod_sea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {fishing_small:0,oil_big:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(lib.biod_sea_status);
	}
	this.frame_1 = function() {
		this.gotoAndStop(lib.biod_sea_status);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Ebene_1
	this.instance = new lib.port_1();
	this.instance.setTransform(17,-70);

	this.instance_1 = new lib.fischer_1();
	this.instance_1.setTransform(-416,-116);

	this.instance_2 = new lib.schiff_2();
	this.instance_2.setTransform(-305,-64);

	this.instance_3 = new lib.bohrinsel_0();
	this.instance_3.setTransform(-435,-206);

	this.instance_4 = new lib.port_2();
	this.instance_4.setTransform(-96,-113);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// Ebene_3
	this.instance_5 = new lib.oelfleck_ani();
	this.instance_5.setTransform(-345,-43.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-449,-206,865,351);


(lib.biod_energy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {atom:0,wind:1,solar:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(lib.biod_energy_status);
	}
	this.frame_1 = function() {
		this.gotoAndStop(lib.biod_energy_status);
	}
	this.frame_2 = function() {
		this.gotoAndStop(lib.biod_energy_status);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Ebene_1
	this.instance = new lib.energy_0();
	this.instance.setTransform(-261,-296);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

	// Ebene_3
	this.instance_1 = new lib.wolken_ani();
	this.instance_1.setTransform(79.45,-207.05);

	this.instance_2 = new lib.wind_kopf1_ani();
	this.instance_2.setTransform(30.75,-206.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));

	// Ebene_4
	this.instance_3 = new lib.wind_body1();
	this.instance_3.setTransform(-97,-229);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Ebene_6
	this.instance_4 = new lib.wind_kopf2_ani();
	this.instance_4.setTransform(-145,-133);

	this.instance_5 = new lib.light_tween();
	this.instance_5.setTransform(101.2,-87.15,1,1,0,0,180);

	this.instance_6 = new lib.light_tween();
	this.instance_6.setTransform(-127.7,-86.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_6},{t:this.instance_5}]},1).wait(1));

	// Ebene_5
	this.instance_7 = new lib.wind_body2();
	this.instance_7.setTransform(-225,-136);

	this.instance_8 = new lib.solar_tower();
	this.instance_8.setTransform(-171,-222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	// Ebene_8
	this.instance_9 = new lib.wind_kopf3_ani();
	this.instance_9.setTransform(89.5,-150);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Ebene_7
	this.instance_10 = new lib.wind_body3();
	this.instance_10.setTransform(51,-150);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-367.7,-413,815.7,669);


(lib.fly_tween = function(mode,startPosition,loop,reversed) {
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
	this.fly_ani = new lib.fly();
	this.fly_ani.name = "fly_ani";
	this.fly_ani.setTransform(-54.7,-102.15,1,1,0,0,0,26.2,55.4);

	this.timeline.addTween(cjs.Tween.get(this.fly_ani).wait(1).to({regX:25.6,regY:81.5,x:-60,y:-63.35},0).wait(1).to({x:-73.1,y:-52.95},0).wait(1).to({x:-92.15,y:-43.85},0).wait(1).to({x:-114.75,y:-35.6},0).wait(1).to({x:-139.05,y:-27.95},0).wait(1).to({x:-163.75,y:-20.8},0).wait(1).to({x:-188.1,y:-14.05},0).wait(1).to({x:-211.5,y:-7.6},0).wait(1).to({x:-233.6,y:-1.4},0).wait(1).to({x:-254.05,y:4.6},0).wait(1).to({x:-272.6,y:10.4},0).wait(1).to({x:-289.05,y:16.05},0).wait(1).to({x:-303.25,y:21.5},0).wait(1).to({x:-315,y:26.9},0).wait(1).to({x:-324.1,y:32.15},0).wait(1).to({x:-330.4,y:37.3},0).wait(1).to({x:-333.7,y:42.35},0).wait(1).to({x:-333.85,y:47.3},0).wait(1).to({x:-330.5,y:52.2},0).wait(1).to({x:-323.55,y:57.05},0).wait(1).to({x:-312.6,y:61.8},0).wait(1).to({x:-297.35,y:66.55},0).wait(1).to({x:-277.4,y:71.2},0).wait(1).to({x:-252.15,y:75.85},0).wait(1).to({x:-221,y:80.4},0).wait(1).to({x:-183,y:84.9},0).wait(1).to({x:-136.95,y:89.4},0).wait(1).to({x:-81.1,y:93.9},0).wait(1).to({x:-12.55,y:98.35},0).wait(1).to({x:73.35,y:102.75},0).wait(1).to({x:186.8,y:107.15},0).wait(1).to({x:356.95,y:111.55},0).wait(1).to({x:505.5,y:115.9},0).wait(1).to({x:525.65,y:120.25},0).wait(1).to({x:534.75,y:124.55},0).wait(1).to({x:537.95,y:128.9},0).wait(1).to({x:536.95,y:133.2},0).wait(1).to({x:532.75,y:137.5},0).wait(1).to({x:525.85,y:141.8},0).wait(1).to({x:516.5,y:146.1},0).wait(1).to({x:505,y:150.4},0).wait(1).to({x:491.45,y:154.7},0).wait(1).to({x:475.9,y:159},0).wait(1).to({x:458.45,y:163.25},0).wait(1).to({x:439.1,y:167.6},0).wait(1).to({x:417.85,y:171.9},0).wait(1).to({x:394.6,y:176.2},0).wait(1).to({x:369.3,y:180.55},0).wait(1).to({x:341.8,y:184.85},0).wait(1).to({x:311.9,y:189.2},0).wait(1).to({x:279.35,y:193.6},0).wait(1).to({x:243.65,y:198},0).wait(1).to({x:204.1,y:202.4},0).wait(1).to({x:159.6,y:206.8},0).wait(1).to({x:107.95,y:211.25},0).wait(1).to({x:44.5,y:215.75},0).wait(1).to({x:-47.15,y:220.25},0).wait(1).to({x:-55.3,y:224.8},0).wait(1).to({y:229.35},0).wait(1).to({y:233.95},0).wait(1).to({y:238.6},0).wait(1).to({y:243.3},0).wait(1).to({y:248},0).wait(1).to({y:252.8},0).wait(1).to({y:257.6},0).wait(1).to({y:262.5},0).wait(1).to({y:267.45},0).wait(1).to({y:272.45},0).wait(1).to({y:277.55},0).wait(1).to({y:282.7},0).wait(1).to({y:287.95},0).wait(1).to({y:293.25},0).wait(1).to({y:298.65},0).wait(1).to({y:304.2},0).wait(1).to({y:309.85},0).wait(1).to({y:315.6},0).wait(1).to({y:321.5},0).wait(1).to({y:327.6},0).wait(1).to({y:333.85},0).wait(1).to({y:340.25},0).wait(1).to({y:346.9},0).wait(1).to({y:353.8},0).wait(1).to({y:361},0).wait(1).to({y:368.55},0).wait(1).to({y:376.5},0).wait(1).to({y:384.95},0).wait(1).to({y:394},0).wait(1).to({x:-10.8,y:403.9},0).wait(1).to({x:67.5,y:414.9},0).wait(1).to({x:126.15,y:427.55},0).wait(1).to({x:175.1,y:443.2},0).wait(1).to({x:217.75,y:406.3},0).wait(1).to({x:255.95,y:377.3},0).wait(1).to({x:290.55,y:352.75},0).wait(1).to({x:322.15,y:331.2},0).wait(1).to({x:351.25,y:311.8},0).wait(1).to({x:377.95,y:294.1},0).wait(1).to({x:402.6,y:277.75},0).wait(1).to({x:425.15,y:262.5},0).wait(1).to({x:445.8,y:248.2},0).wait(1).to({x:464.5,y:234.7},0).wait(1).to({x:481.3,y:221.95},0).wait(1).to({x:496.2,y:209.8},0).wait(1).to({x:509.1,y:198.2},0).wait(1).to({x:519.85,y:187.1},0).wait(1).to({x:528.4,y:176.45},0).wait(1).to({x:534.5,y:166.25},0).wait(1).to({x:537.7,y:156.45},0).wait(1).to({x:537.4,y:146.95},0).wait(1).to({x:532.55,y:137.8},0).wait(1).to({x:520.65,y:128.95},0).wait(1).to({x:493.4,y:120.4},0).wait(1).to({x:289.75,y:112.15},0).wait(1).to({x:144.9,y:104.1},0).wait(1).to({x:42.3,y:96.3},0).wait(1).to({x:-37.05,y:88.75},0).wait(1).to({x:-100.95,y:81.45},0).wait(1).to({x:-153.3,y:74.3},0).wait(1).to({x:-196.5,y:67.35},0).wait(1).to({x:-232.1,y:60.6},0).wait(1).to({x:-261.2,y:54},0).wait(1).to({x:-284.6,y:47.6},0).wait(1).to({x:-302.95,y:41.35},0).wait(1).to({x:-316.7,y:35.25},0).wait(1).to({x:-326.3,y:29.35},0).wait(1).to({x:-332,y:23.55},0).wait(1).to({x:-334.15,y:17.9},0).wait(1).to({x:-332.95,y:12.4},0).wait(1).to({x:-328.65,y:7.05},0).wait(1).to({x:-321.35,y:1.8},0).wait(1).to({x:-311.35,y:-3.3},0).wait(1).to({x:-298.8,y:-8.3},0).wait(1).to({x:-283.85,y:-13.15},0).wait(1).to({x:-266.65,y:-17.9},0).wait(1).to({x:-247.45,y:-22.55},0).wait(1).to({x:-226.4,y:-27.05},0).wait(1).to({x:-203.85,y:-31.45},0).wait(1).to({x:-180.05,y:-35.75},0).wait(1).to({x:-155.5,y:-39.95},0).wait(1).to({x:-130.8,y:-44.05},0).wait(1).to({x:-106.95,y:-48},0).wait(1).to({x:-85.3,y:-51.9},0).wait(1).to({x:-67.95,y:-55.65},0).wait(1).to({x:-57.4,y:-59.35},0).wait(1).to({x:-55.8,y:-62.9},0).wait(1).to({x:-63.5,y:-66.4},0).wait(1).to({x:-78.9,y:-69.8},0).wait(1).to({x:-99.45,y:-73.05},0).wait(1).to({x:-122.7,y:-76.25},0).wait(1).to({x:-147.25,y:-79.35},0).wait(1).to({x:-171.95,y:-82.35},0).wait(1).to({x:-196.05,y:-85.25},0).wait(1).to({x:-219.05,y:-88.05},0).wait(1).to({x:-240.6,y:-90.8},0).wait(1).to({x:-260.45,y:-93.4},0).wait(1).to({x:-278.35,y:-95.95},0).wait(1).to({x:-294.05,y:-98.35},0).wait(1).to({x:-307.45,y:-100.7},0).wait(1).to({x:-318.35,y:-102.95},0).wait(1).to({x:-326.5,y:-105.1},0).wait(1).to({x:-331.85,y:-107.15},0).wait(1).to({x:-334.1,y:-109.1},0).wait(1).to({x:-333.1,y:-110.95},0).wait(1).to({x:-328.6,y:-112.65},0).wait(1).to({x:-320.35,y:-114.3},0).wait(1).to({x:-308.05,y:-115.85},0).wait(1).to({x:-291.25,y:-117.25},0).wait(1).to({x:-269.6,y:-118.6},0).wait(1).to({x:-242.45,y:-119.8},0).wait(1).to({x:-209.15,y:-120.85},0).wait(1).to({x:-168.6,y:-121.8},0).wait(1).to({x:-119.55,y:-122.65},0).wait(1).to({x:-59.8,y:-123.35},0).wait(1).to({x:13.8,y:-123.95},0).wait(1).to({x:107.35,y:-124.35},0).wait(1).to({x:234.4,y:-124.65},0).wait(1).to({x:445.4,y:-124.75},0).wait(1).to({x:514.15},0).wait(1).to({x:529.55,y:-124.5},0).wait(1).to({x:536.35,y:-124.1},0).wait(1).to({x:538,y:-123.5},0).wait(1).to({x:535.9,y:-122.7},0).wait(1).to({x:530.75,y:-121.65},0).wait(1).to({x:523,y:-120.35},0).wait(1).to({x:512.9,y:-118.7},0).wait(1).to({x:500.7,y:-116.75},0).wait(1).to({x:486.5,y:-114.45},0).wait(1).to({x:470.3,y:-111.7},0).wait(1).to({x:452.25,y:-108.4},0).wait(1).to({x:432.25,y:-104.5},0).wait(1).to({x:410.3,y:-99.75},0).wait(1).to({x:386.4,y:-93.9},0).wait(1).to({x:360.4,y:-86.4},0).wait(1).to({x:332.15,y:-76.05},0).wait(1).to({x:301.4},0).wait(1).to({x:267.8},0).wait(1).to({x:230.9},0).wait(1).to({x:189.9},0).wait(1).to({x:143.3},0).wait(1).to({x:88.5},0).wait(1).to({x:18.85},0).wait(1).to({x:-55.3},0).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-413.6,-206.2,1031.1,731);


(lib.fly_scale = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// Ebene_1
	this.instance = new lib.fly();
	this.instance.setTransform(-0.05,-42.85,1,1,0,0,0,26.2,55.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:25.6,regY:81.5,scaleX:3.0207,scaleY:3.0207,x:-1.9,y:36.05},0).wait(1).to({scaleX:5.0415,scaleY:5.0415,x:-3.25,y:88.8},0).wait(1).to({scaleX:7.0622,scaleY:7.0622,x:-4.55,y:141.5},0).wait(1).to({scaleX:9.0829,scaleY:9.0829,x:-5.9,y:194.25},0).wait(1).to({scaleX:11.1037,scaleY:11.1037,x:-7.2,y:247},0).wait(1).to({scaleX:13.1244,scaleY:13.1244,x:-8.5,y:299.75},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1051.2,-769.9,2085.4,2139.9);


(lib.card_death = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,draw:1,ready:28};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(1));

	// back_card
	this.card_front = new lib.card_back();
	this.card_front.name = "card_front";
	this.card_front.setTransform(229.1,229.1,1,1,0,0,0,229.1,229.1);

	this.timeline.addTween(cjs.Tween.get(this.card_front).wait(1).to({regX:229.2,regY:229.2,x:229.2,y:229.2},0).wait(19).to({scaleX:0.779,skewY:-21.1562,x:229.15,y:229.15},0).wait(1).to({scaleX:0.5581,skewY:-42.3123},0).wait(1).to({scaleX:0.3371,skewY:-63.4685,x:229.05},0).to({_off:true},1).wait(6));

	// background_card
	this.card_middle = new lib.card_back();
	this.card_middle.name = "card_middle";
	this.card_middle.setTransform(229.1,229.1,1,1,0,0,0,229.1,229.1);

	this.timeline.addTween(cjs.Tween.get(this.card_middle).to({_off:true},23).wait(6));

	// content_card
	this.content = new lib.card_content();
	this.content.name = "content";
	this.content.setTransform(227.15,229.1,1,1,0,0,0,226.3,229.3);

	this.timeline.addTween(cjs.Tween.get(this.content).wait(1).to({regX:229.1,regY:229.2,x:229.95,y:229},0).wait(22).to({scaleX:0.3871,skewY:66.9766,x:229.9,y:227.7},0).wait(1).to({scaleX:0.5097,skewY:53.5813,x:230.3,y:227.85},0).wait(1).to({scaleX:0.6323,skewY:40.186,x:230.8},0).wait(1).to({scaleX:0.7548,skewY:26.7906,x:231.3,y:227.65},0).wait(1).to({scaleX:0.8774,skewY:13.3953,x:231.8,y:227.25},0).wait(1).to({scaleX:1,skewY:0,x:232.25,y:226.7},0).wait(1));

	// background_card
	this.card_background = new lib.card_back();
	this.card_background.name = "card_background";
	this.card_background.setTransform(229.1,229.1,1,1,0,0,0,229.1,229.1);

	this.timeline.addTween(cjs.Tween.get(this.card_background).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-86.6,461.4,628.8000000000001);


(lib.stage_what = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330000").s().p("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BWQgBAJgMAFQgNAEgZAAQgbAAgjACIhGAAgAWsDNQghgCgTgFIgYgNQgNgFgSgMQgKhbgDhbIgBhLIABhrQAFgDAZgBQAagBAdABQAdABATADQAFAxABAyIAAAIIACBbQACAzAKAvIAogGIAAgBQAAhGgFhIIgCgoQgEg2AAg3IBDABIBAABQADA0ABA3IAAARQAAA/gCBAQgDA/gFA5QgCAKgSAHQgUAIgcADQgRACgiABIgXAAIgtgBgAQPDKQgTghgLggQgKghgEglQgCglAAgwQgBglADgiQAAgMACgLQAGgtAbgrQAygEA3gCQA4gCAxAEQAYAeAIAhQAIAaACAaIAAASQABAjgBAgQgBAygGAxQgEAygKAzQgwAJg6ABIgTAAQgvAAgygEgAR5BlQANAAAPgEQgEg0AAg1QAAgqgFgnIgFgWIgRABIgaABIgXABIABATIACAqQACAiAFAnQAEAnAKAkIAPAAIANAAgApnDKQgVghgJggQgLghgEglQgDglAAgwQgBglADgiIADgXQAFgtAbgrQAzgEA3gCQA4gCAxAEQAXAeAJAhQAIAaACAaIAAASQABAjgBAgQgCAygGAxQgDAygLAzQgvAJg7ABIgTAAQgvAAgwgEgAn+BlQANAAAPgEQgFg0AAg1QAAgqgFgnIgDgWIgTABIgaABIgWABIABATIACAqQACAiAEAnQAFAnAJAkIAQAAIANAAgAOEDOIg2AAIgygBQgBgvABg2QAAg3gEgzQgEgsAAgrIAAgMIABhiQALgCAegBIA9ABIAwABQACAygBAzIAAAKQgDAuACAuQACAkAAAhIgCBCQgBAhAAAjIgmAAgEAhJAApIgFg2IAPgLIAWgPIADgCIAUgLQAGgJADgRQADgPAAgbIgVACIgYADIgBAaIAAAEQgBANgFANIgvABQgeABgagDIgBgdQgCgcABgXQACgiAKgXQAogEAugBQAwgCAtACQAwABAnAGQALAQADATQADAUgBAVIgCAnQgCASgPAOQgNAQgSANQgQAPgMAOIgIArIgFAaIgBATIg2gBIgaABIgYABQgHgggBgag");
	this.shape.setTransform(357.7125,304.3375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(358.9667,229);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("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");
	this.shape_2.setTransform(359.0947,180.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// button_back
	this.button_back = new lib.button_back();
	this.button_back.name = "button_back";
	this.button_back.setTransform(91.25,1127.65,1,1,0,0,0,49.6,49.6);

	this.timeline.addTween(cjs.Tween.get(this.button_back).wait(1));

	// Ebene_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#255B28").s().p("Eg4PAMUIAA4oMBwfAAAIAAYog");
	this.shape_3.setTransform(360.025,1127.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// content
	this.zeile = new lib.zeile();
	this.zeile.name = "zeile";
	this.zeile.setTransform(44.85,373.25);

	this.timeline.addTween(cjs.Tween.get(this.zeile).wait(1));

	// background
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#97D29A").s().p("Eg4OA4PMBwdhweMAAABweg");
	this.shape_4.setTransform(360,688.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#87E38C").s().p("Eg4OAxyIgBAAIAAh+MBwfhwfIAAKmIgBAAIAAGTMhwdBweg");
	this.shape_5.setTransform(360,634.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9CD79F").s().p("Eg4PAfnMBpEhpDIHaAAIAAUXIABAAIAAODMhwfBwfgEg4PhJcMA0FAAAMg0FA0Eg");
	this.shape_6.setTransform(360,470.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DBFFDD").s().p("Eg4PBkAIAAgMIABAAIAArZMBweAAAIAALlgEg4Pgv6MA0Fg0FMA0/AAAMhpEBpEg");
	this.shape_7.setTransform(359.975,640);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stage_what, new cjs.Rectangle(-0.7,0,722.7,1280), null);


(lib.stage_menu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {menu:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pause
	this.footer = new cjs.Text("REIGNABILITY v.0.01   BY ANTON KRAPP / KRAPP-ART", "20px 'OCRAEXT'", "#255B28");
	this.footer.name = "footer";
	this.footer.textAlign = "center";
	this.footer.lineHeight = 23;
	this.footer.lineWidth = 607;
	this.footer.parent = this;
	this.footer.setTransform(360.35,1239.6);

	this.button_menu = new lib.button_menu();
	this.button_menu.name = "button_menu";
	this.button_menu.setTransform(361.1,832.45,1,1,0,0,0,195.2,64.3);

	this.button_newgame = new lib.button_newgame();
	this.button_newgame.name = "button_newgame";
	this.button_newgame.setTransform(359.1,643.9,1,1,0,0,0,195.2,64.3);

	this.logo_pause = new lib.logo_pause();
	this.logo_pause.name = "logo_pause";
	this.logo_pause.setTransform(356.6,250.65,1.0186,1.0186);

	this.button_cont = new lib.button_cont();
	this.button_cont.name = "button_cont";
	this.button_cont.setTransform(359.1,452.95,1,1,0,0,0,195.2,64.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_cont},{t:this.logo_pause},{t:this.button_newgame},{t:this.button_menu},{t:this.footer}]}).wait(1));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(359.15,180.6,1,1,0,0,0,254.6,155.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// buttons
	this.button_option = new lib.button_option();
	this.button_option.name = "button_option";
	this.button_option.setTransform(358.8,834,1,1,0,0,0,195.2,64.3);

	this.button_what = new lib.button_what();
	this.button_what.name = "button_what";
	this.button_what.setTransform(358.8,644.5,1,1,0,0,0,195.2,64.3);

	this.button_play = new lib.button_play();
	this.button_play.name = "button_play";
	this.button_play.setTransform(358.8,454.2,1,1,0,0,0,195.2,64.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_play},{t:this.button_what},{t:this.button_option}]}).wait(1));

	// Ebene_2
	this.fly = new lib.fly_tween();
	this.fly.name = "fly";
	this.fly.setTransform(204.8,472.65);

	this.timeline.addTween(cjs.Tween.get(this.fly).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#97D29A").s().p("Eg4OA4PMBwdhweMAAABweg");
	this.shape.setTransform(360,688.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87E38C").s().p("Eg4OAxyIgBAAIAAh+MBwfhwfIAAKmIgBAAIAAGTMhwdBweg");
	this.shape_1.setTransform(360,634.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9CD79F").s().p("Eg4PAfnMBpEhpDIHaAAIAAUXIABAAIAAODMhwfBwfgEg4PhJcMA0FAAAMg0FA0Eg");
	this.shape_2.setTransform(360,470.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#36803A").s().p("EA4PAMUMhweAAAIAA4oMBweAAAIABAAIAAYog");
	this.shape_3.setTransform(360.025,1127.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DBFFDD").s().p("Eg4PBkAIAAgMIABAAIAArZMBweAAAIAALlgEg4Pgv6MA0Fg0FMA0/AAAMhpEBpEg");
	this.shape_4.setTransform(359.975,640);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stage_menu, new cjs.Rectangle(0,0,720,1280), null);


(lib.stage_lose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pillars
	this.end_dollar = new lib.end_dollar();
	this.end_dollar.name = "end_dollar";
	this.end_dollar.setTransform(573.9,118.5);

	this.end_natur = new lib.end_natur();
	this.end_natur.name = "end_natur";
	this.end_natur.setTransform(367,117.15);

	this.end_social = new lib.end_social();
	this.end_social.name = "end_social";
	this.end_social.setTransform(158,119.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.end_social},{t:this.end_natur},{t:this.end_dollar}]}).wait(1));

	// deck
	this.card_death = new lib.card_death();
	this.card_death.name = "card_death";
	this.card_death.setTransform(377.55,673.65,0.8228,0.8228,0,0,0,229.1,229.1);

	this.timeline.addTween(cjs.Tween.get(this.card_death).wait(1));

	// text
	this.lose_name = new cjs.Text("Der Ruhestand wartet auf Sie!", "35px 'OCRAEXT'", "#FFFFFF");
	this.lose_name.name = "lose_name";
	this.lose_name.textAlign = "center";
	this.lose_name.lineHeight = 38;
	this.lose_name.lineWidth = 716;
	this.lose_name.parent = this;
	this.lose_name.setTransform(360.1,993.4);

	this.lose_text = new cjs.Text("Die Finanzbehörde hat Ihre Papiere gefunden. Sie haben Millionen von Steuergeldern veruntreut. Sie fliehen ins Exil!", "43px 'OCRAEXT'", "#FFFFFF");
	this.lose_text.name = "lose_text";
	this.lose_text.textAlign = "center";
	this.lose_text.lineHeight = 47;
	this.lose_text.lineWidth = 704;
	this.lose_text.parent = this;
	this.lose_text.setTransform(356.95,219.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lose_text},{t:this.lose_name}]}).wait(1));

	// pillars_back
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg4SAAwIAAhfMBwlAAAIAABfg");
	this.shape.setTransform(360.35,192.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("Eg4SAOoIAA9PMBweAAAIAAHzIAHAAIAAVcg");
	this.shape_1.setTransform(360.35,93.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// buffs
	this.button_back = new lib.button_back();
	this.button_back.name = "button_back";
	this.button_back.setTransform(90.7,1127.25,1,1,0,0,0,49.6,49.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AS9ERIAAAAIkjAAIAAAAIhqAAQgOAAgJgJQgJgJAAgOIAAnhQAAgOAJgJQAJgKAOAAIHjAAQANAAAKAKQAJAJAAAOIAAHhQAAAOgJAJQgKAJgNAAgAIPERIAAAAIkjAAIAAAAIhqAAQgNAAgKgJQgJgJAAgOIAAnhQAAgOAJgJQAKgKANAAIHjAAQAOAAAJAKQAJAJAAAOIAAHhQAAAOgJAJQgJAJgOAAgAi3ERIAAAAIkkAAIAAAAIhqAAQgNAAgJgJQgJgJAAgOIAAnhQAAgOAJgJQAJgKANAAIHjAAQAOAAAJAKQAKAJAAAOIAAHhQAAAOgKAJQgJAJgOAAgAuFERIAAAAIkjAAIAAAAIhqAAQgNAAgKgJQgJgJAAgOIAAnhQAAgOAJgJQAKgKANAAIHjAAQANAAAKAKQAJAJAAAOIAAHhQAAAOgJAJQgKAJgNAAg");
	this.shape_2.setTransform(549.05,1128.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.button_back}]}).wait(1));

	// schadow_decl
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("A56dUQhbAAhAhBQhAg/AAhbMAAAg0CQAAg9AcgwQAOgZAWgVIAAgBQAegeAkgQQgOAlAAApMAAAA0CQAABcBBA/QBABBBbAAMA0CAAAQAwAAApgSQgQAqgjAiQgiAjgqARQglANgqAAg");
	this.shape_3.setTransform(352.375,698.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8B8B8B").s().p("A7zfLQhbAAhAhAQhBhAAAhbMAAAg0CQAAhbBBhBIAAAAQAigiAqgQQgcAwAAA9MAAAA0CQAABbBAA/QBABBBcAAMA0CAAAQAqAAAkgNQgOAYgWAWQhABAhbAAgA4NbvQhcAAhAhBQhAg/AAhcMAAAg0CQAAgpAOglQAQgqAigiIAAgBQBAhABcAAMA0CAAAQBbAABABAQBABAAABbMAAAA0CQAABchAA/QgfAfgjAQQgpASgwAAg");
	this.shape_4.setTransform(353.225,696.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// leiste
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Eg4PAG5IAAtxMBwfAAAIAANxg");
	this.shape_5.setTransform(359.975,1017.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// background
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("Eg4PBkAIAAgMIABAAIAArZMBwdAAAIAALlgEg4OAw4IgBAAIAAh+MBwfhwfIAAKnIgBAAIAAGSMhwdBwegEg4Pgv6MA0Fg0FMA0/AAAMhpEBpEg");
	this.shape_6.setTransform(360,640);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C1C1C").s().p("Eg4OBR5MBwdhweMAAABwegEg4PAXLMBpEhpDIHaAAIAAUXIABAAIAAODMhwfBwfgEg4PhR4MA0FAAAMg0FA0Eg");
	this.shape_7.setTransform(360,524.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("EA4PAMUMhweAAAIAA4oMBweAAAIABAAIAAYog");
	this.shape_8.setTransform(360.025,1127.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stage_lose, new cjs.Rectangle(0,0,720.7,1280), null);


(lib.stage_choose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// lock
	this.lock_joe = new lib.player_lock();
	this.lock_joe.name = "lock_joe";
	this.lock_joe.setTransform(518.6,811.95,1,1,0,0,0,119.6,126);

	this.lock_activist = new lib.player_lock();
	this.lock_activist.name = "lock_activist";
	this.lock_activist.setTransform(201.2,811.95,1,1,0,0,0,119.6,126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lock_activist},{t:this.lock_joe}]}).wait(1));

	// button
	this.button_back = new lib.button_back();
	this.button_back.name = "button_back";
	this.button_back.setTransform(91.25,1127.65,1,1,0,0,0,49.6,49.6);

	this.timeline.addTween(cjs.Tween.get(this.button_back).wait(1));

	// president
	this.player_joe = new lib.player_joe();
	this.player_joe.name = "player_joe";
	this.player_joe.setTransform(524.15,806.25,1,1,0,0,0,105.8,104);

	this.player_activist = new lib.player_activist();
	this.player_activist.name = "player_activist";
	this.player_activist.setTransform(204.25,805,1,1,0,0,0,105.8,104);

	this.player_president = new lib.player_president();
	this.player_president.name = "player_president";
	this.player_president.setTransform(369.4,518.65,1,1,0,0,0,105.8,104);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.player_president},{t:this.player_activist},{t:this.player_joe}]}).wait(1));

	// logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330000").s().p("A5TDQIgqABQgHgxAAg2QABg1gHgyIgqAAQACAugCAiIgCA+IABA7QgkABgbgBIg6AAQAAgugFg2QgFg0gDg4IgBhFIAAgQIgBg1QgBgggDgUQAKgCAXgBIAxgBIAuABIADAgIADAjQADATAHARIAdgFQAJgCABgDQAGgVgCgZQgBgZgEgWIAsgCQAfgDAfAAQAegBARADQgFAfgCAlIgEArIgDAfIgGBDIAABBIAABHIgBA+QgNACgVAAIgqgBgA1yDOQACggAAgjIgDhFQgCghAAgeQgRgwgVgwIgEgLQgXg0gkgwQAWgCAbAAIA5gBIAwABIATA7QAGAcAOAaIACADIACgDQAJgQAGgSQAHgVAKgVQAHgVAMgQQAegBAeABIA6ABQgNAfgTAmIgUArIgRAjIghBFQgCAfAAAhIgBBDQAAAggCAcIgvABIg6ABQgeAAgUgCgEgiTADPQgcgBgaABQgFg7gLhGQgMhEgPhHIgGgcIgahxIAkAAIA1AAQAaABAMADQACASAEASQAHAUAEAaIAFAbIACAlQAEgJAEgUIACgIIAJgjIAGgtQAEgVABgLQAIACASgBIAggBIAQgBQAGATAFAYQAFAaAIAdQABAHAEAIQAFAXAJAUQAHgTAEgYIABgGIAIg4QACgbAFgYIA3gBQAfgCAWADQgLA4gIA5IgEAfIgSCJQgHBFgIA4IgsAAQgZgBgTABQgVgngRgoQgOgpgPgvIgNA6IgSA8IgOA1IgwgBgEAhpADOIgEgBQgYgBgLgCQAAgQgCgRQgEgQgCgTQATgEAZgCIADAAQAYgCAZAAIAuADIACAXQACANgBAOQAAANgEAKQgVAEgaABIgvgBgAcLDPQgiAAgZgFQgKgFgFgOQgHgPgBgUQgBgUABgVQACgUAEgPQADgPADgEQAOAAATACIAlAFIAGAeQACAQAKAOIApAAQAFgMgBgMIAAgYQgbgOgmgSQglgRgmgXQgMghgDgmIgBgSQgBgcAEgbQAEgjAKgaQA9gDA/ABQA+ABA0AEQAMASAFAbQAFAbACAdIABAMIAGAoQgDAFgRACQgQACgVAAQgUAAgQgDQgQgCgDgGQABgRgCgQIAAgFIgDgdIg1AIIgBAVIAAAJQABAQACAOIA0ASIA8AVQAeALAXAMQABAvgCAqIgGBWQgBAJgMAFQgMAEgaAAQgbAAgjACIhHAAgAKBDPQgWgBgNgDQgCgJgBgPQAAgPgCgRQAAgSgCgQQgEgRgFgJIgbAAQgCANAAASQAAASACASIABAfIgBASIgmACQgaABgbgBQgagBgOgCQAGhlgChlQgBgtgCgsIgGhtQBAgFA9gBQA+gBA1ABQAPANAOAWQANAWAGAYQAHASACAQIAAAKQABAbgCAZQgBAZgFAaIgnASIAXAHQAOAGAKAGQAKAGAAAIIgCAWQgBARgDATQgBAUgDATQgDATgEAPIgjABIgqAAgAIoh1IADAcIADAgQACAcAAAeIAwgGIgBg7IgBgZQgDgSgFgQgAC4DPIgygBIgCh/IgBiKIAAgeQAAg4ACg3QA0gEA6ABIBuABQgCAYACAWQABAYgDAYQgYgDgbABIgxABIABATIAAABIABAYIAugBIAvAAQAIARAAASQABARgBAUQgRgBgRABIgkAAQgCAaABAcIACA4QAXgCAZABQAXABAYgCIABAVIgBAbIgBAZIgCAQQgMACghABIhJABIhLAAgAh3DPQgiAAgYgFQgKgFgGgOQgGgPgBgUQgBgUABgVQACgUADgPQADgPAEgEQAOAAASACIAlAFIAHAeQACAQAJAOIApAAQAHgMgCgMQgBgLABgNQgagOgngSQgmgRgmgXQgMghgDgmIgBgSQgBgcAEgbQAFgjAJgaQA+gDA+ABQA+ABA0AEQAMASAEAbQAGAbADAdIABAMIAEAoQgDAFgQACQgQACgWAAQgTAAgQgDQgQgCgDgGQABgRgBgQIAAgFIgEgdIg0AIIgBAVIAAAJIADAeQAVAIAfAKIA6AVQAeALAXAMQABAvgCAqIgFBWQgBAJgNAFQgMAEgZAAQgaAAgkACIhHAAgAuFDPQgjAAgYgFQgKgFgHgOQgFgPgBgUQgBgUABgVIAEgjQADgPAFgEQAOAAASACIAmAFIAFAeQACAQAJAOIAqAAQAGgMgBgMQgBgLABgNQgbgOgmgSQglgRgogXQgLghgDgmIAAgSQgBgcADgbQAFgjAIgaQA+gDA/ABQA/ABAzAEQANASAFAbQAEAbADAdIABAMIAFAoQgDAFgQACQgRACgUAAQgVAAgRgDQgOgCgDgGQABgRgCgQIAAgFIgFgdIgzAIIgBAVIAAAJIADAeQAVAIAfAKIA8AVQAdALAXAMQABAvgCAqIgGBWQgBAJgMAFQgNAEgZAAQgbAAgjACIhGAAgAWsDNQghgCgTgFIgYgNQgNgFgSgMQgKhbgDhbIgBhLIABhrQAFgDAZgBQAagBAdABQAdABATADQAFAxABAyIAAAIIACBbQACAzAKAvIAogGIAAgBQAAhGgFhIIgCgoQgEg2AAg3IBDABIBAABQADA0ABA3IAAARQAAA/gCBAQgDA/gFA5QgCAKgSAHQgUAIgcADQgRACgiABIgXAAIgtgBgAQPDKQgTghgLggQgKghgEglQgCglAAgwQgBglADgiQAAgMACgLQAGgtAbgrQAygEA3gCQA4gCAxAEQAYAeAIAhQAIAaACAaIAAASQABAjgBAgQgBAygGAxQgEAygKAzQgwAJg6ABIgTAAQgvAAgygEgAR5BlQANAAAPgEQgEg0AAg1QAAgqgFgnIgFgWIgRABIgaABIgXABIABATIACAqQACAiAFAnQAEAnAKAkIAPAAIANAAgApnDKQgVghgJggQgLghgEglQgDglAAgwQgBglADgiIADgXQAFgtAbgrQAzgEA3gCQA4gCAxAEQAXAeAJAhQAIAaACAaIAAASQABAjgBAgQgCAygGAxQgDAygLAzQgvAJg7ABIgTAAQgvAAgwgEgAn+BlQANAAAPgEQgFg0AAg1QAAgqgFgnIgDgWIgTABIgaABIgWABIABATIACAqQACAiAEAnQAFAnAJAkIAQAAIANAAgAOEDOIg2AAIgygBQgBgvABg2QAAg3gEgzQgEgsAAgrIAAgMIABhiQALgCAegBIA9ABIAwABQACAygBAzIAAAKQgDAuACAuQACAkAAAhIgCBCQgBAhAAAjIgmAAgEAhJAApIgFg2IAPgLIAWgPIADgCIAUgLQAGgJADgRQADgPAAgbIgVACIgYADIgBAaIAAAEQgBANgFANIgvABQgeABgagDIgBgdQgCgcABgXQACgiAKgXQAogEAugBQAwgCAtACQAwABAnAGQALAQADATQADAUgBAVIgCAnQgCASgPAOQgNAQgSANQgQAPgMAOIgIArIgFAaIgBATIg2gBIgaABIgYABQgHgggBgag");
	this.shape.setTransform(357.7125,304.3375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(358.9667,229);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006600").s().p("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");
	this.shape_2.setTransform(359.0947,180.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#97D29A").s().p("Eg4OA4PMBwdhweMAAABweg");
	this.shape_3.setTransform(360,688.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#87E38C").s().p("Eg4OAxyIgBAAIAAh+MBwfhwfIAAKmIgBAAIAAGTMhwdBweg");
	this.shape_4.setTransform(360,634.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9CD79F").s().p("Eg4PAfnMBpEhpDIHaAAIAAUXIABAAIAAODMhwfBwfgEg4PhJcMA0FAAAMg0FA0Eg");
	this.shape_5.setTransform(360,470.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#36803A").s().p("EA4PAMUMhweAAAIAA4oMBweAAAIABAAIAAYog");
	this.shape_6.setTransform(360.025,1127.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DBFFDD").s().p("Eg4PBkAIAAgMIABAAIAArZMBweAAAIAALlgEg4Pgv6MA0Fg0FMA0/AAAMhpEBpEg");
	this.shape_7.setTransform(359.975,640);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stage_choose, new cjs.Rectangle(0,0,720,1280), null);


(lib.pillar_social = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjcHwIA/jDIA0ieIBqiLIgNgbIhMjCIBMjFICvhRICyBRIBMDFIhMDCIgNAaIB1CMIAyCeIA9DDgAorHwIA9i8IAVhAIBchdIgagbIg1iKIA1iLIB9g8IBfAeIBMDEIhZBqIg9C9Ig8C8g");
	mask.setTransform(55.575,49.625);

	// Ebene_3
	this.balken = new lib.pillar_balken();
	this.balken.name = "balken";
	this.balken.setTransform(56.25,99.3,1,1,0,0,0,59.2,102);

	var maskedShapeInstanceList = [this.balken];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.balken).wait(1));

	// Ebene_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003300").s().p("AjcHwIA/jDIA0ieIBqiLIgNgbIhMjCIBMjFICvhRICyBRIBMDFIhMDCIgNAaIB1CMIAyCeIA9DDgAorHwIA9i8IAVhAIBchdIgagbIg1iKIA1iLIB9g8IBfAeIBMDEIhZBqIg9C9Ig8C8g");
	this.shape.setTransform(55.575,49.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pillar_social, new cjs.Rectangle(0,0,111.2,99.3), null);


(lib.pillar_natur = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhnILIAKiPIhpjDIh7AmIibhCIhBibIBBicIB/g+IgShUIBBidICdhBICaBBIAfAhICIgxICdBBIBBCdIgMBKIBaA4IA1B7IAMAhIhBCbIiaBBIhmgXIiPCKIgJAKIASCPgAAxCwIgHADIAQBUIBqhJIgigsgAiXCOIBDBgIALAKIAHhRIhHgng");
	mask.setTransform(54.15,52.275);

	// Ebene_2
	this.balken = new lib.pillar_balken();
	this.balken.name = "balken";
	this.balken.setTransform(56.25,104.6,1,1.0231,0,0,0,59.2,102);

	var maskedShapeInstanceList = [this.balken];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.balken).wait(1));

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003300").s().p("AhnILIAKiPIhpjDIh7AmIibhCIhBibIBBicIB/g+IgShUIBBidICdhBICaBBIAfAhICIgxICdBBIBBCdIgMBKIBaA4IA1B7IAMAhIhBCbIiaBBIhmgXIiPCKIgJAKIASCPgAAxCwIgHADIAQBUIBqhJIgigsgAiXCOIBDBgIALAKIAHhRIhHgng");
	this.shape.setTransform(54.15,52.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pillar_natur, new cjs.Rectangle(0,0,108.3,104.6), null);


(lib.pillar_dollar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgFH7IAQhkIgjACIgFBgIibAAIALhmIgigCIiigxIAaibICEAxIA0AJIATi6IgHgCIiZhEIhCiCIBhiwICdgyIACiUICaAAIgYCEIAjgCIAGiDICGAAIgMCOICNAnIgcCdIh6guIgDAAIgQC5ICLA0IBMCXIhYCbIiVA1IgDB9gAgRELIAtgCIAHieIgsgKgACJDAIgBA3IADgBIAeg9Igbg2gAAFjlIgHCnIAsAIIAHiwgAiHjUIgjA6IAXAzIAXAJIAKhiIAAgZg");
	mask.setTransform(37.025,50.675);

	// Ebene_2
	this.balken = new lib.pillar_balken();
	this.balken.name = "balken";
	this.balken.setTransform(34.5,101.45,1,0.9944,0,0,0,59.2,102);

	var maskedShapeInstanceList = [this.balken];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.balken).wait(1));

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003300").s().p("AgFH7IAQhkIgjACIgFBgIibAAIALhmIgigCIiigxIAaibICEAxIA0AJIATi6IgHgCIiZhEIhCiCIBhiwICdgyIACiUICaAAIgYCEIAjgCIAGiDICGAAIgMCOICNAnIgcCdIh6guIgDAAIgQC5ICLA0IBMCXIhYCbIiVA1IgDB9gAgRELIAtgCIAHieIgsgKgACJDAIgBA3IADgBIAeg9Igbg2gAAFjlIgHCnIAsAIIAHiwgAiHjUIgjA6IAXAzIAXAJIAKhiIAAgZg");
	this.shape.setTransform(37.025,50.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pillar_dollar, new cjs.Rectangle(0,0,74.1,101.4), null);


(lib.shuffle_ani = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Ebene_1
	this.card_back = new lib.card_back();
	this.card_back.name = "card_back";
	this.card_back.setTransform(225.5,-757.85,2.1556,2.3439,0,-156.88,180,227.6,228.9);

	this.timeline.addTween(cjs.Tween.get(this.card_back).to({regX:227.5,regY:229,scaleX:1,scaleY:1,skewX:0,skewY:0,x:229.05,y:229.25},10).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-513.5,-1252.8,1473.4,1711.6);


(lib.card_deck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"default":0,"draw":1,"ready":28,move_right:29,move_right_back:32,move_left:38,move_left_back:42,discard_left:47,discard_right:56};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.card_front.gotoAndStop(lib.player); 
		this.card_middle.gotoAndStop(lib.player); 
		this.card_background.gotoAndStop(lib.player);
	}
	this.frame_22 = function() {
		this.card_front.gotoAndStop(lib.player); 
		this.card_middle.gotoAndStop(lib.player); 
		this.card_background.gotoAndStop(lib.player);
	}
	this.frame_28 = function() {
		this.stop();
		this.card_front.gotoAndStop(lib.player); 
		this.card_middle.gotoAndStop(lib.player); 
		this.card_background.gotoAndStop(lib.player);
	}
	this.frame_32 = function() {
		this.stop();
	}
	this.frame_37 = function() {
		this.gotoAndStop("ready");
	}
	this.frame_42 = function() {
		this.stop();
	}
	this.frame_46 = function() {
		this.gotoAndStop("ready");
	}
	this.frame_55 = function() {
		this.gotoAndPlay("draw");
	}
	this.frame_63 = function() {
		this.gotoAndPlay("draw");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(22).call(this.frame_22).wait(6).call(this.frame_28).wait(4).call(this.frame_32).wait(5).call(this.frame_37).wait(5).call(this.frame_42).wait(4).call(this.frame_46).wait(9).call(this.frame_55).wait(8).call(this.frame_63).wait(1));

	// back_card
	this.card_front = new lib.card_back();
	this.card_front.name = "card_front";
	this.card_front.setTransform(229.1,229.1,1,1,0,0,0,229.1,229.1);

	this.timeline.addTween(cjs.Tween.get(this.card_front).wait(1).to({regX:229.2,regY:229.2,x:229.2,y:229.2},0).wait(19).to({scaleX:0.779,skewY:-21.1562,x:229.15,y:229.15},0).wait(1).to({scaleX:0.5581,skewY:-42.3123},0).wait(1).to({scaleX:0.3371,skewY:-63.4685,x:229.05},0).to({_off:true},1).wait(41));

	// background_card
	this.card_middle = new lib.card_back();
	this.card_middle.name = "card_middle";
	this.card_middle.setTransform(229.1,229.1,1,1,0,0,0,229.1,229.1);

	this.timeline.addTween(cjs.Tween.get(this.card_middle).to({_off:true},23).wait(41));

	// content_text
	this.content_text = new cjs.Text("bla bla bla blla bla", "50px 'OCRAEXT'");
	this.content_text.name = "content_text";
	this.content_text.textAlign = "center";
	this.content_text.lineHeight = 54;
	this.content_text.lineWidth = 399;
	this.content_text.parent = this;
	this.content_text.setTransform(223.6,298.65);

	this.timeline.addTween(cjs.Tween.get(this.content_text).wait(29).to({x:313.3509,y:314.7718},0).wait(1).to({x:374.2685,y:353.7181},0).wait(1).to({x:414.7951,y:415.5065},0).wait(1).to({x:443.3,y:500.25},0).wait(1).to({x:423.4667,y:432.9075},0).wait(1).to({x:395.8836,y:379.1129},0).wait(1).to({x:356.2627,y:338.813},0).wait(1).to({x:300.2903,y:311.9876},0).wait(1).to({x:223.6,y:298.65},0).wait(1).to({x:136.5399,y:304.4156},0).wait(1).to({x:71.0074,y:326.4913},0).wait(1).to({x:24.2223,y:364.8689},0).wait(1).to({x:-6.5472,y:419.5804},0).wait(1).to({x:-24,y:490.7},0).wait(1).to({x:2.6228,y:405.8111},0).wait(1).to({x:49.2088,y:345.5497},0).wait(1).to({x:121.0624,y:309.826},0).wait(1).to({x:223.6,y:298.65},0).to({_off:true},1).wait(17));

	// content_card
	this.content = new lib.card_content();
	this.content.name = "content";
	this.content.setTransform(227.15,229.1,1,1,0,0,0,226.3,229.3);

	this.timeline.addTween(cjs.Tween.get(this.content).wait(1).to({regX:229.1,regY:229.2,x:229.95,y:229},0).wait(22).to({scaleX:0.3871,skewY:66.9766,x:229.9,y:227.7},0).wait(1).to({scaleX:0.5097,skewY:53.5813,x:230.3,y:227.85},0).wait(1).to({scaleX:0.6323,skewY:40.186,x:230.8},0).wait(1).to({scaleX:0.7548,skewY:26.7906,x:231.3,y:227.65},0).wait(1).to({scaleX:0.8774,skewY:13.3953,x:231.8,y:227.25},0).wait(1).to({scaleX:1,skewY:0,x:232.25,y:226.7},0).wait(1).to({scaleY:1.0017,skewX:3.9332,skewY:2.2763,x:343.3,y:247.35},0).wait(1).to({scaleY:1.0034,skewX:7.8664,skewY:4.5526,x:433.8,y:289.5},0).wait(1).to({scaleY:1.0051,skewX:11.7996,skewY:6.8289,x:503.55,y:353.15},0).wait(1).to({scaleY:1.0067,skewX:15.7327,skewY:9.1053,x:552.85,y:438.4},0).wait(1).to({scaleY:1.0054,skewX:12.5862,skewY:7.2842,x:520.85,y:372.3},0).wait(1).to({scaleY:1.0041,skewX:9.4396,skewY:5.4632,x:472.8,y:318.05},0).wait(1).to({scaleY:1.0027,skewX:6.2931,skewY:3.6421,x:408.75,y:275.75},0).wait(1).to({scaleY:1.0014,skewX:3.1465,skewY:1.8211,x:328.6,y:245.3},0).wait(1).to({scaleY:1,skewX:0,skewY:0,x:232.25,y:226.7},0).wait(1).to({scaleY:1.001,skewX:-2.2038,skewY:-1.0805,x:145.2,y:240.5},0).wait(1).to({scaleY:1.0019,skewX:-4.4076,skewY:-2.1609,x:69,y:266.8},0).wait(1).to({scaleY:1.0029,skewX:-6.6114,skewY:-3.2414,x:3.4,y:305.65},0).wait(1).to({scaleY:1.0039,skewX:-8.8152,skewY:-4.3219,x:-51.45,y:356.9},0).wait(1).to({scaleY:1.0048,skewX:-11.019,skewY:-5.4024,x:-95.6,y:420.8},0).wait(1).to({scaleY:1.0036,skewX:-8.2642,skewY:-4.0518,x:-36.5,y:340.75},0).wait(1).to({scaleY:1.0024,skewX:-5.5095,skewY:-2.7012,x:37.75,y:281.75},0).wait(1).to({scaleY:1.0012,skewX:-2.7547,skewY:-1.3506,x:127.35,y:243.7},0).wait(1).to({scaleY:1,skewX:0,skewY:0,x:232.25,y:226.7},0).wait(1).to({regX:222.8,regY:229.4,scaleY:1.0048,skewX:-11.0161,skewY:-5.4015,x:-98.35,y:421.25},0).wait(1).to({regX:229.1,regY:229.2,scaleX:1.1307,scaleY:1.1361,skewX:14.6975,skewY:20.3118,x:37.75,y:459.85},0).wait(1).to({scaleX:1.2614,scaleY:1.2675,skewX:40.4119,skewY:46.0262,x:92.55,y:498.8},0).wait(1).to({scaleX:1.3921,scaleY:1.3988,skewX:66.1263,skewY:71.7406,x:72.65,y:536.45},0).wait(1).to({scaleX:1.5228,scaleY:1.5302,skewX:91.8407,skewY:97.455,x:-21.6,y:572.1},0).wait(1).to({scaleX:1.6535,scaleY:1.6615,skewX:117.5551,skewY:123.1694,x:-189.55,y:605.15},0).wait(1).to({scaleX:1.7842,scaleY:1.7928,skewX:143.2695,skewY:148.8838,x:-430.4,y:635.35},0).wait(1).to({scaleX:1.9149,scaleY:1.9242,skewX:168.9839,skewY:174.5983,x:-743.25,y:663.1},0).to({_off:true},1).wait(1).to({_off:false,regX:222.9,regY:227.7,scaleX:1,scaleY:1.0067,skewX:15.731,skewY:9.104,x:550.15,y:438.05},0).wait(1).to({regX:229.1,regY:229.2,scaleX:1.1014,scaleY:1.1088,skewX:43.9428,skewY:37.3164,x:380.25,y:491.75},0).wait(1).to({scaleX:1.2028,scaleY:1.2109,skewX:72.1544,skewY:65.5277,x:307.65,y:543},0).wait(1).to({scaleX:1.3043,scaleY:1.313,skewX:100.3659,skewY:93.7391,x:338.55,y:593.6},0).wait(1).to({scaleX:1.4057,scaleY:1.4151,skewX:128.5774,skewY:121.9505,x:473.9,y:643.1},0).wait(1).to({scaleX:1.5071,scaleY:1.5172,skewX:156.789,skewY:150.1619,x:714.75,y:691.8},0).wait(1).to({scaleX:1.6086,scaleY:1.6194,skewX:185.0005,skewY:178.3733,x:1062.4,y:740.25},0).to({_off:true},1).wait(1));

	// background_card
	this.card_background = new lib.card_back();
	this.card_background.name = "card_background";
	this.card_background.setTransform(229.1,229.1,1,1,0,0,0,229.1,229.1);

	this.timeline.addTween(cjs.Tween.get(this.card_background).wait(64));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1255.4,-86.6,2714.8,1254.8);


(lib.pollution_pic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pollution_farb
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(12,12,12,0.549)","rgba(255,255,255,0.078)"],[0.18,0.765],0,-629.3,0,629.3).s().p("EmuEBkAMAAAjH/MNcJAAAMAAADH/g");
	this.shape.setTransform(2752.525,640);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// layer2
	this.instance = new lib.car_1();
	this.instance.setTransform(2697,273,0.8042,0.8042);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// layer1
	this.biod_social = new lib.biod_social();
	this.biod_social.name = "biod_social";
	this.biod_social.setTransform(1794,923);

	this.biod_energy = new lib.biod_energy();
	this.biod_energy.name = "biod_energy";
	this.biod_energy.setTransform(2393.9,976.6);

	this.biod_sea = new lib.biod_sea();
	this.biod_sea.name = "biod_sea";
	this.biod_sea.setTransform(577,610);

	this.instance_1 = new lib.feld_1();
	this.instance_1.setTransform(2536,924);

	this.instance_2 = new lib.barn_1();
	this.instance_2.setTransform(3443,424);

	this.instance_3 = new lib.berg_0();
	this.instance_3.setTransform(4097,110);

	this.instance_4 = new lib.wald_1();
	this.instance_4.setTransform(4455,551);

	this.instance_5 = new lib.city_2();
	this.instance_5.setTransform(2025,122,0.8211,0.8211);

	this.instance_6 = new lib.bridge_2();
	this.instance_6.setTransform(2320,198,0.7208,0.7208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.biod_sea},{t:this.biod_energy},{t:this.biod_social}]}).wait(1));

	// layer0
	this.instance_7 = new lib.trassen_0();
	this.instance_7.setTransform(2320,460);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// pollution_pic
	this.instance_8 = new lib.pollution();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// himmel
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#244CD3","#FFFFFF"],[0,0.31],0,-629.3,0,629.3).s().p("EmuEBkAMAAAjH/MNcJAAAMAAADH/g");
	this.shape_1.setTransform(2752.525,640);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pollution_pic, new cjs.Rectangle(0,0,5505,1280), null);


(lib.stage_panorama = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// panorama
	this.pollution_pic = new lib.pollution_pic();
	this.pollution_pic.name = "pollution_pic";

	this.timeline.addTween(cjs.Tween.get(this.pollution_pic).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stage_panorama, new cjs.Rectangle(0,0,5505,1280), null);


(lib.stage_game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Ebene_2
	this.dollar_dot = new lib.pillar_dot();
	this.dollar_dot.name = "dollar_dot";
	this.dollar_dot.setTransform(578.2,36.65);

	this.natur_dot = new lib.pillar_dot();
	this.natur_dot.name = "natur_dot";
	this.natur_dot.setTransform(368.35,36.65);

	this.social_dot = new lib.pillar_dot();
	this.social_dot.name = "social_dot";
	this.social_dot.setTransform(157.3,36.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.social_dot},{t:this.natur_dot},{t:this.dollar_dot}]}).wait(1));

	// pillars
	this.pillar_dollar = new lib.pillar_dollar();
	this.pillar_dollar.name = "pillar_dollar";
	this.pillar_dollar.setTransform(573.9,118.45,1,1,0,0,0,37,50.6);

	this.pillar_natur = new lib.pillar_natur();
	this.pillar_natur.name = "pillar_natur";
	this.pillar_natur.setTransform(366.95,116.85,1,1,0,0,0,54.1,52.2);

	this.pillar_social = new lib.pillar_social();
	this.pillar_social.name = "pillar_social";
	this.pillar_social.setTransform(158.05,119.05,1,1,0,0,0,55.6,49.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36803A").s().p("Eg4SAOoIAA9PMBweAAAIAAHzIAHAAIAAVcgEAhRALxICJAAIACh8ICWg2IBYibIhMiWIiLg1IAQi5IACAAIB7AuIAcidIiNgmIALiOIiGAAIgFCDIgjABIAYiEIibAAIgDCVIicAyIhhCvIBCCBICZBGIAGABIgSC7Ig1gKIiEgwIgZCbICiAwIAhADIgKBmICbAAIAFhhIAkgBgACYLxIgSiPIAJgJICPiKIBnAWICahBIBBiaIgNghIg0h9Ihag3IALhJIhAieIiehBIiIAyIgegiIiahAIieBAIhACeIASBTIh/A+IhBCdIBBCbICbBCIB7gmIBoDDIgKCOIC9AAgA/ziiIhMDEIBMDCIAOAdIhrCKIg0CfIhADCIMJAAIg8jCIgyifIh1iMIAMgbIBNjCIhNjEIixhRgEgl+ABiIg1CLIA1CLIAZAbIhbBdIgVBBIg9C7IDqAAIA8i7IA8i+IBahqIhMjEIhfgfgEAhOAFXIAtALIgHCdIguADgEAjhAG3IAEg+IAcA3IgeA8IgDABgABsGaIAHgEIBRgdIAjArIhrBJgAgSHVIhChgIANgPIBHAnIgGBRgEAhVAC4IAIioIAsAAIgICwgAfECOIgXgyIAjg6IAVgGIAAAZIgKBig");
	this.shape.setTransform(360.35,93.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C543D").s().p("Eg4SAAwIAAhfMBwlAAAIAABfg");
	this.shape_1.setTransform(360.35,192.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.pillar_social},{t:this.pillar_natur},{t:this.pillar_dollar}]}).wait(1));

	// deck
	this.deck = new lib.card_deck();
	this.deck.name = "deck";
	this.deck.setTransform(377.55,673.65,0.8228,0.8228,0,0,0,229.1,229.1);

	this.timeline.addTween(cjs.Tween.get(this.deck).wait(1));

	// text
	this.card_name = new cjs.Text("bla bla bal bll\nalfbdfbdfbd", "35px 'OCRAEXT'", "#FFFFFF");
	this.card_name.name = "card_name";
	this.card_name.textAlign = "center";
	this.card_name.lineHeight = 38;
	this.card_name.lineWidth = 597;
	this.card_name.parent = this;
	this.card_name.setTransform(365.75,979.55);

	this.card_text = new cjs.Text("bla bla bal bllal bla bla bla bl blblb bllb bla bllb lal bla lba", "50px 'OCRAEXT'");
	this.card_text.name = "card_text";
	this.card_text.textAlign = "center";
	this.card_text.lineHeight = 54;
	this.card_text.lineWidth = 704;
	this.card_text.parent = this;
	this.card_text.setTransform(356.95,209.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.card_text},{t:this.card_name}]}).wait(1));

	// buffs
	this.back = new lib.button_back();
	this.back.name = "back";
	this.back.setTransform(90.7,1127.25,1,1,0,0,0,49.6,49.6);

	this.buff_4 = new lib.buff();
	this.buff_4.name = "buff_4";
	this.buff_4.setTransform(654.8,1128.8);

	this.buff_3 = new lib.buff();
	this.buff_3.name = "buff_3";
	this.buff_3.setTransform(586.2,1128.8);

	this.buff_2 = new lib.buff();
	this.buff_2.name = "buff_2";
	this.buff_2.setTransform(515.05,1128.8);

	this.buff_1 = new lib.buff();
	this.buff_1.name = "buff_1";
	this.buff_1.setTransform(443.3,1128.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.buff_1},{t:this.buff_2},{t:this.buff_3},{t:this.buff_4},{t:this.back}]}).wait(1));

	// schadow_decl
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("A56dUQhbAAhAhBQhAg/AAhbMAAAg0CQAAg9AcgwQAOgZAWgVIAAgBQAegeAkgQQgOAlAAApMAAAA0CQAABcBBA/QBABBBbAAMA0CAAAQAwAAApgSQgQAqgjAiQgiAjgqARQglANgqAAg");
	this.shape_2.setTransform(352.375,698.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8B8B8B").s().p("A7zfLQhbAAhAhAQhBhAAAhbMAAAg0CQAAhbBBhBIAAAAQAigiAqgQQgcAwAAA9MAAAA0CQAABbBAA/QBABBBcAAMA0CAAAQAqAAAkgNQgOAYgWAWQhABAhbAAgA4NbvQhcAAhAhBQhAg/AAhcMAAAg0CQAAgpAOglQAQgqAigiIAAgBQBAhABcAAMA0CAAAQBbAABABAQBABAAABbMAAAA0CQAABchAA/QgfAfgjAQQgpASgwAAg");
	this.shape_3.setTransform(353.225,696.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Ebene_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C441D").s().p("Eg4PAG5IAAtxMBwfAAAIAANxg");
	this.shape_4.setTransform(359.975,1017.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#97D29A").s().p("Eg4OA4PMBwdhweMAAABweg");
	this.shape_5.setTransform(360,688.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#87E38C").s().p("Eg4OAxyIgBAAIAAh+MBwfhwfIAAKmIgBAAIAAGTMhwdBweg");
	this.shape_6.setTransform(360,634.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9CD79F").s().p("Eg4PAfnMBpEhpDIHaAAIAAUXIABAAIAAODMhwfBwfgEg4PhJcMA0FAAAMg0FA0Eg");
	this.shape_7.setTransform(360,470.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#36803A").s().p("EA4PAMUMhweAAAIAA4oMBweAAAIABAAIAAYog");
	this.shape_8.setTransform(360.025,1127.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DBFFDD").s().p("Eg4PBkAIAAgMIABAAIAArZMBweAAAIAALlgEg4Pgv6MA0Fg0FMA0/AAAMhpEBpEg");
	this.shape_9.setTransform(359.975,640);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stage_game, new cjs.Rectangle(0,0,720.7,1280), null);


// stage content:
(lib.Animate = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Eg5zhljMBznAAAMAAADLHMhznAAAg");
	this.shape.setTransform(360,640);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("Eg5zBlkMAAAjLHMBznAAAMAAADLHg");
	this.shape_1.setTransform(360,640);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'B22B52CE08C5C54387DEBB6D67E45DE7',
	width: 720,
	height: 1280,
	fps: 24,
	color: "#006600",
	opacity: 1.00,
	manifest: [
		{src:"images/barn_1.png?1631127856113", id:"barn_1"},
		{src:"images/berg_0.png?1631127856113", id:"berg_0"},
		{src:"images/bohrinsel_0.png?1631127856113", id:"bohrinsel_0"},
		{src:"images/bridge_2.png?1631127856113", id:"bridge_2"},
		{src:"images/car_1.png?1631127856113", id:"car_1"},
		{src:"images/city_2.png?1631127856113", id:"city_2"},
		{src:"images/energy_0.png?1631127856113", id:"energy_0"},
		{src:"images/energy_0_1.png?1631127856113", id:"energy_0_1"},
		{src:"images/feld_1.png?1631127856113", id:"feld_1"},
		{src:"images/fischer_1.png?1631127856113", id:"fischer_1"},
		{src:"images/hill_1.png?1631127856113", id:"hill_1"},
		{src:"images/krankenhaus_1.png?1631127856113", id:"krankenhaus_1"},
		{src:"images/pollution.png?1631127856113", id:"pollution"},
		{src:"images/port_1.png?1631127856113", id:"port_1"},
		{src:"images/port_2.png?1631127856113", id:"port_2"},
		{src:"images/schiff_2.png?1631127856113", id:"schiff_2"},
		{src:"images/schule_1.png?1631127856113", id:"schule_1"},
		{src:"images/solar_tower.png?1631127856113", id:"solar_tower"},
		{src:"images/trassen_0.png?1631127856113", id:"trassen_0"},
		{src:"images/wald_1.png?1631127856113", id:"wald_1"},
		{src:"images/wind_body1.png?1631127856113", id:"wind_body1"},
		{src:"images/wind_body2.png?1631127856113", id:"wind_body2"},
		{src:"images/wind_body3.png?1631127856113", id:"wind_body3"},
		{src:"images/wind_kopf1.png?1631127856113", id:"wind_kopf1"},
		{src:"images/wind_kopf2.png?1631127856113", id:"wind_kopf2"},
		{src:"images/wind_kopf3.png?1631127856113", id:"wind_kopf3"},
		{src:"images/ölfleck.png?1631127856113", id:"ölfleck"}
	],
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;