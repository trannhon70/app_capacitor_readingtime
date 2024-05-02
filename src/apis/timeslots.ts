import axios from "axios"

export type TimeslotsType = {
        _id: string;
        startHour: string,
        startMinute: string,
        endHour: string,
        endMinute: string,
        createdAt: Date;
        updatedAt: Date;
}
export const getListTimeslots = async () => {
        const res = await axios.get('/timetable/list');
        return res.data;
}