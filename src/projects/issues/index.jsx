import { Component } from "react";
import { getIssues } from "./utils/get-users";
import Issue from "./components/issue";

class Issues extends Component {
  render() {
    return (
      <div className='issues'>
        {getIssues(15).map((issue, index) => (
          <Issue issue={issue} />
        ))}
      </div>
    );
  }
}

export default Issues;
