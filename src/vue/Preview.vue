<template>
  <div class="p-3 bg-indigo-50 rounded-lg text-center">
    <div class="text-2xl mb-1">🧠</div>
    <div class="text-indigo-700 font-medium text-sm truncate">
      {{ title }}
    </div>
    <div v-if="hasData" class="text-xs text-gray-500 mt-1">
      {{ nodeCount }} ideas
    </div>
    <div v-else class="text-xs text-amber-600 mt-1">
      {{ props.result.message || "No data" }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ToolResult } from "gui-chat-protocol";
import type { MindMapData } from "../core/types";

const props = defineProps<{
  result: ToolResult<MindMapData>;
}>();

const data = computed(() => props.result.data as MindMapData | null);
const hasData = computed(() => data.value?.nodes && data.value.nodes.length > 0);
const title = computed(() => data.value?.title || "Mind Map");
const nodeCount = computed(() => data.value?.nodes?.length || 0);
</script>
