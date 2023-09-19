type TrendingItemProps = {
  tagName: string;
  tagCount: string;
};

export default function TrendingItem({ tagCount, tagName }: TrendingItemProps) {
  return (
    <li className="cursor-pointer px-4 py-2 hover:bg-accent transition-colors">
      <h1 className="text-sm font-medium leading-none text-primary">
        #{tagName}
      </h1>
      <span className="text-sm text-muted-foreground">{tagCount} Tags</span>
    </li>
  );
}
