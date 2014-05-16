Template.home.greeting = function () {
  return "TAKE A SELFIE!!!??!";
};

Template.home.snap = function () {
  return Snaps.find()
}

Template.home.events({
  'click input': function (e) {
    var video = $("video")
    var canvas = $('canvas')[0]
    var context = canvas.getContext('2d')
    context.drawImage(video[0], 0, 0, video.width(), video.height())

    if (!Meteor.user()) {
      return alert("PLEASE LOGIN TO SNAPCAT to send snap")
    }

    console.log(canvas.toDataURL())
    Snaps.insert({
      selfieSrc: canvas.toDataURL(),
      to: $("#controls [type=email]").val(),
      from: Meteor.user().emails[0].address,
      ttl: 5,
      createdAt: Date.now()
    })
  }
});

Template.home.rendered = function () {
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