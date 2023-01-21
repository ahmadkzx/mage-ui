<template>
  <NLayoutSider content-style="padding: 8px">
    <NMenu
      inverted
      :indent="0"
      class="sidebar__menu"
      :options="menuOptions"
      :default-expanded-keys="['apis']"
    />
  </NLayoutSider>
</template>

<script lang="ts">
import type { MenuOption } from 'naive-ui'
import { defineComponent, h as createVNode } from 'vue'
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
            createVNode(
              NTag,
              { bordered: false, type: 'success', class: 'sidebar__menu-item-tag' },
              'POST'
            ),
            '/user',
          ]),
      },
      {
        key: 'api-02',
        label: () =>
          createVNode(NSpace, {}, [
            createVNode(
              NTag,
              { bordered: false, type: 'info', class: 'sidebar__menu-item-tag' },
              'GET'
            ),
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
            { default: 'Add New Schema', icon: () => createVNode(IconAdd) }
          ),
      },
      {
        key: 'schema-user',
        label: 'User',
        icon: () => createVNode(IconLayers, null, null),
      },
    ],
  },
]

export default defineComponent({
  name: 'Sidebar',

  components: {
    NMenu,
    NLayoutSider,
  },

  setup: () => ({
    menuOptions,
  }),
})
</script>
