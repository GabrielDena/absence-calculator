export interface IClassTime {
    type: string;
    minutes: number;
}

export interface ICollege {
    name: string;
    classTimes: IClassTime[];
    maxAbsence: number;
}
