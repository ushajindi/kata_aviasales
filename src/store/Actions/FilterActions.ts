export type FilterActionType = {
  type:
    | 'all'
    | 'notTransfers'
    | 'oneTransfer'
    | 'twoTransfer'
    | 'threeTransfer'
    | 'isFAST'
    | 'isLowPrice';
};
export const FilterActions = (
  type: FilterActionType['type']
): FilterActionType => {
  return {
    type,
  };
};
