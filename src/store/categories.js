let initialState = {
    categories: [
        {
            name: 'electronics',
            displayName: 'Elecronics',
            description:'electronics categories'
        },
        {
            name: 'food',
            displayName: 'Food',
            escription:'food categories'
        },
    ],
    activeCategory: '',
};
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'change':
            return {
                categorie: state.categories,
                activeCategory: payload
            }
        default:
            return state;
    }
}

export const activeCategory = name => {
    return {
        type: 'change',
        payload: name
    }
}