import { tw } from "twind";
export interface CardProps {
  title: string;
  publishedAt: Date;
  text: string;
  link?: string;
}

export default function PostCard(props: CardProps) {
  return (
    <div class={tw`ml-3`}>
      <a
        href={`${props.link}`}
        class={tw`block mt-1 text-lg leading-tight font-medium text-black hover:underline`}
      >
        {props.title}
      </a>
      <p class={tw`text-gray-500 text-sm`}>
        {props.publishedAt.toLocaleString()}
      </p>
      <p class={tw`mt-2 text-slate-500`}>
        {props.text}
      </p>
    </div>
  );
}
