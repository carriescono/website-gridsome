<template>
  <div class="fit-content tc center mc roboto">
    <div class="glitch fit-content white tc">
      {{ $static.metaData.siteName }}
      <div class="red-glitch">{{ $static.metaData.siteName }}</div>
      <div class="green-glitch">{{ $static.metaData.siteName }}</div>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
}
</script>

<style>
body {
  background: #1f0023;
  font-size: calc(0.15em + 1vw);
}
.mc { margin-top: calc(50vh - 9em) }
.fit-content { width: fit-content; }
.roboto {
  font-family: 'Roboto'
}

.glitch {
  font-size: 9em;
  font-weight: bold;
  position: relative;
  z-index: 4;
    /* run for 0.5s, delay for 1.5s
  = run whole animation in under 25% */
}

.glitch:hover {
  animation: glitch-blue 2s linear infinite;
}

.glitch:hover > .green-glitch {
  animation: glitch-green 2s 0.1s linear infinite;
}

.glitch:hover > .red-glitch {
  animation: glitch-red 2s 0.15s linear infinite;
}

@media (hover:none) {
  .glitch {
    animation: glitch-blue 2s linear infinite;
  }
  .green-glitch {
    animation: glitch-green 2s 0.1s linear infinite;
  }
  .red-glitch {
    animation: glitch-red 2s 0.15s linear infinite;
  }
}

.red-glitch,
.green-glitch {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1em;
}

.green-glitch {
  color: white;
  z-index: 3;
  font-weight: bold;
}

.red-glitch {
  color: green;
  z-index: 2;
  font-weight: bold;
}

@keyframes glitch-blue {
  0%, 1.9% {
    text-shadow: 0px -2px blue;
  }
  2%, 3.75% {
    transform: skewX(5deg);
    text-shadow: 0px 0px blue;
  }
  4%, 6% {
    opacity: 1;
    transform: translateX(-1px);
    text-shadow: -25px 0 blue;
  }
  6.25%, 12.25% {
    opacity: 0.7;
    transform: skewX(-7deg) translateX(2px);
    text-shadow: 16px 0 blue;
  }
  12.5%, 18.5% {
    opacity: 1;
    transform: skewX(-7deg) translateX(-1px);
    text-shadow: 6px 0 blue;
  }
  18.75%, 24.75% {
    transform: skewX(5deg) translateX(1px);
    text-shadow: -6px 0 blue;
  }
  25% {
    transform: translateX(0);
    text-shadow: 0 0 blue;
  }
}

@keyframes glitch-green {
  0%, 1.9% {
    text-shadow: 2px 0px green;
  }
  2%, 3.75% {
    text-shadow: 0px 0px green;
  }
  4%, 6% {
    text-shadow: -25px 0 green;
  }
  6.25%, 12.25% {
    text-shadow: 13px 0 green;
  }
  12.5%, 18.5% {
    text-shadow: 8px 0 green;
  }
  18.75%, 24.75% {
    text-shadow: -3px 0 green;
  }
  25% {
    text-shadow: 0 0 green;
  }
}


@keyframes glitch-red {
  0%, 1.9% {
    text-shadow: 2px 0px red;
  }
  2%, 3.75% {
    text-shadow: 0px 0px red;
  }
  4%, 6% {
    text-shadow: -25px 0 red;
  }
  6.25%, 12.25% {
    text-shadow: 13px 0 red;
  }
  12.5%, 18.5% {
    text-shadow: 8px 0 red;
  }
  18.75%, 24.75% {
    text-shadow: -3px 0 red;
  }
  25% {
    text-shadow: 0 0 green;
  }
}

</style>
