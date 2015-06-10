/* Mmodal */
/* author: denyzhirkov@yandex.ru @dolphin4ik */

;var Mmodal = function(p){

	var _cfg = {};
	var _hover = document.getElementById('mmodal');
	if(_hover==undefined){
		_hover = document.createElement('div');
		_hover.setAttribute('style','position:fixed;top:0;left:0;width:100%;height:100%;background:#222;z-index:10000;opacity:0.75;');
		_hover.setAttribute('id','mmodal');
		document.body.appendChild(_hover);
	}
	var _modal = document.createElement('div');
	var _title = document.createElement('p');
	var _body = document.createElement('div');
	var _buttons = document.createElement('div');

	_modal.show = function(){
		this.style.display = 'block';
		_hover.style.display = 'block';
	}
	_modal.hide = function(){
		this.style.display = 'none';
		_hover.style.display = 'none';
	}

	_cfg.title = (p!=undefined)? p.title || 'Mmodal!' : 'Mmodal!' ;
	_cfg.body = (p!=undefined)? p.body || false : false;
	_cfg.buttons = (p!=undefined)? p.buttons || false : false;
	_cfg.class = (p!=undefined)? p.class || 'mmodal' : 'mmodal';

	_title.innerHTML = _cfg.title;
	_title.setAttribute('class','mmodal-title');
	_modal.appendChild(_title);

	if(_cfg.body){
		_body.innerHTML = _cfg.body;
		_body.setAttribute('class','mmodal-body');
		_modal.appendChild(_body);
	}

	_buttons.setAttribute('class','mmodal-buttons');
	if(!_cfg.buttons){
		var _btn = document.createElement('div');
		_btn.innerHTML = 'Да';
		_btn.setAttribute('class','mmodal-button');
		_btn.onclick = function(){_modal.hide()};
		_buttons.appendChild(_btn);
	}else{
		_cfg.buttons.reverse();
		_modal.buttons = [];
		for(var i = _cfg.buttons.length - 1; i >= 0; i--) {
			var a = document.createElement('div');
			a.setAttribute('class','mmodal-button');
			a.handler = _cfg.buttons[i].handler;
			a.onclick = function(){
				this.handler(_modal);
			};
			a.style.width = 100/_cfg.buttons.length+'%';
			a.innerHTML = _cfg.buttons[i].value;
			_modal.buttons.unshift(a);
			_buttons.appendChild(_modal.buttons[0]);
		};
	}
	_modal.appendChild(_buttons);

	_modal.setAttribute('class',_cfg.class);

	_hover.appendChild(_modal);


	return _modal;

}