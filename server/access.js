Meteor.startup(function () {
  Snaps.allow({
    insert: function (userId, doc) {
      return true
    },
    remove: function (userId, doc) {
      console.log("Removing", doc._id)
      return true
    }
  })
})
