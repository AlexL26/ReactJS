const items = [
    {
        id:"1",
        name: "Darth Vader",
        price: "2500$",
        img:"https://http2.mlstatic.com/D_NQ_NP_867813-MLA44133071954_112020-O.jpg",
    },
    {
        id:"2",
        name: "CLon Wars General Obi-Wan Kenobi",
        price: "2400$",
        img:"https://http2.mlstatic.com/D_NQ_NP_630516-MLA44807069877_022021-O.jpg",
    },
    {
        id:"3",
        name: "Luke Skywalker",
        price: "2000$",
        img:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/298/731/products/compra_funko_pop_movies_star_wars_luke_skywalker_501_61011_1200x1-3fc0f64d0d51b9755d16513528093192-640-0.jpg",   
    },
    {
        id:"4",
        name: "Darth Maul",
        price: "2300$",
        img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/841/670/products/darth-maul1-ae50027fb2c1fd550e16460660479633-1024-1024.jpg",
    },
    {
        id:"5",
        name: "Darth Sidius",
        price: "2300$",
        img:"https://http2.mlstatic.com/D_NQ_NP_768604-MLA44819503030_022021-O.jpg",
    },
    {
        id:"6",
        name: "Imperial Trooper",
        price: "2000$",
        img:"https://m.media-amazon.com/images/I/618MfrdXqML._AC_SL1000_.jpg",
    }
]

export default function showProduct(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 2000)
    })
}