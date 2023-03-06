import type { DroneResponse, DronesAndPilots } from '$lib/types';
import { droneDetector } from '$lib/utils/Detector';

export const load = async ({ fetch }: any) => {
	const fetchDrones = async () => {
		const res = await fetch('/api/drones');
		const droneData: DroneResponse = await res.json();
		return droneData;
	};

	const fetchPilot = async (serialNumber: string) => {
		const res = await fetch(`/api/pilots/?=${serialNumber}`);
		const pilotData = await res.json();
		return pilotData;
	};

	// report of all drones
	const report = await fetchDrones();

	// all drone specific data
	const drones = report.report.capture.drone.length ? report.report.capture.drone : [];

	// all violations compared to origin of NDZ
	const violations = droneDetector(drones, { x: 250000, y: 250000 });

	// pilot info of violator
	const violator = violations.map(async (drone) => {
		const pilot = await fetchPilot(drone.serialNumber);
		return pilot;
	});

	const data: DronesAndPilots = {
		drones: report,
		pilots: violator,
	};
};
