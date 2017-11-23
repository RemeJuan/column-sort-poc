import {
  API_START,
  GET_TABLE_DATA_SUCCESS,
  GET_TABLE_DATA_ERROR,
  ADD_ATOM_TO_TABLE,
  REORDER_TREE,
  TOGGLE_MANAGE_PANEL,
} from './actions';

const initialState = {
  loading: false,
  sourceData: [],
  availableAtoms: [],
  tableFields: [],
  treeData: [],
  manageActive: false,
};

function buildSelect(data) {
  return Object.keys(data[0]);
}

function buildTreeData(data) {
  return data.map(d => ({
    title: d.name,
    atom: d.atom,
  }));
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
        availableAtoms: buildSelect(action.data),
      };

    case ADD_ATOM_TO_TABLE: {
      const mergedData = [...state.tableFields, { ...action.data }];
      return {
        ...state,
        tableFields: mergedData,
        treeData: buildTreeData(mergedData),
      };
    }

    case REORDER_TREE:
      return {
        ...state,
        treeData: action.data,
      };

    case TOGGLE_MANAGE_PANEL:
      return {
        ...state,
        manageActive: !state.manageActive,
      };

    default:
      return state;
  }
}
