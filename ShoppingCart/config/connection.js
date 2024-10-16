const MongoClient=require('mongodb').MongoClient;
const state={
    db:null
}
// const url = 'mongodb://localhost:27017';
const uri = "mongodb+srv://farseenofficial7:y06SQ0Sv6rDNumCF@cluster0.i6hdl.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
const dbName = 'shopping';


// module.exports.connect=function(done){
    // const url = 'mongodb://localhost:27017';
    // const dbName = 'shopping';

//     mongoClient.connect(url,(err,data)=>{
//         if(err) return done(err)
        // state.db=data.db(dbName)
        // done()
//     })
// };

module.exports.connect=async function(done){
    let client;
  try {
    // Connect to MongoDB asynchronously
    client = await MongoClient.connect(url);
    // console.log('Database connected');
    state.db=client.db(dbName)
    done()
  } catch (err) {
        done(err)
    // console.error('Error connecting to MongoDB:', err);
    // res.status(500).send('Error connecting to MongoDB');
    // return;
  }
};

module.exports.get=function(){
    return state.db
}