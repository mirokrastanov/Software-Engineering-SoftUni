(function solve() {
    function result(command) {
        const actions = {
            upvote: x => (x.upvotes++), downvote: x => (x.downvotes++), score: x => getScore(x),
        }
        function isObfuscatable(votes) {
            return votes > 50
        }
        function getObfNum(u, d) {
            return Math.ceil(0.25 * Math.max(u, d))
        }
        function calcRating(u, d) {
            if (u + d < 10) return 'new'
            if (u > (u + d) * 0.66) return 'hot'
            if (u - d >= 0 && (u > 100 || d > 100)) return 'controversial'
            if (u - d < 0) return 'unpopular'
            return 'new'
        }
        function getScore({ upvotes, downvotes }) {
            const obfNum = isObfuscatable(upvotes + downvotes) ? getObfNum(upvotes, downvotes) : 0
            const [rUps, rDowns] = [upvotes + obfNum, downvotes + obfNum]
            const balance = rUps - rDowns

            return [rUps, rDowns, balance, calcRating(upvotes, downvotes)]
        }
        return actions[command](this)
    }
    return result.call({ upvotes: 1, downvotes: 2 }, 'upvote')
})()