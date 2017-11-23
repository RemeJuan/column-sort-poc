import React, { Component } from "react";
import SortableTree from "react-sortable-tree";

import DynamicTable from "../table";

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 31,
    gender: "Male",
    married: "Yes",
    homeOwner: "No"
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 32,
    gender: "Female",
    married: "Yes",
    homeOwner: "Yes"
  }
];

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        {
          title: "Name",
          column: "name"
        },
        {
          title: "Age",
          column: "age"
        },
        {
          title: "Gender",
          column: "gender"
        }
      ]
    };
  }

  render() {
    const { treeData } = this.state;

    return (
      <div>
        <div style={{ height: 200 }}>
          <SortableTree
            treeData={treeData}
            onChange={treeData => this.setState({ treeData })}
          />
        </div>
        <DynamicTable
          headings={treeData.map(d => d.title)}
          displayColumns={treeData.map(d => d.column)}
          data={data}
        />
      </div>
    );
  }
}

export default Page;
