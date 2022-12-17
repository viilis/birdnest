import type { Point } from "../types"

export const detector = (originPoint: Point, dronePoint: Point, divider: number, radius: number): boolean => {
    // Pythagoras with divider to get units into meters
    if(!(((Math.sqrt((Math.pow((originPoint.x-dronePoint.x),2)) + (Math.pow((originPoint.y-dronePoint.y),2))))/divider)<radius)){
        return false
    }
    return true
}