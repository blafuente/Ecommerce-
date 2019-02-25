import React, { Component } from 'react';

function LogoSearchHeader(props){
    return(
        <div className="login-nav-bar">
            <div className="left valign-wrapper welcome">Welcome to The Gaming Hobo</div>
            <div className="right">
                <button type="submit" class="btn play-button btn-github">Login with github</button>
                MY CART 0 ITEM - £0.00
            </div>
        </div>
    )
}
export default LogoSearchHeader;