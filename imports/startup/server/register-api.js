import { createApolloServer} from 'meteor/apollo';
import { makeExecutableSchema} from 'graphql-tools';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

const testSchema = `
type Query {
    hi: String,
    resolutions: [Resolution]
}
`
const typeDefs = [
    testSchema,
    ResolutionsSchema
    ];

const resolvers = {
    Query: {
        hi(){
            return "Hello Rafael";
        },
        resolutions(){
            return[
                {
                    _id: "asgwerfsdstg",
                    name: "Get stuff done!"
                },
                {
                    _id: "abba",
                    name: "Loose some weight!"
                }
            ];
        }
    }
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})
createApolloServer({ schema });