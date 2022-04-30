<template>
  <section class="text-white h-screen p-5">
    <p class="text-6xl font-semibold">
      <span class="text-light-blue">
      Hello.
      </span>
      <br />
        I am
      <br />
        Oishik
      <br />
        Das
    </p>
    <p class="pt-10 font-inter text-white text-2xl leading-loose font-light">
    <span>
      About Me
    </span>
    <br />
    <span>
      <fa-fileWaveform />
      Contact
    </span>
    <br />
    <span>
      3D Modelling
    </span>
    <br />
    <span>
      Programming
    </span>
    </p>
  </section>
</template>

<script>

  export default {
    data: function() {
      return {
        age: 16,
        name: "Oishik Das",
        hover: false, 
      }
    },
    name: 'Greeting'
  }
</script>

