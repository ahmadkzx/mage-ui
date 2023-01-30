<template>
  <NConfigProvider :theme="darkTheme">
    <NMessageProvider>
      <main>
        <NLayout has-sider>
          <Sidebar />
          <NLayoutContent content-style="padding: 8px; min-height: 100vh;">
            <AddNewAPIForm />
          </NLayoutContent>
        </NLayout>
      </main>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from '@/components/Sidebar'
import AddNewAPIForm from '@/components/AddNewAPIForm'
import { NLayout, darkTheme, NLayoutContent, NConfigProvider, NMessageProvider } from 'naive-ui'

export default defineComponent({
  components: {
    NLayout,
    Sidebar,
    AddNewAPIForm,
    NLayoutContent,
    NConfigProvider,
    NMessageProvider,
  },

  setup: () => ({
    darkTheme,
  }),
})
</script>
