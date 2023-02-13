function solution(toAdd) {
    switch (toAdd) {
        case 'upvote':
            if (this.upvotes) {
                this.upvotes++;
            } else {
                this.upvotes = 0;
                this.upvotes++;
            }
            break;
        case 'downvote':
            if (this.downvotes) {
                this.downvotes++;
            } else {
                this.downvotes = 0;
                this.downvotes++;
            }
            break;
        case 'score':
            let reportedUpvotes = this.upvotes;
            let reportedDownvotes = this.downvotes;
            let reportedScore = this.upvotes - this.downvotes;
            if (reportedUpvotes + reportedDownvotes > 50) {
                let addition = 0;
                if (reportedUpvotes >= reportedDownvotes) {
                    addition = Math.ceil(reportedUpvotes * 0.25);
                } else if (reportedDownvotes > reportedUpvotes) {
                    addition = Math.ceil(reportedDownvotes * 0.25);
                }
                reportedUpvotes += addition;
                reportedDownvotes += addition;
            }
            reportedScore = reportedUpvotes - reportedDownvotes;
            let totalVotes = reportedDownvotes + reportedUpvotes;
            let reportedRating = '';
            let upMajority = (reportedUpvotes / totalVotes * 100) > 66;
            let downMajority = (reportedDownvotes / totalVotes * 100) > 66;
            // ako dava gre6ki - da probvam totalVotes < 10 da go metna tyka kato opravat judge
            if (upMajority && totalVotes >= 10) {
                reportedRating = 'hot';
            } else if (!upMajority && !downMajority && reportedScore >= 0 && totalVotes > 100) {
                reportedRating = 'controversial';
            } else if (reportedScore < 0) {
                reportedRating = 'unpopular';
            } else if (this.upvotes + this.downvotes < 10) {
                reportedRating = 'new';
            }
            // console.log([reportedUpvotes, reportedDownvotes, reportedScore, reportedRating]);
            return [reportedUpvotes, reportedDownvotes, reportedScore, reportedRating];
            // report + obfuscation rlz verified = exp arr
            break;
    }
}
/*
let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// solution.call(post, 'downvote');         // (executed 50 times)
for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');
}
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
*/


const { expect } = require('chai');
var forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};
solution.call(forumPost, 'upvote');
var answer = solution.call(forumPost, 'score');
var expected = [1, 0, 1, 'new'];
console.log(answer);

compareScore(expected, answer);
function compareScore(expected, answer) {
    expect(expected[0]).to.equal(answer[0], 'Incorrect number of upvotes');
    expect(expected[1]).to.equal(answer[1], 'Incorrect number of downvotes');
    expect(expected[2]).to.equal(answer[2], 'Incorrect score');
    expect(expected[3]).to.equal(answer[3], 'Incorrect rating');
}