<template>
     <div class="container">
        <div class="room">
            <h1>お部屋案内</h1>
            <p>客室は清潔で整備され、設備も充実しており、快適な滞在を提供しています。</p>
            <img src="../assets/room2.png" alt="客室">
            <img src="../assets/room4.png" alt="客室">
            <img src="../assets/room3.png" alt="客室">
            <img src="../assets/room1.png" alt="客室">

        </div>
    </div>
</template>

<script>
export default {
    name: 'Room'
}
</script>

<style>
    .room{
        text-align:center;
    }
    .room img{
        max-width: 50%;
        height: auto;

    }
</style>