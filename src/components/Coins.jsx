import { useGetCoinsQuery } from "../services/cryptoApi";
import millify from "millify";

const Coins = ({ coins }) => {

    const { data, isFetching } = useGetCoinsQuery(12);
  if (isFetching) {
    return <div>Loading...</div>;
  }

  console.log(data?.data?.coins);
   return (
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
       <h2 className= "text-center text-3xl md:text-4xl font-extrabold  text-blue-600 my-3" >Top Crypto Currencies</h2>
    <div class="grid grid-cols-4 grid-cols-md-2 gap-4">

        {data?.data?.coins?.map((coin) => (
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-5" key={coin.uuid}>
            
            
            <div class="text-center mt-4">
              <p class="text-gray-600 font-bold">{coin.name}
              </p>
              <p class="text-sm font-hairline text-gray-600 mt-1">({coin.symbol})
              </p>
            </div>
            <div class="flex justify-center mt-4">
              <img class="shadow sm:w-12 sm:h-12 w-10 h-10 rounded-full bg-gray-100" src={coin.iconUrl} alt="Avatar" />
            </div>
            <div class="mt-6 flex justify-between text-center">
              <div>
                <p class="text-gray-700 font-bold">{coin.rank}
                </p>
                <p class="text-xs mt-2 text-gray-600 font-hairline">Rank
                </p>
              </div>
              <div>
                <p class="text-gray-700 font-bold">{millify(coin.marketCap, { precision: 1 })}
                </p>
                <p class="text-xs mt-2 text-gray-600 font-hairline">Market Cap
                </p>
              </div>
              <div>
                <p class="text-gray-700 font-bold">{millify(coin.price,  { precision: 3})}$
                </p>
                <p class="text-xs mt-2 text-gray-700 font-hairline">price
                </p>
              </div>
            </div>
          </div>
       
        ))}
            
  

</div>
</div>
)

}

export default Coins;