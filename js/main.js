var loadBtn = document.getElementById('loadBtn')

var feed = new Instafeed({
    get: 'user',
    userId: '34554451',
    limit: 20,
    resolution: 'standard_resolution',
    accessToken: '34554451.1677ed0.cfab4b35a3574749a2ec82d7e5fdc261',
    sortBy: 'most-recent',
    clientId: '624480682e654f5f93e8e563a0b3c37a',
    template: '<div class="col-xs-4"><a href="{{image}}" title="{{caption}}"target="_blank"><img src="{{image}}" class="img-responsive instagram-img"/></a><p>{{caption}}</p></div>',
    after: function() {
        if(!this.hasNext()) {
            loadBtn.setAttribute('disabled', 'disabled');
        }
    }
});

loadBtn.addEventListener('click', function() {
  feed.next();
});

feed.run();

$('.gallery').magnificPopup({
    type: 'image',
	delegate: 'a',
	gallery: {
		enabled: true
	}
});