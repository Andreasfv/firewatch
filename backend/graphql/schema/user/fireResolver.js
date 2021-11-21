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
            console.log("Attempting to create new Fire",data)
            const newFire = new Fire(data)
            return new Promise((resolve, reject) => {
                newFire.save((err => {
                    if(err) {
                        console.log(err)
                        reject(err)
                    }
                    else {
                        resolve(newFire); 
                        Fire.find((err, docs) => {
                            console.log("Creation of new Fire successfull!")
                        })
                    };
                }))
            })
        }
    }
}

export default resolvers