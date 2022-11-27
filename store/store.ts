import axios from "axios";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface LumenState {
  lumens: [string] | [];
  fetch: (options: any) => void;
}

const useStore = create<LumenState>()(
  devtools(
    persist(
      (set) => ({
        lumens: [],

        fetch: async (options: any) => {
          console.log(options);

          axios
            .request(options)
            .then(function (response) {
              set({ lumens: response.data.result });
            })
            .catch(function (error) {
              console.error(error);
            });
        },
      }),
      {
        name: "lumnes-storage",
      }
    )
  )
);

export const useLumensStore = useStore;
