const messages = {
    home: {
        title: '书屋',
        hint: '玄幻，奇幻，仙侠，悬疑',
        guessYouLike: '热门小说',
        change: '换一批',
        clear: '清空',
        hotSearch: '热门搜索',
        historySearch: '搜索历史',
        sameAuthor: '与$1同作者',
        sameReader: '对$1感兴趣的人也在读',
        readPercent: '阅读$2的人，$1都在读',
        recommend: '主编推荐',
        seeAll: '查看全部',
        readers: '$1人同时在读',
        featured: '精品小说',
        category: '分类',
        books: '本书',
        readNow: '立即阅读',
        allBook: '共 $1 本图书'
    },
    category: {
        wuXia: '武侠',
        xianXia: '仙侠',
        bizarre: '奇幻',
        campus: '校园',
        fantasfy: '玄幻',
        military: '军事',
        mystery: '悬疑',
        history: '历史'
    },
    shelf: {
        title: '书架',
        edit: '编辑',
        cancel: '取消',
        search: '搜索',
        private: '私密阅读',
        noPrivate: '关闭私密阅读',
        download: '开启离线',
        move: '移动到...',
        remove: '移出书架',
        setPrivateTitle: '开启后，所选书籍的阅读记录将不会对外公开',
        open: '开启',
        closePrivateTitle: '是否关闭所选书籍的私密阅读？',
        close: '关闭',
        setPrivateSuccess: '已开启私密阅读<br>阅读记录将不再公开',
        closePrivateSuccess: '已关闭私密阅读',
        setDownloadTitle: '开启后，将自动缓存所选书籍内容',
        setDownloadSuccess: '已开启，将自动离线已购内容',
        setDownloadError: '离线下载异常，请重新尝试',
        removeDownloadTitle: '确认后，将删除所选书籍的离线内容',
        removeDownloadSuccess: '已选书籍的离线内容已删除',
        delete: '删除',
        clearCache: '清除缓存',
        clearCacheSuccess: '缓存已清空',
        removeBookTitle: '是否将$1移出书架？',
        removeBook: '移出',
        selectedBooks: '所选书籍',
        default: '默认',
        progress: '按进度',
        purchase: '按购买',
        bought: '已购买',
        notPurchased: '未购买',
        selectBook: '选择书籍',
        haveSelectedBook: '已选择$1本',
        haveSelectedBooks: '已选择$1本',
        moveBook: '移动书籍',
        newGroup: '新建分组',
        groupOut: '移出分组',
        editGroup: '修改分组',
        editGroupName: '修改分组名',
        deleteGroup: '删除分组',
        deleteGroupTitle: '删除分组后，分组内的书籍将会自动移出分组',
        groupNone: '当前分组暂无书籍',
        groupName: '分组名',
        confirm: '确定',
        moveBookInSuccess: '成功移入$1',
        moveBookOutSuccess: '成功移出分组',
        statistic: '$1本公开阅读 • $2本私密阅读',
        startDownload: '开始下载...',
        progressDownload: '正在下载：$1',
        downloadFirst: '请先缓存图书',
        welcome: '欢迎访问慕课网<br>学习《实战微信读书——媲美原生APP的企业级Web书城》<br>--------  作者：Sam  --------',
        find: '去找书',
        changeLanguage: '切换语言',
        studyNow: '去慕课网学习'
    },
    detail: {
        copyright: '版权',
        navigation: '目录',
        publisher: '出版社',
        category: '分类',
        ISBN: 'ISBN',
        trial: '试读',
        lang: '语言',
        loading: '加载中...',
        read: '阅读',
        listen: '听书',
        addOrRemoveShelf: '加入书架',
        isAddedToShelf: '已加入书架'
    },
    speak: {
        voice: '语音朗读',
        read: '查看原文',
        settings: '设置',
        timing: '定时',
        current: '当前章节',
        requestFailed: '请求失败!',
        apply: '语义解析核心技术由科大讯飞提供'
    },
    book: {
        pulldownAddMark: '下拉添加书签',
        releaseAddMark: '松手添加书签',
        pulldownDeleteMark: '下拉删除书签',
        releaseDeleteMark: '松手删除书签',
        selectFont: '选择字体',
        haveRead: '已读$1分钟',
        themeDefault: '默认',
        themeGold: '雅致',
        themeEye: '护眼',
        themeNight: '夜间',
        loading: '加载中...',
        navigation: '目录',
        bookmark: '书签',
        searchHint: '搜索全书内容',
        haveRead2: '已读',
        minutes: '分钟',
        cancel: '取消',
        shelf: '书架',
        store: '书屋',
        charge: '充值',
        mine: '我的'
    },
    charge: {
        money: '余额：',
        nickName: '昵称：',
        id: 'ID：',
        pay: '微信支付',
        title: '（1元 = 100书币）',
        money10: '10元',
        money10Val: '10.00',
        money30: '30元',
        money30Val: '30.00',
        money50: '50元',
        money50Val: '50.00',
        money100: '100元',
        money100Val: '100.00',
        money180: '180元（包季）',
        money180Val: '180.00',
        money365: '365元（包年）',
        money365Val: '365.00',
        productId10: '6329c34dd3fd45de86e02fe7f4973b93',
        productId30: 'e23b37ef6f874d1ca7ea107c1d0c338a',
        productId50: 'b6a51d414ca742cb81f94b69b0423a7c',
        productId100: '0bfb552d4b0048a3afe4a49bf963b6ff',
        productId180: '80edd2c1503249debecd2ce523f1fa12',
        productId365: '5ff041a3da12455b83546e2987741a10',
        moneyBi10: '1000书币',
        moneyBi10Val: '1000',
        moneyBi30: '3000书币',
        moneyBi30Val: '3000',
        moneyBi50: '8000书币',
        moneyBi50Val: '5000',
        moneyBi100: '15000书币',
        moneyBi100Val: '10000',
        moneyBi180: '每天2元钱',
        moneyBi180Val: '0',
        moneyBi365: '每天1元钱',
        moneyBi365Val: '0',
        moneyBiDesc10: '充值1000书币',
        moneyBiDesc30: '充值3000书币',
        moneyBiDesc50: '充值5000书币',
        moneyBiDesc100: '充值10000书币',
        moneyBiDesc180: '充值季度会员，所有书免费看三个月，季度会员',
        moneyBiDesc365: '充值年度会员，所有书免费看一年，年度会员',
        moneyDuo10: '不送',
        moneyDuo30: '不送',
        moneyDuo50: '多送3000书币',
        moneyDuo100: '多送5000书币',
        moneyDuo180: '所有书免费看三个月',
        moneyDuo365: '所有书免费看一年',
        moneyHot10: '经济实惠',
        moneyHot30: '多而不贵',
        moneyHot50: '新人专享',
        moneyHot100: '兴趣专享',
        moneyHot180: '热销专享',
        moneyHot365: '超值专享'
    }
}

export default messages
