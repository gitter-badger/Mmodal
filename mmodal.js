/* Mmodal */
/* author: denyzhirkov@yandex.ru @dolphin4ik */

;var Mmodal = function(p){

	var _cfg = {};
	var _hover = document.getElementById('Mmodal');
	if(_hover==undefined){
		_hover = document.createElement('div');
		_hover.setAttribute('style','position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000;display:none;');
		_hover.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAALSURBVAgdY1DaBwABBQDhT76AKwAAAABJRU5ErkJggg==")';
		_hover.style.background = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAALSURBVAgdY1DaBwABBQDhT76AKwAAAABJRU5ErkJggg==")';
		_hover.setAttribute('id','Mmodal');
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
	_cfg.class = 'Mmodal '+((p!=undefined)? p.class || '' : '');

	_title.innerHTML = _cfg.title;
	_title.setAttribute('class','Mmodal-title');
	_modal.appendChild(_title);

	if(_cfg.body){
		_body.innerHTML = _cfg.body;
		_body.setAttribute('class','Mmodal-body');
		_modal.appendChild(_body);
	}

	_buttons.setAttribute('class','Mmodal-buttons');
	if(!_cfg.buttons){
		var _btn = document.createElement('div');
		_btn.innerHTML = 'Да';
		_btn.setAttribute('class','Mmodal-button');
		_btn.onclick = function(){_modal.hide()};
		_buttons.appendChild(_btn);
	}else{
		_cfg.buttons.reverse();
		_modal.buttons = [];
		for(var i = _cfg.buttons.length - 1; i >= 0; i--) {
			var __a = document.createElement('div');
			__a.setAttribute('class','Mmodal-button '+(_cfg.buttons[i].class||''));
			__a.handler = _cfg.buttons[i].handler;
			__a.onclick = function(){
				this.handler(_modal);
			};
			__a.style.width = 100/_cfg.buttons.length+'%';
			__a.innerHTML = _cfg.buttons[i].value;
			_modal.buttons.unshift(__a);
			_buttons.appendChild(_modal.buttons[0]);
		};
	}
	_modal.appendChild(_buttons);

	_modal.setAttribute('class',_cfg.class);

	_hover.appendChild(_modal);


	return _modal;

}