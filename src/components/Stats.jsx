import { useGetCoinsQuery } from "../services/cryptoApi";
import millify from "millify";
const Stats = () => {
  const { data, isFetching } = useGetCoinsQuery(10);
  if (isFetching) {
    return <div>Loading...</div>;
  }
console.log(data?.data);
  const stats = data?.data?.stats;
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
      <h2 className= "text-center text-3xl md:text-4xl font-extrabold  text-blue-600 mt-4" >Global Crypto Stats</h2>
        <div className="max-w-screen-xl px-4 py-4 mx-auto text-center lg:py-10 lg:px-6">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                {millify(stats.totalCoins)}
              </dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
                Total Cryptocurrencies
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">{millify(stats.totalExchanges)}</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
              Total Exchanges
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">{millify(stats.totalMarketCap)}</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
              Total Market Cap
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">{millify(stats.total24hVolume)}</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
              Total 24h Volume
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">{millify(stats.totalMarkets)}</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">
              Total Markets
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
};

export default Stats;
