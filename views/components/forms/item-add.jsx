import React from 'react';

class AddItemForm extends React.Component {
    render() {
        let companySelect = this.props.companyData.map (item => {
            return <option value={item.company_id}>{item.company_id} {item.company_name}</option>
        });
        let brandSelect = this.props.brandData.map (item => {
            return <option value={item.brand_id}>{item.brand_id} {item.brand_name}</option>
        });
        return (
            <div className="modal fade" id="addNewItemModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title" id="exampleModalCenterTitle">Add a New Item</h2>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form enctype="multipart/form-data" action="/items/add" autoComplete="off" method="POST">
                    <div className="row">
                        <div className="col-sm-12">
                            <input type="text" name="name" placeholder="Item Name" required/>
                        </div>
                        <div className="col-sm-6">
                            <select name="company" required>
                                {companySelect}
                            </select>
                        </div>
                        <div className="col-sm-6">
                            <select name="brand" required>
                                {brandSelect}
                            </select>
                        </div>
                        <div className="col-sm-6">
                        <select name="year" required>
                            <option>Year</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                        </select>
                        </div>
                        <div className="col-sm-6">
                            <input type="number" min="0" name="price" placeholder="Item Price (Nearest Dollar)" required/>
                        </div>
                        <div className="col-sm-12">
                            <input type="text" name="condition" placeholder="Item Condition (Eg: Mint, Fair)" required/>
                        </div>
                        <div className="col-sm-12">
                            <label for="file-upload" class="custom-file-upload">
                                <i class="material-icons"> cloud_upload </i> Upload Image
                            </label>
                            <input type="file" id="file-upload" name="imageURL" required />
                        </div>
                        <div className="col-sm-12">
                            <input type="hidden" value={this.props.collectionId} name="collectionId" />
                        </div>
                        <div className="col-sm-12">
                            <input type="hidden" value={this.props.collectionUser} name="collectionUserId" />
                        </div>
                    </div>
                    <div className="form-button">
                        <input className="button-submit" type="submit" />
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default AddItemForm;

// ReactDOM.render(<App />, document.getElementById('app'));
