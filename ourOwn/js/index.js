var vm = new Vue({
  el: '#app',
  data: function () {
    return {
      advertisementLabel:'最新消息：',
      advertisementContent1:'通知：第032期开奖时间 2018年03月29日 星期四.',
      advertisementContent2:' 提示:首次访问本站请添加到书签,以防下次找不到本站',
      title_text:[
        {name:'用心找,料才好“11497”每一处都是惊喜.',color:'#FF99FF'},
        {name:'031期凌波微步专解 一码中特 请往下查看',color:'#00FFFF'},
      ],
      table1:{
        label:'11497铁算盘掐指一算四肖中特码',
        content:[
          `023期铁算盘四肖: 猴龙兔蛇 :开<span class="yellow">兔</span>20中`,
          `024期铁算盘四肖: <span class="yellow">龙</span>兔马蛇 :开龙07中`,
          `025期铁算盘四肖: <span class="yellow">鸡</span>龙蛇鼠 :开鸡02中`,
          `026期铁算盘四肖: 鼠<span class="yellow">鸡</span>猴龙 :开鸡02中`,
          `027期铁算盘四肖: <span class="yellow">虎</span>龙蛇羊 :开虎33中`,
          `028期铁算盘四肖: <span class="yellow">蛇</span>龙羊猴 :开蛇30中`,
          `029期铁算盘四肖: 猴<span class="yellow">牛</span>马兔 :开牛10中`,
          `032期铁算盘四肖: 狗鸡猴虎 :开？00中`
        ]
      },
      table2:{
        label:'11497铁算盘「平特一肖●超乎想象」',
        content:[
          `017期规律平特:\<<span class="yellow">蛇蛇蛇</span>\>→开:蛇42准`,
          `018期规律平特:\<<span class="yellow">羊羊羊</span>\>→开:羊04准`,
          `019期规律平特:\<<span class="yellow">牛牛牛</span>\>→开:牛34准`,
          `020期规律平特:\<<span class="yellow">猪猪猪</span>\>→开:猪24准`,
          `021期规律平特:\<<span class="yellow">猴猴猴</span>\>→开:猴15准`,
          `022期规律平特:\<<span class="yellow">蛇蛇蛇</span>\>→开:蛇06准`,
          `023期规律平特:\<<span class="gray">龙龙龙</span>\>→开:？00错`,
          `024期规律平特:\<<span class="yellow">猪猪猪</span>\>→开:猪48准`,
          `025期规律平特:\<<span class="yellow">猴猴猴</span>\>→开:猴27准`,
          `026期规律平特:\<<span class="yellow">兔兔兔</span>\>→开:兔20准`,
          `027期规律平特:\<<span class="yellow">鸡鸡鸡</span>\>→开:鸡38准`,
          `028期规律平特:\<<span class="yellow">虎虎虎</span>\>→开:虎33准`,
          `029期规律平特:\<<span class="yellow">牛牛牛</span>\>→开:牛22准`,
          `032期规律平特:<猪猪猪>→开:？00准`,
        ]
      },
      table3:{
        label:'11497铁算盘「５点来料」独创出品',
        content:[
          `021期协防:<span class="blueFont">38 03 27 06 42 21 <span class="yellow">01</span> 13</span>`,
          `022期协防:<span class="blueFont">22 14 26 07 19 <span class="yellow">21</span> 23</span>`,
          `023期主攻:<span class=""><span class="yellow">20</span> 32 18 27 33 19 38</span>`,
          `024期协防:<span class="blueFont">43 08 44 05 <span class="yellow">07</span> 12 13 22</span>`,
          `025期主攻:<span class=""><span class="yellow">02</span> 14 19 31 06 30 11</span>`,
          `026期策防:<span class="blueFont">11 38 15 04 <span class="yellow">02</span> 14 06 42</span>`,
          `027期主攻:<span class="greenFont">06 21 25 28 31 <span class="yellow">33</span> 34</span>`,
          `028期主攻:<span class="blueFont"><span class="yellow">30</span> 42 31 28 27 39 20</span>`,
          `<p>032期主攻:<span class="">14 26 38 24 36 48 16 15</span></p>
            <p>032期协防:<span class="blueFont">03 27 12 39 06 18 30 42</span></p>
            <p>032期策防:<span class="greenFont">04 02 28 40 07 19 31 43</span></p>`,
        ]
      },
    }

  },
})