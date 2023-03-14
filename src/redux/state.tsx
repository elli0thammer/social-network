export type dialogsDataType = {
    id: number,
    name: string,
    avatar: string,
}

export type messagesDataType = {
    id: number,
    message: string,
}

export type postsDataType = {
    id: number,
    message: string
}

export type friendsDataType = {
    id: number,
    name: string,
    avatar: string,
}

export type stateType = {
    profilePage: {
        postsData: Array<postsDataType>,
        friendsData: Array<friendsDataType>,
    },
    messagesPage: {
        dialogsData: Array<dialogsDataType>,
        messagesData: Array<messagesDataType>,
    },
}

export let state: stateType = {
    profilePage: {
        postsData: [
            {id: 1, message: "I think the jack-russell breed is the best. What do you think, bro?"},
            {id: 2, message: "What is the best build for Bennett?"},
        ],

        friendsData: [
            {id: 1, name: "Lover", avatar: ''},
            {id: 2, name: "Mr. Doctor", avatar: ''},
            {id: 3, name: "Commissar", avatar: ''},
        ],
    },

    messagesPage: {
        dialogsData: [
            {id: 1, name: "Lover", avatar: ''},
            {id: 2, name: "Mr. Doctor", avatar: ''},
            {id: 3, name: "Commissar", avatar: ''},
            {id: 4, name: "Mafia", avatar: ''},
            {id: 5, name: "Don Mafia", avatar: ''},
            {id: 6, name: "Peaceful resident", avatar: ''},
        ],

        messagesData: [
            {id: 1, message: "Shall we spend tonight together?"},
            {id: 2, message: "I have a suspicion that you are the mafioso."},
            {id: 3, message: "Tonight you will die!"},
        ],
    },
}

