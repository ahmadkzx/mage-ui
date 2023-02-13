<template>
  <NConfigProvider :theme="darkTheme">
    <NMessageProvider>
      <main>
        <NLayout v-if="!isLoading" has-sider>
          <Sidebar :apis="apis" />
          <NLayoutContent content-style="padding: 8px; min-height: 100vh;">
            <CreateAPIForm />
          </NLayoutContent>
        </NLayout>

        <NLayoutContent
          v-else
          content-style="padding: 8px; height: 100vh; display: flex; justify-content: center;"
        >
          <NSpin />
        </NLayoutContent>
      </main>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Sidebar from '@/components/Sidebar'
import { APIGetAllAPIs } from './api/mage'
import CreateAPIForm from '@/components/CreateAPIForm'
import {
  NSpin,
  NLayout,
  darkTheme,
  NLayoutContent,
  NConfigProvider,
  NMessageProvider,
} from 'naive-ui'

let apis = ref()
let isLoading = ref(true)

onMounted(async () => {
  apis.value = await APIGetAllAPIs()
  isLoading.value = false
})
</script>
