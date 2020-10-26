export default function module() {
    return {
        Query: {
            module: (_, { id }) => {
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
