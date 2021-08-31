import React, {Component} from 'react';
import { Report } from 'powerbi-report-component';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.report = null; // to store the loaded report's object to perform operations like print, full screen etc..
  }
 
  handleDataSelected = (data) => {
    // will be called when some chart or data element in your report clicked
  }

  handleReportLoad = (report) => {
    // will be called when report loads:
    // - scripts and data received from server, visuals are rendered on the browser
    // - flickering Power BI logo stops appearing but report is not fully ready to be consumed

    this.report = report; // get the report object from callback and store it.(optional)
  }

  handleReportRender = (report) => {
    // will be called when report renders:
    // - visuals finish rendering
    // - report is fully visible and ready for consumption

    this.report = report; // get the report object from callback and store it.(optional)
  }

  handlePageChange = (data) => {
    // will be called when pages in your report changes
  }

  handleTileClicked = (data) => {
    console.log('Data from tile', data);
  }

  render() {
    const reportStyle = {
        // style object for report component
    };
    const extraSettings = {
            filterPaneEnabled: false, //true
            navContentPaneEnabled: false, //true
            hideErrors: false // Use this *only* when you want to override error experience i.e, use onError
            // ... more custom settings
    };
    return (
    <div className="root">
        <Report
            tokenType="Aad" // "Aad"
            accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvODA3ZWRhNDctYmMzOC00OWU1LTkwOGUtMGZkZDE5NGU1ZTU4LyIsImlhdCI6MTYyOTk4MzcyMiwibmJmIjoxNjI5OTgzNzIyLCJleHAiOjE2Mjk5ODc2MjIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFldWE2TFF6Mkx4bHlhRWFra0hrSmVlVjZObysvRkx4MWJtWFNyMitSeUdneGg2bWN1eEpmNUZVekRmczZQWWtlIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoibWFudGhhdGkiLCJnaXZlbl9uYW1lIjoic2FiaXRoYSIsImlwYWRkciI6IjYwLjI0My4yMjAuMjM4IiwibmFtZSI6InNhYml0aGEgbWFudGhhdGkiLCJvaWQiOiJmN2RmNzEwMy04YTU3LTRmYzYtOTE2Ny1lYTY3MWZhZDRhOGUiLCJwdWlkIjoiMTAwMzIwMDE2RUVFRUQ4OCIsInJoIjoiMC5BU3dBUjlwLWdEaTg1VW1RamdfZEdVNWVXQThCSElkaFhyRlBnNnlZWVFwLWtSQXNBTm8uIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiTWNGemdndkdkZk1DQWNqRHZheHB0TUhLbG9XM3lWMzJGRFlwTS1sMUhVSSIsInRpZCI6IjgwN2VkYTQ3LWJjMzgtNDllNS05MDhlLTBmZGQxOTRlNWU1OCIsInVuaXF1ZV9uYW1lIjoic2FiaXRoYS5tYW50aGF0aUBzdGFja2Flcm8uY29tIiwidXBuIjoic2FiaXRoYS5tYW50aGF0aUBzdGFja2Flcm8uY29tIiwidXRpIjoiTkdKWlQtSXV4a2VtRFVVTUpETW9BQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.ffPp3oKkJIa6xnj3Jyj1Ia7hG97RRDMQTACc9SW1usxuBjC2wGGImGmpVZmNgFfkHBj5Omx3WvCceXA7zEXJi8MQhngI2i3ya0E3DWd3gjteBPG9Qoiayh0bZJOakMPcMkxSHMWXOrQeRkrku5ONNB10SGLIZrpwRBjTs9JyjX4J-xCj7Po5tGIVh-mI-xM2PRKa_gi5SctdP3SezwaJepwlu4d_ciXjMD8Q6ldZjwWyf6zXtWVOlHtFEb7cydAE9zO3-weWRLe01vbQYpZjLWpZiKIZpgQrnKP97GlDHbw34jdd7_u71oTj8ZIjhAlmL8TIcZ2-YuTWFWHZpSziRg" // accessToken goes here
            embedUrl="https://app.powerbi.com/reportEmbed?reportId=14548175-0086-4956-98a9-50747df4d7a2&groupId=981190c8-a5f7-4f29-afb5-c3a88952df50&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtVVMtQi1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwiY2VydGlmaWVkVGVsZW1ldHJ5RW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d" // embedUrl goes here
            embedId="14548175-0086-4956-98a9-50747df4d7a2" // report or dashboard Id goes here
            pageName="" // set as current page of the report
            reportMode="View" // open report in a particular mode View/Edit/Create
            
           
            extraSettings={extraSettings}
            permissions="All" // View, For "Edit" mode permissions should be "All"
            style={reportStyle}
            onLoad={this.handleReportLoad}
            onRender={this.handleReportRender} // not allowed in "Create" mode
            onSelectData={this.handleDataSelected}
            onPageChange={this.handlePageChange}
            onTileClicked={this.handleTileClicked}
            onSave={this.handleReportSave} // works for "Edit" and "Create"
        />
    </div>
    );
  }
}