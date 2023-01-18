<template>
  <NLayoutSider content-style="padding: 8px">
    <NMenu :options="menuOptions" :default-expanded-keys="['apis']" :indent="0" inverted />
  </NLayoutSider>
</template>

<script lang="ts">
import { defineComponent, h as createVNode } from 'vue'
import type { MenuOption } from 'naive-ui'
import { NButton, NLayoutSider, NMenu, NSpace, NTag } from 'naive-ui'
import { AddOutline as IconAdd, LayersOutline as IconLayers } from '@vicons/ionicons5'

const menuOptions: MenuOption[] = [
  {
    key: 'apis',
    label: 'APIs',
    children: [
      {
        key: 'apis-add',
        label: () =>
          createVNode(
            NButton,
            { block: true, size: 'large' },
            { default: 'Add New API', icon: () => createVNode(IconAdd) }
          ),
      },
      {
        key: 'api-01',
        label: () =>
          createVNode(NSpace, {}, [
            createVNode(NTag, { bordered: false, type: 'success' }, 'POST'),
            '/user',
          ]),
      },
      {
        key: 'api-02',
        label: () =>
          createVNode(NSpace, {}, [
            createVNode(NTag, { bordered: false, type: 'info' }, 'GET'),
            '/user/256',
          ]),
      },
    ],
  },
  {
    key: 'schemas',
    label: 'Schemas',
    children: [
      {
        key: 'schemas-add',
        label: () =>
          createVNode(
            NButton,
            { block: true, size: 'large' },
            { default: 'Add New Schema', icon: () => createVNode(IconLayers) }
          ),
      },
    ],
  },
]

export default defineComponent({
  name: 'Sidebar',

  components: {
    NMenu,
    NButton,
    IconAdd,
    NLayoutSider,
  },

  setup: () => ({
    menuOptions,
  }),
})
</script>
