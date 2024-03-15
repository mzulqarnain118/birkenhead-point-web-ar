import { defineStore } from "pinia";
import { setLocal } from "../../utils";

export const useMarkerStore = defineStore("marker", {
  state: () => ({
    markers: [
      {
        id: 1,
        scanned: false,
        marked: false,
        highlight: false,
        info: "Level 3 - On the pillar near Hype",
      },
      {
        id: 2,
        scanned: false,
        marked: false,
        highlight: false,
        info: "Level 1 - On the pillar near COACH",
      },
      {
        id: 3,
        scanned: false,
        marked: false,
        highlight: false,
        info: "Level 2 - On the pillar near Style Runner",
      },
      {
        id: 4,
        scanned: false,
        marked: false,
        highlight: false,
        info: "Level 2 - On the pillar near STRAND",
      },
      {
        id: 5,
        scanned: false,
        marked: false,
        highlight: false,
        info: "Level 1 - On the wall next to Spotlight",
      },
      {
        id: 6,
        scanned: false,
        marked: false,
        highlight: false,
        info: "Level 1 - On the pillar near Lorna Jane",
      },
      {
        id: 7,
        scanned: false,
        marked: false,
        highlight: false,
        info: "Level 1 - On the pillar near NIKE",
      },
      {
        id: 8,
        scanned: false,
        marked: false,
        highlight: false,
        info: "Level 1 - Next to the arch in the food court",
      },
      {
        id: 9,
        scanned: false,
        marked: false,
        highlight: false,
        info: "Ground - on the wall near Panda",
      },
      {
        id: 10,
        scanned: false,
        marked: false,
        highlight: false,
        info: "Ground - on the pillar near Col",
      },
    ],
  }),
  actions: {
    updateScannedMarkerId(id) {
      const marker = this.markers.find((m) => m.id === id);
      if (marker) {
        marker.scanned = true;
        setLocal("markers", this.markers);
        this.updateHighlightStatus(marker);
      }
    },
    updateMarkers(persistedMarkers) {
      this.markers = persistedMarkers;
    },
    updateMarkedMarkerId(id) {
      const marker = this.markers.find((m) => m.id === id);
      if (marker) {
        marker.marked = true;
        setLocal("markers", this.markers);
        this.updateHighlightStatus(marker);
      }
    },
    updateHighlightStatus(marker) {
      if (marker.scanned && marker.marked) {
        marker.highlight = true;
        setLocal("markers", this.markers);
      }
    },
    getMarkerInfoById(id) {
      const marker = this.markers.find((m) => m.id === id);
      if (marker) {
        const markerInfo = marker?.info?.split("-");
        return markerInfo;
      } else {
        return null;
      }
    },
  },
});
