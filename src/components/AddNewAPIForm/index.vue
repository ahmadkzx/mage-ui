<template>
  <NForm class="add-new-api-form" :model="api" :rules="rules">
    <h2>Add New API</h2>
    <NGrid :cols="2" :x-gap="8">
      <NGridItem class="add-new-api-form__section">
        <NFormItem label="Name" path="name">
          <NInput
            class="add-new-api-form__section-input"
            type="text"
            placeholder="API Name"
            v-model:value="api.name"
          />
        </NFormItem>

        <NFormItem label="Route" path="route">
          <NInput
            class="add-new-api-form__section-input"
            type="text"
            placeholder="Route"
            v-model:value="api.route"
          />
        </NFormItem>

        <NFormItem label="Method" path="method">
          <NRadioGroup v-model:value="api.method">
            <NRadioButton
              v-for="method in ['GET', 'POST', 'DELETE', 'PUT', 'PATCH']"
              :key="method"
              :value="method"
              :label="method"
            ></NRadioButton>
          </NRadioGroup>
        </NFormItem>

        <NFormItem label="Data" path="data">
          <NMention v-model:value="api.data" type="textarea" :options="schemas" />
        </NFormItem>
      </NGridItem>

      <NGridItem class="add-new-api-form__section">
        <NFormItem label="Description" path="description">
          <NInput
            class="add-new-api-form__section-input"
            type="textarea"
            placeholder="API Description"
            v-model:value="api.description"
          />
        </NFormItem>
      </NGridItem>
    </NGrid>
  </NForm>
</template>

<script lang="ts">
import type { FormRules } from 'naive-ui'
import { defineComponent, ref } from 'vue'
import isJson from '@/assets/js/utils/is-json'
import {
  NForm,
  NGrid,
  NInput,
  NMention,
  NGridItem,
  NFormItem,
  NRadioGroup,
  NRadioButton,
} from 'naive-ui'

const formRules: FormRules = {
  name: {
    required: true,
    trigger: 'blur',
    message: 'Please set a name for mock api',
  },
  route: {
    required: true,
    trigger: 'blur',
    message: 'Route of api is required',
  },
  data: {
    required: true,
    trigger: 'blur',
    message: 'Please enter valid JSON',
    validator: (_, value: string) => {
      return isJson(value)
    },
  },
}

export default defineComponent({
  name: 'AddNewAPIForm',

  components: {
    NForm,
    NGrid,
    NInput,
    NMention,
    NFormItem,
    NGridItem,
    NRadioGroup,
    NRadioButton,
  },

  setup() {
    return {
      api: ref({
        name: '',
        data: '',
        route: '',
        method: 'GET',
        description: '',
      }),
      rules: formRules,
      schemas: [
        {
          label: 'User',
          value: 'user',
        },
        {
          label: 'Review',
          value: 'review',
        },
      ],
    }
  },
})
</script>

<style scoped>
.add-new-api-form__section {
  margin-bottom: var(--size-8);
}

.add-new-api-form__section-input {
  margin-bottom: var(--size-8);
}
</style>
