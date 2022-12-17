export interface DroneResponse {
    report:{
        deviceInformation: {
            listenRange: number,
            deviceStarted: string
            uptimeSeconds: number,
            updateIntervalMs: number,
        },
        capture: string,
    }
}

export interface PilotResponse {
        pilotId: string,
        firstName: string,
        lastName: string,
        phoneNumber: string,
        createdDt: string,
        email: string
}

export interface Point {
    x: number,
    y: number
}

export interface Drone {
    serialNumber: string,
    model: string,
    manufacturer: string
    mac:string,
    ipv4:string,
    ipv6:string,
    firmware:number,
    positionY:number,
    positionX:number,
    altitude:number,
}