<template>
    <table class="table" width="60%">
        <caption>
            <h3>用户管理</h3>
        </caption>
        <thead>
            <tr>
                <th>编号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody align="center">
            <tr v-for="item in userlist" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.age }}</td>
                <td>
                    <button @click="goDetail(item.id - 1)">详情</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
export default {
    name: 'UserList',
    setup() {
        const router = useRouter();
        const state = reactive({
            userlist: [
                { id: 1, name: '张三', age: 25 },
                { id: 2, name: '李四', age: 18 },
                { id: 3, name: '王五', age: 17 },
            ]
        })
        const goDetail = (index) => {
            console.log(index);
            router.push({
                path: '/userInfo',
                query: {
                    id: index
                }
            })
        }
        return {
            ...toRefs(state),
            goDetail
        }
    }
}
</script>
<style scoped>
tr{
    height: 40px;
}
</style>
