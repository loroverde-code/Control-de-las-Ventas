function graficaMensual(id, mes){
  let ventas = getVentas().filter(v=>v.fecha.startsWith(mes));
  let data={};
  ventas.forEach(v=>{
    data[v.fecha]=(data[v.fecha]||0)+Number(v.total);
  });

  new Chart(document.getElementById(id),{
    type:'bar',
    data:{
      labels:Object.keys(data),
      datasets:[{label:'Ventas',data:Object.values(data)}]
    }
  });
}
