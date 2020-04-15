const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let result = this.journeys.map(journey => journey.startLocation);
  return result;

};

Traveller.prototype.getJourneyEndLocations = function () {
  let result = this.journeys.map(journey => journey.endLocation);
  return result;

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let result = this.journeys.filter(journey => journey.transport === transport);
  return result;

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let result = this.journeys.filter(journey => journey.distance >= minDistance);
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let result = this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0)
  return result;

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let result = []
  this.journeys.forEach((journey) => {
    if (!result.includes(journey.transport)) {
      result.push(journey.transport)
    }
  })
  return result
}

module.exports = Traveller;
