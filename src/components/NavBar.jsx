import React from "react";
import LandingPage from "./LandingPage";

function NavBar() {
    return (
        <div class="container mt-3">
            <div class="card card1 p-2">
                <div class="innercard p-2">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid">
                            <img
                                src="https://i.imgur.com/hSDDP67.png"
                                height="50px"
                                width="50px"
                            />
                            <a class="navbar-brand name" href="#">
                                Cloud<span class="go">Go</span>
                            </a>
                            <button
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div
                                class="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a
                                            class="nav-link active"
                                            aria-current="page"
                                            href="#"
                                        >
                                            <span class="home">Home</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Domain
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Hosting
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Services
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Contact
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Sign in
                                        </a>
                                    </li>
                                </ul>
                                <div class="btn btn-dark">Sign up </div>
                            </div>
                        </div>
                    </nav>
                    <div class="mt-3 d-flex justify-content-center">
                        <LandingPage/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
