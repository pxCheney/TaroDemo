/* eslint-disable import/no-commonjs */
const Mock = require('mockjs/dist/mock')
const express = require('express')

const Random = Mock.Random

const app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/Home/homeBanner', function (req, res) {
  res.json(
    // Mock.dataImage({
    //   status: 200,
    //   'dataSource|1-6': ['375x280', '200x120']
    // })
    Mock.mock({
        'status': 200,
        'dataSource|1-9':[{
            'key|+1': 1,
            'Image|1': [Random.image('375x280', '#4A7BF7'), Random.image('200x120', '#50B347'), Random.image('375x280', '#894FC4', '#FFF', 'png', '!')],
            'mockTitle|1': ['肆无忌惮', '忘情水'],
            'mockContent|1': ['角色精湛主题略荒诞', '理由太短 是让人不安', '疑信参半 却无比期盼', '你的惯犯 圆满', '别让纠缠 显得 孤单'],
            'mockAction|1': ['下载', '试听', '喜欢']
        }]
    })
  )
})

const feedData = Mock.mock({
  'data|100': [{
    'key|+1': 1,
    'Image|1': [Random.image('200x200', '#4A2BF4'), Random.image('200x200', '#50C647'), Random.image('200x200', '#894FC4', '#F50', 'png', '!')],
    // 'mockTitle|1': ['肆无忌惮', '忘情水', '春雨里洗过的太阳', '化身孤岛的鲸', '我有诗篇千百'],
    'mockTitle|1': [Random.cname()],
    'mockContent|1': [Random.ctitle(7, 10), Random.csentence(5, 8), , Random.cparagraph(5, 8), Random.county(true), Random.city(true)]
  }]
})

app.use('/Feed/GetFeedList', function (req, res) {
  const { skip, take } = req.query
  const { data } = feedData
  const response = data.slice(skip, skip * 1 + take * 1)
  res.json({
    dataSource: response
  })
})

app.listen('8888', () => {
  console.log('8888 start')
})
