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
        getAllFires: () => {
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
            console.log("Query gotten! ",data)
            //Make sure data var = {x: Number, y: Number etc}
            const newFire = new Fire(data)
            return new Promise((resolve, reject) => {
                newFire.save((err => {
                    if(err) {
                        console.log(err.err)
                        reject(err)
                    }
                    else {
                        resolve(newFire); 
                        Fire.find((err, docs) => {
                            console.log("wawi, finito")
                        })
                    };
                }))
            })
        }
    }
}

export default resolvers