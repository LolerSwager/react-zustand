import create from "zustand";

export const useFlashMessagesStore = create((set) => ({
    FlashMessages: [],
    FlashDuration: 5000,
    setFlashMessage: (FlashMessage) =>
        set((state) => ({
            FlashMessages: [...state.FlashMessages, FlashMessage],
        })),
}))