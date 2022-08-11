//GET
const listaProdutos = () => fetch('http://localhost:3000/produtos').then(resposta => resposta.json());

//POST
const criaProduto = (name, imageURL, price, category, description) => {
    return fetch('http://localhost:3000/produtos', {
        method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                name,
                imageURL, 
                price,
                category,
                description
            }) 
        })
        .then(resposta => {
            if(resposta.ok) {
                return resposta.body;
            }
            throw new Error('Não foi possível criar o produto');
        });
};

export const produtoServices = {
    listaProdutos,
    criaProduto
}