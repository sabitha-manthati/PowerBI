

import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import React, {Component} from 'react';
import { Report } from 'powerbi-report-component';

var basicFilter = {
  $schema: "http://powerbi.com/product/schema#basic",
  target: {
    table: "District",
    column: "District Manager"
   
  },
  operator: "In",
  values: ['Allan Guinot'],
  filterType: models.FilterType.BasicFilter,
  requireSingleSelection: true
}
// const advancedFilter = {
//   $schema: "http://powerbi.com/product/schema#advanced",
//   target: {
//     table: "Store",
//     column: "Name"
//   },
//   logicalOperator: "Or",
//   conditions: [
//     {
//       operator: "Contains",
//       value: "Wash"
//     },
//     {
//       operator: "Contains",
//       value: "Direct"
//     }
//   ],
//   values: ['York Fashions Direct'],
//   filterType: models.FilterType.AdvancedFilter
// }


let target = {
  table: "District",
   column: "District Manager"
  //values:'Allan Guinot'
 

  
};




let slicers = [
  {
    selector: {
      $schema: "http://powerbi.com/product/schema#slicerTargetSelector",
     
     target:target
    },
    state: {
      filters:[basicFilter]
    }
  }
]


function App() {

  
  return (
  
    <div className="App">
      
      
    <PowerBIEmbed
             
              
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: '14548175-0086-4956-98a9-50747df4d7a2',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=14548175-0086-4956-98a9-50747df4d7a2&groupId=981190c8-a5f7-4f29-afb5-c3a88952df50&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtVVMtQi1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJtb2Rlcm5FbWJlZCI6dHJ1ZSwiY2VydGlmaWVkVGVsZW1ldHJ5RW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
            accessToken:'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvODA3ZWRhNDctYmMzOC00OWU1LTkwOGUtMGZkZDE5NGU1ZTU4LyIsImlhdCI6MTYzMDAzNDg2NywibmJmIjoxNjMwMDM0ODY3LCJleHAiOjE2MzAwMzg3NjcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFYQlhSVDIvSXlaSDJkS1pzdkJhcmJoQ0JxRk83MFR4ZWtrUVgrcmRxaFBiMi8zaUtDRG9zZFIvSW9paWszQlViIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoibWFudGhhdGkiLCJnaXZlbl9uYW1lIjoic2FiaXRoYSIsImlwYWRkciI6IjYwLjI0My4yMjAuMjM4IiwibmFtZSI6InNhYml0aGEgbWFudGhhdGkiLCJvaWQiOiJmN2RmNzEwMy04YTU3LTRmYzYtOTE2Ny1lYTY3MWZhZDRhOGUiLCJwdWlkIjoiMTAwMzIwMDE2RUVFRUQ4OCIsInJoIjoiMC5BU3dBUjlwLWdEaTg1VW1RamdfZEdVNWVXQThCSElkaFhyRlBnNnlZWVFwLWtSQXNBTm8uIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiTWNGemdndkdkZk1DQWNqRHZheHB0TUhLbG9XM3lWMzJGRFlwTS1sMUhVSSIsInRpZCI6IjgwN2VkYTQ3LWJjMzgtNDllNS05MDhlLTBmZGQxOTRlNWU1OCIsInVuaXF1ZV9uYW1lIjoic2FiaXRoYS5tYW50aGF0aUBzdGFja2Flcm8uY29tIiwidXBuIjoic2FiaXRoYS5tYW50aGF0aUBzdGFja2Flcm8uY29tIiwidXRpIjoiYU9wSGxET0trVVNPWVZHWVhuTlVBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.YieCjsQxJNpq1Z9vsQUxCtfHs5r8L0oaQG4GKh2BYjhqPJ4jBc4EDV8HqkXUHmrjRvY8H37ErGTg9nV_m-QPaft84q-nrbKfRL0pY4Qu225NZ6sbRx_IyG3lEJtZHYiicz7MvoyujqrlEs0QVkmaPNdrRH2IHd91o0GtoH0Oig9oYp0OkncsYBvjWZgFHC7Wg42UOSVt02nOe2daTOQtjKn4xsWmsQwuSGaCkax5BsVCk-l5tDMRWyGC-wPXDxZjDZ82JPU9bg-4L1nXqFzvqKdBVIEoheH_qz0hzjQVEUV--im8EWm1QkOZ_nlh67Voj79HPgNMxgfHWahOjRNfOw',
            tokenType: models.TokenType.Aad,
            filterPaneEnabled: false,
            viewMode: models.ViewMode.View,
            permissions: models.Permissions.All,
            //filters:[advancedFilter],
            slicers:slicers,
            settings: {
              panes: {
                //filters: {  expanded: false,  visible: true }
                
                visible: true ,
                expanded: false

                  
                  
                 
              
              }
             
            }
          }}

          
          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        /> 












      
    </div>
  );
}

export default App;
