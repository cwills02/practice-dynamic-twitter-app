// var user1 = {
//     userName: '@elonmusk',
//     displayName: 'Elon Musk',
//     joinedDate: 'June 2009',
//     followingCount: 103,
//     followerCount: 47900000,
//     avatarURL: 'assets/elonmusk.jpg',
//     coverPhotoURL: 'assets/elonmusk-cover.jpeg',
//     tweets: [
//         {
//             text: 'I admit to judging books by their cover',
//             timestamp: '2/10/2021 00:01:20'
//         },
//         {
//             text: 'Starship to the moon',
//             timestamp: '2/09/2021 18:37:12'
//         },
//         {
//             text: 'Out on launch pad, engine swap underway',
//             timestamp: '2/09/2021 12:11:51'
//         }
//     ]
// };

// var user2 = {
//     userName: '@BillGates',
//     displayName: 'Bill Gates',
//     joinedDate: 'June 2009',
//     followingCount: 274,
//     followerCount: 53800000,
//     avatarURL: 'assets/billgates.jpg',
//     coverPhotoURL: 'assets/billgates-cover.jpeg',
//     tweets: [
//         {
//             text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
//             timestamp: '2/10/2021 00:01:20'
//         },
//         {
//             text: 'Should I start tweeting memes? Let me know in a comment.',
//             timestamp: '2/09/2021 18:37:12'
//         },
//         {
//             text: 'In 2020, I read a book every hour.',
//             timestamp: '2/09/2021 12:11:51'
//         }
//     ]
// };

var users = {
    user1: {
        userName: '@elonmusk',
        displayName: 'Elon Musk',
        joinedDate: 'June 2009',
        followingCount: 103,
        followerCount: 47900000,
        avatarURL: 'assets/elonmusk.jpg',
        coverPhotoURL: 'assets/elonmusk-cover.jpeg',
        tweets: [
            {
                text: 'I admit to judging books by their cover',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Starship to the moon',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'Out on launch pad, engine swap underway',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    },
    user2: {
        userName: '@BillGates',
        displayName: 'Bill Gates',
        joinedDate: 'June 2009',
        followingCount: 274,
        followerCount: 53800000,
        avatarURL: 'assets/billgates.jpg',
        coverPhotoURL: 'assets/billgates-cover.jpeg',
        tweets: [
            {
                text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Should I start tweeting memes? Let me know in a comment.',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'In 2020, I read a book every hour.',
                timestamp: '2/09/2021 12:11:51'
            }
        ]
    }
}

var user;
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

console.log(getUrlParameter('user'));

if (getUrlParameter('user') === 'user1') {
    user = users.user1;
}
if (getUrlParameter('user') === 'user2') {
    user = users.user2;
}

var container = document.querySelector('.container');
container.innerHTML = `
<div class="header header-fixed-top">
    <h2>${user.displayName}</h2>
</div>
<div class="cover-photo-container">
    <img src="${user.coverPhotoURL}" alt="cover-photo" class="cover-photo">
</div>
<div class="profile-details">
    <div class="avatar">
        <img src="${user.avatarURL}" alt="avatar image" class="avatar-image">
        <div>${user.displayName}</div>
        <div>${user.user1Name}</div>
        <div>Joined ${user.joinedDate}</div>
        <div><span class="follow">${user.followerCount}</span> Following <span class="follow">${user.followingCount}</span> Followers</div>
    </div>
    <div><button class='following'>Following</button>
</div>
`

var rows = user.tweets.forEach(function (row, i) {
    var rowDiv = document.createElement('row');
    rowDiv.classList.add('row');
    rowDiv.innerHTML = `
    <div class="left-section">
        <img src="${user.avatarURL}" alt="small avatar photo" class="tweet-avatar">
    </div>
    <div class="middle-section">
        <div>${user.displayName} ${row.timestamp}</div>
        <div>${row.text}</div>
    </div>
    `;
    container.appendChild(rowDiv);
})
