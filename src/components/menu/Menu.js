export default function Menu() {
  const products = [
    {
      img: "/menu-pics/caffetteria/caffe.webp",
      title: "Caffè / Macchiato",
      price: "1.10€",
    },
    {
      img: "/menu-pics/caffetteria/deca.webp",
      title: "Caffè Deca / Macchiato Deca",
      price: "1.10€",
    },
    {
      img: "/menu-pics/caffetteria/cappuccino.webp",
      title: "Cappuccino",
      price: "1.40€",
    },
    {
      img: "/menu-pics/caffetteria/cappuccino-deca.webp",
      title: "Cappuccino Deca",
      price: "1.50€",
    },
    {
      img: "/menu-pics/caffetteria/marocchino.webp",
      title: "Marocchino",
      price: "1.30€",
    },
    {
      img: "/menu-pics/caffetteria/lattè.webp",
      title: "Latte Macchiato",
      price: "1.50€",
    },
    {
      img: "/menu-pics/caffetteria/hotmilk.webp",
      title: "Latte Caldo",
      price: "1.20€",
    },
    {
      img: "/menu-pics/caffetteria/caffeorzo.webp",
      title: "Orzo / Macchiato",
      price: "1.40€",
    },
    {
      img: "/menu-pics/caffetteria/cioccolata.webp",
      title: "Cioccolata Calda",
      price: "3.00€",
    },
    {
      img: "/menu-pics/caffetteria/ginseng.webp",
      title: "Ginseng / Macchiato",
      price: "1.40€",
    },
    {
      img: "/menu-pics/caffetteria/espressoshakerato.webp",
      title: "Espresso Shakerato",
      price: "3.00€",
    },
    {
      img: "/menu-pics/caffetteria/espressoshakeratocorretto.webp",
      title: "Espresso Shakerato Corretto",
      price: "4.50€",
    },
    {
      img: "/menu-pics/caffetteria/caffecorretto.webp",
      title: "Caffè Corretto",
      price: "1.80€",
    },
    {
      img: "/menu-pics/caffetteria/caffeamericano.webp",
      title: "Caffè Americano",
      price: "1.20€",
    },
    {
      img: "/menu-pics/caffetteria/thè.webp",
      title: "Tè caldo",
      price: "2.50€",
    },
  ];

  return (
    <div className="container mx-auto p-2">
      <div className="grid grid-cols-1 gap-2 max-w-screen-md mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-center p-2 border-b border-gray-300"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-1/3 max-w-[90px] max-h-[80px] rounded-full object-cover"
            />
            <div className="flex flex-col w-2/3 justify-between ml-2">
              <span className="text-left ms-3 text-2xl mb-1">
                {product.title}
              </span>
              <span className="text-right">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
