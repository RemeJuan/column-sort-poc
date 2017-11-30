import { connect } from 'react-redux';
import PageComponent from './component';

import HOCLoader from '../core/hoc/loader';

import {
  addAtomToTable,
  reorderTree,
  toggleManagePanel,
  filterTableData,
  removeTreeBranch,
  addAtomToSorting,
  reorderSorting,
  dataSortAscDesc,
} from './actions';

import getData from './thunks';

const mapStateToProps = ({ pageReducer }) => ({
  ...pageReducer,
});

export const mapDispatchToProps = dispatch => ({
  setup() {
    dispatch(getData());
  },
  addItem(e) {
    e.preventDefault();
    const atom = JSON.parse(e.target[0].value);
    const name = e.target[1].value;
    dispatch(addAtomToTable({ atom, name }));
    dispatch(addAtomToSorting({ atom, name }));
    e.target.reset();
  },
  treeUpdate(data) {
    dispatch(reorderTree(data));
  },
  sortUpdate(data) {
    dispatch(reorderSorting(data));
  },
  togglePanel() {
    dispatch(toggleManagePanel());
  },
  tableFilter(value, key) {
    dispatch(filterTableData({ [key]: value }));
  },
  deleteItemFromTable(id, atom) {
    dispatch(removeTreeBranch({ id, atom }));
  },
  dataSorting(id, key, direction) {
    dispatch(dataSortAscDesc({ id, key, direction }));
  },
});

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(
  HOCLoader(PageComponent, 'setup', 'loading')
);

export default PageContainer;
