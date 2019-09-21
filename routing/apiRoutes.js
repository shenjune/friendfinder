var friendsData = require("../app/data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    }

    var userData = req.body;
    var userScores = userData.scores;

    var totalDifference = 0;

    for (var i = 0; i < friendsData.length; i++) {
        totalDifference = 0;

        for (var j = 0; j < userScores.length; j++) {
            totalDifference += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(userScores[j]));
        }

        if (totalDifference <= bestMatch.friendDifference) {

            bestMatch.friendDifference = totalDifference;
            bestMatch.name = friendsData[i].name;
            bestMatch.photo = friendsData[i].photo;
        }
    }

    friendsData.push(userData);

    res.json(bestMatch);
  });
};