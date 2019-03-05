var ref = db.collection('posts');

const query = ref.where('price', '>', 100)

query.get()
.then(snapshot => {
    snapshot.forEach(element => {
        data = element.data()
        document.write(`${data.title} : ${data.price} <br>`)
    });
})