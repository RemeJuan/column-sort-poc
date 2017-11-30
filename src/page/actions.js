export const API_START = 'API_START';
export const GET_TABLE_DATA_SUCCESS = 'GET_TABLE_DATA_SUCCESS';
export const GET_TABLE_DATA_ERROR = 'GET_TABLE_DATA_ERROR';
export const ADD_ATOM_TO_TABLE = 'ADD_ATOM_TO_TABLE';
export const ADD_ATOM_TO_SORTING = 'ADD_ATOM_TO_SORTING';
export const REORDER_TREE = 'REORDER_TREE';
export const REORDER_SORTING = 'REORDER_SORTING';
export const TOGGLE_MANAGE_PANEL = 'TOGGLE_MANAGE_PANEL';
export const FILTER_TABLE_DATA = 'FILTER_TABLE_DATA';
export const REMOVE_TREE_BRANCH = 'REMOVE_TREE_BRANCH';
export const DATA_SORT_ASC_DESC = 'DATA_SORT_ASC_DESC';

export const apiStart = () => ({
  type: API_START,
});

export const getTableDataSuccess = data => ({
  type: GET_TABLE_DATA_SUCCESS,
  data,
});

export const getTableDataError = data => ({
  type: GET_TABLE_DATA_ERROR,
  data,
});

export const addAtomToTable = data => ({
  type: ADD_ATOM_TO_TABLE,
  data,
});

export const reorderTree = data => ({
  type: REORDER_TREE,
  data,
});

export const reorderSorting = data => ({
  type: REORDER_SORTING,
  data,
});

export const toggleManagePanel = data => ({
  type: TOGGLE_MANAGE_PANEL,
  data,
});

export const filterTableData = data => ({
  type: FILTER_TABLE_DATA,
  data,
});

export const removeTreeBranch = data => ({
  type: REMOVE_TREE_BRANCH,
  data,
});

export const addAtomToSorting = data => ({
  type: ADD_ATOM_TO_SORTING,
  data,
});

export const dataSortAscDesc = data => ({
  type: DATA_SORT_ASC_DESC,
  data,
});
