<template>
    <div class="topbar">
        <div class="container">
            <el-col :span="4"><div class="grid-content bg-purple">
                <img src="../assets/icon.png" alt="客室">
            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple">
                <router-link class="list-group-item" active-class="active" to="/room"><el-link type="info">お部屋</el-link></router-link>
            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple">
                <router-link class="list-group-item" active-class="active" to="/facility"><el-link type="info">施設案内</el-link></router-link>
            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple">
                <router-link class="list-group-item" active-class="active" to="/access"><el-link type="info">アクセス</el-link></router-link>
            </div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple">
                <el-button type="info" icon="el-icon-phone-outline">080-xxxx-2807</el-button>
            </div></el-col>
        </div>
    </div>
</template>

<script>

export default {
    name:'Banner',

}
</script>

 <style scoped>
 
    .container{
        width: 1190px;
        margin: 0 auto;
        /* background-color: aqua; */
        position: relative;
    }
    .container img{
        right: 0;
        width: 100px;
    }
    /* 顶部导航条start */
    .topbar{
        height: 100px;
        background: #ececec;
    }
    /* 顶部导航条end */
    .list-group-item{
        writing-mode: vertical-lr
    }
    

</style>