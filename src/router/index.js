import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import My from "@/components/My"
import Train from "@/components/Train"
import Vip from "@/components/Vip"
import Find from "@/components/Find"
import State from "@/components/State"
import Guangchang from "@/components/Guangchang"
import Tuijian from "@/components/Tuijian"
import Videotrain from "@/components/Videotrain"
import Trainproject from "@/components/Trainproject"
import Freetrain from "@/components/Freetrain"
import Traincamp from "@/components/Traincamp"
import Xly from "@/components/Xly"
import Shihe from "@/components/Shihe"
import Jiaolian from "@/components/Jiaolian"
import Mydetail from "@/components/Mydetail"
import Mytrain from "@/components/Mytrain"
import Mymethod from "@/components/Mymethod"
import Myhistory from "@/components/Myhistory"
import Myrun from "@/components/Myrun"
import Myfriend from "@/components/Myfriend"
import Myfriendweek from "@/components/Myfriendweek"
import Myfriendmonth from "@/components/Myfriendmonth"
import Myaddfriend from "@/components/Myaddfriend"
import Myvip from "@/components/Myvip"
import Vippay from "@/components/Vippay"
import Vipclass from "@/components/Vipclass"
import Vipmes from "@/components/Vipmes"
import Vipclasspay from "@/components/Vipclasspay"
import Classpay from "@/components/Classpay"
import Planpay from "@/components/Planpay"
import Baoming from "@/components/Baoming"
import Jingxuan from "@/components/Jingxuan"
import Video from "@/components/Video"
import Shangcheng from "@/components/Shangcheng"
import Detail from "@/components/Detail"
import Goumai from "@/components/Goumai"
import Adress from "@/components/Adress"
import Addadress from "@/components/Addadress"
import Zhifu from "@/components/Zhifu"
import Leixing from "@/components/Leixing"
import Cart from "@/components/Cart"
import Video1 from "@/components/Video1"
import Tuijian1 from "@/components/Tuijian1"
import Guanzhu from "@/components/Guanzhu"
import Fujin from "@/components/Fujin"
import Haoyou from "@/components/Haoyou"
import Yonghu1 from "@/components/Yonghu1"
import Login from "@/components/Login"
import Register from "@/components/Register"
import Wangjimima from "@/components/Wangjimima"
import Kefu from "@/components/Kefu"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:"/my",
      component: HelloWorld,
      children:[       
        {
          path:"/my",
          component:My
        },
        {
          path:"/train",
          component:Train,
          redirect:"/tuijian",
          children:[
            {
              path:"/tuijian",
              component:Tuijian
             
            },
            {
              path:"/guangchang",
              component:Guangchang
            }
          ]
        },
        {
          path:"/vip",
          component:Vip
        },
        {
          path:"/find",
          component:Find,
          redirect:"/shangcheng",
          children:[        
            {
              path:"/jingxuan",
              component:Jingxuan
            },
            {
              path:"/video",
              component:Video
            },
            {
              path:"/shangcheng",
              component:Shangcheng
            }
          ]
        },
        {
          path:"/state",
          component:State,
          redirect:"/tuijian1",
          children:[
            {
              path:"/Tuijian1",
              component:Tuijian1
            },
            {
              path:"/Guanzhu",
              component:Guanzhu
            },
            {
              path:"/Fujin",
              component:Fujin
            },
          ]
        }
      ]
    },
    {
      path:"/mydetail",
      component:Mydetail
    },
    {
      path:"/mymethod/:id",
      component:Mymethod
    },
    {
      path:"/mytrain/:id",
      component:Mytrain
    },
    {
      path:"/myhistory",
      name:"myhistory",
      component:Myhistory
    },
    {
      path:"/myrun",
      component:Myrun
    },
    {
      path:"/myfriend",
      component:Myfriend,
      redirect:"/myfriendweek",
      children:[
        {
          path:"/myfriendweek",
          component:Myfriendweek
        },
        {
          path:"/myfriendmonth",
          component:Myfriendmonth
        }
      ]
    },
    {
      path:"/myaddfriend",
      component:Myaddfriend
    },
    {
      path:"/myvip",
      component:Myvip
    },
    {
      path:"/videotrain",
      component:Videotrain
    },
    {
      path:"/trainproject",
      component:Trainproject
    },
    {
      path:"/freetrain",
      component:Freetrain
    },
    {
      path:"/traincamp",
      component:Traincamp
    },
    {
      path:"/xly",
      component:Xly
    },
    {
      path:"/shihe",
      component:Shihe
    },
    {
      path:"/jiaolian",
      component:Jiaolian
    },
    {

      path:"/vippay",
      component:Vippay
    },
    {
      path:"/vipclass",
      name:"vipclass",
      component:Vipclass
    },
    {
      path:"/vipmes",
      name:"vipmes",
      component:Vipmes
    },
    {
      path:"/vipclasspay",
      redirect:"/classpay",
      component:Vipclasspay,
      children:[
        {
          path:"/classpay",
         
          component:Classpay
        },
        {
          path:"/planpay",
          component:Planpay
        }
      ]
    },
    
   {
      path:"/baoming",
      component:Baoming
    },
    {
      path:"/detail",
      name:"detail",
      component:Detail
    },
    {
      path:"/adress",
      component:Adress
    },
    {
      path:"/addadress",
      component:Addadress
    },
    {
      path:"/goumai",
      name:"goumai",
      component:Goumai
    },
    {
      path:"/zhifu",
      component:Zhifu
    },
    {
      path:"/cart",
      component:Cart
    },
    {
      path:"/leixing",
      component:Leixing
    },
    {
      path:"/video1",
      component:Video1
    },
    {
      path:"/haoyou",
      component:Haoyou
    },
    {
      path:"/yonghu1",
      component:Yonghu1,
      redirect:"/register",
      children:[
        {
          path:"/register",
          component:Register,
        },
        {
          path:"/login",
          component:Login,
        }
      ]
    },
    {
      path:"/wangjimima",
      component:Wangjimima,
    },
    {
      path:"/kefu",
      component:Kefu,
    },
  ]
})

