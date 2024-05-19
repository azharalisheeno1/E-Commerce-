import image1 from "../assets/category__1.webp";
import image2 from "../assets/category__2.webp";
import image3 from "../assets/category__3.webp";
import image4 from "../assets/category__4.webp";
import image5 from "../assets/category__5.webp";
import image6 from "../assets/category__6.webp";
import image7 from "../assets/category__7.webp";
import image8 from "../assets/maggi.jpg";
function Categories() {
  const products = [
    { id: 1, name: "Fresh Fruits", items: "10 Products", image: image1 },
    { id: 2, name: "Fresh Vagetables", items: "8 Products", image: image2 },
    { id: 3, name: "Canned Goods", items: "10 Products", image: image3 },
    { id: 4, name: "Bread & Bakery", items: "15 Products", image: image4 },
    { id: 5, name: "Fishes", items: "5 Products", image: image5 },
    { id: 6, name: "Eggs & Dairy", items: "7 Products", image: image6 },
    { id: 7, name: "Soft Drinks", items: "5 Products", image: image7 },
    { id: 8, name: "Maggi", items: "20 Products", image: image8 },
  ];

  return (
    <>
      <div className="w-full  h-full my-5   ">
        <div className="flex gap-4 flex-wrap justify-center   px-10 mx-auto md:mt-20 mt-5 items-center ">
          {/* Card Start */}

          {products.map((product) => (
            <>
              <div
                key={product.id}
                className="border hover:scale-105 flex justify-between p-3 items-center rounded-lg border-gray w-full md:w-[360px]"
              >
                <div>
                  <h1 className="text-xl my-2 md:text-2xl">{product.name}</h1>
                  <p className="text-gray-600">{product.items}</p>
                </div>
                <img src={product.image} className="w-20 md:w-28" alt="" />
              </div>
            </>
          ))}
          {/* Card ENd */}
        </div>
      </div>
    </>
  );
}

export default Categories;
