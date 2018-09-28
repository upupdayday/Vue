<template>
    <div>
        <h2>个人信息</h2>
        <el-form>
            <el-form-item label="姓名">
                <el-input v-model="profile.name"></el-input>
            </el-form-item>
            <el-form-item label="城市">
                <el-input v-model="profile.region"></el-input>
            </el-form-item>
            <el-form-item label="出生日期">
                <el-input v-model="profile.type"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        props: ['profile']
    }
</script>