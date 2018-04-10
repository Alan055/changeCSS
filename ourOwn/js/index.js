var vm = new Vue({
  el: '#app',
  data: function () {
    return {
      advertisementLabel: '最新消息：',
      advertisementContent1: '通知：第032期开奖时间 2018年03月29日 星期四.',
      advertisementContent2: ' 提示:首次访问本站请添加到书签,以防下次找不到本站',
      title_text: [
        {name: '用心找,料才好“11497”每一处都是惊喜.', color: '#FF99FF'},
        {name: '031期凌波微步专解 一码中特 请往下查看', color: '#00FFFF'},
      ],
      table1: {
        label: '11497铁算盘掐指一算四肖中特码',
        content: [
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
      table2: {
        label: '11497铁算盘「平特一肖●超乎想象」',
        content: [
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
      table3: {
        label: '11497铁算盘「５点来料」独创出品',
        content: [
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
      table4: {
        label: '11497铁算盘「必中波色」值得信赖',
        content: [
          `017期:两波中特【<span class="yellow">红波</span>绿波】开鸡02中`,
          `018期:两波中特【红波<span class="yellow">绿波</span>】开马05中`,
          `019期:两波中特【红波<span class="yellow">绿波</span>】开马05中`,
          `020期:两波中特【蓝波<span class="yellow">绿波</span>】开羊16中`,
          `021期:两波中特【<span class="yellow">红波</span>绿波】开狗01中`,
          `022期:两波中特【红波<span class="yellow">绿波</span>】开虎21中`,
          `023期:两波中特【<span class="yellow">蓝波</span>绿波】开兔20中`,
          `024期:两波中特【<span class="yellow">红波</span>绿波】开龙07中`,
          `025期:两波中特【<span class="yellow">红波</span>蓝波】开鸡02中`,
          `026期:两波中特【<span class="yellow">红波</span>绿波】开鸡02中`,
          `027期:两波中特【蓝波<span class="yellow">绿波</span>】开虎33中`,
          `028期:两波中特【<span class="yellow">红波</span>绿波】开蛇30中`,
          `030期:两波中特【<span class="yellow">蓝波</span>绿波】开猪36中`,
          `031期:两波中特【蓝波<span class="yellow">绿波</span>】开蛇06中`,
          `032期:两波中特【红波绿波】开？00中`,
        ]
      },
      table5: {
        label: '11497铁算盘「平特一尾」稳稳赚钱',
        content: [
          `022期精选平尾:【<span class="yellow">11111尾</span>】-开:11准`,
          `023期精选平尾:【<span class="yellow">99999尾</span>】-开:19准`,
          `024期精选平尾:【<span class="yellow">11111尾</span>】-开:01准`,
          `025期精选平尾:【<span class="yellow">88888尾</span>】-开:18准`,
          `026期精选平尾:【<span class="yellow">44444尾</span>】-开:34准`,
          `027期精选平尾:【<span class="yellow">66666尾</span>】-开:16准`,
          `028期精选平尾:【<span class="yellow">33333尾</span>】-开:23准`,
          `029期精选平尾:【<span class="yellow">77777尾</span>】-开:27准`,
          `032期精选平尾:【44444尾】-开:00准`,
        ]
      },
      table6: {
        label: '11497铁算盘「平特一尾」稳稳赚钱',
        content: [
          {
            label: '023期:A级大公开;www.11497.com 长跟必赢',
            foot: '<span class="blueFont">004期推荐1肖1码<span class="redFont">{<span class="yellow">兔20</span>}</span>信心十足,大胆下注</span>',
            content: [
              `<span class="blueFont">023期㈢肖:</span><span class="redFont"><span class="yellow">兔</span>猴鸡</span>`,
              `<span class="blueFont">⑧码:</span><span class="redFont">08 <span class="yellow">20</span> 32 15 27 39 14 26</span>`,
              `<span class="blueFont">023期㈡肖:</span><span class="redFont"><span class="yellow">兔</span>猴</span>`,
              `<span class="blueFont">⑤码:</span><span class="redFont"><span class="yellow">20</span> 32 15 27 26</span>`,
              `<span class="blueFont">023期㈠肖:</span><span class="redFont"><span class="yellow">兔</span></span>`,
              `<span class="blueFont">③码:</span><span class="redFont"><span class="yellow">20</span> 15 26</span>`,
            ],
          },
          {
            label: '024期:A级大公开;www.11497.com 长跟必赢',
            foot: '<span class="blueFont">024期推荐1肖<span class="redFont">{<span class="yellow">龙</span>}</span>信心十足,大胆下注</span>',
            content: [
              `<span class="blueFont">024期㈢肖:</span><span class="redFont"><span class="yellow">龙</span>兔马</span>`,
              `<span class="blueFont">⑧码:</span><span class="redFont">08 <span class="yellow">07</span> 19 43 08 32 44 05 17</span>`,
              `<span class="blueFont">024期㈡肖:</span><span class="redFont"><span class="yellow">龙</span>猴</span>`,
              `<span class="blueFont">⑤码:</span><span class="redFont"><span class="yellow">07</span> 19 08 05 17</span>`,
              `<span class="blueFont">024期㈠肖:</span><span class="redFont"><span class="yellow">龙</span></span>`,
              `<span class="blueFont">③码:</span><span class="redFont"><span class="yellow">www.11497.com</span></span>`,
            ],
          },
          {
            label: '025期:A级大公开;www.11497.com 长跟必赢',
            foot: '<span class="blueFont">025期推荐1肖1码<span class="redFont">{<span class="yellow">鸡02</span>}</span>信心十足,大胆下注</span>',
            content: [
              `<span class="blueFont">023期㈢肖:</span><span class="redFont"><span class="yellow">兔</span>猴鸡</span>`,
              `<span class="blueFont">⑧码:</span><span class="redFont">08 <span class="yellow">20</span> 32 15 27 39 14 26</span>`,
              `<span class="blueFont">023期㈡肖:</span><span class="redFont"><span class="yellow">兔</span>猴</span>`,
              `<span class="blueFont">⑤码:</span><span class="redFont"><span class="yellow">20</span> 32 15 27 26</span>`,
              `<span class="blueFont">023期㈠肖:</span><span class="redFont"><span class="yellow">兔</span></span>`,
              `<span class="blueFont">③码:</span><span class="redFont"><span class="yellow">20</span> 15 26</span>`,
            ],
          },
          {
            label: '027期:A级大公开;www.11497.com 长跟必赢',
            foot: '<span class="blueFont">27期推荐1肖1码<span class="redFont">{<span class="yellow">虎33</span>}</span>信心十足,大胆下注</span>',
            content: [
              `<span class="blueFont">023期㈢肖:</span><span class="redFont"><span class="yellow">兔</span>猴鸡</span>`,
              `<span class="blueFont">⑧码:</span><span class="redFont">08 <span class="yellow">20</span> 32 15 27 39 14 26</span>`,
              `<span class="blueFont">023期㈡肖:</span><span class="redFont"><span class="yellow">兔</span>猴</span>`,
              `<span class="blueFont">⑤码:</span><span class="redFont"><span class="yellow">20</span> 32 15 27 26</span>`,
              `<span class="blueFont">023期㈠肖:</span><span class="redFont"><span class="yellow">兔</span></span>`,
              `<span class="blueFont">③码:</span><span class="redFont"><span class="yellow">20</span> 15 26</span>`,
            ],
          },
          {
            label: '028期:A级大公开;www.11497.com 长跟必赢',
            // foot:'<span class="blueFont">028期推荐1肖1码<span class="redFont">{<span class="yellow">蛇30</span>}</span>信心十足,大胆下注</span>',
            content: [
              `<span class="blueFont">023期㈢肖:</span><span class="redFont"><span class="yellow">兔</span>猴鸡</span>`,
              `<span class="blueFont">⑧码:</span><span class="redFont">08 <span class="yellow">20</span> 32 15 27 39 14 26</span>`,
              // `<span class="blueFont">023期㈡肖:</span><span class="redFont"><span class="yellow">兔</span>猴</span>`,
              // `<span class="blueFont">⑤码:</span><span class="redFont"><span class="yellow">20</span> 32 15 27 26</span>`,
              // `<span class="blueFont">023期㈠肖:</span><span class="redFont"><span class="yellow">兔</span></span>`,
              // `<span class="blueFont">③码:</span><span class="redFont"><span class="yellow">20</span> 15 26</span>`,
            ],
          },
          {
            label: '032期:A级大公开;www.11497.com 长跟必赢',
            foot: '<span class="blueFont">032期推荐1肖1码<span class="redFont">{<span class="yellow">鸡26</span>}</span>信心十足,大胆下注</span>',
            content: [
              `<span class="blueFont">023期㈢肖:</span><span class="redFont"><span class="yellow">兔</span>猴鸡</span>`,
              `<span class="blueFont">⑧码:</span><span class="redFont">08 <span class="yellow">20</span> 32 15 27 39 14 26</span>`,
              `<span class="blueFont">023期㈡肖:</span><span class="redFont"><span class="yellow">兔</span>猴</span>`,
              `<span class="blueFont">⑤码:</span><span class="redFont"><span class="yellow">20</span> 32 15 27 26</span>`,
              `<span class="blueFont">023期㈠肖:</span><span class="redFont"><span class="yellow">兔</span></span>`,
              `<span class="blueFont">③码:</span><span class="redFont"><span class="yellow">20</span> 15 26</span>`,
            ],
          },


        ]
      },
      table7: {
        label: '↓↓≌每期推荐⊙免费资料专区≌↓↓',
        content: [
          `032期:【万三千】?I绝世好料→【<span class="redFont">肉草菜肖】</span>←跟者发财！`,
          `032期:【喜气洋洋】四字成语→【<span class="blueFont">平特①肖】</span>←连准多期！`,
          `032期:【大开眼界】精英团队→【<span class="redFont">大小中特】</span>←绝密资料！`,
          `032期:【耳聪目明】造福彩民→【<span class="blueFont">９码中特】</span>←感动亚洲！`,
          `032期:【天使梦特】精美推荐→【<span class="redFont">黑白准特】</span>←轻松赚钱！`,
          `032期:【一世温情】势在必得→【<span class="blueFont">平特⑴尾】</span>←造就辉煌！`,
          `032期:【猛虎下山】点燃六合→【<span class="redFont">绝世①波】</span>←轰动全坛！`,
          `032期:【仙神剑】值得信赖→【<span class="blueFont">六肖主二肖】</span>←实力打造！`,
          `032期:【富贵佳人】实力巨献→【<span class="redFont">稳杀③尾】</span>←稳定中奖！`,
          `032期:【非常完美】跟者稳赚→【<span class="blueFont">前后中特】</span>←实力精选！`,
          `032期:【新闻联播】二字解平→【<span class="redFont">平特一肖】</span>←长期发表！`,
          `032期:【热搜榜】免费大公开→【<span class="blueFont">左右中特】</span>←期期爆料！`,
          `032期:【完美组合】复式连→【<span class="redFont">六码二中二】</span>←实力巨献！`,
          `032期:【六合大宝】原创提供→【<span class="blueFont">男女中特】</span>←中奖好料！`,
          `032期:【出击有料】精品资料→【<span class="redFont">③肖中特】</span>←带你致富！`,
          `032期:【彩虹高手】打击庄家→【<span class="blueFont">东南西北】</span>←专业研究！`,
          `032期:【灯红酒绿】发大财→【<span class="redFont">①波╋②码】</span>←稳赢资料！`,
          `032期:【瓜熟蒂落】造福彩民→【<span class="blueFont">合数中特】</span>←专业打造！`,
          `032期:【争分夺秒】帮你省钱→【<span class="redFont">绝杀三肖】</span>←经典之作！`,
          `032期:【满汉全席】长期发表→【<span class="blueFont">精准单双】</span>←把握机会！`,
          `032期:【荷塘月色】实力派→【<span class="redFont">平特⑥不中】</span>←无错资料！`,
          `032期:【微笑梦想】春夏秋冬→【<span class="blueFont">无错九肖】</span>←笑傲六合！`,
          `032期:【明日之星】精准爆料→【<span class="redFont">爆特⑥尾】</span>←现实好料！`,
          `032期:【郁郁寡欢】明智选择→【<span class="blueFont">买啥开啥】</span>←发家致富！`,
          `032期:【孟母三迁】王牌资料→【<span class="redFont">③头中特】</span>←发财之道！`,
          `032期:【重返荣耀】精品资料→【<span class="blueFont">⑥肖爆特】</span>←脱贫致富！`,
          `032期:【来生缘】☆强料推荐→【<span class="redFont">琴棋书画】</span>←打倒庄家！`,
          `032期:【尚方宝剑】三字解码→【<span class="blueFont">平特一肖】</span>←连续公开！`,
          `032期:【麦德发】吉美☆凶丑→【<span class="redFont">丑美六肖】</span>←精彩献上！`,
          `032期:【爱发财】期期大公开→【<span class="blueFont">两季中特】</span>←起来发财！`,
          `032期:【乱世桃花】精彩发布→【<span class="redFont">中特八码】</span>←连对多期！`,
          `032期:【江湖神算】精准强料→【<span class="blueFont">三国生肖】</span>←期期中奖！`,
          `032期:【凯迪拉克】全心全意→【<span class="redFont">四肖中特】</span>←让你稳赚！`,
          `032期:【曲径通幽】精品更新→【<span class="blueFont">家野中特】</span>←造就辉煌！`,
          `032期:【自圆其说】最有实力→【<span class="redFont">平特②尾】</span>←跟下必发！`,
          `032期:【曾夫人】期期更新料→【<span class="blueFont">天地六肖】</span>←赢钱帮手！`,
          `032期：铁算盘→专供【<span class="redFont">五点来料-名人名事-天机报AB】</span>`,
          `032期：铁算盘→专供【<span class="redFont">正版六合资料第一份</span>】-「已更新」`,
          `032期：铁算盘→专供【<span class="redFont">正版六合资料第二份</span>】-「已更新」`,
          `032期：铁算盘→专供【<span class="redFont">正版六合资料第三份</span>】-「已更新」`,
          `<span class="blueFont">032期：高手征集中……</span><span class="brownFont">如发现偷改资料,将删除用户。</span>`,
        ]
      },
      table8: {
        label: '永久域名:www.11497.com 请记在脑海里',
        foot: '以上资料长期免费公开.请大家互相转告',
        content: [
          {
            right: '羊16中',
            table: [
              [
                `020期:④肖`,
                `蛇龙虎<span class="yellow">羊</span>`,
              ],
              [
                `020期:⑥肖`,
                `蛇龙虎<span class="yellow">羊</span>兔猴`,
              ],
              [
                `020期:⑦肖`,
                `蛇龙虎<span class="yellow">羊</span>兔猴鼠`,
              ],
              [
                `020期:⑨肖`,
                `蛇龙虎<span class="yellow">羊</span>猴鼠狗猪`,
              ],
            ],
          },
          {
            right: '狗01中',
            table: [
              [
                `021期:12码`,
                `02 14 26 03 15 06 18 30 19 09 21 <span class="yellow">01</span>`,
              ],
              [
                `021期:⑥肖`,
                `鸡猴蛇龙虎<span class="yellow">狗</span>`,
              ],
              [
                `021期:⑦肖`,
                `鸡猴蛇龙虎<span class="yellow">狗</span>牛`,
              ],
              [
                `021期:⑨肖`,
                `鸡猴蛇龙虎<span class="yellow">狗</span>牛鼠猪`,
              ],
            ],
          },
          {
            right: '虎21中',
            table: [
              [
                `022期:⑥肖`,
                `牛鸡龙蛇<span class="yellow">虎</span>鼠`,
              ],
              [
                `022期:⑦肖`,
                `牛鸡龙蛇<span class="yellow">虎</span>鼠狗`,
              ],
              [
                `022期:⑨肖`,
                `牛鸡龙蛇<span class="yellow">虎</span>鼠狗羊猪`,
              ],
            ],
          },
          {
            right: '兔20中',
            table: [
              [
                `023期:12码`,
                `08 <span class="yellow">20</span> 32 44 03 15 27 39 02 14 26 38`,
              ],
              [
                `023期:④肖`,
                `<span class="yellow">兔</span>猴鸡龙`,
              ],
              [
                `023期:⑥肖`,
                `<span class="yellow">兔</span>猴鸡龙蛇马`,
              ],
              [
                `023期:⑦肖`,
                `<span class="yellow">兔</span>猴鸡龙蛇马牛`,
              ],
              [
                `023期:⑨肖`,
                `<span class="yellow">兔</span>猴鸡龙蛇马牛虎狗`,
              ],
            ],
          },
          {
            right: '龙07中',
            table: [
              [
                `024期:12码`,
                `<span class="yellow">07</span> 19 31 43 08 20 32 44 05 17 29 41`,
              ],
              [
                `024期:④肖`,
                `<span class="yellow">龙</span>兔马蛇`,
              ],
              [
                `024期:⑥肖`,
                `<span class="yellow">龙</span>兔马蛇狗猪`,
              ],
              [
                `024期:⑦肖`,
                `<span class="yellow">龙</span>兔马蛇狗猪牛`,
              ],
              [
                `024期:⑨肖`,
                `<span class="yellow">龙</span>兔马蛇狗猪牛鼠猴`,
              ],
            ],
          },
          {
            right: '鸡02中',
            table: [
              [
                `025期:12码`,
                `07 19 31 43 <span class="yellow">02</span> 14 26 38 04 16 28 40`,
              ],
              [
                `025期:④肖`,
                `<span class="yellow">羊</span>龙羊蛇`,
              ],
              [
                `025期:⑥肖`,
                `<span class="yellow">羊</span>龙羊蛇鼠牛`,
              ],
              [
                `025期:⑦肖`,
                `<span class="yellow">羊</span>龙羊蛇鼠牛马`,
              ],
              [
                `025期:⑨肖`,
                `<span class="yellow">羊</span>龙羊蛇鼠牛马猪狗`,
              ],
            ],
          },
          {
            right: '鸡02中',
            table: [
              [
                `026期:12码`,
                `11 23 35 47 03 15 27 39 <span class="yellow">02</span> 14 06 42`,
              ],
              [
                `026期:④肖`,
                `鼠猴蛇<span class="yellow">鸡</span>`,
              ],
              [
                `026期:⑥肖`,
                `鼠猴蛇<span class="yellow">鸡</span>羊龙`,
              ],
              [
                `026期:⑦肖`,
                `鼠猴蛇<span class="yellow">鸡</span>羊龙猪`,
              ],
              [
                `026期:⑨肖`,
                `鼠猴蛇<span class="yellow">鸡</span>羊龙猪马狗`,
              ],
            ],
          },
          {
            right: '虎33中',
            table: [
              [
                `027期:12码`,
                `06 09 18 21 24 25 28 31 <span class="yellow">33</span> 34 43 45`,
              ],
              [
                `027期:④肖`,
                `<span class="yellow">虎</span>龙牛蛇`,
              ],
              [
                `027期:⑥肖`,
                `<span class="yellow">虎</span>龙牛蛇猪羊`,
              ],
              [
                `027期:⑦肖`,
                `<span class="yellow">虎</span>龙牛蛇猪羊狗`,
              ],
              [
                `027期:⑨肖`,
                `<span class="yellow">虎</span>龙牛蛇猪羊狗马兔`,
              ],
            ],
          },
          {
            right: '蛇30中',
            table: [
              [
                `028期:12码`,
                `06 18 <span class="yellow">30</span> 42 07 19 31 43 04 16 28 40`,
              ],
              [
                `028期:④肖`,
                `<span class="yellow">蛇</span>龙羊猴`,
              ],
              [
                `028期:⑥肖`,
                `<span class="yellow">蛇</span>龙羊猴兔鼠`,
              ],
              [
                `028期:⑦肖`,
                `<span class="yellow">蛇</span>龙羊猴兔鼠虎`,
              ],
              [
                `028期:⑨肖`,
                `<span class="yellow">蛇</span>龙羊猴兔鼠虎马牛`,
              ],
            ],
          },
          {
            right: '牛10中',
            table: [
              [
                `029期:④肖`,
                `猴蛇<span class="yellow">牛</span>鼠`,
              ],
              [
                `029期:⑥肖`,
                `猴蛇<span class="yellow">牛</span>鼠羊马`,
              ],
              [
                `029期:⑦肖`,
                `猴蛇<span class="yellow">牛</span>鼠羊马猪`,
              ],
              [
                `029期:⑨肖`,
                `猴蛇<span class="yellow">牛</span>鼠羊马猪狗鸡`,
              ],
            ],
          },
          {
            right: '蛇06中',
            table: [
              [
                `031期:⑨肖`,
                `鸡狗兔龙猴马鼠<span class="yellow">蛇</span>羊`,
              ],
            ],
          },
          {
            right: '00??中',
            table: [
              [
                `032期:12码`,
                `02 26 38 12 36 48 03 15 27 39 06 42`,
              ],
              [
                `032期:④肖`,
                `鸡猪猴蛇`,
              ],
              [
                `032期:⑥肖`,
                `鸡猪猴蛇羊龙`,
              ],
              [
                `032期:⑦肖`,
                `鸡猪猴蛇羊龙狗`,
              ],
              [
                `032期:⑨肖`,
                `鸡猪猴蛇羊龙狗虎牛`,
              ],
            ],
          },

        ],
      },
      table9: {
        label: '11497铁算盘「５码复式●独家提供」',
        content: [
          `025期平码５中２:【34.<span class="yellow">07</span>.17.<span class="yellow">18</span>.10】`,
          `026期平码５中２:【<span class="yellow">25</span>.09.47.<span class="yellow">20</span>.30】`,
          `027期平码５中２:【12.<span class="yellow">16</span>.<span class="yellow">25</span>.07.<span class="yellow">13</span>】`,
          `028期平码５中２:【20.43.34.<span class="yellow">23</span>.<span class="yellow">06</span>】`,
          `029期平码５中２:【30.35.41.18.<span class="yellow">29</span>】`,
          `030期平码５中２:【25.34.37.42.<span class="yellow">46</span>】`,
          `031期平码５中２:【41.08.<span class="yellow">19</span>.01.15】`,
          `032期平码５中２:【25.28.33.38.41】`,
        ]
      },
      table10: {
        label: '11497铁算盘「杀期码专区」长期公开',
        content: [
          `032期:<span class="blueFont">铁算盘11497</span>【<span class="redFont">绝杀一季</span>】-<span class="blueFont">已公开</span>`,
          `032期:<span class="blueFont">铁算盘11497</span>【<span class="redFont">绝杀半波</span>】-<span class="blueFont">已公开</span>`,
          `032期:<span class="blueFont">铁算盘11497</span>【<span class="redFont">绝杀二尾</span>】-<span class="blueFont">已公开</span>`,
          `032期:<span class="blueFont">铁算盘11497</span>【<span class="redFont">绝杀一头</span>】-<span class="blueFont">已公开</span>`,
          `032期:<span class="blueFont">铁算盘11497</span>【<span class="redFont">绝杀一段</span>】-<span class="blueFont">已公开</span>`,
          `032期:<span class="blueFont">铁算盘11497</span>【<span class="redFont">绝杀三合</span>】-<span class="blueFont">已公开</span>`,
          `032期:<span class="blueFont">铁算盘11497</span>【<span class="redFont">绝杀一行</span>】-<span class="blueFont">已公开</span>`,
          `032期:<span class="blueFont">铁算盘11497</span>【<span class="redFont">绝杀二肖</span>】-<span class="blueFont">已公开</span>`,
          `032期:<span class="blueFont">铁算盘11497</span>【<span class="redFont">绝杀单双</span>】-<span class="blueFont">已公开</span>`,
          `032期:<span class="blueFont">铁算盘11497</span>【<span class="redFont">绝杀五码</span>】-<span class="blueFont">已公开</span>`,
          `032期:<span class="blueFont">铁算盘11497</span>【<span class="redFont">绝杀码向</span>】-<span class="blueFont">已公开</span>`,

        ]
      },
      table11: {
        label: '11497铁算盘提供㊣三期内必出生肖',
        content: [
          `011期-013期必中生肖: <span class="yellow">虎</span>羊兔猪 中2期`,
          `014期-016期必中生肖: 牛鸡龙<span class="yellow">狗</span> 中1期`,
          `017期-019期必中生肖: 蛇兔<span class="yellow">马</span>鼠 中2期`,
          `020期-022期必中生肖: 猪马<span class="yellow">羊</span>鸡 中1期`,
          `023期-025期必中生肖: 猴羊<span class="yellow">兔龙</span> 中2期`,
          `026期-028期必中生肖: <span class="yellow">鸡虎蛇</span>猪 中3期`,
          `029期-031期必中生肖: <span class="yellow">牛</span>马龙猴 中1期`,
          `032期-034期必中生肖: 羊马蛇鸡 中0期`,
        ]
      },
      table12: {
        label: '11497铁算盘「绝杀专区」帮你省钱',
        content: {
          tableTop:['期数','杀肖','杀尾','杀波','杀头','特开'],
          tableContent:[
            ['鼠肖','1尾','绿双','1头','鸡02'],
            ['蛇肖','4尾','红双','2头','马05'],
            ['猪肖','<span class="grayFont">5尾</span>','蓝双','3头','马05'],
            ['狗肖','5尾','绿单','0头','羊16'],
            ['羊肖','0尾','红双','0头','虎21'],
            ['牛肖','9尾','<span class="grayFont">蓝双</span>','1头','兔20'],
            ['鸡肖','0尾','绿单','3头','龙07'],
            ['猴肖','2尾','蓝单','2头','鸡02'],
            ['牛肖','5尾','绿单','3头','鸡02'],
            ['马肖','1尾','红双','4头','虎33'],
            ['鸡肖','2尾','绿单','1头','蛇30'],
            ['鸡肖','2尾','蓝单','0头','牛10'],
            ['龙肖','<span class="grayFont">6尾</span>','红双','0头','猪36'],
            ['牛肖','2尾','蓝单','3头','蛇06'],
            ['鼠肖','9尾','红双','0头','？00'],
          ]

        }
      },
    }

  },
})