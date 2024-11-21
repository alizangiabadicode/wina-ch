<template>
  <div class="flex flex-col">
    <label :for="id" class="text-sm font-medium text-gray-100">{{ label }}</label>
    <input
      :id="id"
      type="text"
      v-bind="$attrs" 
      v-model="inputValue"
      class="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
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
    default: 'input-id'
  }
})

const emit = defineEmits(['update:modelValue'])
const inputValue = ref(props.modelValue)
watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>
