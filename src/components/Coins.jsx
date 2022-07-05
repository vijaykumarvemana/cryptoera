import { useGetCoinsQuery } from "../services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";

const Coins = ({ coins }) => {

    const { data, isFetching } = useGetCoinsQuery(12);
  if (isFetching) {
    return <div>Loading...</div>;
  }

  console.log(data?.data?.coins);
   return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
       <h2 className= "text-center text-3xl md:text-4xl font-extrabold  text-blue-600 my-3" >Top Crypto Currencies</h2>
    <div className="grid grid-cols-4 grid-cols-md-2 gap-4 py-4">

        {data?.data?.coins?.map((coin) => (
          <Link to={`/coins/${coin.uuid}`} key={coin.uuid}>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-5 "   >
            <div className="text-center mt-4"  >
              <p className="text-gray-600 font-bold">{coin.name}
              </p>
              <p className="text-sm font-hairline text-gray-600 mt-1">({coin.symbol})
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <img className="shadow sm:w-12 sm:h-12 w-10 h-10 rounded-full bg-gray-100" src={coin.iconUrl} alt="Avatar" />
            </div>
            <div className="mt-6 flex justify-between text-center">
              <div>
                <p className="text-gray-700 font-bold">{coin.rank}
                </p>
                <p className="text-xs mt-2 text-gray-600 font-hairline">Rank
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-bold">{millify(coin.marketCap, { precision: 1 })}
                </p>
                <p className="text-xs mt-2 text-gray-600 font-hairline">Market Cap
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-bold">{millify(coin.price,  { precision: 3})}$
                </p>
                <p className="text-xs mt-2 text-gray-700 font-hairline">price
                </p>
              </div>
            </div>
          </div>
          </Link>
       
        ))}
            
  

</div>
</div>
)

}

export default Coins;