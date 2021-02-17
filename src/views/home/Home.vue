<template>
  <div id="home">
    <category @categoryItemClick="categoryItemClick"></category>
    <div :class="{slumber: isLifeSlumber}" class="life-goods">
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
    </div>
    <div :class="{slumber: isBedSlumber}" class="bed-goods">
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">床上用品床上用品床上用品...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
    </div>
    <div :class="{slumber: isFruitsSlumber}" class="fruits-goods">
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">蔬菜蔬菜蔬菜蔬菜</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
    </div>
    <div :class="{slumber: isApplianceSlumber}" class="appliance-goods">
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">家具家具家具家具...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
    </div>
    <div :class="{slumber: isClothesSlumber}" class="clothes-goods">
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">衣服衣服衣服衣服...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
    </div>
    <div :class="{slumber: isKitchenSlumber}" class="kitchen-goods">
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">厨具厨具厨具...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
      <show-goods>
        <show-goods-item>
          <img slot="img" src="~assets/img/home/test.webp" alt="">
          <span slot="title">罗技鼠标罗技鼠标罗技鼠标罗技鼠标罗技...</span>
          <span slot="price">￥399.00</span>
        </show-goods-item>
      </show-goods>
    </div>
  </div>
</template>

<script>
import Category from "components/common/category/Category";
import ShowGoods from "components/content/goods/ShowGoods";
import ShowGoodsItem from "components/content/goods/ShowGoodsItem";

export default {
  name: "Home",
  components: {
    Category,
    ShowGoods,
    ShowGoodsItem
  },
  data() {
    return {
      isLifeSlumber: true,
      isBedSlumber: true,
      isFruitsSlumber: true,
      isApplianceSlumber: true,
      isClothesSlumber: true,
      isKitchenSlumber: true,
      currentIndex: 0
    }
  },
  methods: {
    categoryItemClick(index) {
      // console.log(index);
      this.currentIndex = index
      this.showGoodsKind(this.currentIndex)
    },
    resetSlumber() {
      if (!this.isLifeSlumber)
        this.isLifeSlumber = true
      if (!this.isBedSlumber)
        this.isBedSlumber = true
      if (!this.isFruitsSlumber)
        this.isFruitsSlumber = true
      if (!this.isApplianceSlumber)
        this.isApplianceSlumber = true
      if (!this.isKitchenSlumber)
        this.isKitchenSlumber = true
      if (!this.isClothesSlumber)
        this.isClothesSlumber = true
    },
    showGoodsKind(index) {
      switch (index) {
        case 0:
          this.resetSlumber()
          this.isLifeSlumber = false
          break
        case 1:
          this.resetSlumber()
          this.isBedSlumber = false
          break
        case 2:
          this.resetSlumber()
          this.isFruitsSlumber = false
          break
        case 3:
          this.resetSlumber()
          this.isApplianceSlumber = false
          break
        case 4:
          this.resetSlumber()
          this.isClothesSlumber = false
          break
        case 5:
          this.resetSlumber()
          this.isKitchenSlumber = false
          break
      }
    }
  }
}
</script>

<style scoped>
  #home {
    width: calc(100% - 100px);
  }

  .life-goods::after {
    display: block;
    content: "";
    clear: both;
  }

  .slumber {
    display: none;
  }
</style>