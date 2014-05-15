Template.view.snaps = function () {
  return Snaps.find({}, {sort: [["createdAt", "desc"]]})
}