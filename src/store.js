import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      breaths: 0,
      addABreath: () => set({ breaths: get().breaths + 1 }),
      likes: {},
      addLike: id => {
        set(state => {
          state.likes[id] = state.likes[id] ? state.likes[id] + 1 : 1;
        });
      },
      comments: {},
      setComment: (id, comment) => {
        set(state => {
          state.comments[id] = comment;
        });
      },
      addComment: (id, comment) => {
        set(state => {
          state.comments[id] = state.comments[id]
            ? [...state.comments[id], comment]
            : [comment];
        });
      },
    }),
    {
      name: "storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
