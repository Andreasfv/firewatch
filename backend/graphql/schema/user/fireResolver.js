import { Fire } from "../../../database/index"

const resolvers = {
    Query: {
        getFire: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                User.findById(_id, (err, user) => {
                    if(err) reject(err);
                    else resolve(user);
                })
            })
        },
        getAllFires: (root) => {
            return new Promise((resolve, reject) => {
                Fire.find((err, fires) => {
                    if(err) reject(err)
                    else resolve(fires);
                })
            })
        }
    },

    Mutation: {
        createFire: (root, data) => {
            console.log(data, root)
            //Make sure data var = {x: Number, y: Number etc}
            const newFire = new Fire(data)
            return new Promise((resolve, reject) => {
                newFire.save((err => {
                    if(err) {reject(err)}
                    else {
                        resolve(newFire); 
                        Fire.find((err, docs) => {
                            console.log(docs)
                        })
                    };
                }))
            })
        }
    }
}

export default resolvers