export const defaults = {
    notes:[]
};

export const resolvers = {
    Query: {
        notes: () => []
    }
};

export const typeDefs = [
    `
    schema {
        query: Query
        mutation: Mutation
    }
    
    type Query{
        notes : [Note]!
        note(id: ID!): Note
    }
    
    type Mutation{
        createNote(title: String!,content:String!): Note
        editNote(id: String!,title: String!, content: String!): Note
    }
    
    type Note{
        id: ID!
        title: String!
        content: String!
    }
    `
];