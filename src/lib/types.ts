export interface DroneResponse {
	report: {
		deviceInformation: {
			listenRange: number;
			deviceStarted: string;
			uptimeSeconds: number;
			updateIntervalMs: number;
			attr_deviceId: string;
		};
		capture: {
			drone: Drone[];
			attr_snapshotTimestamp: string;
		};
	};
}

export interface PilotResponse {
	pilotId: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
	createdDt: string;
	email: string;
}

export interface PilotDetails {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
}

export interface Point {
	x: number;
	y: number;
}

export interface Drone {
	serialNumber: string;
	model: string;
	manufacturer: string;
	mac: string;
	ipv4: string;
	ipv6: string;
	firmware: number;
	positionY: number;
	positionX: number;
	altitude: number;
}

export interface DronesAndPilots {
	drones: DroneResponse;
	pilots?: PilotDetails[];
	closest?: Drone;
}
