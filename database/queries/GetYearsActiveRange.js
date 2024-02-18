const Artist = require("../models/artist");

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = () =>
	Artist.aggregate([
		{
			$match: {}
		},
		{
			$group: {
				_id: null,
				max: {
					$max: "$yearsActive"
				},
				min: {
					$min: "$yearsActive"
				}
			}
		}
	]).then(data => ({
		min: data[0].min,
		max: data[0].max
	}));
