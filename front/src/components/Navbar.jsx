import Link from "next/link";
import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
          <div class="container-fluid">
          <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" aria-label="breadcrumb">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">LeBonCoinv2</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <button type="button" class="btn btn-primary btn-sm">Déposer une offre</button>
                    </li>
                    <hr/>
                    <li class="nav-item">
                      {/* <button class="btn btn-primary" type="submit">Button</button> */}
                    </li>
                  </ul>
                  <div>
                <Link href='/login'>
                  <button class="w-50 bg-info mt-2 p-2" type="button" class="btn btn-primary"> Connexion </button>
                </Link>
              </div>
                </div>

              </div>

            </nav>
          </div>

          </div>
        );

    }
}
export default Navbar;