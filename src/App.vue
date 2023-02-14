<template>
  <NConfigProvider :theme="darkTheme">
    <NMessageProvider>
      <main>
        <NLayout v-if="!isLoading && !isFailed" has-sider>
          <Sidebar :apis="apis" />
          <NLayoutContent content-style="padding: 8px; min-height: 100vh;">
            <CreateAPIForm />
          </NLayoutContent>
        </NLayout>

        <NLayoutContent
          v-else
          content-style="padding: 8px; height: 100vh; display: flex; justify-content: center; align-items: center;"
        >
          <NSpin v-if="isLoading" />
          <NButton v-if="isFailed" type="primary" @click="getAllAPIs">
            <template #icon><IconRefresh /></template>
            Retry
          </NButton>
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
import $handleError from '@/assets/js/utils/handle-error'
import { RefreshOutline as IconRefresh } from '@vicons/ionicons5'
import {
  NSpin,
  NButton,
  NLayout,
  darkTheme,
  NLayoutContent,
  NConfigProvider,
  NMessageProvider,
} from 'naive-ui'

const apis = ref([])
const isLoading = ref(true)
const isFailed = ref(false)

async function getAllAPIs() {
  try {
    isLoading.value = true
    isFailed.value = false

    apis.value = await APIGetAllAPIs()
  } catch (err) {
    isFailed.value = true
    $handleError(err)
  } finally {
    isLoading.value = false
  }
}

onMounted(getAllAPIs)
</script>
