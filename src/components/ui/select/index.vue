<template>
  <div class="flex flex-col">
    <label :for="id" class="text-sm font-medium text-gray-700">{{ label }}</label>
    <select
      :id="id"
      v-bind="$attrs"
      v-model="selectedValue"
      class="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    required: true
  },
  id: {
    type: String,
    default: 'select-id'
  },
  options: {
    type: Array<{
      label: string;
      value: string;
    }>,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const selectedValue = ref(props.modelValue)

watch(selectedValue, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>
