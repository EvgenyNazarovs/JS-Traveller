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

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
