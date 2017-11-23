import { connect } from "react-redux";
import PageComponent from "./component";

const mapStateToProps = ({ pageReducer }) => ({
  ...pageReducer
});

export const mapDispatchToProps = () => ({});

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(
  PageComponent
);

export default PageContainer;
