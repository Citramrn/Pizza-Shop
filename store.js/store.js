import { create } from 'zustand';

export const useStore = create(
    (set) => ({
        //cart
        casrt: {

        },

        //add pizza in cart
        addPizza: (data) =>
            set((state) => ({
                pizzas: [...state.cart.pizzas, data]
            }))
    })
)
