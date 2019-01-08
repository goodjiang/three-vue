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
          component:Find
        },
        {
          path:"/state",
          component:State
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
    }
    
   
  ]
})

