import Resolutions from './resolutions';



const res = Resolutions.find({}).fetch();
console.log(res);

export default {
    Query: {
        resolutions(){
            return Resolutions.find({}).fetch();
        }
    },

    Mutation: {
        createResolution(obj, {name}, context){
            const resolutionId =Resolutions.insert({
                name
            });
            return Resolutions.findOne(resolutionId);
        }
    }
}
