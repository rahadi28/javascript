export function getAllProduct() {
    return fetch(process.env.REACT_APP_WS_URL + "/api/product", { method: "GET" });
}

export function addProduct(product) {
    return fetch(process.env.REACT_APP_WS_URL + "/api/product", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(product)
    })
}