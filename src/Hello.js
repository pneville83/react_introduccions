import pic from './foto1.jpg';
import './hello.css';

export default function Hello(){
  
  return (
    <div class="container">
      <div class="card">
        <div class="card_pic">
          <img src={pic} alt="yo"/>
        </div>
        <div class="card__acerca">
          <h2 class="card__title">John Peter Neville</h2>
          <h3>Acerca de Mi</h3>
          <p class="card__acerca_descripcion">
            Tengo 39, soy de Guayaquil - Ecuador y mis hobbies son los siguientes:
          </p>
          <lu class="card__acerca_hobbies">
            <li>Documentales</li>
            <li>Natación</li>
            <li>Programación</li>
            <li>Cocinar</li>
          </lu>
        </div>
        <div class="footer">
          <p>El siguiente link puede ser de su interes</p>
          <a target="blank" href="https://www.larnu.com/">Conocer larnU</a>
        </div>
      </div>
    </div>
  );
}