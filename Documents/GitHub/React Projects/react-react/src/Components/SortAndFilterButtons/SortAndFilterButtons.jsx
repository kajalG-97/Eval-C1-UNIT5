import { Text } from "../style";

export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <Text className="sortButtons">
      {/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */}
      <button className="sortByTitleAsc" onClick={handleSort}>sortByTitleAsc</button>
      <button className="sortByTitleDesc" onClick={handleSort}>sortByTitleDesc</button>
      <button className="sortByPriceAsc" onClick={handleSort}>sortByPriceAsc</button>
      <button className="sortByPriceDesc" onClick={handleSort}>sortByPriceDesc</button>
      

    </Text>
  );
};
