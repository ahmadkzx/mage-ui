<template>
  <NConfigProvider :theme="darkTheme">
    <main>
      <NLayout has-sider>
        <Sidebar />
        <NLayoutContent content-style="padding: 8px">
          <AddNewAPIForm />
        </NLayoutContent>
      </NLayout>
    </main>
  </NConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from '@/components/Sidebar'
import AddNewAPIForm from '@/components/AddNewAPIForm'
import { NLayout, darkTheme, NLayoutContent, NConfigProvider } from 'naive-ui'

export default defineComponent({
  components: {
    NLayout,
    Sidebar,
    AddNewAPIForm,
    NLayoutContent,
    NConfigProvider,
  },

  setup: () => ({
    darkTheme,
  }),
})
</script>
