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

<script lang="ts" setup>
import type { API } from '@/types/api'
import type { MenuOption } from 'naive-ui'
import { h as createVNode, ref } from 'vue'
import $methodColor from '@/assets/js/utils/method-color'
import { NButton, NLayoutSider, NMenu, NSpace, NTag } from 'naive-ui'
import { AddOutline as IconAdd, LayersOutline as IconLayers } from '@vicons/ionicons5'

const props = defineProps<{ apis: Array<API> }>()

let apisMenuItems = ref(
  props.apis.map((api) => ({
    key: api.id,
    label: () =>
      createVNode(NSpace, {}, () => [
        createVNode(
          NTag,
          { bordered: false, type: $methodColor(api.method), class: 'sidebar__menu-item-tag' },
          () => api.method
        ),
        api.route,
      ]),
  }))
)

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
            { default: () => 'Add New API', icon: () => createVNode(IconAdd) }
          ),
      },
      ...apisMenuItems.value,
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
</script>

<style>
.sidebar__menu .n-menu-item-content {
  padding-right: 0 !important;
}

.sidebar__menu .n-menu-item-content::before {
  display: none !important;
}

.sidebar__menu-item-tag {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
}
</style>
