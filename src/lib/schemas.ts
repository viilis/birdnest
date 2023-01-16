import Joi from 'joi';

export const droneSchema = Joi.object({
	serialNumber: Joi.string(),
	model: Joi.string(),
	manufacturer: Joi.string(),
	mac: Joi.string(),
	ipv4: Joi.string(),
	ipv6: Joi.string(),
	firmware: Joi.string(),
	positionY: Joi.number(),
	positionX: Joi.number(),
	altitude: Joi.number(),
});

export const droneReportSchema = Joi.object({
	report: Joi.object({
		deviceInformation: Joi.object({
			listenRange: Joi.number(),
			deviceStarted: Joi.string(),
			uptimeSeconds: Joi.number(),
			updateIntervalMs: Joi.number(),
			attr_deviceId: Joi.string(),
		}),
		capture: Joi.object({
			drone: Joi.array().items(droneSchema),
			attr_snapshotTimestamp: Joi.string(),
		}),
	}),
});

export const serialNumberSchema = Joi.string();

export const pilotSchema = Joi.object({
	pilotId: Joi.string(),
	firstName: Joi.string(),
	lastName: Joi.string(),
	phoneNumber: Joi.string(),
	createdDt: Joi.string(),
	email: Joi.string().email(),
});
