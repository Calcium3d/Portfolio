<template>
    <div class="h-screen bg-gradient-to-br from-grey to-black text-white">
        <Navbar/>
        <section class="p-5 pt-10">
            <h1 class="text-light-blue text-6xl font-barlow">
                3D
            </h1>
            <h2 class="pt-10 w-52">
                I have a couple of projects I would like to show, but for now I only have two. You can find the rest on my 
                <a class="text-light-blue" v-bind:href="'https://www.artstation.com/the_blue_chalk'">
                    Artstation
                </a>
            </h2>
            <img  class="mt-10 w-64 drop-shadow-2xl rounded-lg" src="~assets/3d_1.png" />
            <img  class="mt-10 w-64 drop-shadow-2xl rounded-lg" src="~assets/3d_2.png" />
        </section>
    </div>
</template>

<script>
export default {
    name: '3D'
}
</script>