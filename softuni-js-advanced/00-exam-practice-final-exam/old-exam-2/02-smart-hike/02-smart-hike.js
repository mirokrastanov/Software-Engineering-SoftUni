class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(key, value) {
        if (this.goals[key]) return `${key} has already been added to your goals`;
        this.goals[key] = value;
        return `You have successfully added a new goal - ${key}`;
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) throw new Error(`${peak} is not in your current goals`);
        if (this.resources == 0) throw new Error('You don\'t have enough resources to start the hike');
        let diff = this.resources - time * 10;
        if (diff < 0) return 'You don\'t have enough resources to complete the hike';
        this.resources -= time * 10;
        if (!this.listOfHikes.slice().filter(a => a.peak == peak).length > 0) this.listOfHikes.push({ peak, time, difficultyLevel });
        else return;
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }
    rest(time) {
        let current = this.resources;
        this.resources += (time * 10);
        if (this.resources > 100) {
            this.resources = 100;
            return 'Your resources are fully recharged. Time for hiking!';
        }
        return `You have rested for ${time} hours and gained ${Math.min(time * 10, 100 - current)}% resources`;
    }
    showRecord(criteria) {
        if (this.listOfHikes.length == 0) return `${this.username} has not done any hiking yet`;
        if (this.listOfHikes.slice().filter(a => a.difficultyLevel == criteria).length == 0 && criteria != 'all') return `${this.username} has not done any ${criteria} hiking yet`;
        switch (criteria) {
            case 'hard':
                let hardSorted = this.listOfHikes.slice().filter(a => a.difficultyLevel == 'hard').sort((a, b) => a.time - b.time);
                let best = hardSorted[0];
                return `${this.username}'s best ${criteria} hike is ${best.peak} peak, for ${best.time} hours`;
            case 'easy':
                let easySorted = this.listOfHikes.slice().filter(a => a.difficultyLevel == 'easy').sort((a, b) => a.time - b.time);
                let bestEasy = easySorted[0];
                return `${this.username}'s best ${criteria} hike is ${bestEasy.peak} peak, for ${bestEasy.time} hours`;
            case 'all':
                let output = 'All hiking records:';
                this.listOfHikes.slice().forEach(x => output += `\n${this.username} hiked ${x.peak} for ${x.time} hours`);
                return output;
        }
    }
}


const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
