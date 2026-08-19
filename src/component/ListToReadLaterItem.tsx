import type { ListToReadLaterItemType } from '../store/types';

interface ListToReadLaterItemProps {
  item: ListToReadLaterItemType;
}
export const ListToReadLaterItem = ({ item }: ListToReadLaterItemProps) => {
  return (
    <div>
      <img src={item.img} alt={item.name} />
      <h4>{item.name}</h4>
      <h5>{item.author}</h5>
    </div>
  );
};
