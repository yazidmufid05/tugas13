    import styled from "styled-components";

    const Footer = () => {
      return (
        <FooterStyle>
        <div className='container'>
          <footer className='footer'>
            <h2 className='footer__title'>Yazid.Cinema</h2>
            <p className='footer__author'>
              Created by <span className='author__name'>yazidmufid05</span>
            </p>
          </footer>
        </div>
        </FooterStyle>
      );
    }

    const FooterStyle = styled.div`
  
    .container {
    background-color: #2c3e50; /* Ganti warna latar belakang */
    color: #fff;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* Perbarui shadow untuk efek yang lebih kuat */
    border-radius: 12px;
    transition: background-color 0.3s ease;
  }

  .footer__title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #f39c12; /* Warna teks untuk judul */
  }

  .footer__author {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #ecf0f1; /* Warna teks untuk penulis */
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .container {
      padding: 3rem;
    }

    .footer__title {
      font-size: 2.5rem;
    }

    .footer__author {
      font-size: 1.8rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      padding: 4rem;
    }

    .footer__title {
      font-size: 3rem;
    }

    .footer__author {
      font-size: 2rem;
    }
  }
`

    export default Footer;
