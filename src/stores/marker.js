// Define your Pinia store
import { defineStore } from "pinia";

export const useMarkerStore = defineStore("marker", {
  state: () => ({
    scannedMarkerId: undefined,
  }),
  actions: {
    updateScannedMarkerId(newId) {
      this.scannedMarkerId = newId;
    },
  },
});
