import firebase from 'firebase';

class Fire {
    constructor(){
        this.init()
        this.checkAuth()
    }

    init = () => {
        if(!firebase.app.length){
            firebase.initializeApp({
                apiKey: "AIzaSyD55uiGQUVs640sz5lAIdjatu6ZAxk4ybo",
                authDomain: "get-trucking-324114.firebaseapp.com",
                databaseURL: "https://get-trucking-324114-default-rtdb.firebaseio.com",
                projectId: "get-trucking-324114",
                storageBucket: "get-trucking-324114.appspot.com",
                messagingSenderId: "607192426126"
            })
        }
    };


    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(!user){
                firebase.auth().signInAnonymously();
            }
        })
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text : item.text,
                timestamp : firebase.database.ServerValue.TIMESTAMP,
                user:item.user
            }

            this.db.push(message)
        })
    }

    parse = message => {
        const {user,text,timestamp} = message.val()
        const {key:_id} = message
        const createdAt = new Date(timestamp)


        return {
            _id,
            createdAt,
            text,
            user
        }
    }


    get = callback =>{
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
    }

    off(){
        this.db.off()
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid;
    }
}

export default new Fire();