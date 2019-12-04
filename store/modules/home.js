const state = () => ({
  menu: [
    {
      "name": "前端 / 小程序 / JS",
      "type": "study",
      "child": [
        {
          "title": "前端",
          "child": [
            "Vue",
            "Html",
            "JS",
            "React"
            
          ]
        }
      ]
    },
    {
      "name": "后端 / JAVA / Python",
      "type": "furniture",
      "child": [
        {
          "title": "后端",
          "child": [
            "Node.js",
            "Php",
            "JAVA",
            "Python"
          ]
        }
      ]
    },
    {
      "name": "移动 / Android / iOS",
      "type": "hotel",
      "child": [
        {
          "title": "移动",
          "child": [
            "iOS",
            "Android",
            "React Native",
            "WEEX"
          ]
        }
      ]
    },
    {
      "name": "云计算 / 大数据 / 容器",
      "type": "homestay",
      "child": [
        {
          "title": "云计算&大数据",
          "child": [
           
            "大数据",
            "Hadoop",
            "Spark",
            "Hbase",
            "Storm",
            "云计算",
            "AWS",
            "Docker"
          ]
        }
      ]
    },
    {
      "name": "运维 / 测试 ",
      "type": "sport",
      "child": [
        {
          "title": "运维&测试",
          "child": [
           
            "运维工具",
            "中间件",
            "Linux",
            "功能测试",
            "性能测试",
            "自动化测试",
            "接口测试",
            "安全测试"
          ]
        },
        
      ]
    },
    {
      "name": "UI设计 / 3D动画游戏",
      "type": "airport",
      "child": [
        {
          "title": "UI设计",
          "child": [
            "模型制作",
            "动效动画",
            "设计工具",
            "设计基础",
            "APPUI设计",
            "产品交互",
          
          ]
        }
      ]
    },
    {
      "name": "游戏",
      "type": "ktv",
      "child": [
        {
          "title": "游戏",
          "child": [
            "Unity 3D",
            "Cocos2d-x",
            
          ]
        },
        
      ]
    },
    {
      "name": "数据库",
      "type": "life",
      "child": [
        {
          "title": "数据库",
          "child": [
            "MySQL",
            "Redis",
            "MongoDB",
            "Oracle",
            "SQL Server",
            "NoSql",
            
          ]
        }
      ]
    },
    {
      "name": "前沿 / 区块链 / 人工智能",
      "type": "hair",
      "child": [
        {
          "title": "前沿技术",
          "child": [
            "微服务",
            "区块链",
            "以太坊",
            "机器学习",
            "深度学习",
            "计算机视觉",
            "自然语言处理",
            "数据分析",
            "挖掘"
          ]
        }
      ]
    },
    
],
 hotPlace: []


})

const mutations = {
  setMenu(state, val) {
    state.menu = val
  },
  setHotPlace(state, val) {
    state.hotPlace = val
  }
}

const actions = {
  setMenu: ({
    commit
  }, menu) => {
    commit('setMenu', menu)
  },
  setHotPlace: ({
    commit
  }, hotPlace) => {
    commit('setHotPlace', hotPlace)
  }
}

export default {namespaced: true, state, mutations, actions}
