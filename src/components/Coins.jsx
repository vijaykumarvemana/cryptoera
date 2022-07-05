import { useGetCoinsQuery } from "../services/cryptoApi";
import millify from "millify";

const Coins = ({ coins }) => {

    const { data, isFetching } = useGetCoinsQuery(12);
  if (isFetching) {
    return <div>Loading...</div>;
  }

  console.log(data?.data?.coins);
   return (
    <div class="container mx-auto">
       <h2 className= "text-center text-3xl md:text-4xl font-extrabold  text-blue-600 my-3" >Top Crypto Currencies</h2>
    <div class="grid grid-cols-4 gap-4">

        {data?.data?.coins?.map((coin) => (
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={coin.uuid}>
            
            <div className="p-5 ">
                <div className="flex justify-center">
                    <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white pr-2">{coin.name}</h5>
                    <img className="w-6 h-6 " src={coin.iconUrl} alt="" />
                </div>
                <div className="flex justify-between">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rank: {coin.rank}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Market Cap: {millify(coin.marketCap)}</p>
                </div>
                <div className="flex justify-between">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rank: {coin.rank}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Market Cap: {millify(coin.marketCap)}</p>
                </div>
                <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
        ))}
            
  

</div>
</div>
)

}

export default Coins;