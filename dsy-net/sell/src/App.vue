<style scoped>
	.sider{
		/* position:fixed; */
		/* float: left; */
        width:200px;
        /* height: 100%; */
		background-color:#DDDDDD;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		overflow-y: auto;
	}
	.sider-name{
		width: 200px;
		height: 48px;
		font-size: 20px;
		text-align: center;
		font-weight: bold;
		border-bottom:1px solid grey;
		line-height: 48px;
		color: black;
	}
	.sider-kinds{
		width: 200px;
		height: 38px;
		line-height: 38px;
		padding-left: 59px;
		font-size: 14px;
		cursor: pointer;
		color: black;
	}
	.sider-kinds:hover{
    	background-image: linear-gradient(#5599FF);
	}
	.right{
		margin-left: 200px;
	}
</style>
<template>
  	<div id="app">
		<div class="sider">
			<div class = "sider-name">账号管理</div>
			<div class = "sider-kinds" @click="skipone">账号及安全</div>
			<div class = "sider-kinds" @click="skiptwo">实名认证</div>
			<div class = "sider-kinds" @click="skipthree">消息接收管里</div>
		</div>
		<div class = "right">
			<router-view></router-view>
		</div>
		
  	</div>
</template>
<script type="text/javascript" src= "">
    export default{
        data () {
            return {
               
            }
        },
        methods : {
            skipone(){
				this.$router.push({ name: 'accountSecurity'});
			},
			skiptwo(){
				this.$router.push({ name: 'realName'});
			},
			skipthree(){
				this.$router.push({ name: 'messagesReceiving'})
			}
        }
    }
</script>

