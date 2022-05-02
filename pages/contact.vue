<template>
  <div class="h-screen bg-gradient-to-br from-grey to-black">
    <Navbar/>
    <section class="p-5 text-white pt-10 lg:w-6/12 lg:p-24 lg:grid lg:justify-center">
      <h1 class="text-6xl font-barlow lg:text-9xl lg:w-full">
        Contact 
        <span class="text-light-blue">
        Me
        </span>
      </h1>
      <section class="pt-10 w-52 leading-relaxed lg:text-3xl lg:w-9/12">
        <p>
          My primary source of contact would be my email. Feel free to drop an 
          <a v-bind:href="'mailto:thebluechalk@gmail.com'" class="text-light-blue">
            email
          </a>

          if you want to ask me something!
        </p>
        <h2 class="pt-10">
          Also find me on:
        </h2>
        <section class="grid gap-3 pt-5 text-light-blue">
          <a v-bind:href="'https://github.com/awsomemanNever'">
            Github
          </a>
          <a v-bind:href="'https://www.instagram.com/calcium_the_bored_penguin/?hl=en'">
            Instagram
          </a>
          <a v-bind:href="'https://www.artstation.com/the_blue_chalk'">
            Artstation
          </a>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Contact'
  }
</script>
