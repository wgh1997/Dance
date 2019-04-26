<template>
    <div>
    <Header></Header>
    <courses></courses>
    <Footer></Footer>
    </div>
</template>
<script>
import Header from "../components/public/Header"; //头部
import Footer from "../components/public/Footer"; //尾部courses
import courses from "../components/courses"; //尾部
export default {
    components:{
        Header,
        courses,
        Footer
    }
}
</script>
<style>
    
</style>
