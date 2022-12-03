<template>
  <div class="transformerListBox">
    <div
      class="transformerList"
      v-for="itemObj in transformerData"
      :key="itemObj"
    >
      <div class="transformerLeft">
        <div class="transformerLeftInTop">
          <div class="transformerTitle">
            <div
              style="
                width: 100px;
                height: 40px;
                border: 1px solid #cdcdcd;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <span> {{ itemObj.transformerLabel }}</span>
            </div>
          </div>

          <div>
            <span style="border: 1px solid #cdcdcd; padding: 5px 7px">{{
              itemObj.type
            }}</span>
          </div>
          <div>
            <span style="border: 1px solid #cdcdcd; padding: 5px 7px">{{
              itemObj.power
            }}</span>
          </div>
        </div>
        <div class="transformerLeftInButtom">
          <div style="display: inline-block; margin: 30px 10px 0 20px">
            <span>{{ itemObj.transformerInfo.name }}</span>
          </div>

          <div style="display: inline-block; margin: 30px 10px 0 20px">
            <!-- 图标 -->
            <!-- <img src="" alt=""> -->
            <span>{{ itemObj.transformerInfo.infoType }}</span>
          </div>
          <div style="display: inline-block; margin: 30px 10px 0 20px">
            <!-- 图标 -->
            <!-- <img src="" alt=""> -->
            <span>{{ itemObj.transformerInfo.infoPower }}</span>
          </div>
        </div>
      </div>
      <div class="transformerCenter">
        <div
          class="transformerItem"
          v-for="item in itemObj.transformerDetail"
          :key="item"
        >
          <div class="transformerItemLeft">
            <div>
              {{ item.type }}
            </div>
          </div>
          <div class="transformerItemCenter">
            <div>
              {{ item.uid }}
            </div>
          </div>
          <div class="transformerItemRight">
            {{ item.conpany }}
          </div>
          <div class="transformerItemLast">
            {{ item.status }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const transformerData = [
  {
    transformerLabel: '1#主变压器',
    type: '主变压器',
    power: '500kV',
    transformerInfo: {
      name: '朝阳500kV',
      infoType: '变电站',
      infoPower: '500kV'
    },
    transformerDetail: [
      {
        type: 'A相',
        uid: '0DFSZ-4000000/500',
        conpany: '重庆ABB变压器有限公司',
        status: '在运'
      },
      {
        type: 'B相',
        uid: '0DFSZ-4000000/500',
        conpany: '重庆ABB变压器有限公司',
        status: '在运'
      },
      {
        type: 'C相',
        uid: '0DFSZ-4000000/500',
        conpany: '重庆ABB变压器有限公司',
        status: '在运'
      }
    ]
  },
  {
    transformerLabel: '1#主变压器',
    type: '主变压器',
    power: '500kV',
    transformerInfo: {
      name: '朝阳500kV',
      infoType: '变电站',
      infoPower: '500kV'
    },
    transformerDetail: [
      {
        type: 'A相',
        uid: '0DFSZ-4000000/500',
        conpany: '重庆ABB变压器有限公司',
        status: '在运'
      },
      {
        type: 'B相',
        uid: '0DFSZ-4000000/500',
        conpany: '重庆ABB变压器有限公司',
        status: '在运'
      },
      {
        type: 'C相',
        uid: '0DFSZ-4000000/500',
        conpany: '重庆ABB变压器有限公司',
        status: '在运'
      }
    ]
  },
  {
    transformerLabel: '1#主变压器',
    type: '主变压器',
    power: '500kV',
    transformerInfo: {
      name: '朝阳500kV',
      infoType: '变电站',
      infoPower: '500kV'
    },
    transformerDetail: [
      {
        type: 'A相',
        uid: '0DFSZ-4000000/500',
        conpany: '重庆ABB变压器有限公司',
        status: '在运'
      },
      {
        type: 'B相',
        uid: '0DFSZ-4000000/500',
        conpany: '重庆ABB变压器有限公司',
        status: '在运'
      },
      {
        type: 'C相',
        uid: '0DFSZ-4000000/500',
        conpany: '重庆ABB变压器有限公司',
        status: '在运'
      }
    ]
  },
  {
    transformerLabel: '1#主变压器',
    type: '主变压器',
    power: '500kV',
    transformerInfo: {
      name: '朝阳500kV',
      infoType: '变电站',
      infoPower: '500kV'
    },
    transformerDetail: [
      {
        type: 'A相',
        uid: '0DFSZ-4000000/500',
        conpany: '重庆ABB变压器有限公司',
        status: '在运'
      },
      {
        type: 'B相',
        uid: '0DFSZ-4000000/500',
        conpany: '重庆ABB变压器有限公司',
        status: '在运'
      },
      {
        type: 'C相',
        uid: '0DFSZ-4000000/500',
        conpany: '重庆ABB变压器有限公司',
        status: '在运'
      }
    ]
  }
]
</script>

<style lang="less" scoped>
.transformerListBox {
  width: 1100px;
  background-color: #062d5a;
  padding: 10px 10px 5px 20px;
  .transformerList {
    display: flex;
    height: 130px;
    width: 100%;
    background-color: #062d5a;
    border-bottom: 1px solid #0379b5;
    .transformerLeft {
      display: flex;
      flex-direction: column;
      flex: 0.8;
      //   background-color: #fff;
      color: #c2dff6;
      .transformerLeftInTop {
        display: flex;
        flex: 1;
        // background-color: pink;
        .transformerTitle {
          flex: 1.5;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 22px;
          font-weight: 700;
        }
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
        }
      }
      .transformerLeftInButtom {
        flex: 1;
      }
    }
    .transformerCenter {
      flex: 1;
      //   background-color: #cdcdcd;
      display: flex;
      flex-direction: column;
      color: #c2dff6;
      .transformerItem {
        flex: 1;
        display: flex;
        .transformerItemLeft {
          flex: 0.5;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .transformerItemCenter {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .transformerItemRight {
          flex: 1.2;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .transformerItemLast {
          flex: 0.5;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    // .transformerRight {
    //   flex: 0.2;
    //   background-color: pink;
    // }
  }
}
</style>
