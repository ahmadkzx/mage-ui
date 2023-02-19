<template>
  <NLayoutSider content-style="padding: 8px">
    <NMenu
      inverted
      :indent="0"
      class="sidebar__menu"
      :options="menuOptions"
      :default-expanded-keys="['apis', 'schemas']"
    />
  </NLayoutSider>
</template>

<script lang="ts" setup>
import type { API, Schema } from '@/types'
import type { MenuOption } from 'naive-ui'

import { useRouter } from 'vue-router'
import { h as createVNode, ref } from 'vue'
import $methodColor from '@/assets/js/utils/method-color'
import { NButton, NLayoutSider, NMenu, NSpace, NTag } from 'naive-ui'
import { AddOutline as IconAdd, LayersOutline as IconLayers } from '@vicons/ionicons5'

const router = useRouter()
const props = defineProps<{ apis: Array<API>; schemas: Array<Schema> }>()

const apisMenuItems = ref(
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

const schemasMenuItems = ref(
  props.schemas.map((schema) => ({
    key: schema.id,
    label: schema.name,
    icon: () => createVNode(IconLayers, null, null),
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
            { block: true, size: 'large', onClick: () => router.push('/api') },
            { default: () => 'Create API', icon: () => createVNode(IconAdd) }
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
            { block: true, size: 'large', onClick: () => router.push('/api') },
            { default: 'Create Schema', icon: () => createVNode(IconAdd) }
          ),
      },
      ...schemasMenuItems.value,
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
