export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        
      <div className='container'>
        
        <div className='navbar-header'>
          <a class="navbar-brand" href="https://www.linkedin.com/in/guilherme-santos-38b562206/">
          <img src="./img/chapadadiamantina.jpg" alt="Logo" />
          </a>{/* <p>🙋🏾‍♂️Olá seja bem vindo !</p> */}


          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>

            {' '}
            <span className='sr-only'>Drop-down</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>

        </div>




        {/* Elementos do Header*/}

        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>

          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Habilidades
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Sobre
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Serviços
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Portfólio
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
