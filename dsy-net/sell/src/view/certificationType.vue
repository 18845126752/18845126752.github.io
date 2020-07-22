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
    .notice{
        width: 1126px;
        height: 30px;
        margin: 10px 20px;
        border: 1px solid #ff9900;
        border-radius: 4px;
        color: #ff9900;
        line-height: 30px;
    }
    .notice-one{
        margin-left: 20px;
    }
    h3{ 
        margin: 20px 20px;
        color: black;
        font-weight: normal;
    }
    .certification{
        width: 1126px;
        height: 100px;
        line-height: 100px;
        margin: 30px 20px;
        background-color: white;
    }
    .certificationType{
        color: black;
        font-size: 16px;
        margin-left: 20px;
    }
    .item{
        display: flex;
        align-items: center;
        float: left;
    }
    .item-img{
        width: 30px;
        height: 30px;
        margin-left: 20px;
        align-items: center;
    }
    .item-link{
        align-items: center;
    }
    .arrowhead{
        margin: 0 10px;
        align-items: center;
    }
</style>
<template>
    <div class = "account">
        <div class = "breadcrumb">
            <div class = "item">
                <span class = "item-link">账号管理</span>
                <span class = "arrowhead">></span>
            </div>
            <div class = "item">
                <span class = "item-link">实名认证</span>
            </div>
        </div>
        <div class = "notice">
            <span class = "notice-one">企业账号可享受比个人账号更丰富的产品购买和使用权限。若您为企业业主，我们推荐您进行企业实名认证。</span>
            <a href="//docs.ksyun.com/documents/6830">了解详情>></a>
        </div>
        <h3>请选择一种实名认证类型</h3>
        <div class>
            <div class = "certification">
                <a href="javascript:void(0)" class = "item">
                    <img class = "item-img" src="../assets/img/person-icon.png" alt="">
                    <span class = "certificationType">个人实名认证</span>
                    <i></i>
                </a>
            </div>
            <div class = "certification">
                <a href="javascript:void(0)" class = "item">
                    <img class = "item-img" src="../assets/img/company-icon.png" alt="">
                    <span class = "certificationType">企业实名认证</span>
                    <i></i>
                </a>
            </div>
        </div>
    </div>
</template>