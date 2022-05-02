<template>
  <section class="text-white h-screen p-5 lg:w-6/12 lg:p-24 lg:grid lg:justify-center">
    <section class="">
      <h1 class="text-7xl font-normal font-barlow w-52 lg:text-9xl lg:w-full">
        <span class="text-light-blue">
        Hello.
        </span>
          I am
          Oishik
          Das.
      </h1>
      <p class="grid lg:text-4xl gap-3 lg:gap-10 pt-10 font-inter text-white text-2xl w-52 lg:w-max leading-loose font-light">
      <span>
        <NuxtLink to="/about">
          About me
        </NuxtLink>
      </span>
      <span>
        <NuxtLink to="/contact">
          Contact
        </NuxtLink>
      </span>
      <span>
        <NuxtLink to="/3d">
          3D Modelling
        </NuxtLink>
      </span>
      </p>
    </section>
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

