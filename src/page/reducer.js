import arrayFilter from '@iplatformglobal/array-multi-filter';
import arrayMultiSort from '@iplatformglobal/array-multi-sort';

import {
  API_START,
  GET_TABLE_DATA_SUCCESS,
  ADD_ATOM_TO_TABLE,
  REORDER_TREE,
  TOGGLE_MANAGE_PANEL,
  FILTER_TABLE_DATA,
  REMOVE_TREE_BRANCH,
  ADD_ATOM_TO_SORTING,
  REORDER_SORTING,
  DATA_SORT_ASC_DESC,
} from './actions';

const initialState = {
  loading: false,
  sourceData: [],
  availableAtoms: [],
  tableData: [],
  treeData: [], // What data goes into table
  sortData: [], // What data goes into ASC/DESC sorting
  manageActive: false,
  filterQuery: {},
  sortQuery: [],
};

function buildSelect(data) {
  return Object.keys(data[0]).map(k => ({
    active: true,
    value: k,
  }));
}

function buildTreeData(data) {
  const id = Math.random();

  return data.map(d => ({
    id,
    title: d.title,
    name: d.name,
    atom: d.atom,
  }));
}

function buildAvailableAtoms(data, atom) {
  return data.map(a => {
    if (a.value === atom.value) return { ...a, active: false };

    return { ...a };
  });
}

function toggleActiveStatus(data, value) {
  return data.map(a => {
    if (a.value === value) return { ...a, active: !a.active };

    return { ...a };
  });
}

function sortData(data, columns) {
  return [...arrayMultiSort(data, columns)];
}

export default function pageReducer(state = initialState, action) {
  switch (action.type) {
    case API_START:
      return {
        ...state,
        loading: true,
      };

    case GET_TABLE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        sourceData: action.data,
        tableData: action.data,
        availableAtoms: buildSelect(action.data),
      };

    case ADD_ATOM_TO_TABLE: {
      const mergedData = [...state.treeData, { ...action.data }];
      const sortColumns = [
        ...mergedData.map(a => ({
          key: a.atom.value,
          direction: 'ASC',
        })),
        ...state.sortQuery,
      ];

      return {
        ...state,
        treeData: buildTreeData(mergedData),
        tableData: sortData(state.sourceData, sortColumns),
        availableAtoms: toggleActiveStatus(
          state.availableAtoms,
          action.data.atom.value
        ),
      };
    }

    case REORDER_TREE: {
      return {
        ...state,
        treeData: action.data,
      };
    }

    case FILTER_TABLE_DATA:
      const filterQuery = {
        ...state.filterQuery,
        ...action.data,
      };

      return {
        ...state,
        filterQuery,
        tableData: state.sourceData.filter(arrayFilter, filterQuery),
      };

    case REMOVE_TREE_BRANCH: {
      const { id, atom } = action.data;
      return {
        ...state,
        treeData: state.treeData.filter(t => t.id !== id),
        availableAtoms: toggleActiveStatus(state.availableAtoms, atom.value),
      };
    }

    case ADD_ATOM_TO_SORTING: {
      const mergedData = [...state.sortData, { ...action.data }];
      return {
        ...state,
        sortData: buildTreeData(mergedData),
      };
    }

    case TOGGLE_MANAGE_PANEL:
      return {
        ...state,
        manageActive: !state.manageActive,
      };

    case REORDER_SORTING:
      const sortCOlumns = [
        ...action.data.map(a => ({
          key: a.atom.value,
          direction: 'ASC',
        })),
        ...state.sortQuery,
      ];

      return {
        ...state,
        sortData: action.data,
        tableData: sortData(
          state.sourceData.filter(arrayFilter, state.filterQuery),
          sortCOlumns
        ),
      };

    case DATA_SORT_ASC_DESC: {
      const { sortQuery, sourceData, filterQuery } = state;

      const sortColumns = [...sortQuery, { ...action.data }];
      const filtered = sourceData.filter(arrayFilter, filterQuery);

      return {
        ...state,
        tableData: sortData(filtered, sortColumns),
      };
    }

    default:
      return state;
  }
}
