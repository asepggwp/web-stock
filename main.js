function Submenu(id) {
    const allSubmenus = document.querySelectorAll('.navbar-subcontent > div');

    allSubmenus.forEach(submenu => {
      if (submenu.id === id) {
        submenu.style.display = submenu.style.display === 'block'? 'none':'block';
      } else {
        submenu.style.display = 'none';
      }
    });
  }

  function Submenu__submenu(id){
    const allSubmenus__submenu = document.querySelectorAll('.navbar-subcontent__layout > div');

    allSubmenus__submenu.forEach(submenu => {
      if (submenu.id === id) {
        submenu.style.display = submenu.style.display === 'block'? 'none':'block';
      } else {
        submenu.style.display = 'none';
      }
    });
  }