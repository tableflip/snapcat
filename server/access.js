Meteor.startup(function () {
  Snaps.allow({
    insert: function (userId, doc) {
      return true
    }
  })
})
