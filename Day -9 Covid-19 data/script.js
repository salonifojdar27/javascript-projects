
async function covidData()
{
    try{
      const response = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
      const data =  await response.json();
      const regions = data.data.regional;

      const tableBody = document.getElementById('covidTable');
      regions.forEach((region ,index)=>{
        const totalCases = region.confirmedCasesIndian + region.confirmedCasesForeign;
        const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${region.loc}</td>
          <td>${region.confirmedCasesIndian}</td>
          <td>${region.confirmedCasesForeign}</td>
          <td>${region.discharged}</td>
          <td>${region.deaths}</td>
          <td>${totalCases}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  } catch (error) {
    console.error('Error fetching COVID data:', error);
  }
}

covidData();
    