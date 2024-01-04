<script lang="ts" setup>
import Frame from '/components/Frame.vue'
import AlternativeButtonList from '/components/AlternativeButtonList.vue'
</script>

# Alternative Button List

互い違いのボタンリスト

<Frame>
  <AlternativeButtonList :list="[
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'},
    {name: 'Item 5'},
    {name: 'Item 6'},
    {name: 'Item 7'},
    {name: 'Item 8'}
  ]" />
</Frame>
