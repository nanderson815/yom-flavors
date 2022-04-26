import { json } from "@remix-run/node";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { getFlavor, getImageUrl } from "~/utilities";
import type { DocumentData } from "firebase/firestore";

export interface Flavor {
  id: string;
  name: string;
  desc: string;
  image: string;
  image2: string;
  primaryColor: string;
  secondaryColor: string;
  ingredients: Ingredient[];
}

interface Ingredient {
  desc: string;
  icon: string;
}

export const loader: LoaderFunction = async ({ params }) => {
  const data: DocumentData | undefined = await getFlavor(params.slug);
  if (data) {
    const scoopUrl = await getImageUrl(data?.image);
    const secondaryImgUrl = await getImageUrl(data?.image2);
    data.ingredients = await Promise.all(
      data.ingredients.map(async (ingredient: Ingredient) => {
        const url = await getImageUrl(ingredient.icon);
        return { ...ingredient, icon: url };
      })
    );
    return json({
      data: {
        ...data,
        image: scoopUrl,
        image2: secondaryImgUrl,
      },
    });
  } else {
    return { data };
  }
};

export default function PostSlug() {
  const { data }: { data: Flavor } = useLoaderData();

  const context = useOutletContext();
  console.log(context);

  console.log(data);

  if (!data) {
    return (
      <main>
        <h1>Flavor not found!</h1>
      </main>
    );
  }
  return (
    <div className="flex flex-row flex-wrap w-full">
      <div className="sm:basis-full mt-12 lg:mt-0 lg:basis-1/3 grow flex items-center">
        <div>
          <h1 className="text-5xl font-bold Alatsi">{data.name}</h1>
          <p className="text-2xl Alatsi">{data.desc}</p>
          <img
            className="w-full hidden lg:block"
            src={data.image2}
            style={{ height: 400, objectFit: "cover", borderRadius: 10 }}
            alt={`A scoop of ${data.name}`}
          />
        </div>
      </div>

      <div className="sm:basis-full lg:basis-1/3 flex items-end -my-16">
        <img
          src={data.image}
          alt={`A scoop of ${data.name}`}
          className="rotate-90 lg:w-full main-image lg:rotate-0 lg:h-5/6 lg:object-cover"
        />
      </div>

      <div className="sm:basis-full lg:basis-1/3 grow flex items-center">
        <div>
          {data.ingredients.map((item: Ingredient) => (
            <div key={item.desc}>
              <p>{item.desc}</p>
              <img
                src={item.icon}
                style={{ height: 75 }}
                alt={`${item.desc}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
