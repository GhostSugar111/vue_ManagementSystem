<template>
    <table width="300" height="300" align="center" border="1">
        <caption>
            <h3>用户详情信息</h3>
        </caption>
        <tr align="center">
            <td>编号</td>
            <td>{{ userlist[index].id }}</td>
        </tr>
        <tr align="center">
            <td>姓名</td>
            <td>{{ userlist[index].name }}</td>
        </tr>
        <tr align="center">
            <td>年龄</td>
            <td>{{ userlist[index].age }}</td>
        </tr>
        <tr align="center">
            <td>性别</td>
            <td>{{ userlist[index].sex }}</td>
        </tr>
        <tr align="center">
            <td>生日</td>
            <td>{{ userlist[index].birthday }}</td>
        </tr>
        <tr align="center">
            <td>电话</td>
            <td>{{ userlist[index].telphone }}</td>
        </tr>
        <tr align="center">
            <td align="center" colspan="2"><button @click="goback()">返 回</button></td>
        </tr>
    </table>
</template>
<script>
import { reactive, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const state = reactive({
            userlist: [
                { 
                    id: 1, 
                    name: '张三', 
                    age: 25, 
                    sex: '男', 
                    birthday: '1995.04.01', 
                    telphone: '13712345678' 
                },
                {
                    id: 2, 
                    name: '李四', 
                    age: 18, 
                    sex: '女', 
                    birthday: '2002.08.13', 
                    telphone: '13782345678' 
                },
                {
                    id: 3, 
                    name: '王五',
                    age: 17, 
                    sex: '女', 
                    birthday: '2003.09.20', 
                    telphone: '13746345678' 
                }


            ],
            index: 0
        })
        const route = useRoute();
        state.index = route.query.id;
        // console.log(state.index);
        const goback=()=>router.go(-1)
        return {
            ...toRefs(state),
            goback
        }
    }
}
</script>