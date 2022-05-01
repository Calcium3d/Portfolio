<template>
  <section class="text-white h-screen p-5">
    <p class="text-7xl font-normal font-barlow w-52">
      <span class="text-light-blue">
      Hello.
      </span>
        I am
        Oishik
        Das.
    </p>
    <p class="grid gap-3 pt-10 font-inter text-white text-2xl leading-loose font-light w-52">
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

