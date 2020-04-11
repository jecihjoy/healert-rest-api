'use strict';

const Wolf = require('../models/wolves');
const screening = require('../services/screening');

module.exports = [
	{
		method: 'GET',
		path: '/api/wolves',
		handler: async (request, h) => {
			try {
				const wolves = await Wolf.find().exec();
				return h.response(wolves);
			} catch (error) {
				return h.response(error).code(500);
			}
		}
	},
	{
		method: ['PUT', 'POST'],
		path: '/api/wolves/{name}',
		handler: async (request, h) => {
			try {
				const wolf = new Wolf({
					name: request.params.name
				});

				const result = await wolf.save();
            	return h.response(result)
			} catch (error) {
				return h.response(error).code(500);
			}

		}
	},
	{
		method: ['POST'],
		path: '/api/post-screening',
		handler: async (request, h) => {
			try {
				console.log("hello world");
				console.log(request.payload);

				const result = await screening.savePersonScreening(request.payload);
            	return h.response(result);
			} catch (error) {
				return h.response(error).code(500);
			}

		}
	}
];
