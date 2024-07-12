import create from "zustand";

const useCalendarStore = create((set) => ({
  calendarData: null,
  setCalendarData: (day) => set({ calendarData: day }),
}));

export default useCalendarStore;
