<template>
  <div 
    v-if="show" 
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click="closeModal"
  >
    <div 
      class="bg-gray-600 p-6 rounded-lg shadow-lg w-full sm:w-96"
      @click.stop
    >
      <slot></slot>
      <div class="flex justify-center space-x-2 mt-3">
        <Button 
        @click="submitModal"
      >
        submit
      </Button>
      <Button 
        @click="closeModal"
      >
        close
      </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {Button} from '@components/ui'


const show = defineModel()
const emits = defineEmits(['submit'])

function closeModal() {
  show.value = false
}

function submitModal() {
  emits('submit')
}

</script>
