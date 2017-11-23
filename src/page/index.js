import { connect } from 'react-redux';
import PageComponent from './component';

import HOCLoader from '../core/hoc/loader';

import { addAtomToTable, reorderTree, toggleManagePanel } from './actions';

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
    const atom = e.target[0].value;
    const name = e.target[1].value;
    dispatch(addAtomToTable({ atom, name }));
    e.target.reset();
  },
  treeUpdate(data) {
    dispatch(reorderTree(data));
  },
  togglePanel() {
    dispatch(toggleManagePanel());
  },
});

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(
  HOCLoader(PageComponent, 'setup', 'loading')
);

export default PageContainer;
