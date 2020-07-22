<style scoped>
    .account {
        width: 1166px;
        height: 625px;
        background-color: #f0f0f4;
    }
    .breadcrumb {
        width: 1120px;
        height: 48px;
        line-height: 48px;
        background-color: #f0f0f4;
        margin: 0 20px;
        color: black;
        font-size: 14px;
    }
    .content{
        width: 1100px;
        height: 471px;
        margin: 20px 33px;
        padding: 48px 60px 24px;
        background-color: #fff;
        box-shadow: 0 0 8px 0 #ccc;
        border-radius: 2px;
    }
    .content-left img{
        width: 220px;
        height: 180px;
        float: left;
        margin-top: 110px;
    }
    .content-right{
        float: right;
        width: 700px;
        height: 399px;
        background-color: #fff;
        color: black;
    }
    .infomattion{
        margin: 30px 0;
    }
    .item-one{
        display: flex;
        align-items: center;
        float: left;
    }
    .item-link{
        align-items: center;
    }
    .arrowhead{
        margin: 0 10px;
        align-items: center;
    }
    .item{
        margin-top: 20px;
    }
    .item-label{
        font-weight: bold;
    }
    .item-span{
        color: grey;
    }
    h3{ 
        font-weight: normal;
    }
    .btn{
        border: none;
        outline: none;
        background-color: #0066FF;
        width: 100px;
        height: 40px;
        color: white;
        border-radius: 4px;
        margin-top: 10px;
        cursor: pointer;
    }
</style>
<template>
    <div class="account">
       <div class = "breadcrumb">
            <div class = "item-one">
                <span class = "item-link">账号管理</span>
                <span class = "arrowhead">></span>
            </div>
            <div class = "item-one">
                <span class = "item-link">实名认证</span>
                <span class = "arrowhead">></span>
            </div>
            <div class = "item-one">
                <span class = "item-link">认证结果</span>
            </div>
        </div>
        <div class="content">
            <div class="content-left">
                <img src="../assets/img/auth-passport-demo.png" alt="">
            </div>
            <div class="content-right">
                <h3>很遗憾，您未通过金山云个人实名认证，请重新进行实名认证。可查看
                    <a href="//docs.ksyun.com/documents/6810">实名认证帮助文档>></a>
                </h3>
                <ul class = "infomattion">
                    <li class = "item">
                        <label class = "item-label">账号类型：</label>
                        <span class = "item-span">{{type}}</span>
                    </li>
                    <li class = "item">
                        <label class = "item-label">真实姓名：</label>
                        <span class = "item-span">{{ realName}}</span>
                    </li>
                    <li class = "item">
                        <label class = "item-label">证件号码：</label>
                        <span class = "item-span">{{number}}</span>
                    </li>
                    <li class = "item">
                        <label class = "item-label">认证时间：</label>
                        <span class = "item-span">{{time}}</span>
                    </li>
                    <li class = "item">
                        <label class = "item-label">未通过原因：</label>
                        <span class = "item-span">{{reason}}</span>
                    </li>
                </ul>
                <button class = "btn"  type = "button" @click="btnClick">重新认证</button>
            </div>
        </div>
  </div>
</template>
<script type="text/javascript" src= "">
    export default{
        data () {
            return {
                type: '个人账号',
                realName: '我******',
                number: '2306**********1862',
                time: '2020-07-22 14:12:13',
                reason: '人脸识别失败'
            }
        },
        methods : {
           btnClick() {
                this.$router.push({name: 'certificationType'});
           }

        }
    }
</script>