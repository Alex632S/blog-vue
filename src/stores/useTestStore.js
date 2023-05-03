import { defineStore } from 'pinia';
export const useTestStore = defineStore('testStore', {
    state: () => ({
        test: [
            {
                name: 'hello'
            },
            {
                name: 'bye'
            },
            {
                name: 'welcome'
            },
        ]
    }),
});
