export type FilterActionType = {
  type:
    | 'all'
    | 'notTransfers'
    | 'oneTransfer'
    | 'twoTransfer'
    | 'threeTransfer';
};
export const FilterActions = (
  type: FilterActionType['type']
): FilterActionType => {
  return {
    type,
  };
};
