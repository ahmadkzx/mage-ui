<template>
  <NConfigProvider :theme="darkTheme">
    <main>
      <NLayout has-sider>
        <Sidebar />
        <NLayoutContent><h1>sdf</h1></NLayoutContent>
      </NLayout>
    </main>
  </NConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from '@/components/Sidebar'
import { NLayout, darkTheme, NLayoutContent, NConfigProvider } from 'naive-ui'

export default defineComponent({
  components: {
    NLayout,
    Sidebar,
    NLayoutContent,
    NConfigProvider,
  },

  setup: () => ({
    darkTheme,
  }),
})
</script>
