<template>
  <NConfigProvider :theme="darkTheme">
    <NMessageProvider>
      <main>
        <NLayout has-sider>
          <Sidebar :apis="apis" />
          <NLayoutContent content-style="padding: 8px; min-height: 100vh;">
            <CreateAPIForm />
          </NLayoutContent>
        </NLayout>
      </main>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Sidebar from '@/components/Sidebar'
import { APIGetAllAPIs } from './api/mage'
import CreateAPIForm from '@/components/CreateAPIForm'
import { NLayout, darkTheme, NLayoutContent, NConfigProvider, NMessageProvider } from 'naive-ui'

let apis = ref()
onMounted(async () => {
  apis.value = await APIGetAllAPIs()
})
</script>
