module.exports = {
    firstFunc: (members) => {
        console.log('memebers: ', members);
    },

    secondFunc: () => {
        console.log('I am the second function');
    },

    teamCount: (members, quantity) => {
        const mixedMembers = module.exports.shuffleMembers(members);

        

        console.log(mixedMembers);



    },

    numberPerTeam: (members, quantity) => {
        const mixedMembers = module.exports.shuffleMembers(members);

    },

    shuffleMembers: (members) => {
        for (let i = members.length - 1; i > 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [members[i], members[rand]] = [members[rand], members[i]]
        }

        return members;
    }
};