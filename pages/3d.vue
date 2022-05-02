<template>
    <div class="h-screen bg-gradient-to-br from-grey to-black text-white">
        <Navbar/>
        <section class="p-5 pt-10 lg:w-6/12 lg:p-24 lg:grid lg:justify-center">
            <h1 class="text-light-blue text-6xl font-barlow lg:text-9xl lg:w-full">
                3D
            </h1>
            <h2 class="pt-10 w-52 lg:w-7/12 lg:text-3xl">
                I have a couple of projects I would like to show, but for now I only have two. You can find the rest on my 
                <a class="text-light-blue" v-bind:href="'https://www.artstation.com/the_blue_chalk'">
                    Artstation
                </a>
            </h2>
            <section class="lg:flex mt-10">
                <img  class="w-64 lg:w-10/12 lg:mx-5 drop-shadow-2xl rounded-lg" src="~assets/3d_1.png" />
                <img  class="w-64 lg:w-10/12 lg:mx-5 drop-shadow-2xl rounded-lg" src="~assets/3d_2.png" />
            </section>
        </section>
    </div>
</template>

<script>
export default {
    name: '3D'
}
</script>