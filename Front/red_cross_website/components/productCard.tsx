import { useRouter } from "next/router";
import Image from "next/image";

export default function ProductCard({ param }) {
  const router = useRouter();
  const number: number = param.star;
  let array = [];
  let index: number = 0;

  while (index < number) {
    array.push(index);
    index++;
  }

  return (
    <div>
      <div
        className="relative h-[30vw] w-2/2< p-4 rounded-xl bg-gray text-center hover:drop-shadow-md hover:bg-white ease-in-out duration-300 font-mono cursor-pointer"
        onClick={() => router.push(`/products/${param.id}`)}
      >
        <h1 className="p-2 text-lg font-lg ">{param.name}</h1>
        <div className="relative w-full h-3/4 bg-black">
          <Image src={param.image} fill alt="placeholder" />
        </div>
        <div className="p-2">
          <h1>{param.description}</h1>
          <div className="grid  grid-cols-2 justify-center">
            <p>200€</p>
            <div className="flex ">
              {array.map((index) => (
                <Image
                  src="star.svg"
                  width={15}
                  height={15}
                  key={array[index]}
                  alt="placeholder"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
