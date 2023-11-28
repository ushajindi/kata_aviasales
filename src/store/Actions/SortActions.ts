export type SortActionsType = {
  type: 'isFast' | 'isLowPrice';
};

export const sortAction = (type: SortActionsType['type']): SortActionsType => {
  return {
    type,
  };
};
