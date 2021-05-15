document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('mi_formulario').addEventListener('submit', 
  manejadorValidacion)
  });
  
  function manejadorValidacion(e) {
    e.preventDefault();
    var msg = document.getElementById('msg');
    msg.innerText = '';
    if(this.querySelector('[name=nombre]').value == '') {
    console.log('El nombre está vacío');
    msg.innerText = 'Debes escribir un nombre';
    return;
    }

    if(! validateNombre(this.querySelector('[name=nombre]').value)) 
        { console.log('El nombre no es válido');
        msg.innerText = 'Debes escribir un nombre válido'; 
        return;
    }

    if(this.querySelector('[name=apellido]').value == '') {
        console.log('El apellido está vacío');
        msg.innerText = 'Debes escribir un apellido';
        return;
        }
    
    if(! validateApellido(this.querySelector('[name=apellido]').value)) 
        { console.log('El apellido no es válido');
        msg.innerText = 'Debes escribir un apellido válido'; 
        return;
    }

    if(this.querySelector('[name=rut]').value == '') {
        console.log('El rut está vacío');
        msg.innerText = 'Debes escribir un número de rut sin puntos ni guión';
        return;
        }

    if(! validateRut(this.querySelector('[name=rut]').value)) 
        { console.log('El rut no es válido');
        msg.innerText = 'Debes escribir un rut válido sin puntos ni guión'; 
        return;
    }

    if(this.querySelector('[name=email]').value == '') {
        console.log('El email está vacío');
        msg.innerText = 'Debes escribir un correo';
        return;
        }

    if(! validateEmail(this.querySelector('[name=email]').value)) 
        { console.log('El email no es válido');
        msg.innerText = 'Debes escribir un email válido'; 
        return;
    }

    if(this.querySelector('[name=fono]').value == '') {
        console.log('El teléfono está vacío');
        msg.innerText = 'Debes escribir un número de teléfono';
        return;
        }

    if(! validateFono(this.querySelector('[name=fono]').value)) 
        { console.log('El número ingresado no es válido');
        msg.innerText = 'Debes escribir un número de teléfono válido de minímo 9 dígitos'; 
        return;
    }

    if(this.querySelector('[name=aporte]').value == '') {
        console.log('El aporte está vacío');
        msg.innerText = 'Debes escribir un monto de aporte';
        return;
        }

    if(! validateAporte(this.querySelector('[name=aporte]').value)) 
        { console.log('El monto no es válido');
        msg.innerText = 'Debes escribir un monto válido de mínimo 3 cifras'; 
        return;
    }



    this.submit();
  }
  
  function validateEmail(email) {
    var re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test((email).toLowerCase());
   }

   function validateNombre(nombre) {
    var nom = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
    return nom.test((nombre));
   }

   function validateApellido(apellido) {
    var ape = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
    return ape.test((apellido));
   }

   function validateFono(fono) {
    var fo = /^\d{9,14}$/;
    return fo.test((fono));
   }

   function validateAporte(aporte) {
    var fo = /^\d{3,14}$/;
    return fo.test((aporte));
   }

   function validateRut(rut) {
    var fo = /^\d{8,14}$/;
    return fo.test((rut));
   }





   