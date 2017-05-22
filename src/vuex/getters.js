const getters = {
    account: state => sessionStorage.getItem('account'),

    // 好友列表
    friendList: state => {
        // 排序 分组
        const friendList = state.friendList
        if (friendList.length === 0) return []

        const list = friendList.sort()
        let toList = []
        let group = []
        let last = list[0].substr(0, 1)
        for (let i = 0; i < list.length; i++) {

            const current = list[i].substr(0, 1)
            if (current === last) {
                group.push(list[i])
            }
            else {
                toList.push(group)
                group = []
                group.push(list[i])
            }
            last = current
        }

        return toList
    }
}

export default getters
