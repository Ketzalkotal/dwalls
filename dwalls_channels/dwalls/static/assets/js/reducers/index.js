// reducers

export const posts = (state = [], action) => {
    switch (action.type) {
        case 'POST':
            return [...state, action.post];
        case 'VOTE':
            return state.map(post =>{
                if(post.id !== action.id){
                    return post;
                }

                return {
                    id: post.id,
                    username: post.username,
                    title: post.title,
                    content: post.content,
                    url: post.url,
                    like: post.like + action.like,
                    dislike: post.dislike + action.dislike
                };
            });
        default:
            return state;
    }
}
