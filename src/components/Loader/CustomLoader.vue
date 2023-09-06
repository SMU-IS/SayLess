<template>
  <div>
    <CirclesToRhombusesSpinner
      :animation-duration="1000"
      :circles-num="3"
      :circle-size="10"
      color="#ffffff"
    />
  </div>
</template>
<script>
import { CirclesToRhombusesSpinner } from 'epic-spinners';

export default {
  name: 'CustomLoader',
  components: { CirclesToRhombusesSpinner },
};
</script>
