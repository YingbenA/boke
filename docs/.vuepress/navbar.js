module.exports = {
    //这里是将config.js中的顶部导航栏配置单独提取出来，方便配置
    navbar: [
        {
            //设置标签
            text: '首页',
            //设置此标签的链接
            link: '/home/readme.md',
            //设置此导航栏的图标，请注意，导航图标只对一级标题有用，
            iconClass: 'aurora-navbar-si-glyph-dial-number-1'
        },
        {
            text: '资源の百宝箱',
            iconClass: 'aurora-navbar-blaze-line',
            children: [
                //在这里面的是二级标题，不能为二级标题设置图标
                {
                    text: '最新宝♂贝',
                    children: [
                        '/issue/',
                    ]
                },
                {
                    text: "act类游戏",
                    children: [
                        /issue/
                      //  '/home/game.md'
                    ]
                },
                {
                    text: "还没想到写什么",
                    children: [ 
                      //  '/feature/registercom.md'
                    ]
                }
            ]
        },
        {
            text: '新鲜的瓜棚',
            iconClass: 'aurora-navbar-si-glyph-billiard-ball',
            children: [
                {
                    text: '吃瓜处',
                    children: [
                       // '/base/public.md',
                    ]
                },
                
            ]
        },
        {
            text: '美图壁纸精选',
            iconClass: 'aurora-navbar-shoulijindu-xuanzhong',
            children: [
                {
                    text: '今日美图',
                    children: [
                        //'/readme/introduce.md',
                        '/node.md'
                    ]
                },
                {
                    text: '壁纸推荐',
                    children: [
                       // '/issue/bug.md',
                    ]
                },
                {
                    text: '头像推荐',
                    children: [
                      //  '/issue/CHANGELOG.md'
                    ]
                },
                {
                    text: '表情包',
                    children: [
                      //  '/issue/common.md'
                    ]
                },
                  {
                    text: '女装收集',
                    children: [
                        //  '/issue/CHANGELOG.md'
                    ]
                },

            ]
        },
        {
            text: '实用百宝箱',
            iconClass: 'aurora-navbar-weather',
            children: [
                {
                    children: [
                       
                    ],
                    text: "手机应用",
                },
                {
                    children: [
                       
                    ],
                    text: "电脑应用",
                },
               
            ],
        },
        {
            text: '学习笔记',
            iconClass: 'aurora-navbar-si-glyph-egg',
            children: [
                {
                    children: [
                        "/plugin/archive/readme.md",
                    ],
                    text: "时间轴",
                },
                
            ],
        },
        {
            text: '关于樱本',
            iconClass: 'aurora-navbar-hua2',
            children: [
                {
                    children: [
                        {
                            text: 'Me',
                            link: "/about",
                        }

                    ],
                    text: "我?",
                },
                
            ],
        },
        {
            text: 'page',
            iconClass: 'aurora-navbar-a-ziyuan107',
            children: [
                {
                    text: '标签',
                    children: [{
                        text: 'tag',
                        link: '/tag'
                    }],
                },
                {
                    text: "时间轴",
                    children: [
                        {
                            text: 'archive',
                            link: '/archive'
                        }
                    ],
                },
            ],
        },

       /* {
            text: '友情链接',
            link: '/link',
            iconClass: 'aurora-navbar-guide'
        },
        {
            text: '案例',
            link: '/use.html',
            iconClass: 'aurora-navbar-si-glyph-load'
        },
        {
            text: 'Aurora',
            link: 'https://github.com/vuepress-aurora/vuepress-theme-aurora',
            iconClass: 'aurora-navbar-github1'
        }*/
    ]
}
