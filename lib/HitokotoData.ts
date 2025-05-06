export interface HitokotoData {
  hitokoto: string;
  from: string;
  from_who: string;
}
 const HitokotoData = [
   {
     hitokoto: "能用Rust编写的，终究会使用Rust。",
     from: "R门",
     from_who: "Paul",
   },
   {
     hitokoto: "待到阴阳逆乱时，我以魔血染青天。",
     from: "神墓",
     from_who: "独孤败天",
   },
   {
     hitokoto: "亿万生灵为兵，百万神魔为将。",
     from: "神墓",
     from_who: "魔主",
   },
   {
     hitokoto: "给我时间,无需复活远祖，我将超越远祖。",
     from: "神墓",
     from_who: "辰战",
   },
   {
     hitokoto: "修我战剑，杀上九天。洒我热血，一往无前。",
     from: "神墓",
     from_who: "太古众神",
   },
   {
     hitokoto: "三十年河东，三十年年河西，莫欺少年穷",
     from: "斗破苍穹",
     from_who: "萧炎",
   },
   {
     hitokoto: "只手独战三千帝，双掌横推十三洲！",
     from: "帝霸",
     from_who: "李七夜",
   },
   {
     hitokoto: "仙路尽头谁为峰，一见无始道成空！",
     from: "遮天",
     from_who: "无始大帝",
   },
   {
     hitokoto: "天地不仁，以万物为诌狗!",
     from: "道德经",
     from_who: "老子",
   },
   {
     hitokoto:
       "天地立心非我心，生民立命非我命，往圣无需继绝学，万世何劳我太平。",
     from: "中国人",
     from_who: "Paul",
   },
   {
     hitokoto: "人生最大的遗憾，是一个人无法同时拥有青春和对青春的感受",
     from: "知乎",
     from_who: "佚名",
   },
 ];
function randomHito() {
    return HitokotoData[Math.floor(Math.random()* HitokotoData.length)];
}
export default randomHito
