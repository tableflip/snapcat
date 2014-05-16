Meteor.publish("snaps", function (to) {
  return Snaps.find({to: to})
})

Meteor.publish("snap-by-id", function (id) {
  return Snaps.find({_id: id})
})