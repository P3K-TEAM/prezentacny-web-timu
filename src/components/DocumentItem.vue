<template>
    <div class="border-b-2 border-grey-300">
        <span >
            {{name}}
        </span>
        <a :href="link" class="bg-green-500 rounded-xl text-white font-bold py-1 px-2" >
            stiahnut
            <i class="fas fa-download"></i>
        </a>
    </div>
</template>

<script>
export default {
    props:["name", "link"]
}
</script>