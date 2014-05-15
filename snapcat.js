if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "TAKE A SELFIE!!!??!";
  };

  Template.hello

  Template.hello.events({
    'click input': function (e) {
      var video = $("video")[0]
      var canvas = $('canvas')[0]
      var context = canvas.getContext('2d')
      context.drawImage(video, 0, 0, 160, 120)
      Session.set('selfie', canvas.toDataURL())
      console.log(canvas.toDataURL())
    }
  });

  Template.hello.rendered = function () {
    navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia
    window.URL = window.URL || window.mozURL || window.webkitURL

    var video = $("video")[0]

    navigator.getUserMedia({'video': true}, function (stream) {
      video.src = window.opera ? stream : window.URL.createObjectURL(stream)
      video.play()
    }, function(er) {
      console.error('Video capture error', er)
    })
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
