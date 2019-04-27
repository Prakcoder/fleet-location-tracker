// Using only required type for now
interface Vehicle {
    // accountId: 113,
    vehicleId: number,
    // groupId: 0,
    vehicleNumber: string,
    vehicleName: string,
    vehicleMake: string,
    vehicleModel: string,
    // fuelType: 'Petrol',
    // vehicleYear: 2018,
    // driverName: '',
    speed: number,
    // totalFuelConsumption: 0,
    // totalOdometer: 6243.764,
    // status: 'Ignition On',
    // latitude: 28.4989983,
    // longitude: 77.6273983,
    // lastUpdatedAt: 1556337620000,
    // lastStatusTime: 1556337020000,
    // mileage: 0,
    // lastAccOn: 1556337009000,
    // durationEngineOn: 611000,
    // currentStatus: 'NO_POWER',
    // otherAttributes: VehicleExtraProperties,
    address: string,
    // driverId: 0,
    deviceId: string,
    // eta: 0,
    // distance: 0
}

// interface VehicleExtraProperties {
//         workMode: '5',
//         di1: '1',
//         operator: '40566',
//         actualStatus: 'Low Voltage',
//         controlVoltage: '4.831',
//         axisZ: '-737',
//         sim: '89911190185382274828',
//         axisY: '-742',
//         alarm: '[]',
//         axisX: '355',
//         io69: '1',
//         course: '262.0',
//         io24: '0',
//         io68: '0',
//         lastAlarmTriggered: '1556336335000',
//         power: '0.0',
//         sleepMode: '0',
//         rssi: '2',
//         motion: 'true',
//         odometer: '6243.764',
//         sat: '17',
//         io206: '226',
//         io205: '2287',
//         hdop: '0.2',
//         tripOdometer: '0.17',
//         status: 'Ignition On'
// }