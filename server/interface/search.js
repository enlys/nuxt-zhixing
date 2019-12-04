import Router from 'koa-router';
import axios from './utils/axios'
const Article = require('../dbs/models/articlewenzhang')
const Video = require('../dbs/models/videocourse')
import sign from './utils/sign'

let router = new Router({
  prefix: '/search'
})


router.get('/top', async (ctx) => {
  // try {
  //   let top = await Poi.find({
  //     'name': new RegExp(ctx.query.input),
  //     city: ctx.query.city
  //   })
  //   ctx.body = {
  //     code: 0,
  //     top: top.map(item => {
  //       return {
  //         name: item.name,
  //         type: item.type
  //       }
  //     }),
  //     type: top.length ? top[0].type : ''
  //   }
  // } catch (e) {
  //   ctx.body = {
  //     code: -1,
  //     top: []
  //   }
  // }
  let {
    status,
    data: {
      top
    }
  } = await axios.get(`http://cp-tools.cn/search/top`, {
    params: {
      input: ctx.query.input,
      city: ctx.query.city,
      sign
    }
  })
  ctx.body = {
    top: status === 200 ?
      top :
      []
  }
})

router.get('/hotPlace', async (ctx) => {
  // let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city
  // try {
  //   let result = await Poi.find({
  //     city,
  //     type: ctx.query.type || '景点'
  //   }).limit(10)
  //
  //   ctx.body = {
  //     code: 0,
  //     result: result.map(item => {
  //       return {
  //         name: item.name,
  //         type: item.type
  //       }
  //     })
  //   }
  // } catch (e) {
  //   ctx.body = {
  //     code: -1,
  //     result: []
  //   }
  // }
  let city = ctx.store ?
    ctx.store.geo.position.city :
    ctx.query.city
  let {
    status,
    data: {
      result
    }
  } = await axios.get(`http://cp-tools.cn/search/hotPlace`, {
    params: {
      sign,
      city
    }
  })
  ctx.body = {
    result: status === 200 ?
      result :
      []
  }
})

router.get('/resultsByKeywords', async (ctx) => {
  const {
    keyword
  } = ctx.query;

  try {
    let count = await Article.count()
    let videocount = await Video.count();
    let result = [];

    count = count + videocount;
    let videolist = await Video.find({
      category: keyword
    })



    let data = await Article.find({
      category: keyword
    })

    await data.push.apply(data, videolist);
    if (data && count) {
      ctx.body = {
        code: 0,
        count: count,
        pois: data
      }
    } else {
      ctx.body = {
        code: -1,
        pois: []
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      pois: []
    }
  }

})

router.get('/newcourse', async (ctx) => {


  try {
    let count = await Video.count()

    let data = await Video.find()
    if (data && count) {
      ctx.body = {
        code: 0,
        count: count,
        pois: data
      }
    } else {
      ctx.body = {
        code: -1,
        pois: []
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      pois: []
    }
  }

})


router.get('/Juniorcourse', async (ctx) => {


  try {
    let count = await Article.count()

    let data = await Article.find()
    if (data && count) {
      ctx.body = {
        code: 0,
        count: count,
        pois: data
      }
    } else {
      ctx.body = {
        code: -1,
        pois: []
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      pois: []
    }
  }

})

router.get('/Practicalcourses', async (ctx) => {


  try {
    let count = await Video.count()

    let data = await Video.find()
    if (data && count) {
      ctx.body = {
        code: 0,
        count: count,
        pois: data
      }
    } else {
      ctx.body = {
        code: -1,
        pois: []
      }
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      pois: []
    }
  }

})

router.get('/products', async (ctx) => {
  let {
    keyword,
    type
  } = ctx.query



  try {
    let data;
    if (type == '1') {
      data = await Video.findOne({
        _id: keyword
      })
    }
    if (type == "2") {
      data = await Article.findOne({
        _id: keyword
      })
    }

   
    ctx.body = {
      code: 0,
      data: data,
      login: ctx.isAuthenticated()
    }

  } catch (e) {
    ctx.body = {
      code: -1,
      data: {},
      login: ctx.isAuthenticated()
    }
  }

})



router.get('/Keywordclassification', async (ctx) => {
  let {
    keyword,
    type
  } = ctx.query



  try {

    let data;
    let count;

    if(type=="0"){
       count = await Article.count()
      let videocount = await Video.count();
      count = count + videocount;
      let videolist = await Video.find({
        category: keyword
      })
       data = await Article.find({
        category: keyword
      })
  
      await data.push.apply(data, videolist);

    }
    if(type=="1"){
      count = await Article.count()
      data = await Article.find({
        category: keyword
      })
    }
    if(type=="2"){
      count = await Video.count()
      data = await Video.find({
        category: keyword
      })
    }

    if (data && count) {
      ctx.body = {
        code: 0,
        count: count,
        pois: data
      }
    } else {
      ctx.body = {
        code: -1,
        pois: []
      }
    }

  } catch (e) {
    ctx.body = {
      code: -1,
      pois: []
    }
  }

})





/*


let keyword = ctx.query.keyword || '旅游'
let city = ctx.query.city || '北京'
let {
  status,
  data: {
    product,
    more
  }
} = await axios.get('http://cp-tools.cn/search/products', {
  params: {
    keyword,
    city,
    sign
  }
})
if (status === 200) {
  ctx.body = {
    product,
    more: ctx.isAuthenticated() ? more : [],
    login: ctx.isAuthenticated()
  }
} else {
  ctx.body = {
    product: {},
    more: ctx.isAuthenticated() ? more : [],
    login: ctx.isAuthenticated()
  }
}
})*/

export default router
