/*
* Wrap existing REST API with GraphQL using Graphql-yoga and axios
*/
const { GraphQLServer } = require('graphql-yoga');
const axios = require('axios').default;
const baseURL = `http://localhost:5000/api/users/usersinfo`;

const convertResponse = (data) => (
    
    data.map(item =>({ 
        user_id: item.user_id, 
        user_firstname: item.user_firstname, 
        user_lastname: item.user_lastname, 
        user_email: item.user_email, 
    })));
const resolvers = {
    Query: {
        page: () => {
            return axios.get(`${baseURL}`).then(res => convertResponse(res.data))
        },

    },
};

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
});

server.start(() => {
    console.log(`Server is running on http://localhost:4000`);
});