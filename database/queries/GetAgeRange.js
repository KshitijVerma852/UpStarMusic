const Artist = require("../models/artist");

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
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
					$max: "$age"
				},
				min: {
					$min: "$age"
				}
			}
		}
	]).then(data => ({
		min: data[0].min,
		max: data[0].max
	}));
