module.exports = {
    firstFunc: (members) => {
        console.log('memebers: ', members);
    },

    secondFunc: () => {
        console.log('I am the second function');
    },

    teamCount: (members, quantity) => {
        let teamCountArray = [];

        const teamCountNum = (Math.round((members.length) / quantity));



        const mixedMembers = module.exports.shuffleMembers(members);

        // console.log("member length" + members.length)
        // console.log("Quantity: " + quantity)

        // console.log("teamcount" + teamCountNum);


        // while (mixedMembers.length) teamCountArray.push(mixedMembers.splice(0, teamCountNum));

        while (mixedMembers.length > 0) {
            // teamCountArray = [];
            teamCountArray.push(mixedMembers.splice(0, teamCountNum));
            // console.log(teamCountArray)
        }
        // console.log(`Testing: ${teamCountArray}`)
        return teamCountArray;


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