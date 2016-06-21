/**
 * the events of touch 
 * @type {Object}
 */
var touchevent = {
	"touchstart": function(e){
		e.preventDefault();

		this.end_.X = this.start_.X = e.touches[0].screenX;
		this.end_.Y = this.start_.Y = e.touches[0].screenY;
	},
	"touchmoveVertical": function(e){
		e.preventDefault();

		this.end_.X = e.touches[0].screenX;
		this.end_.Y = e.touches[0].screenY;
	},
	"touchmove": function(e){
		e.preventDefault();

		this.end_.X = e.touches[0].screenX;
		this.end_.Y = e.touches[0].screenY;

		if (this.start_.X < this.end_.X) {
			//do something when start moving right
		}else if(this.start_.X > this.end_.X){
			//do something when start moving left
		}
	},
	"touchendVertical": function(e){
		e.preventDefault();

		var y = this.end_.Y - this.start_.Y;

		if(y>10) {
			//do something when ends of moveup 
		}else if(y<-10){
			//do something when ends of movedown
		}else {
			//do something for tapping
		}
	},
	"touchendHorizontal": function(e){
		e.preventDefault();

		var y = this.end_.X - this.start_.X;
		if (y>10) {  			
			//do something when ends of moveright 
		} else if(y<-10){
			//do something when ends of moveleft 
		}else {
			//do something for tapping
		}
	}
};

/**
 * init your touch events
 * @param  {[type]} target [You Know what!]
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function initTouch(target,direction){		
		target.start_={},target.end_={};
    	target.addEventListener('touchstart',touchevent.touchstart, false);
    	target.addEventListener('touchmove',touchevent.touchmove, false);
    	target.addEventListener('touchend',touchevent["touchend"+direction], false);
};
