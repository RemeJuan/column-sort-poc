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

function updateAvailableAtoms(current, removed) {
  return current.map(a => {
    if (a.value === removed.value) return { ...a, active: true };

    return { ...a };
  });
}

function buildAvailableAtoms(data, atom) {
  return data.map(a => {
    if (a.value === atom.value) return { ...a, active: false };

    return { ...a };
  });
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
      return {
        ...state,
        treeData: buildTreeData(mergedData),
        availableAtoms: buildAvailableAtoms(
          state.availableAtoms,
          action.data.atom
        ),
      };
    }

    case REORDER_TREE: {
      return {
        ...state,
        treeData: action.data,
      };
    }

    case REORDER_SORTING:
      return {
        ...state,
        sortData: action.data,
      };

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
        availableAtoms: updateAvailableAtoms(state.availableAtoms, atom),
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

    case DATA_SORT_ASC_DESC: {
      const sortColumns = [...state.sortQuery, { ...action.data }];
      return {
        ...state,
        tableData: arrayMultiSort(state.sourceData, sortColumns),
      };
    }

    default:
      return state;
  }
}
