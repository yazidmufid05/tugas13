        import React from "react";
        import { Link } from "react-router-dom";
        import styled from "styled-components";
        import DataNavbar from "../../utils/constants/DataNavbar";

        const Navbar=() => {
          const data = DataNavbar
            return (
                <NavbarContainer>
                    <NavbarStyle>
                        <div>
                            <h1 className={"navbar__brand"}>Yazid.Cinema</h1>
                        </div>
                        <div>
                            <ul className={"navbar__list"}>
                              {
                                data.map(
                                  function(item){
                                    return(
                                      <li className="navbar__item">
                                        <Link className="navbar__title" to={item.url}>{item.title}</Link>
                                      </li>
                                    )
                                  }
                                )
                              }
                            </ul>
                        </div>
                    </NavbarStyle>
                </NavbarContainer>
            );
        }
        const NavbarStyle = styled.nav`
        display: flex;
        flex-direction: column;
      
        .navbar__brand {
          font-size: 2rem;
          margin: 1rem;
          padding: 1rem;
          color: #f39c12; /* Ganti warna teks brand */
          text-decoration: none;
          font-weight: bold;
        }
      
        .navbar__list {
          list-style: none;
          padding: 0;
          display: flex;
          gap: 1rem;
        }
      
        .navbar__title {
          color: #ecf0f1; /* Ganti warna teks title */
          text-decoration: none;
        }
      
        @media (min-width: 768px) {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
      
          .navbar__brand {
            margin: 0;
          }
      
          .navbar__list {
            flex-direction: row;
          }
        }
      
        .navbar__item {
          margin: 0 1rem;
          padding: 0.8rem;
          border-radius: 10px;
          background-color: #6c5ce7; /* Ganti warna latar belakang item */
          color: #fff; /* Ganti warna teks item */
          transition: background-color 0.3s ease; /* Tambahkan efek transisi untuk perubahan warna latar belakang */
        }
      
        .navbar__item:hover {
          background-color: #8e44ad; /* Warna latar belakang saat hover */
        }
      `;
      
      const NavbarContainer = styled.div`
        background-color: #2d3436; /* Ganti warna latar belakang container */
        padding: 1rem;
        color: #fff;
      `;
      
        export default Navbar;