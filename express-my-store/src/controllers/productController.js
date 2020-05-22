let dataProduct = [
    { id: 159008767, productName: 'Pensil 2B', category: { id: 'CAT001', categoryName: 'ATK' } },
    { id: 159008768, productName: 'Penghapus Karet', category: { id: 'CAT001', categoryName: 'ATK' } },
    { id: 159008769, productName: 'Kursi Kayu Jati', category: { id: 'CAT002', categoryName: 'Furnitur' } },
    { id: 159008770, productName: 'Meja Keramik', category: { id: 'CAT002', categoryName: 'Furnitur' } },
    { id: 159008771, productName: 'Baju Batik Anak', category: { id: 'CAT003', categoryName: 'Busana' } },
    { id: 159008772, productName: 'Kemeja Lengan Panjang Pria', category: { id: 'CAT003', categoryName: 'Busana' } }
]

class ProductController {
    static findAll(req, res, next) {
        try {
            const product = dataProduct;
            if (product.length !== 0) {
                res.json({
                    status: "OK",
                    messages: "SUCCESS",
                    data: product
                });
            } else {
                res.json({
                    status: "ERROR",
                    messages: "EMPTY",
                    data: {}
                });
            }
        } catch (err) {
            console.log(err);
            res.json({
                status: "ERROR",
                messages: err.messages,
                data: {}
            });
        }
    }

    static create(req, res, next) {
        try {
            const rand = Math.floor(Date.now() / 10000);
            const dataLen = dataProduct.length;
            const newProduct = { id: rand, ...req.body };
            dataProduct.push(newProduct);
            if (dataLen <= dataProduct.length) {
                res.status(201).json({
                    status: "OK",
                    messages: "SUCCESS",
                    data: dataProduct[dataProduct.length - 1]
                });
            }
        } catch (err) {
            console.log(err);
            res.status(400).json({
                status: "ERROR",
                messages: err.message,
                data: {},
            });
        }
    }

    static update(req, res, next) {
        try {
            const product = {id: Number(req.params.id), ...req.body}
            const dataLen = dataProduct.length;
            const elementIndex = dataProduct.findIndex(element => element.id === Number(req.params.id));
            dataProduct[elementIndex] = product
            if (dataLen === dataProduct.length) {
                res.json({
                    status: "OK",
                    messages: "SUCCESS",
                    data: dataProduct[elementIndex]
                });
            }
        } catch (err) {
            console.log(err);
            res.status(400).json({
                status: "ERROR",
                messages: err.message,
                data: {},
            });
        }
    }

    static destroy(req, res, next) {
        try {
            const dataLen = dataProduct.length;
            const elementIndex = dataProduct.findIndex(element => element.id === Number(req.params.id));
            const dataDeleted = dataProduct[elementIndex]
            dataProduct.splice(elementIndex, 1);
            if (dataLen >= dataProduct.length) {
                res.json({
                    status: "OK",
                    messages: "SUCCESS",
                    data: dataDeleted
                });
            }
        } catch (err) {
            console.log(err);
            res.status(400).json({
                status: "ERROR",
                messages: err.message,
                data: {},
            });
        }
    }
}

module.exports = ProductController;
