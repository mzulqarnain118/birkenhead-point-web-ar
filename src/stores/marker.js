import { defineStore } from "pinia";

export const useMarkerStore = defineStore("marker", {
  state: () => ({
    markers: Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      scanned: true,
      marked: true,
      highlight: true,
    })),
  }),
  actions: {
    updateScannedMarkerId(id) {
      const marker = this.markers.find((m) => m.id === id);
      if (marker) {
        marker.scanned = true;
        this.updateHighlightStatus(marker);
      }
    },
    updateMarkedMarkerId(id) {
      const marker = this.markers.find((m) => m.id === id);
      if (marker) {
        marker.marked = true;
        this.updateHighlightStatus(marker);
      }
    },
    updateHighlightStatus(marker) {
      if (marker.scanned && marker.marked) {
        marker.highlight = true;
      }
    },
  },
});
