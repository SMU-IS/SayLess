<template>
  <CirclesToRhombusesSpinner
    :animation-duration="1200"
    :circles-num="3"
    :circle-size="15"
    color="#000"
  />
</template>
<script>
import { CirclesToRhombusesSpinner } from 'epic-spinners';

export default {
  name: 'CustomLoader',
  components: { CirclesToRhombusesSpinner },
};
</script>
