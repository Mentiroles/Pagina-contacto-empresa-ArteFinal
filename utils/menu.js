
const handleButtons = (e) => {
    const main = document.getElementById('main');
    const contacto = document.getElementById('Contacto');
    const servicios = document.getElementById('Servicios');
    const nosotros = document.getElementById('Nosotros');
  
    const deleteData = () => {
      const data = document.querySelectorAll('.Data');
      for (const d of data) {
        d.remove();
      }
    }
  
    const handleContacto = () => {
      deleteData();
      const data = document.createElement('div');
      data.textContent = 'Contacto si silas ials ias alisjdiadlas jl';
      main.appendChild(data);
      data.setAttribute('class', 'Data')
      main.style.display = 'flex';
      console.log(data)
      contacto.disabled = true;
      servicios.disabled = false;
      nosotros.disabled = false;
    }
  
    const handleServicios = () => {
      deleteData();
      const data = document.createElement('div'); 
      data.textContent = 'Servicios si silas ials ias alisjdiadlas jl';
      main.appendChild(data);
      data.setAttribute('class', 'Data')
      main.style.display = 'flex';
      console.log(data)
      contacto.disabled = false;
      servicios.disabled = true;
      nosotros.disabled = false;
    }
  
    const handleNosotros = () => {
      deleteData();
      const data = document.createElement('div');
      data.textContent = 'Nosotros si silas ials ias alisjdiadlas jl';
      main.appendChild(data);
      data.setAttribute('class', 'Data')
      main.style.display = 'flex';
      console.log(data)
      contacto.disabled = false;
      servicios.disabled = false;
      nosotros.disabled = true;
    }
  
    e.preventDefault();
    if (e.target.id === 'Contacto') {
      handleContacto();
    } else if (e.target.id === 'Servicios') {
      handleServicios();
    } else if (e.target.id === 'Nosotros') {
      handleNosotros();
    }
  }
  
  export default handleButtons;