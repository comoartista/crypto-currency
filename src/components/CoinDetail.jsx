import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import Skeleton from "./Skeleton";

export default function CoinDetail() {
  const { id } = useParams();
  const { responce } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
  );

  if (!responce)
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-8 w-32 mb-4" />
        <Skeleton className="h-72 w-full mt-10" />
      </div>
    );

  console.log(responce);
  return (
    <div className="my-6">
      <div className="flex gap-2 items-center mt-10 mb-2">
        <img src={responce.image.small} alt={responce.name} />
        <h1 className="uppercase  text-[#B6B6B6] py-5 tracking-wide">
          {responce.name}
        </h1>
      </div>
      <p
        className="[&>a]:underline cursor-pointer text-[#B6B6B6] text-sm "
        dangerouslySetInnerHTML={{ __html: responce.description.en }}></p>
    </div>
  );
}
