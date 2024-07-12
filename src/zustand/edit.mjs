import create from 'zustand';

const useEditStore = create((set) => ({
  isEditMode: false,
  setIsEditMode: () => set((state) => ({ isEditMode: !state.isEditMode })),
}));

export default useEditStore;
