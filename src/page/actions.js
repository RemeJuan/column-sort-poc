export const API_START = 'API_START';
export const GET_TABLE_DATA_SUCCESS = 'GET_TABLE_DATA_SUCCESS';
export const GET_TABLE_DATA_ERROR = 'GET_TABLE_DATA_ERROR';
export const ADD_ATOM_TO_TABLE = 'ADD_ATOM_TO_TABLE';
export const REORDER_TREE = 'REORDER_TREE';
export const TOGGLE_MANAGE_PANEL = 'TOGGLE_MANAGE_PANEL';

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

export const toggleManagePanel = data => ({
  type: TOGGLE_MANAGE_PANEL,
  data,
});
