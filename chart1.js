var ctx = document.getElementById('lineChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Earning in $',
            data: [2010, 1800, 2400, 1600, 2800, 2000, 2300, 2200, 2150, 2700],
            backgroundColor: [
                'rgba(85,85,85,1)'
            ],
            borderColor: [
                'rgba(41,155,99)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});