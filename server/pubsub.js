Meteor.publish("snaps", function (to) {
  return Snaps.find({to: to})
})