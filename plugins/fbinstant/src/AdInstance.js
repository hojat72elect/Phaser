
/**
 * @typedef {object} AdInstance
 *
 * @property {any} instance - Represents an instance of an ad.
 * @property {string} placementID - The Audience Network placement ID of this ad instance.
 * @property {boolean} shown - Has this ad already been shown in-game?
 * @property {boolean} video - Is this a video ad?
 */

var AdInstance = function (placementID, instance, video) {
    return {
        instance: instance,
        placementID: placementID,
        shown: false,
        video: video
    };
};

module.exports = AdInstance;
