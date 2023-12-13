import { useDispatch, useSelector } from "react-redux";
import { addOrRemoveFromCart, isItemInCart } from '../../utility/cartUtils'

const categories = [
  {
    id:101,
    title: 'Carrots',
    description: 'Explore the latest additions to our collection.',
    thumbnail: 'https://www.bigbasket.com/media/uploads/p/l/10000070_15-fresho-carrot-orange.jpg?tr=w-640,q=80',
    price:25,
    TotalPrice:35
  },
  {id:102,
    title: 'Capsicum',
    description: 'Boost your productivity with these essentials.',
    thumbnail: 'https://www.bigbasket.com/media/uploads/p/m/10000067_23-fresho-capsicum-green.jpg?tr=w-1920,q=80',
    price:36,
    TotalPrice:50
  },
  {id:103,
    title: 'Tomato',
    description: 'Create your ideal workspace with our curated selection.',
    thumbnail: 'https://www.bigbasket.com/media/uploads/p/m/10000203_16-fresho-tomato-local.jpg?tr=w-3840,q=80',
    price:45,
    TotalPrice:70
  },
  {id:104,
    title: 'Potato',
    description: 'Fresho Potato',
    thumbnail: 'https://www.bigbasket.com/media/uploads/p/l/40048459_8-fresho-potato-new-crop.jpg?tr=w-640,q=80',
    price:15,
    TotalPrice:35
  },
];

const weightOptions = [1, 2, 3, 5]; // You can modify the weight options as needed

function CategoryCard() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleAddToCart = (item) => {
    addOrRemoveFromCart(dispatch, item, cartItems);
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
      {categories.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
          <div className="mb-4 aspect-w-1 aspect-h-1">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="rounded-md w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col flex-grow">
            <p className="text-md text-slate-800 font-semibold">Fresh</p>
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <div className="py-2">
              <select
                id={`${item.title}-weight`}
                className="block w-full p-2 border border-gray-300 rounded-md mt-1"
              >
                {weightOptions.map((weight, weightIndex) => (
                  <option key={weightIndex} value={weight}>
                    {weight} kg
                  </option>
                ))}
              </select>
            </div>
            <p className="text-gray-700 flex items-center py-2">
              <span className="text-lg font-bold">₹{item.price}<sub>/kg</sub></span>
              <span className="ml-2 line-through">₹{item.TotalPrice}</span>
            </p>
          </div>

          <div className="flex items-center justify-center mt-auto ring-1 rounded-md ring-red-500 hover:bg-red-500 hover:text-white cursor-pointer">
            <button onClick={() => handleAddToCart(item)} type="button" className="px-4 py-2">
              {/* Add */}
              {isItemInCart(item.id, cartItems) ? 'Remove' : 'Add to Cart'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryCard;


