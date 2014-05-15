Snaps = new Meteor.Collection("snaps")

Router.map(function() {
  this.route('home', {path: '/'})
  this.route('view', {
    path: '/view/:to',
    onRun: function () {
      Meteor.subscribe("snaps", this.params.to)
    }
  })
})