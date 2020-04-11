(function () {
    var tiempoTotal = function () {

        var fecha = document.getElementById('fecha'),
            horas = document.getElementById('horas');

        var tiempo = new Date();
        var mes = tiempo.getMonth(),
            dia = tiempo.getDay(),
            hoy = tiempo.getDate();
        var hora = tiempo.getHours(),
            minuto = tiempo.getMinutes(),
            segundo = tiempo.getSeconds();

        var total = {
            dias: ['domingo', 'lunes', 'martes', 'miercoles', 'Jueves', 'viernes', 'sabado'],
            meses: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
                'Agosto', 'Noviembre', 'Diciembre'
            ]
        }

        var pDias = total.dias[dia],
            pMes = total.meses[mes];
        fecha.innerHTML = pDias + ' ' + hoy + ' de ' + pMes;

        (hora > 12) ? hora = hora - 12: (hora == 0 ? hora = 12 : '');
        if (minuto < 10) {
            minuto = '0' + minuto
        };
        if (segundo < 10) {
            segundo = '0' + segundo
        };

        horas.innerHTML = hora + ':' + minuto + ':' + segundo;

    };
    tiempoTotal();
    setInterval(tiempoTotal, 1000);


}());