<template>
  <l-map style="height: 350px;" :zoom="zoom" :center="center">
    <l-china-tilelayer :name="name" :options="options" />
  </l-map>
</template>

<script>
import { latLng } from 'leaflet'

import { LMap, LMarker, LIconDefault } from 'vue2-leaflet'
import LChinaTilelayer from './td'

export default {
  components: { LMap, LChinaTilelayer, LMarker, LIconDefault },
  data() {
    return {
      path: '/images/',
      marker: latLng(47.41322, -1.219482),
      zoom: 8,
      name: 'OSM.Normal.Map',
      options: {
        maxZoom: 18,
        minZoom: 9,
      },
      center: [32.03956857467441, 118.63768386683661],
    }
  },
}
</script>
