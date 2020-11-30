import React from 'react';
import { useSelector } from 'react-redux';

export const AccountScreen = () => {

    const { persona } = useSelector( state => state.auth );

    const { nombre } = persona;

    return (
            <div className="row">
                <div className="col-md-12">
                    <section className="panel">
                        <div className="panel-body profile-information">
                        <div className="col-md-3">
                            <div className="profile-pic text-center">
                                <img src="https://mauriciocartagena.github.io/my-perfil/static/media/photo.517c8325.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-desk">
                                <h1>{ nombre }</h1>
                                <span className="text-muted">Product Manager</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor vestibulum imperdiet. Ut auctor accumsan erat, a vulputate metus tristique non. Aliquam aliquam vel orci quis sagittis.
                                </p>
                                <a href="#" className="btn btn-primary">View Profile</a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="profile-statistics">
                                <h1>1240</h1>
                                <p>This Week Sales</p>
                                <h1>$5,61,240</h1>
                                <p>This Week Earn</p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </section>
                </div>
                <div className="col-md-12">
                    <section className="panel">
                        <div className="panel-body">
                            <div className="tab-content tasi-tab">                       
                                <div id="settings" className="tab-pane active">
                                    <div className="position-center">
                                        <div className="prf-contacts sttng">
                                            <h2>  Personal Information</h2>
                                        </div>
                                        <form role="form" className="form-horizontal">
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label"> Avatar</label>
                                                <div className="col-lg-6">
                                                    <input type="file" id="exampleInputFile" className="file-pos" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Company</label>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder=" " id="c-name" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Lives In</label>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder=" " id="lives-in" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Country</label>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder=" " id="country" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Description</label>
                                                <div className="col-lg-10">
                                                    <textarea rows="10" cols="30" className="form-control" id="" name=""></textarea>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="prf-contacts sttng">
                                            <h2> socail networks</h2>
                                        </div>
                                        <form role="form" className="form-horizontal">
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Facebook</label>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder=" " id="fb-name" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Twitter</label>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder=" " id="twitter" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Google plus</label>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder=" " id="g-plus" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Flicr</label>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder=" " id="flicr" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Youtube</label>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder=" " id="youtube" className="form-control" />
                                                </div>
                                            </div>

                                        </form>
                                        <div className="prf-contacts sttng">
                                            <h2>Contact</h2>
                                        </div>
                                        <form role="form" className="form-horizontal">
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Address 1</label>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder=" " id="addr1" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Address 2</label>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder=" " id="addr2" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Phone</label>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder=" " id="phone" className="form-control" />
                                                </div> 
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Cell</label>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder=" " id="cell" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Email</label>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder=" " id="email" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label">Skype</label>
                                                <div className="col-lg-6">
                                                    <input type="text" placeholder=" " id="skype" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="col-lg-offset-2 col-lg-10">
                                                    <button className="btn btn-primary" type="submit">Save</button>
                                                    <button className="btn btn-default" type="button">Cancel</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    )
}
