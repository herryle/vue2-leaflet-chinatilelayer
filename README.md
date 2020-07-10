# vue2-leaflet-chinatilelayer

A Provider for China Tms Service plugin for the vue2-leaflet package.

This is a [chinatmsproviders plugin](https://github.com/htoooth/Leaflet.ChineseTmsProviders) extension for [vue2-leaflet package](https://github.com/KoRiGaN/Vue2Leaflet)

## [Example](http://liheng.me/vue2-leaflet-chinatilelayer/example)

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

```vue
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
      layerName: 'GaoDe.Normal.Map',
      options: {
        maxZoom: 18,
        minZoom: 9,
      },
      center: [32.06031863553111, 118.76315116882326],
    }
  },
}
</script>

```

### key

If you're using TianDiTu, please [apply the key](http://lbs.tianditu.gov.cn/) and config it in the option, like this:

```vue
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
        key: '***************'
      },
      center: [32.06031863553111, 118.76315116882326],
    }
  },
}
</script>
```

I added a key to the source code, but this key should **only** be used for testing.

### Props

| Name        | Type     | Required | Description                                                                                                             |
| ----------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `layerName` | `Object` | Yes      | A Leaflet China TileLayer. See [leaflet.chinatmsproviders](https://www.npmjs.com/package/leaflet.chinatmsproviders)     |
| `options`   | `Object` | No       | Options to pass to the plugin. See [leaflet.chinatmsproviders](https://www.npmjs.com/package/leaflet.chinatmsproviders) |

### Author

[Herry Lee](https://github.com/herryle)
