<template>
  <l-map style="height: 100vh;" :zoom="zoom" :center="center">
    <l-china-tilelayer :layerName="layerName" :options="options" />
  </l-map>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import { LMap } from 'vue2-leaflet'
import LChinaTilelayer from 'vue2-leaflet-chinatilelayer'

export default {
  components: { LMap, LChinaTilelayer },
  data() {
    return {
      zoom: 13,
      layerName: 'TianDiTu.Normal.Map',
      options: {
        maxZoom: 18,
        minZoom: 9,
      },
      center: [32.03956857467441, 118.63768386683661],
    }
  },
}
</script>
