let servicios = ["Depilación","Masaje", "Facial"];
      let precio = ["$ 100","$ 200","$ 300"];

      let txtServicios = document.getElementById("txtServicios");
      let txtPrecio = document.getElementById("txtPrecio");

      function Recorrer(a, valores) {
        txtPrecio.innerHTML = "";
        for (let index of valores) {
          a.innerHTML += `
                <option>${index}</option>
                `;
        }
      }

      function llenarDepar() {
        Recorrer(txtServicios, servicios);
      }
      llenarDepar();

      txtServicios.addEventListener("change", (e) => {
        let dato = e.target.value;

        switch (dato) {
          case "Depilación":
            Recorrer(txtPrecio, precio.slice(0, 1));
            break;
          case "Masaje":
            Recorrer(txtPrecio, precio.slice(1, 2));
            break;
          case "Facial":
            Recorrer(txtPrecio, precio.slice(2));
            break;
          default:
            break;
        }
      });