const initialState = {
    product: [
        {
            category: '',
            name: '',
            description: '',
            price: '',
            inventoryCount: ''
        },
    ]
}
const member = {
    product: [

        {
            category: 'electronics',
            name: 'LapTop hp',
            description: 'It is LapTop hp core i7',
            price: '800',
            inventoryCount: '45',
            image: 'https://picsum.photos/id/180/2400/1600',
        },
        {
            category: 'electronics',
            name: 'Camera',
            description: 'It is camera canon v10',
            price: 99.00,
            inventoryCount: '97',
            image: 'https://i.picsum.photos/id/250/4928/3264.jpg?hmac=4oIwzXlpK4KU3wySTnATICCa4H6xwbSGifrxv7GafWU',
        },
        {
            category: 'electronics',
            name: 'Ipod',
            description: 'It is Ipod 13',
            price: 299.00,
            inventoryCount: '79',
            image: 'https://i.picsum.photos/id/367/4928/3264.jpg?hmac=H-2OwMlcYm0a--Jd2qaZkXgFZFRxYyGrkrYjupP8Sro',
        },
        {
            category: 'food',
            name: 'Burger',
            description: 'Classic Burger beef 300gm',
            price: 6.39,
            inventoryCount: '80',
            image: 'https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
        },
        {
            category: 'food',
            name: 'Pizza',
            description: 'Beef Pizza ',
            price: 5.00,
            inventoryCount: '60',
            image: 'https://images6.alphacoders.com/738/thumb-1920-738359.jpg',
        },
        {
            category: 'food',
            name: 'Pasta',
            description: 'Sea Pasta',
            price: 2.39,
            inventoryCount: '50',
            image: 'https://c.ndtvimg.com/2020-04/dih4ifhg_pasta_625x300_22_April_20.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886',
        },
    ],

};
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'filterProducts':
            let fProducts = member.product.filter((ele)=>ele.category===payload)
            return{
                product:fProducts
            }
            case 'RESET':
                return{product:member}
        default:
            return initialState;
    }
};

export const fProducts = name => {
    return {
        type: 'filterProducts',
        payload: name,
    }
}

export const reset = () => {
    return {
        type: 'RESET',
    };
};