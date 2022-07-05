import { useGetCoinsQuery } from "../services/cryptoApi";
import millify from "millify";

const Stats = () => {
  const { data, isFetching } = useGetCoinsQuery(10);
  if (isFetching) {
    return <div className="flex items-center justify-center">
    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
     
    </div>
  </div>
  }
console.log(data?.data);
  const stats = data?.data?.stats;
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
     
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 ">
      <h2 className= "text-center text-3xl md:text-4xl font-extrabold  text-blue-600 my-3" >Global Cryptocurrencies Stats</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center ">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">
           {stats?.totalCoins}
          </h6>
          <p className="mb-2 font-bold text-md">Total Coins</p>
          <p className="text-gray-700">
          Crypto, is any form of currency that exists digitally or virtually and uses cryptography to secure transactions.
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
          <svg
              className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">
            {stats?.totalExchanges}
          </h6>
          <p className="mb-2 font-bold text-md">Total Exchanges</p>
          <p className="text-gray-700">
          The Total crypto exchanges that have coins available for trading.
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">{millify(stats.totalMarketCap, { precision: 2})}</h6>
          <p className="mb-2 font-bold text-md">Total Market Cap</p>
          <p className="text-gray-700">
            It's a helluva start, being able to recognize what makes you happy
            today, in this moment.
          </p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
            <svg
              className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">{millify(stats.total24hVolume, {precision:2})}</h6>
          <p className="mb-2 font-bold text-md">Total 24h Volume</p>
          <p className="text-gray-700">
            Happiness is when what you think, what you say, and what you do are
            in harmony.
          </p>
        </div>
      </div>
    </div>
      </section>
    </>
  );
};

export default Stats;
