import React, { Component } from "react";

class UserCards extends Component {
  state = {
    data: [],
    per: 12,
    page: 1,
    total_pages: null,
    isActive: ''
  };


  uppercase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadData = () => {
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: [...data, ...json.results],
          scrolling: false,
          total_pages: json.info.results
        });
      });
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadData
    );
  };

  componentDidMount() {
    this.loadData();
  }

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render()
  
 
  {
    const isActive = this.state.isActive;
    return (
      <div className="clearfix">
        <div className="row mb-3">
            <div className="col-lg-4">
                <div className="form-group row">
                    <label className="col-sm-4">
                        Sorting
                    </label>
                    <div className="col-sm-8">
                    <select className="form-control">
                        <option>Sorting</option>
                        <option>Sort by Name</option>
                        <option>Sort by Office</option>
                    </select>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="form-group row">
                    <label className="col-sm-4">
                        Filter
                    </label>
                    <div className="col-sm-8">
                    <input className="form-control" placeholder="Filter by name or office" />
                    </div>
                </div>
            </div>
            <div className="col-lg-4 text-right">
                <button className="theme-btn" data-toggle="tooltip" title="Grid" onClick={this.handleToggle}><i class="fas fa-th-large"></i></button>
            </div>
        </div>
        <div className="row">
          {this.state.data.map(data => (
            <div className={isActive ? "col-lg-6 col-md-6 mb-4 animated fadeIn grid " : "col-md-4 mb-4 col-lg-3 animated fadeIn grid"} key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                 <div className="flex-div">
                    <div className="w-49">
                    <p className="card-title font-weight-bold">
                    {this.uppercase(data.name.first) +
                      " " +
                      this.uppercase(data.name.last)}

                      <span className="icons-span">
                          <a href="#" className=""><i className="fab fa-linkedin-in"></i></a>
                          <a href="#" className=""><i className="fab fa-github"></i></a>
                          <a href="#" className=""><i className="fab fa-twitter"></i></a>
                      </span>
                  </p>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      this.uppercase(data.location.state)}
                    {/* <br />
                    <span className="phone">{data.phone}</span> */}
                  </p>    
                        </div> 
                        <div className="w-49">

                            </div> 
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="btn btn-light btn-block w-50 mx-auto"
          onClick={e => {
            this.loadMore();
          }}
        >
          Load More Users
        </button>
      </div>
    );
  }
}

export default UserCards;
