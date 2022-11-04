import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

export interface CardProps {
  title: string;
  published: Date;
  desription: string;
}

export default function Card(props: CardProps) {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div class="max-w-md mx-auto my-2 bg-white rounded-xl hover:shadow-md hover:cursor-pointer overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="p-8 relative">
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black"
          >
            {props.title}
          </a>
          <div class="absolute top-5 right-0 h-16 w-16 ...">
            <Button onClick={() => setLikeCount(likeCount + 1)}>
              + {likeCount}
            </Button>
          </div>
          <p class="mt-2 text-slate-500">
            {props.desription}
          </p>
        </div>
      </div>
    </div>
  );
}
