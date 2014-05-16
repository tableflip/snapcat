Snaps = new Meteor.Collection("snaps")

Router.map(function() {
  this.route('home', {path: '/'})
  this.route('view', {
    path: '/view/:to',
    onRun: function () {
      Meteor.subscribe("snaps", this.params.to)
    }
  })
  this.route('snap', {
    path: '/snap/:id',
    onRun: function () {
      Meteor.subscribe("snap-by-id", this.params.id)
    },
    data: function () {
      return Snaps.findOne(this.params.id)
    },
    onAfterAction: function () {
      var snap = Snaps.findOne(this.params.id)
      if (snap) {
        Meteor.setTimeout(function () {
          Snaps.remove(snap._id)
        }, snap.ttl * 1000)
      }
    }
  })
})