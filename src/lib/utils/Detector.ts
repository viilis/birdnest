import type { Drone, Point } from '../types';

/**
 * Calculator function that works on circle areas.
 * @param originPoint Origin of the area in coordinates x and y
 * @param dronePoint Location of the drone coordinates x and y
 * @param divider Can be used to turn result of the calculation into other units. Defaults to 1000 which turns result into meters
 * @param radius Radius in meaningfull unit. Defaults to 100 meters
 * @returns True if drone is in area, false if not
 */
const detectorCalc = (
	originPoint: Point,
	dronePoint: Point,
	divider = 1000,
	radius = 100,
): boolean => {
	// Pythagoras with divider to get units into meters
	if (
		!(
			Math.sqrt(
				Math.pow(originPoint.x - dronePoint.x, 2) + Math.pow(originPoint.y - dronePoint.y, 2),
			) /
				divider <
			radius
		)
	) {
		return false;
	}
	return true;
};

/**
 *
 * @param drones Drones we want to detect
 * @param originPoint Origin of the area we don't want drones to enter
 * @returns Array of drones which are inside of the given area
 */
export const droneDetector = (drones: Drone[], originPoint: Point): Drone[] => {
	return drones.filter((drone) => {
		detectorCalc(originPoint, { x: drone.positionX, y: drone.positionY });
	});
};
