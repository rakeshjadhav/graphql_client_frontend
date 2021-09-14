import React from "react";
import { Query } from "react-apollo";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Spinner
} from "reactstrap";
import { GET_DATA_FROM_GRAPHQL_API } from "./queries/Queries";



const App = ({ page }) => (
  <Query query={GET_DATA_FROM_GRAPHQL_API}>
    {({ loading, error, data }) => {
      if (loading) return <Spinner color="primary" />;
      if (error)
        return (
          <div>{`There was an error fetching the data ${error.message}`}</div>
        );
      console.log(data);
      return (
        <div className="App">
          
          <div className="container-fluid">
        <div className="row-fluid">
            <div className="col-md-12">
                <h2><i className="glyphicon glyphicon-user"></i> User Lists </h2>
             </div>   
            <div className="col-md-12">
                 <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink href="/">Home</NavLink></li>
                    {/* <li className="breadcrumb-item" aria-current="page">Library</li> */}
                  </ol>
                </nav>
             </div>


             </div>
             </div>

          <Container>

            <Row > 
              {data.page.map((item, i) => (
               

                   <div className="col-md-4" key={item.user_id} style={{paddingBottom : '12px'}}> 
                    <div className="card">
                      <div className="card-header">
                     Name :  {item.user_firstname} {item.user_lastname}
                      </div>
                      <div className="card-body">
                        <div className="float-left">
                            <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png" style={{width: '50px'}} />
                        </div>
                        <div className="float-right">
                            <p>Email : {item.user_email} </p>
                           
                        </div>
                      </div>
                    </div>
                </div>

              ))}
            </Row>
          </Container>
        </div>
      );
    }}
  </Query>
);

export default App;