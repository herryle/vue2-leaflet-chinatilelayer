# vue2-leaflet-chinatilelayer
A Provider for China Tms Service plugin for the vue2-leaflet package.

This is a  [chinatmsproviders plugin](https://github.com/htoooth/Leaflet.ChineseTmsProviders) extension for [vue2-leaflet package](https://github.com/KoRiGaN/Vue2Leaflet)

## [Example](https://liheng.me/vue2-leaflet-chinatilelayer/example)

## Dependencies

- [Vue2Leaflet](https://github.com/vue-leaflet/Vue2Leaflet)
- [Leaflet.js](https://leafletjs.com/)
- [leaflet.chinatmsproviders](https://www.npmjs.com/package/leaflet.chinatmsproviders)

## Installation

```
npm install vue2-leaflet-chinatilelayer
```

or

```
yarn add vue2-leaflet-chinatilelayer
```

## Usage

**Example:**

```
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

```

### Props

| Name        | Type     | Required | Description                                                  |
| ----------- | -------- | -------- | ------------------------------------------------------------ |
| `layerName` | `Object` | Yes      | A Leaflet China TileLayer.    See [leaflet.chinatmsproviders](https://www.npmjs.com/package/leaflet.chinatmsproviders) |
| `options`   | `Object` | No       | Options to pass to the plugin. See [leaflet.chinatmsproviders](https://www.npmjs.com/package/leaflet.chinatmsproviders) |

### Author

[Herry Lee](https://github.com/herryle)