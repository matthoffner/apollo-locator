export default function boilerplate() {
    return {
        Query: {
            boilerplate: (_, { id }) => {
                const names = {
                    test: 'test'
                };
                const name = names[id] || 'default';

                return {
                    id,
                    name
                }
            }
        }
    }
}
